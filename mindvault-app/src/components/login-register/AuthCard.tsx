"use client";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthCard({
  isLogin,
  setIsLogin,
}: {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}) {
  return (
    <div className="w-full max-w-md rounded-2xl backdrop-blur-xl shadow-lg border border-gray-200 bg-white/70 p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        {isLogin ? "Se connecter" : "Créer un compte"}
      </h2>

      {isLogin ? <LoginForm /> : <RegisterForm />}

      <div className="text-center mt-6 text-sm text-gray-600">
        {isLogin ? (
          <>
            Don&apos;t have an account yet ?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="text-blue-600 hover:underline font-medium"
            >
              Registration
            </button>
          </>
        ) : (
          <>
            Already have an account ?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
