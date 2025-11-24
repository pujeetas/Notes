// SignupPage.jsx
import React, { useState } from "react";
import {
  Mail,
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Calendar,
  BarChart3,
  CheckCircle2,
  Github,
  Chrome,
} from "lucide-react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (form.password.length < 6) e.password = "Password must be ≥ 6 chars";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Replace with your submit logic
    console.log("submit", form);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl  overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Form */}
        <div className="p-10">
          <header className="flex items-center gap mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 font-sans">
                DailyDeck
              </h1>
              <p className="text-xs text-slate-500">
                Your daily workflow, simplified.
              </p>
            </div>
          </header>

          <h2 className="text-2xl font-semibold text-slate-900 mb-1">
            Create an account
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Unlock your streamlined workflow.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center gap-2 border border-slate-200 rounded-md py-2 text-sm hover:bg-slate-100"
            >
              <Chrome size={16} className="text-slate-600" />
              Google
            </button>
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center gap-2 border border-slate-200 rounded-md py-2 text-sm hover:bg-slate-100"
            >
              <Github size={16} className="text-slate-700" />
              GitHub
            </button>
          </div>

          <div className="flex items-center text-xs text-slate-400 mb-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="px-3">or continue with email</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <label className="block">
              <span className="sr-only">Full name</span>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Full name"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${
                    errors.name ? "border-rose-500" : "border-slate-200"
                  } bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200`}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-rose-600 text-xs">{errors.name}</p>
              )}
            </label>

            <label className="block">
              <span className="sr-only">Email</span>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Email address"
                  inputMode="email"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${
                    errors.email ? "border-rose-500" : "border-slate-200"
                  } bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-rose-600 text-xs">{errors.email}</p>
              )}
            </label>

            <label className="block">
              <span className="sr-only">Password</span>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className={`w-full pl-10 pr-10 py-3 rounded-md border ${
                    errors.password ? "border-rose-500" : "border-slate-200"
                  } bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 p-1 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-rose-600 text-xs">{errors.password}</p>
              )}
            </label>

            <div>
              <button
                type="submit"
                className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-md bg-slate-800 text-white font-medium hover:bg-slate-900 transition"
              >
                Create account
                <ArrowRight size={16} />
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-slate-700 font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* Right: Background with tiny decorative icons (merged, not boxed) */}
        {/* Right: Full image with text overlay */}
        <aside className="relative hidden md:block">
          {/* Full-cover image */}
          <img
            src="/rightIllustration.png"
            alt="Workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </aside>
      </div>
    </div>
  );
};

export default SignupPage;
