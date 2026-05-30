import { useState } from 'react'
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

  const isMobile = isMobileScreen || viewMode === 'mobile'

  const showViewControls = activePage === 'login' || activePage === 'createAccount' || activePage === 'dashboard'

  return (
    <div className="flex flex-col h-screen overflow-hidden font-['Outfit']">
      <Header
        activePage={activePage}
        onNavigate={setActivePage}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        showViewControls={showViewControls}
      />

      <main className="flex-1 overflow-hidden">
        {activePage === 'login' && (
          viewMode === 'mobile' ? (
            <MobileViewport isMobile={isMobileScreen}>
              <Login
                viewMode="mobile"
                onLogin={() => setActivePage('dashboard')}
                onCreateAccountClick={() => setActivePage('createAccount')}
              />
            </MobileViewport>
          ) : (
            <Login
              viewMode="desktop"
              onLogin={() => setActivePage('dashboard')}
              onCreateAccountClick={() => setActivePage('createAccount')}
            />
          )
        )}

        {activePage === 'createAccount' && (
          viewMode === 'mobile' ? (
            <MobileViewport isMobile={isMobileScreen}>
              <CreateAccount
                viewMode="mobile"
                onCreateAccount={() => setActivePage('dashboard')}
                onLoginClick={() => setActivePage('login')}
              />
            </MobileViewport>
          ) : (
            <CreateAccount
              viewMode="desktop"
              onCreateAccount={() => setActivePage('dashboard')}
              onLoginClick={() => setActivePage('login')}
            />
          )
        )}

        {activePage === 'dashboard' && (
          viewMode === 'mobile' ? (
            <MobileViewport isMobile={isMobileScreen}>
              <Dashboard viewMode="mobile" />
            </MobileViewport>
          ) : (
            <Dashboard viewMode="desktop" />
          )
        )}

        {activePage === 'forms' && (
          <div className="flex items-center justify-center h-full bg-[#f5f6f8]">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9199a8]">Current Page</p>
              <h1 className="text-4xl font-extrabold text-[#14532d] capitalize tracking-tight">Forms</h1>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
