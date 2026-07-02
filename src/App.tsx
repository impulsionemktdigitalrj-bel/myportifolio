import AppRouter from './routes/router'
import AppProviders from './components/wrappers/AppProviders'

import '@/assets/scss/style.scss'
import '@/assets/scss/style-dark.scss'

function App() {
  return (
    <>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </>
  )
}

export default App
