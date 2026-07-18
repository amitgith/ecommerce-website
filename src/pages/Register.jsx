import React from "react";
import { NavLink } from "react-router";
import { User, Mail, Lock, ShoppingBag } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20">
            <ShoppingBag size={36} className="text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-center text-sm text-white/80">
          Join SkyMart and start shopping
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          {/* Full Name */}
          <div className="relative">
            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70"
            />

            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-12 pr-4 text-white placeholder:text-white/60 outline-none backdrop-blur-md transition focus:border-white/50 focus:bg-white/20"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-12 pr-4 text-white placeholder:text-white/60 outline-none backdrop-blur-md transition focus:border-white/50 focus:bg-white/20"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70"
            />

            <input
              type="password"
              placeholder="Password (min 6 chars)"
              className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-12 pr-4 text-white placeholder:text-white/60 outline-none backdrop-blur-md transition focus:border-white/50 focus:bg-white/20"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70"
            />

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-12 pr-4 text-white placeholder:text-white/60 outline-none backdrop-blur-md transition focus:border-white/50 focus:bg-white/20"
            />
          </div>

          {/* Button */}
          <button className="w-full cursor-pointer rounded-xl bg-white py-3 font-semibold text-indigo-600 transition hover:scale-[1.02] hover:bg-gray-100 active:scale-95">
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-white/80">
            Already have an account?{" "}
            <NavLink
              className="font-semibold text-white hover:underline"
              to={"/login"}
            >
              Sign in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
