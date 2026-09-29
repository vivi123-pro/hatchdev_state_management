import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import { useState } from 'react'

export type AppPage = 'profile' | 'user'

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const [activePage, setActivePage] = useState<AppPage>('profile')

  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f3ee] text-stone-950">
      <div className="mx-auto min-h-screen w-full max-w-7xl px-4 py-4 sm:px-6 lg:py-6">
        {isLoggedIn ? (
          <div className="flex min-h-[calc(100vh-2rem)] flex-col gap-5 lg:min-h-[calc(100vh-3rem)] lg:flex-row">
            <Sidebar activePage={activePage} onNavigate={setActivePage} />
            <main className="flex min-w-0 flex-1 flex-col gap-5">
              <Navbar />
              <UserPage activePage={activePage} onNavigate={setActivePage} />
            </main>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </div>
  )
}

export default App
