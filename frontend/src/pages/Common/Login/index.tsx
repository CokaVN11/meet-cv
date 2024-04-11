import { redirect } from "react-router-dom";
import { useAppDispatch } from "libs/redux";
import { setAuth } from "libs/redux/sliceAuth";
import { useState } from "react";

export const Login = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      return;
    }
    const role = email === "candidate" ? "candidate" : "staff";
    dispatch(setAuth({ token: "token", role }));
    // Redirect to home page
    redirect("/");
  };
  return (
    <div className="bg-gradient-to-tr from-amber-500 to-yellow-300 h-screen w-screen flex justify-center items-center">
      <div
        className="bg-white flex flex-col mx-auto rounded-lg shadow-md my-auto p-8"
        style={{
          width: "29.75rem",
          height: "auto",
        }}
      >
        {/* Title MEET CV */}
        <div className="w-full flex justify-start items-center gap-3 ms-8 mt-3">
          <svg
            width="6"
            height="39"
            viewBox="0 0 6 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 0L3 39" stroke="#F8D442" strokeWidth="6" />
          </svg>
          <h1 className="text-4xl font-bold text-black uppercase self-start">
            Meet CV
          </h1>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-10">
          <h2 className="text-2xl font-semibold text-black text-center uppercase">
            Sign In
          </h2>
          <p className="text-sm text-center mt-2 text-slate-500">
            Enter your credentials to access your account
          </p>

          {/* Form */}
          <div className="flex flex-col justify-center items-center mt-12 gap-4">
            {/* Username input with label */}
            <div className="flex flex-col w-96">
              <label
                htmlFor="username"
                className="text-sm font-medium text-black self-start"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-md mt-2 text-black"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password input with label */}
            <div className="flex flex-col w-96 mt-4">
              <label
                htmlFor="password"
                className="text-sm font-medium text-black self-start"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="px-4 py-2 border border-gray-300 rounded-md mt-2 text-black"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login button */}
            <button
              className="px-4 py-2 bg-amber-500 text-white rounded-md mt-4 w-full uppercase"
              onClick={() => handleLogin()}
            >
              Sign in
            </button>
          </div>
          <p className="text-sm text-center mt-6 text-slate-500">
            You are an employee?{" "}
            <a href="/register/candidate" className="text-amber-500 underline">
              Get hired now
            </a>
          </p>
          <p className="text-sm text-center mt-2 text-slate-500">
            You are from a company?{" "}
            <a href="/register/candidate" className="text-amber-500 underline">
              Create your account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
