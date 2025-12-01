import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-1 w-full">
        {/* Left Section - Login Form */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-end px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-md mr-20">
            {/* Title */}
            <div className="flex items-end gap-3">
              <div className="w-1 h-24 bg-[#b52c61] mt-1"></div>
              <div className="h-24 flex flex-col items-start justify-end">
                <h1 className="font-bold">
                  <span className="text-3xl bg-gradient-to-r from-[#b52c61] to-[#4a9ed9] bg-clip-text text-transparent">
                    Welcome back
                  </span>
                </h1>
                <h1 className="text-base text-gray-500 mt-2">
                  <span className="text-lg">
                    Enter your email and password to sign in
                  </span>
                </h1>
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-5 mt-6 w-96">
              <label
                htmlFor="email"
                className="block text-left text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                placeholder="john@gmail.com"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 w-96">
              <label
                htmlFor="password"
                className="block text-left text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                placeholder="********"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8 w-96">
              <div className="flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#C41E5B] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-300"></div>
                  <span className="ml-3 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="button"
              className="w-96 bg-[#b52c61] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#b01a51] transition-colors duration-200 mb-6 tracking-wide"
            >
              SIGN IN
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#4A9EDA] hover:text-[#3a8ec8] font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Promotional Content */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Pink angled section */}
          <div
            className="absolute inset-0 bg-[#b52c61] rounded-l-2xl"
            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
          ></div>

          <div className="flex flex-col pt-16 pb-60 relative z-10 w-full ml-40 xl:ml-64 ">
            {/* logo */}
            <div className="mb-12">
              <div className="bg-gray-200 rounded-l-md shadow-md px-4 py-3 overflow-hidden">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Logo image */}
                    <img
                      src={"/src/assets/logo.png"}
                      alt="logo"
                      className="h-10"
                    />
                  </div>

                  <div className="flex-1"></div>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <div className="mt-20">
              <div className="max-w-md">
                <h2 className="text-white text-2xl font-semibold mb-4 leading-tight text-justify">
                  Start Trading with NXG Markets. Trade and invest in Trading
                  platforms, Buy and sells
                </h2>

                <p className="text-white text-base leading-relaxed text-justify">
                  Login into NXG Markets, the trusted client portal traders for
                  over few years. Trade on MetaTrader - one of the most popular
                  trading platforms in the world. sign-in to your account and
                  continue to the dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
