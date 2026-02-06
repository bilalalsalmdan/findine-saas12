"use client";

import { Shield, Lock, Server, Eye } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">الأمان</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن نأخذ أمان بياناتك على محمل الجد
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-gray-50">
            <Shield className="w-10 h-10 text-[#E6034B] mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">حماية البيانات</h3>
            <p className="text-gray-600">تشفير كامل للبيانات على جميع المستويات</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50">
            <Lock className="w-10 h-10 text-[#E6034B] mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">SSL Certificate</h3>
            <p className="text-gray-600">شهادات أمان SSL لجميع الاتصالات</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50">
            <Server className="w-10 h-10 text-[#E6034B] mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">نسخ احتياطي</h3>
            <p className="text-gray-600">نسخ احتياطي يومي لجميع بياناتك</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50">
            <Eye className="w-10 h-10 text-[#E6034B] mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">مراقبة 24/7</h3>
            <p className="text-gray-600">مراقبة مستمرة للأنظمة والشبكات</p>
          </div>
        </div>
      </div>
    </div>
  );
}
