"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">تم إعادة التعيين!</h2>
        <p className="text-gray-600 text-center mb-6">
          تم تغيير كلمة المرور بنجاح
        </p>
        <Link
          href="/auth/login"
          className="block w-full bg-[#E6034B] text-white py-3 rounded-xl font-semibold text-center hover:bg-[#c80340] transition-colors"
        >
          تسجيل الدخول
        </Link>
      </>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">إعادة تعيين كلمة المرور</h2>
      <p className="text-gray-600 mb-6">أدخل كلمة المرور الجديدة</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور الجديدة</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#E6034B] text-white py-3 rounded-xl font-semibold hover:bg-[#c80340] transition-colors"
        >
          إعادة التعيين
        </button>
      </form>

      <p className="mt-6 text-center">
        <Link href="/auth/login" className="flex items-center justify-center gap-2 text-[#E6034B] hover:underline">
          <ArrowLeft className="w-4 h-4" />
          العودة لتسجيل الدخول
        </Link>
      </p>
    </>
  );
}
