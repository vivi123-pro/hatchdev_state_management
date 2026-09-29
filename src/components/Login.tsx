import { useState } from 'react'
import type { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'
import heroImage from '../assets/hero.png'

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    if (trimmedName && trimmedEmail) {
      dispatch(setUser({ name: trimmedName, email: trimmedEmail }))
      setName('')
      setEmail('')
    }
  }


  return (
    <section className="grid min-h-[calc(100vh-2rem)] overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-2xl shadow-stone-300/60 lg:min-h-[calc(100vh-3rem)] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-stone-950 p-6 text-white sm:p-8 lg:p-10">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-950/85 to-stone-950/35" />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 font-black text-stone-950 shadow-lg shadow-amber-950/20">
            HD
          </div>
        </div>

        <div className="relative">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200">Welcome back</p>
          <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight sm:text-5xl">Sign in to your profile.</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-stone-200">
            Log in to view your profile page, open your user page, and keep your account details in one clean place.
          </p>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-3">
          {['Profile', 'User Page', 'Account'].map((item) => (
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur" key={item}>
              <p className="text-sm font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center p-5 sm:p-8 lg:p-10">
        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-3xl font-black text-stone-950">Login</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Use your name and email to continue.</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-700" htmlFor="name">Full name</label>
            <input
              className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
              id="name"
              name="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-700" htmlFor="email">Email address</label>
            <input
              className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
              id="email"
              name="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="name@example.com"
            />
          </div>

          <button
            className="w-full rounded-2xl bg-stone-950 px-5 py-3.5 font-black text-white shadow-xl shadow-stone-300 transition hover:-translate-y-0.5 hover:bg-amber-500 hover:text-stone-950 focus:outline-none focus:ring-4 focus:ring-amber-200"
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login
