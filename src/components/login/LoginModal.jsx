import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { login, signup } from "../../api/server";

const LoginModal = ({ isLoginOpen, setIsLoginOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { status, loginMutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      setIsLoginOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { isPending, mutate: registerMutate } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
      setIsLoginOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      registerMutate({ name, email, password, confirmPassword });
    } else {
      loginMutate({ email, password });
    }
  };

  return (
    <div className="relative w-full bg-white text-[#7E22CE] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div
        className={`p-6  ${
          !isSignup ? "md:space-y-6 space-y-4" : "space-y-2"
        } sm:p-8`}
      >
        <h1 className="text-xl font-bold leading-tight tracking-tight text-[#7E22CE] md:text-2xl">
          {isSignup ? "Sign up for an account" : "Sign in to your account"}
        </h1>

        {isSignup && (
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-[#7E22CE]"
            >
              <p className="text-[#7E22CE]">Your name</p>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-[#7E22CE] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name"
              required
            />
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#7E22CE]"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-[#7E22CE] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-[#7E22CE]"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-[#7E22CE] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            required
          />
        </div>
        {isSignup && (
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-[#7E22CE]"
            >
              Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-[#7E22CE] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-[#7E22CE]">
                Remember me
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full text-white bg-[#7E22CE] hover:bg-[#6B1FAF] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border"
        >
          {isSignup ? "Sign up" : "Sign in"}
        </button>
        <p className="text-sm text-center font-light text-[#7E22CE]">
          {isSignup ? "Already have an account?" : "Don't have an account?"}

          <a
            onClick={() => setIsSignup(!isSignup)}
            className="mx-1 font-medium text-[#7E22CE] hover:underline"
          >
            {isSignup ? "Sign in" : "Sign up"}
          </a>
        </p>
      </div>
      <div
        onClick={() => setIsLoginOpen(false)}
        className="absolute top-3 right-3"
      >
        <RxCross2 className="text-3xl text-[#7E22CE] cursor-pointer" />
      </div>
    </div>
  );
};

export default LoginModal;
