
import { ChildrenType } from '@/types/other'
import { Fragment, Suspense, useEffect } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'

const AppProviders = ({ children }: ChildrenType) => {
  useEffect(() => {
    const splashElement =
      document.querySelector<HTMLDivElement>('#__next_splash')
    const splashScreen = document.querySelector('#splash-screen')

    if (!splashElement || !splashScreen) return

    const handleMutations = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && splashElement.hasChildNodes()) {
          splashScreen.classList.add('remove')
        }
      }
    }
    const observer = new MutationObserver(handleMutations)
    observer.observe(splashElement, { childList: true, subtree: true })
    if (splashElement.hasChildNodes()) {
      splashScreen.classList.add('remove')
    }

    return () => observer.disconnect()
  }, [])

  return <ThemeProvider>
    <Fragment>
      <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: '#0d0d12' }}><div className="spinner-border text-primary" role="status" /></div>}>
        {children}
      </Suspense>
    </Fragment>
  </ThemeProvider>
}

export default AppProviders
