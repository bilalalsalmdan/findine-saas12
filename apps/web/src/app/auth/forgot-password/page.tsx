"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">تم الإرسال!</h2>
        <p className="text-gray-600 text-center mb-6">
          راجع بريدك الإلكتروني لإعادة تعيين كلمة المرور
        </p>
        <Link
          href="/auth/login"
          className="flex items-center justify-center gap-2 text-[#E6034B] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          العودة لتسجيل الدخول
        </Link>
      </>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">نسيت كلمة المرور؟</h2>
      <p className="text-gray-600 mb-6">
        أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة التعيين
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
            placeholder="example@email.com"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#E6034B] text-white py-3 rounded-xl font-semibold hover:bg-[#c80340] transition-colors"
        >
          إرسال رابط إعادة التعيين
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
