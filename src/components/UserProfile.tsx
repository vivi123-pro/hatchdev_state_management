import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  const initials = user.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return (
    <div className="flex min-w-0 items-center gap-3">
      {user.name && user.email ? (
        <>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="truncate font-black text-stone-950">{user.name}</p>
            <p className="truncate text-sm font-medium text-stone-500">{user.email}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-lg font-black text-stone-500">
            ?
          </div>
          <div>
            <p className="font-black text-stone-950">Guest</p>
            <p className="text-sm font-medium text-stone-500">No user logged in</p>
          </div>
        </>
      )}
    </div>
  )
}

export default UserProfile
