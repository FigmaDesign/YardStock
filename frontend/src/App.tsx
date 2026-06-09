import { useState, useCallback, useMemo } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import type { Page, ViewMode } from './components/Header/Header'
import Login from './components/Login/Login'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Dashboard from './components/Dashboard/Dashboard'
import MobileViewport from './components/commonfiles/MobileViewport'

const FormsPlaceholder = () => (
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

const NotFound = () => (
  <section 
    className="flex items-center justify-center h-full bg-[#f5f6f8]"
  >
    <div className="text-center space-y-3">
      <h1 className="text-4xl font-extrabold text-[#6B21A8] tracking-tight">
        404
      </h1>
      <p className="text-[#9199a8]">Page Not Found</p>
    </div>
  </section>
)

export default function App() {
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'))
  const navigate = useNavigate()
  const location = useLocation()

  const [viewMode, setViewMode] = useState<ViewMode>('desktop')

  const activePage = useMemo<Page>(() => {
    const path = location.pathname
    if (path.startsWith('/create-account')) return 'createAccount'
    if (path.startsWith('/dashboard')) return 'dashboard'
    if (path.startsWith('/forms')) return 'forms'
    return 'login'
  }, [location.pathname])

  const showViewControls = useMemo(() => {
    return ['login', 'createAccount', 'dashboard'].includes(activePage)
  }, [activePage])

  const handleNavigate = useCallback((page: Page) => {
    switch (page) {
      case 'login': navigate('/login'); break;
      case 'createAccount': navigate('/create-account'); break;
      case 'dashboard': navigate('/dashboard'); break;
      case 'forms': navigate('/forms'); break;
    }
  }, [navigate])

  const handleLogin = useCallback(() => navigate('/dashboard'), [navigate])
  const handleCreateAccountClick = useCallback(() => navigate('/create-account'), [navigate])
  const handleCreateAccount = useCallback(() => navigate('/dashboard'), [navigate])
  const handleLoginClick = useCallback(() => navigate('/login'), [navigate])

  const wrapWithViewport = (component: React.ReactNode) => {
    if (viewMode === 'mobile') {
      return (
        <MobileViewport isMobile={isMobileScreen}>
          {component}
        </MobileViewport>
      )
    }
    return component
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden font-['Outfit']">
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
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
          key={location.pathname} 
          className="ys-page-enter h-full w-full motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={wrapWithViewport(<Login viewMode={viewMode} onLogin={handleLogin} onCreateAccountClick={handleCreateAccountClick} />)} />
            <Route path="/create-account" element={wrapWithViewport(<CreateAccount viewMode={viewMode} onCreateAccount={handleCreateAccount} onLoginClick={handleLoginClick} />)} />
            <Route path="/dashboard" element={wrapWithViewport(<Dashboard viewMode={viewMode} />)} />
            <Route path="/forms" element={wrapWithViewport(<FormsPlaceholder />)} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}