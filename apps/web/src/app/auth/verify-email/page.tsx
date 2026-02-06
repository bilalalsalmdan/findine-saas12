"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function EmailVerificationPage() {
  const [verified, setVerified] = useState(false);

  if (verified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">تم التحقق!</h2>
          <p className="text-gray-600 mb-6">
            تم تأكيد بريدك الإلكتروني بنجاح
          </p>
          <Link
            href="/auth/login"
            className="block w-full bg-[#E6034B] text-white py-3 rounded-xl font-semibold text-center hover:bg-[#c80340] transition-colors"
          >
            تسجيل الدخول
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">FineDine</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#E6034B]/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-[#E6034B]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">تحقق من بريدك</h2>
          <p className="text-gray-600 mb-6">
            أرسلنا رابط التحقق إلى بريدك الإلكتروني. اضغط على الرابط للمتابعة.
          </p>
          <button
            onClick={() => setVerified(true)}
            className="w-full bg-[#E6034B] text-white py-3 rounded-xl font-semibold hover:bg-[#c80340] transition-colors"
          >
            محاكاة التحقق
          </button>
        </div>
      </div>
    </div>
  );
}
