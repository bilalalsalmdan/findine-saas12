"use client";

import { Check, AlertCircle } from "lucide-react";

export default function StatusPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">حالة النظام</h1>
          <p className="text-lg text-gray-600">تابع حالة خدمات FineDine</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4 mb-8">
          <Check className="w-8 h-8 text-green-600" />
          <div>
            <h2 className="text-xl font-bold text-green-800">جميع الأنظمة تعمل</h2>
            <p className="text-green-600">آخر تحديث: منذ 5 دقائق</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { name: "API", status: "operational", uptime: "99.99%" },
            { name: "لوحة التحكم", status: "operational", uptime: "99.95%" },
            { name: "قاعدة البيانات", status: "operational", uptime: "99.99%" },
            { name: "القوائم الرقمية", status: "operational", uptime: "99.98%" },
          ].map((service, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-medium text-gray-900">{service.name}</span>
              </div>
              <span className="text-gray-500">{service.uptime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
