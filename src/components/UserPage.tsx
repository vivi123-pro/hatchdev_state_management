import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import type { AppPage } from '../App'

type UserPageProps = {
  activePage: AppPage
  onNavigate: (page: AppPage) => void
}

const userDetails = [
  { title: 'Personal details', category: 'Account' },
  { title: 'Preferences', category: 'Settings' },
  { title: 'Recent activity', category: 'History' },
  { title: 'Security', category: 'Access' },
]

const UserPage = ({ activePage, onNavigate }: UserPageProps) => {
  const user = useSelector((state: RootState) => state.user)
  const domain = user.email.split('@')[1] ?? 'local session'

  return (
    <section className="flex flex-1 flex-col gap-5">
      {activePage === 'profile' ? (
        <>
          <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-2xl shadow-stone-200/70">
            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_20rem] lg:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">Profile</p>
                <h3 className="mt-4 text-4xl font-black leading-tight text-stone-950 sm:text-5xl">
                  Hi, {user.name.split(' ')[0]}.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
                  This is your profile page. It keeps your basic account details neat, readable, and easy to scan.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    className="rounded-2xl bg-stone-950 px-5 py-3 font-black text-white transition hover:bg-amber-500 hover:text-stone-950"
                    onClick={() => onNavigate('user')}
                    type="button"
                  >
                    Open user page
                  </button>
                  <button
                    className="rounded-2xl border border-stone-200 px-5 py-3 font-black text-stone-950 transition hover:bg-stone-100"
                    type="button"
                  >
                    Edit profile
                  </button>
                </div>
              </div>

              <div className="rounded-3xl bg-stone-950 p-5 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">Account card</p>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="text-sm text-stone-400">Name</dt>
                    <dd className="mt-1 break-words text-lg font-black">{user.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-stone-400">Email</dt>
                    <dd className="mt-1 break-words text-lg font-black">{user.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-stone-400">Domain</dt>
                    <dd className="mt-1 break-words text-lg font-black">{domain}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              { label: 'Member type', value: 'Standard' },
              { label: 'User sections', value: userDetails.length.toString() },
              { label: 'Profile status', value: 'Complete' },
            ].map((item) => (
              <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-xl shadow-stone-200/60" key={item.label}>
                <p className="text-sm font-bold text-stone-500">{item.label}</p>
                <p className="mt-3 text-3xl font-black text-stone-950">{item.value}</p>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-2xl shadow-stone-200/70 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">User Page</p>
              <h3 className="mt-3 text-4xl font-black text-stone-950">Your user page</h3>
              <p className="mt-3 max-w-2xl leading-7 text-stone-600">
                A clean page for account sections, preferences, activity, and security details.
              </p>
            </div>
            <button
              className="w-fit rounded-2xl border border-stone-200 px-5 py-3 font-black text-stone-950 transition hover:bg-stone-100"
              onClick={() => onNavigate('profile')}
              type="button"
            >
              Back to profile
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {userDetails.map((item) => (
              <article className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200" key={item.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-200 font-black text-stone-950">
                  {item.title[0]}
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-amber-700">{item.category}</p>
                <h4 className="mt-2 text-xl font-black text-stone-950">{item.title}</h4>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default UserPage
