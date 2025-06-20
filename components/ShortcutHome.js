import dynamic from 'next/dynamic'
import { useKBar } from 'kbar'
import { ButtonPrimary } from '../components/ButtonPrimary'

const ShortcutHomeClient = ({ query }) => {
  const isMac = typeof window !== 'undefined' && /(Mac)/i.test(navigator.userAgent)
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|Android/i.test(navigator.userAgent)

  if (isMobile) {
    return (
      <ButtonPrimary as="button" onClick={query.toggle}>
        Tap to start →
      </ButtonPrimary>
    )
  } else if (isMac) {
    return (
      <ButtonPrimary as="button" onClick={query.toggle}>
        Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
      </ButtonPrimary>
    )
  } else {
    return (
      <ButtonPrimary as="button" onClick={query.toggle}>
        Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
      </ButtonPrimary>
    )
  }
}

const DynamicShortcutHome = dynamic(() => Promise.resolve(ShortcutHomeClient), { ssr: false })

export default function ShortcutHome() {
  const { query } = useKBar()
  return <DynamicShortcutHome query={query} />
}
