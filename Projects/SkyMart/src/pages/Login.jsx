import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Zap } from 'lucide-react'
import { toast } from 'react-toastify'
import { useAuth } from '../context/AuthContext.jsx'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    const result = login({ email, password })

    if (!result.success) {
      setError(result.message)
      return
    }

    toast.success('Welcome back! You are now logged in.')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-4 py-10">
      
      
      <div className="w-full max-w-[440px] rounded-[28px] border border-zinc-800 bg-[#111111] p-6">
      {/* Logo */}
      <div className="flex justify-center items-center gap-3 mb-3">
        <div className="h-8 w-8 rounded-xl bg-[#fff700] flex items-center justify-center">
          <span className="text-black text-lg font-bold"><Zap/></span>
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-white">Sky</span>
          <span className="text-[#fff700]">Mart</span>
        </h1>
      </div>
        
        <h2 className="text-xl mt-8 font-bold text-white/80">Sign in</h2>

        <p className="text-xs text-zinc-500">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative mt-8">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email address"
              className="w-full h-12 rounded-xl border border-zinc-700 bg-[#1d1d1d] pl-14 pr-5 text-white placeholder:text-zinc-500 outline-none focus:border-[#fff700]"
            />
          </div>

          {/* Password */}
          <div className="relative mt-5">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full h-12 rounded-xl border border-zinc-700 bg-[#1d1d1d] pl-14 pr-14 text-white placeholder:text-zinc-500 outline-none focus:border-[#fff700]"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#fff700] text-base font-semibold text-black transition hover:brightness-110">
            Sign in
            <ArrowRight size={18} />
          </button>

          {error ? (
            <p className="mt-4 text-center text-red-400">{error}</p>
          ) : null}
        </form>

        <p className="mt-7 text-center text-zinc-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-[#fff700]">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;