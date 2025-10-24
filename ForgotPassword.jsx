import { useRef } from "react";
import { auth } from "./firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({ setIsPasswordModalOpen }) => {
  const navigate = useNavigate();
  const email = useRef(null);

  const handleResetLink = () => {
    const userEmail = email.current.value;
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        // Password reset email sent!
        console.log("Reset email was sent");
        setIsPasswordModalOpen(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error + errorMessage);
      });
  };

  return (
    <div className="fixed inset-0 bg-[linear-gradient(135deg,#232526,#414345)] flex items-center justify-center p-4 z-50">
      <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-2xl w-full max-w-md">
        {/* Modal Header */}
        <h2 className="text-white text-2xl font-semibold mb-4 text-center">
          Forgot Your Password?
        </h2>

        <p className="text-gray-400 mb-6 text-center text-sm">
          Enter your email address below and we'll send you a link to reset your
          password.
        </p>

        {/* Email Input Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email address
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-[#2d2d2d] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Reset Password Button*/}
        <button
          onClick={handleResetLink}
          className="cursor-pointer w-full bg-[#6a5acd] hover:bg-[#5a4ac0] text-white font-semibold py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#6a5acd] focus:ring-opacity-50"
        >
          Send Reset Link
        </button>

        {/* Close Link */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsPasswordModalOpen(false)}
            className="cursor-pointer text-gray-400 hover:text-white text-sm transition duration-200"
          >
            Back to Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
