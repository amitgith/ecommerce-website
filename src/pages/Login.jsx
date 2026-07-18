import React from "react";
import { NavLink } from "react-router";
import { Mail, Lock, ShoppingBag } from "lucide-react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const formSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600">
            <ShoppingBag size={30} className="text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-center text-3xl font-bold text-gray-800">
          Sign In
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Enter your credentials to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-gray-700 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Minimum 4 digits are required",
                },
                maxLength: {
                  value: 6,
                  message: "Maximum 6 digits are allowed",
                },
              })}
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-gray-700 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Sign In
          </button>

          {/* Register */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <NavLink
              className="font-semibold text-indigo-600 hover:underline"
              to={"/register"}
            >
              Create One
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
