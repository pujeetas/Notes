import { useRef, useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useUserStore from "./hooks/useUserStore";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [loginState, setLoginState] = useState(true);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();

  const handleSignUp = () => {
    setLoginState(!loginState);
  };

  const { addUser } = useUserStore();

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!loginState) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              addUser({
                name: name.displayName,
                email: email.current.value,
              });
              navigate("/main", { replace: true });
            })
            .catch((error) => {
              // An error occurred
              console.log("Profile update error:", error);
              navigate("/", { replace: true });
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log("Signup error:", error + errorMessage);
          navigate("/", { replace: true });
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // ...
          navigate("/main", { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          navigate("/", { replace: true });
        });
    }
  };

  //handle forgot password
  const handleForgotPassword = () => {
    setIsPasswordModalOpen(true);
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            {loginState
              ? "Sign in to your TaskNest account"
              : "Sign up to TaskNest"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            {!loginState && (
              <div>
                <label className="block text-sm/6 font-medium text-gray-100">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    ref={name}
                    required
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  ref={email}
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">
                  Password
                </label>
                {loginState && (
                  <div className="text-sm" onClick={handleForgotPassword}>
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>
              {isPasswordModalOpen && (
                <ForgotPassword
                  setIsPasswordModalOpen={setIsPasswordModalOpen}
                />
              )}
              <div className="mt-2">
                <input
                  ref={password}
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleButtonClick}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
              >
                {loginState ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?
            <a
              onClick={handleSignUp}
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              {loginState ? "Create account" : "Already a user?"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
