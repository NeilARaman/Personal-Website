const http = require('http');
const fs = require('fs');
const path = require('path');
const net = require('net');

const ROOT = __dirname;
const START_PORT = parseInt(process.env.PORT || '3000', 10);
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function resolvePath(urlPath) {
  // Strip query / hash and normalize
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  // Prevent path traversal
  const normalized = path.normalize(clean).replace(/^[\\/]+/, '');
  const abs = path.join(ROOT, normalized);
  if (!abs.startsWith(ROOT)) return null;
  // If it's a directory, serve its index.html
  try {
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      const idx = path.join(abs, 'index.html');
      if (fs.existsSync(idx)) return idx;
      return null;
    }
    return abs;
  } catch {
    // Fallback: if no file and no dir, try treating as directory
    try {
      const idx = path.join(abs, 'index.html');
      if (fs.existsSync(idx)) return idx;
    } catch {}
    return null;
  }
}

const server = http.createServer((req, res) => {
  const file = resolvePath(req.url);
  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('404 Not Found');
  }
  const ext = path.extname(file).toLowerCase();
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('500 ' + err.message);
    }
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-store, must-revalidate',
    });
    res.end(data);
  });
});

function start(port) {
  const onError = (err) => {
    if (err.code === 'EADDRINUSE' && port < START_PORT + 100) {
      server.removeListener('listening', onListening);
      start(port + 1);
    } else {
      throw err;
    }
  };
  const onListening = () => {
    server.removeListener('error', onError);
    console.log(`Serving ${ROOT}`);
    console.log(`Listening on http://localhost:${port}`);
  };
  server.once('error', onError);
  server.once('listening', onListening);
  server.listen(port, '127.0.0.1');
}

start(START_PORT);
