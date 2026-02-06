"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    restaurantName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("إنشاء الحساب...");
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">إنشاء حساب</h2>
      <p className="text-gray-600 mb-6">ابدأ رحلتك مع FineDine اليوم</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأول</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأخير</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">اسم المطعم</label>
          <input
            type="text"
            value={formData.restaurantName}
            onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
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
          إنشاء حساب
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        لديك حساب بالفعل؟{" "}
        <Link href="/auth/login" className="text-[#E6034B] font-medium hover:underline">
          سجل دخولك
        </Link>
      </p>
    </>
  );
}
