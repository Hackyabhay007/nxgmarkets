import { useState } from 'react'
import logo from "../assets/logo.png"

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex flex-1 w-full">
        {/* Left Section - Signup Form */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
          <div className="w-full max-w-md">
            {/* Title */}
            <div className="flex items-start gap-3 mb-2">
              <div className="w-1 h-24 sm:h-32 bg-[#C41E5B] mt-1"></div>
              <div className='h-24 sm:h-32 flex flex-col items-start justify-center'>
                <h1 className="font-bold">
                  <span className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#C2185B] to-[#5BA3D6] bg-clip-text text-transparent">Create account</span>
                </h1>
                <h1 className="text-base text-gray-500 mt-2">
                  <span className='text-base sm:text-lg md:text-xl'>
                    Enter your details to create your account
                  </span>
                </h1>
              </div>
            </div>

            {/* Full Name Input */}
            <div className="mb-5 mt-6 sm:mt-8">
              <label htmlFor="fullName" className="block text-left text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                placeholder='John Doe'
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
              />
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-left text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                placeholder='john@gmail.com'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
              />
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label htmlFor="password" className="block text-left text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                placeholder='********'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-left text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                placeholder='********'
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
              />
            </div>

            {/* Agree to Terms */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#C41E5B] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-300"></div>
                  <span className="ml-3 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="/terms-conditions" className="text-[#4A9EDA] hover:text-[#3a8ec8] font-medium">
                      Terms & Conditions
                    </a>
                  </span>
                </label>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="button"
              className="w-full bg-[#C41E5B] text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-[#b01a51] transition-colors duration-200 mb-6 tracking-wide"
            >
              SIGN UP
            </button>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <a href="/login" className="text-[#4A9EDA] hover:text-[#3a8ec8] font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Promotional Content */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Pink angled section */}
          <div className="absolute inset-0 bg-[#C2185B]" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>

          <div className="flex flex-col py-40 relative z-10 w-full">

            {/* logo */}
            <div className="mb-12 ml-48">
              <div className="bg-gray-200 rounded-lg shadow-md px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Logo image */}
                    <img 
                      src={logo} 
                      alt="logo"
                      className='h-10'
                    />
                  </div>

                  <div className="flex-1"></div>

                  <div className="bg-white rounded-full px-2 py-1 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    
                    <div className="flex gap-1">
                      <div className="flex flex-col gap-0.5">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-12 ml-48 ">
              <div className='pr-12'>
                <h2 className="text-white text-3xl font-bold mb-6 xl:mb-8 leading-tight text-justify">
                  Start Trading with NXG Markets. Trade and invest in Trading platforms, Buy and sells
                </h2>

                <p className="text-white text-base xl:text-xl leading-relaxed text-justify">
                  Create your NXG Markets account and join the trusted client portal traders for over few years. Trade on MetaTrader - one of the most popular trading platforms in the world. Sign up now and start your trading journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
