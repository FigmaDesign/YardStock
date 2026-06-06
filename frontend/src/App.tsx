import { useState, useCallback, useMemo } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import Header from './components/Header/Header'
import type { Page, ViewMode } from './components/Header/Header'
import Login from './components/Login/Login'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Dashboard from './components/Dashboard/Dashboard'
import MobileViewport from './components/commonfiles/MobileViewport'

export default function App() {
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const [activePage, setActivePage] = useState<Page>('login')
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')

  const showViewControls = useMemo(() => {
    return ['login', 'createAccount', 'dashboard'].includes(activePage)
  }, [activePage])

  const handleLogin = useCallback(() => setActivePage('dashboard'), [])
  const handleCreateAccountClick = useCallback(() => setActivePage('createAccount'), [])
  const handleCreateAccount = useCallback(() => setActivePage('dashboard'), [])
  const handleLoginClick = useCallback(() => setActivePage('login'), [])

  const renderPageContent = () => {
    if (activePage === 'forms') {
      return (
        <section 
          aria-label="Forms Placeholder"
          className="flex items-center justify-center h-full bg-[#f5f6f8]"
        >
          <div className="text-center space-y-3">
            <p 
              aria-hidden="true" 
              className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9199a8]"
            >
              Current Page
            </p>
            <h1 className="text-4xl font-extrabold text-[#6B21A8] capitalize tracking-tight">
              Forms
            </h1>
          </div>
        </section>
      )
    }

    let pageComponent = null

    switch (activePage) {
      case 'login':
        pageComponent = (
          <Login
            viewMode={viewMode}
            onLogin={handleLogin}
            onCreateAccountClick={handleCreateAccountClick}
          />
        )
        break
      case 'createAccount':
        pageComponent = (
          <CreateAccount
            viewMode={viewMode}
            onCreateAccount={handleCreateAccount}
            onLoginClick={handleLoginClick}
          />
        )
        break
      case 'dashboard':
        pageComponent = <Dashboard viewMode={viewMode} />
        break
      default:
        pageComponent = null
    }

    if (viewMode === 'mobile' && pageComponent) {
      return (
        <MobileViewport isMobile={isMobileScreen}>
          {pageComponent}
        </MobileViewport>
      )
    }

    return pageComponent
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden font-['Outfit']">
      <Header
        activePage={activePage}
        onNavigate={setActivePage}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        showViewControls={showViewControls}
      />

      <main 
        id="main-content"
        aria-live="polite"
        className="flex-1 overflow-hidden relative focus-visible:outline-none @container"
        tabIndex={-1}
      >
        <div 
          key={activePage} 
          className="ys-page-enter h-full w-full motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100"
        >
          {renderPageContent()}
        </div>
      </main>
    </div>
  )
}