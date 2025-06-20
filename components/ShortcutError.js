import dynamic from 'next/dynamic'
import { useKBar } from 'kbar'
import { ButtonPrimary } from '../components/ButtonPrimary'

const ShortcutErrorClient = ({ query }) => {
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

const DynamicShortcutError = dynamic(() => Promise.resolve(ShortcutErrorClient), { ssr: false })

export default function ShortcutError() {
  const { query } = useKBar()
  return <DynamicShortcutError query={query} />
}
