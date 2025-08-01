"use client";

import { useState } from "react";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex rounded-2xl overflow-hidden shadow-2xl">
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10" />
          <img src="/Images/AI-hero.jpg" alt="AI Futuristic Heads" className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">AI Group Chat</h1>
            <p className="text-xl text-gray-200 drop-shadow-md">Connect with the future of conversation</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-gray-900">
          <div className="p-8 lg:p-12">
            <div className="mb-8 text-center lg:hidden">
              <h1 className="text-3xl font-bold text-white mb-2">AI Group Chat</h1>
              <p className="text-gray-400">Connect with the future of conversation</p>
            </div>

            {isLogin ? (
              <Login onSwitchToSignup={() => setIsLogin(false)} />
            ) : (
              <SignUp onSwitchToLogin={() => setIsLogin(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
