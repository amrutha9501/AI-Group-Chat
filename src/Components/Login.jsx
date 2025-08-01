import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from 'react-icons/fc';

export default function Login({ onSwitchToSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Google login attempt");
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
      <p className="text-gray-400 mb-6">Sign in to your account</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-300 mb-1">Username</label>
          <input
            id="username"
            type="text"
            className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 placeholder-gray-400 focus:border-blue-500"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-300 mb-1">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 placeholder-gray-400 focus:border-blue-500 pr-10"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="text-right">
          <button type="button" className="text-blue-400 text-sm hover:underline">
            Forgot password?
          </button>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded font-semibold hover:from-blue-700 hover:to-purple-700">
          Sign In
        </button>
      </form>

      <div className="my-4 flex items-center">
        <hr className="flex-grow border-gray-600" />
        <span className="text-gray-400 px-2 text-sm">or</span>
        <hr className="flex-grow border-gray-600" />
      </div>
      <button
        onClick={handleGoogleLogin}
        className="w-full bg-gray-700 text-white border border-gray-600 py-2 rounded hover:bg-gray-600 flex items-center justify-center"
      >
        <FcGoogle className="w-5 h-5 mr-2 bg-white rounded-full" />
        Continue with Google
      </button>


      <p className="mt-4 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <button onClick={onSwitchToSignup} className="text-blue-400 font-medium hover:underline">
          Sign up
        </button>
      </p>
    </div>
  );
}
