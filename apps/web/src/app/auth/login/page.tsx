"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تسجيل الدخول...");
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">تسجيل الدخول</h2>
      <p className="text-gray-600 mb-6">أهلاً بك! سجل دخولك للمتابعة</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
            placeholder="example@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
              placeholder="********"
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

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-gray-600">تذكرني</span>
          </label>
          <Link href="/auth/forgot-password" className="text-[#E6034B] hover:underline">
            نسيت كلمة المرور؟
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-[#E6034B] text-white py-3 rounded-xl font-semibold hover:bg-[#c80340] transition-colors"
        >
          تسجيل الدخول
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        ليس لديك حساب؟{" "}
        <Link href="/auth/register" className="text-[#E6034B] font-medium hover:underline">
          سجل الآن
        </Link>
      </p>
    </>
  );
}
