import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Logging in..." : "Creating account...");
  };

  const handleGoogleSignup = () => {
    alert("Continue with Google clicked");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Section */}
      <div className="w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center px-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Start your journey with{" "}
          <span className="text-blue-600">Anaarzia.</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          A smart way to explore restaurants and discover food you’ll love.
        </p>

        <div className="space-y-4">
          

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-lg font-bold">
              ⚡
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Quick Setup
              </h3>
              <p className="text-sm text-gray-500">
                Create your account and start exploring instantly.
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-12">
          By signing up, you agree to our{" "}
          <span className="underline">Terms & Privacy Policy</span>.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {isLogin ? "Login to your account" : "Create your account"}
          </h2>
          <p className="text-gray-500 mb-6">
            {isLogin
              ? "Enter your email and password to login"
              : "Enter your details to sign up"}
          </p>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <FcGoogle size={24} />
            <span className="text-gray-700 font-medium">
              {isLogin ? "Login with Google" : "Sign up with Google"}
            </span>
          </button>

          <p className="text-center text-gray-600 mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
