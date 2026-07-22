import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, ShoppingBag } from "lucide-react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const formSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      toast.success("Login successful! Welcome back 👋");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }

    reset();
  };

  return (
    <div
      className="
    min-h-screen 
    flex 
    flex-col 
    lg:flex-row 
    bg-[#080808] 
    text-white 
    font-sans
    "
    >
      {/* LEFT SIDE */}

      <div
        className="
        w-full
        lg:w-1/2
        flex
        flex-col
        justify-between
        p-5
        sm:p-8
        md:p-12
        lg:p-16
        relative
        overflow-hidden
        min-h-162.5
        lg:min-h-screen
        "
      >
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-indigo-600
            "
          >
            <ShoppingBag size={20} className="text-black" />
          </div>

          <span
            className="
            text-xl
            sm:text-2xl
            font-bold
            "
          >
            SkyMart
          </span>
        </div>

        {/* Content */}

        <div
          className="
          max-w-xl
          space-y-5
          sm:space-y-6
          mt-12
          lg:mt-0
          "
        >
          <span
            className="
            text-xs
            font-semibold
            tracking-widest
            text-indigo-400
            uppercase
            "
          >
            Welcome back
          </span>

          <h1
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            leading-tight
            "
          >
            Shop the future.
            <br />
            <span className="text-indigo-600">Today.</span>
          </h1>

          <p
            className="
            text-gray-400
            text-sm
            sm:text-base
            leading-relaxed
            max-w-md
            "
          >
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>
        </div>

        {/* Stats */}

        <div
          className="
          grid
          grid-cols-3
          gap-2
          sm:gap-4
          mt-10
          "
        >
          {[
            ["20K+", "Products"],
            ["50K+", "Users"],
            ["4.9★", "Rating"],
          ].map((item, index) => (
            <div
              key={index}
              className="
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              rounded-xl
              p-3
              sm:p-4
              text-center
              "
            >
              <h3
                className="
                text-sm
                sm:text-lg
                font-bold
                text-indigo-600
                "
              >
                {item[0]}
              </h3>

              <p
                className="
                text-[9px]
                sm:text-[10px]
                text-white
                uppercase
                mt-1
                "
              >
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Line */}

      <div
        className="
        hidden
        lg:flex
        items-center
        justify-center
        "
      >
        <div
          className="
          h-full
          w-px
          bg-white/20
          "
        ></div>
      </div>
      {/* RIGHT SIDE */}

      <div
        className="
        w-full
        lg:w-1/2
        flex
        items-center
        justify-center
        px-5
        sm:px-8
        md:px-12
        lg:px-16
        py-10
        "
      >
        <div
          className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
          sm:p-8
          md:p-10
          shadow-2xl
          "
        >
          <h2
            className="
            text-2xl
            sm:text-3xl
            font-bold
            "
          >
            Sign in
          </h2>

          <p
            className="
            text-sm
            text-gray-500
            mt-2
            "
          >
            Enter your credentials to continue
          </p>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="
            mt-8
            space-y-5
            "
          >
            {/* Email */}

            <div>
              <div className="relative">
                <Mail
                  size={18}
                  className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  "
                />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="john@example.com"
                  className="
                  w-full
                  rounded-xl
                  bg-black/40
                  border
                  border-white/10
                  py-3.5
                  pl-12
                  text-sm
                  outline-none
                  transition
                  focus:border-indigo-600
                  focus:ring-2
                  focus:ring-indigo-600
                  "
                />
              </div>

              {errors.email && (
                <p
                  className="
                  mt-2
                  text-xs
                  text-red-400
                  bg-red-500/10
                  border
                  border-red-500/20
                  rounded-lg
                  px-3
                  py-2
                  "
                >
                  ⚠ {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <div className="relative">
                <Lock
                  size={18}
                  className="
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      text-gray-500
    "
                />

                <input
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters are required",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="
      w-full
      rounded-xl
      bg-black/40
      border
      border-white/10
      py-3.5
      pl-12
      pr-12
      text-sm
      text-white
      placeholder:text-gray-600
      outline-none
      transition
      focus:border-indigo-400
      focus:ring-2
      focus:ring-indigo-400/20
    "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      text-gray-500
      hover:text-indigo-400
      transition
    "
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p
                  className="
                  mt-2
                  text-xs
                  text-red-400
                  bg-red-500/10
                  border
                  border-red-500/20
                  rounded-lg
                  px-3
                  py-2
                  "
                >
                  ⚠ {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}

            <button
              type="submit"
              className="
              w-full
              mt-3
              py-3.5
              rounded-xl
              bg-indigo-500
              text-white
              font-semibold
              hover:bg-indigo-600
              transition
              active:scale-95
              cursor-pointer
              shadow-lg
              shadow-[indigo-600]/20
              "
            >
              Sign in →
            </button>

            {/* Register Link */}

            <p
              className="
              text-center
              text-sm
              text-gray-500
              mt-6
              "
            >
              Don't have an account?
              <NavLink
                to="/register"
                className="
                ml-2
                text-white
                font-medium
                hover:text-indigo-300
                transition
                "
              >
                Create one
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
