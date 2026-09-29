import UserProfile from './UserProfile'

const Navbar = () => {
  return (
    <header className="rounded-[2rem] border border-stone-200 bg-white/95 px-4 py-4 shadow-xl shadow-stone-200/70 backdrop-blur sm:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">Account</p>
          <h2 className="mt-1 text-2xl font-black text-stone-950 sm:text-3xl">Your Personal Space</h2>
        </div>
        <UserProfile />
      </div>
    </header>
  )
}

export default Navbar
