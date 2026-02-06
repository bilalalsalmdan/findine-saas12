"use client";

import { Camera, User, Building2 } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "أحمد",
    lastName: "محمد",
    email: "ahmed@restaurant.com",
    phone: "+966 50 123 4567",
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">الملف الشخصي</h2>
        <p className="text-gray-600">إدارة معلوماتك الشخصية</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center text-white text-2xl font-bold">
            أ
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Camera className="w-4 h-4" />
            تغيير الصورة
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأول</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأخير</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-[#E6034B] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#c80340] transition-colors">
            حفظ التغييرات
          </button>
        </div>
      </div>
    </div>
  );
}
