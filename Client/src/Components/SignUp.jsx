import { useState } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";

export default function SignUp({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordValid = formData.password.length >= 8;
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordValid || !passwordsMatch) return;
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-2">Create account</h2>
      <p className="text-gray-400 mb-6">Join the AI group chat community</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-300 mb-1">Username</label>
          <input
            id="username"
            type="text"
            className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 placeholder-gray-400 focus:border-blue-500"
            placeholder="Choose a username"
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
              placeholder="Create a password"
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
          {formData.password && (
            <div className="flex items-center space-x-2 mt-1 text-sm">
              {passwordValid ? <Check className="text-green-500 w-4 h-4" /> : <X className="text-red-500 w-4 h-4" />}
              <span className={passwordValid ? "text-green-500" : "text-red-500"}>
                At least 8 characters
              </span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-gray-300 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 placeholder-gray-400 focus:border-blue-500 pr-10"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {formData.confirmPassword && (
            <div className="flex items-center space-x-2 mt-1 text-sm">
              {passwordsMatch ? <Check className="text-green-500 w-4 h-4" /> : <X className="text-red-500 w-4 h-4" />}
              <span className={passwordsMatch ? "text-green-500" : "text-red-500"}>
                Passwords match
              </span>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded font-semibold hover:from-purple-700 hover:to-pink-700"
          disabled={!passwordValid || !passwordsMatch}
        >
          Create Account
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="text-blue-400 font-medium hover:underline">
          Sign in
        </button>
      </p>
    </div>
  );
}
