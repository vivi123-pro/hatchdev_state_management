import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'
import type { RootState } from '../redux/store'
import type { AppPage } from '../App'

type SidebarProps = {
  activePage: AppPage
  onNavigate: (page: AppPage) => void
}

const Sidebar = ({ activePage, onNavigate }: SidebarProps) => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const navItems: { label: string; value: AppPage }[] = [
    { label: 'Profile', value: 'profile' },
    { label: 'User Page', value: 'user' },
  ]

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <aside className="rounded-[2rem] bg-stone-950 p-4 text-white shadow-2xl shadow-stone-300/70 lg:sticky lg:top-6 lg:flex lg:h-[calc(100vh-3rem)] lg:w-72 lg:flex-col">
      <div className="flex items-center justify-between gap-4 lg:block">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300 font-black text-stone-950 shadow-lg shadow-amber-950/20">
            HD
          </div>
          <div className="mt-4 hidden lg:block">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-100/70">Member Area</p>
            <h1 className="mt-2 text-2xl font-black leading-tight text-white">HatchDev</h1>
          </div>
        </div>

        <div className="text-right lg:mt-8 lg:text-left">
          <p className="text-sm font-medium text-amber-100/75">Signed in as</p>
          <p className="mt-1 max-w-40 truncate text-lg font-bold lg:max-w-full">{user.name}</p>
        </div>
      </div>

      <nav className="mt-6 grid grid-cols-2 gap-2 text-sm font-semibold lg:grid-cols-1">
        {navItems.map((item) => (
          <button
            className={`rounded-2xl px-3 py-3 text-left transition ${
              activePage === item.value
                ? 'bg-white text-stone-950 shadow-lg shadow-stone-950/20'
                : 'bg-white/8 text-amber-50 hover:bg-white/14'
            }`}
            key={item.value}
            onClick={() => onNavigate(item.value)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-6 rounded-3xl bg-white/8 p-4 text-sm text-amber-50/80 lg:mt-auto">
        <p className="font-bold text-white">Profile space</p>
        <p className="mt-2 leading-6">View your profile details and personal user page from one calm place.</p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 w-full rounded-2xl bg-white px-4 py-3 font-bold text-stone-950 shadow-lg shadow-stone-950/25 transition hover:bg-amber-100 focus:outline-none focus:ring-4 focus:ring-amber-200"
        type="button"
      >
        Logout
      </button>
    </aside>
  )
}

export default Sidebar
