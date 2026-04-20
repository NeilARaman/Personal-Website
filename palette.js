(() => {
  let index = null;
  let dialog, input, list;
  let items = [];
  let selected = 0;
  let rafId = 0;

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function build() {
    dialog = document.createElement('dialog');
    dialog.className = 'palette';
    dialog.setAttribute('aria-label', 'Command palette');
    dialog.innerHTML =
      '<div class="palette-box">' +
        '<input class="palette-input" type="text" placeholder="Search pages, tools, articles…" aria-label="Search" autocomplete="off" spellcheck="false">' +
        '<ul class="palette-list" role="listbox"></ul>' +
      '</div>';
    document.body.appendChild(dialog);
    input = dialog.querySelector('.palette-input');
    list = dialog.querySelector('.palette-list');
    input.addEventListener('input', scheduleRender);
    input.addEventListener('keydown', onKey);
    list.addEventListener('click', (e) => {
      const el = e.target.closest('.palette-item');
      if (el) go(items[parseInt(el.dataset.i, 10)]);
    });
    list.addEventListener('mouseover', (e) => {
      const el = e.target.closest('.palette-item');
      if (!el) return;
      const i = parseInt(el.dataset.i, 10);
      if (i !== selected) { selected = i; updateSelected(); }
    });
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { input.value = ''; selected = 0; });
  }

  function score(q, item) {
    const t = item.t.toLowerCase();
    if (t === q) return 1000;
    if (t.startsWith(q)) return 500 - t.length;
    const i = t.indexOf(q);
    if (i !== -1) return 200 - i;
    if (item.c && item.c.toLowerCase().indexOf(q) !== -1) return 50;
    if (item.d && item.d.toLowerCase().indexOf(q) !== -1) return 30;
    return 0;
  }

  function scheduleRender() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => { rafId = 0; render(); });
  }

  function render() {
    if (!index) {
      list.innerHTML = '<li class="palette-empty">Loading…</li>';
      return;
    }
    const q = input.value.trim().toLowerCase();
    if (!q) {
      items = index.slice(0, 40);
    } else {
      const scored = [];
      for (let i = 0; i < index.length; i++) {
        const s = score(q, index[i]);
        if (s > 0) scored.push([s, index[i]]);
      }
      scored.sort((a, b) => b[0] - a[0]);
      const n = Math.min(scored.length, 40);
      items = new Array(n);
      for (let i = 0; i < n; i++) items[i] = scored[i][1];
    }
    selected = 0;
    if (items.length === 0) {
      list.innerHTML = '<li class="palette-empty">No results</li>';
      return;
    }
    let html = '';
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const meta = it.c || it.k || '';
      const metaHtml = meta ? '<span class="palette-kind">' + escapeHtml(meta) + '</span>' : '';
      html += '<li class="palette-item' + (i === selected ? ' selected' : '') +
        '" data-i="' + i + '" role="option">' +
        '<span class="palette-title">' + escapeHtml(it.t) + '</span>' + metaHtml + '</li>';
    }
    list.innerHTML = html;
  }

  function updateSelected() {
    const nodes = list.querySelectorAll('.palette-item');
    nodes.forEach((el, i) => el.classList.toggle('selected', i === selected));
    const el = nodes[selected];
    if (el) el.scrollIntoView({ block: 'nearest' });
  }

  function onKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); selected = Math.min(selected + 1, items.length - 1); updateSelected(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); selected = Math.max(selected - 1, 0); updateSelected(); }
    else if (e.key === 'Enter') { e.preventDefault(); if (items[selected]) go(items[selected]); }
    else if (e.key === 'Escape') { e.preventDefault(); dialog.close(); }
  }

  function go(item) {
    if (!item) return;
    dialog.close();
    if (/^https?:/i.test(item.h)) window.open(item.h, '_blank', 'noopener');
    else location.href = item.h;
  }

  async function loadIndex() {
    if (index) return;
    try {
      const res = await fetch('/search-index.json');
      index = await res.json();
    } catch (err) {
      index = [];
    }
  }

  async function open() {
    if (!dialog) build();
    render();
    dialog.showModal();
    input.focus();
    if (!index) { await loadIndex(); render(); }
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      open();
    }
  });

  // g-prefix navigation hotkeys: gh=home, ga=articles, gt=tools
  const routes = { h: '/', a: '/articles', t: '/tools' };
  let gPending = false;
  let gTimer = null;

  function inEditable(el) {
    if (!el) return false;
    const tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
  }

  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (inEditable(e.target)) return;
    if (dialog && dialog.open) return;

    if (!gPending && e.key === 'g') {
      gPending = true;
      clearTimeout(gTimer);
      gTimer = setTimeout(() => { gPending = false; }, 1000);
      return;
    }

    if (gPending) {
      clearTimeout(gTimer);
      gPending = false;
      const dest = routes[e.key.toLowerCase()];
      if (dest) {
        e.preventDefault();
        location.href = dest;
      }
    }
  });
})();
