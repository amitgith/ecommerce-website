import React from "react";
import { NavLink, useNavigate } from "react-router";
import { User, Mail, Lock, ShoppingBag } from "lucide-react";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));

    reset();

    navigate("/login");
  };

  return (
    <div
      className="
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    bg-[#080808]
    px-4
    py-10
    font-sans
    "
    >
      {/* Logo */}

      <div
        className="
      flex
      items-center
      gap-2
      mb-8
      "
      >
        <div
          className="
        h-10
        w-10
        flex
        items-center
        justify-center
        rounded-xl
        bg-indigo-400
        "
        >
          <ShoppingBag size={22} className="text-black" />
        </div>

        <span
          className="
        text-xl
        sm:text-2xl
        font-bold
        text-white
        "
        >
          Sky
          <span className="text-indigo-400">Mart</span>
        </span>
      </div>

      {/* Card */}

      <div
        className="
      w-full
      max-w-md
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-2xl
      p-6
      sm:p-8
      "
      >
        {/* Heading */}

        <h1
          className="
        text-2xl
        sm:text-3xl
        font-bold
        text-white
        "
        >
          Create account
        </h1>

        <p
          className="
        mt-2
        text-sm
        text-gray-500
        "
        >
          Join SkyMart and start shopping
        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="
        mt-8
        space-y-4
        "
        >
          {/* Full Name */}

          <div>
            <div
              className="
            relative
            "
            >
              <User
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
                {...register("fullname", {
                  required: "Full Name is Required",

                  minLength: {
                    value: 4,
                    message: "Minimum 4 characters are required",
                  },

                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters are required",
                  },
                })}
                type="text"
                placeholder="Full name"
                className="
              w-full
              rounded-xl
              bg-black/40
              border
              border-white/10
              py-3.5
              pl-12
              pr-4
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
            </div>

            {errors.fullname && (
              <p
                className="
            mt-2
            text-xs
            text-red-400
            "
              >
                {errors.fullname.message}
              </p>
            )}
          </div>
          {/* Email */}

          <div>
            <div
              className="
            relative
            "
            >
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
                  required: "Email is Required",
                })}
                type="email"
                placeholder="Email address"
                className="
              w-full
              rounded-xl
              bg-black/40
              border
              border-white/10
              py-3.5
              pl-12
              pr-4
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
            </div>

            {errors.email && (
              <p
                className="
            mt-2
            text-xs
            text-red-400
            "
              >
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <div
              className="
            relative
            "
            >
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

                  maxLength: {
                    value: 9,
                    message: "Maximum 9 characters are required",
                  },
                })}
                type="password"
                placeholder="Password (min 6 chars)"
                className="
              w-full
              rounded-xl
              bg-black/40
              border
              border-white/10
              py-3.5
              pl-12
              pr-4
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
            </div>

            {errors.password && (
              <p
                className="
            mt-2
            text-xs
            text-red-400
            "
              >
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}

          <div>
            <div
              className="
            relative
            "
            >
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
                {...register("confirmpassword", {
                  required: "Confirm Password is Required",

                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are required",
                  },

                  maxLength: {
                    value: 9,
                    message: "Maximum 9 characters are required",
                  },
                })}
                type="password"
                placeholder="Confirm password"
                className="
              w-full
              rounded-xl
              bg-black/40
              border
              border-white/10
              py-3.5
              pl-12
              pr-4
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
            </div>

            {errors.confirmpassword && (
              <p
                className="
            mt-2
            text-xs
            text-red-400
            "
              >
                {errors.confirmpassword.message}
              </p>
            )}
          </div>

          {/* Button */}

          <button
            type="submit"
            className="
          w-full
          mt-3
          rounded-xl
          bg-indigo-400
          py-3.5
          text-black
          font-semibold
          text-sm
          transition
          hover:bg-indigo-300
          active:scale-95
          cursor-pointer
          "
          >
            Create Account
            <span className="ml-2">→</span>
          </button>

          {/* Login Link */}

          <p
            className="
          text-center
          text-sm
          text-gray-500
          mt-6
          "
          >
            Already have an account?
            <NavLink
              to="/login"
              className="
            ml-1
            text-indigo-400
            font-semibold
            hover:text-indigo-300
            transition
            "
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
