"use client";

import { BarChart3, TrendingUp, TrendingDown, Calendar } from "lucide-react";

const stats = [
  { label: "إجمالي الإيرادات", value: "145,250 ريال", change: "+15%", up: true },
  { label: "عدد الطلبات", value: "1,234", change: "+8%", up: true },
  { label: "متوسط قيمة الطلب", value: "118 ريال", change: "-2%", up: false },
  { label: "العملاء الجدد", value: "89", change: "+24%", up: true },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">التحليلات</h2>
          <p className="text-gray-600">إحصائيات وتحليلات أداء مطعمك</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl">
          <Calendar className="w-5 h-5 text-gray-400" />
          <select className="bg-transparent outline-none">
            <option>آخر 30 يوم</option>
            <option>آخر 7 أيام</option>
            <option>هذا الشهر</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <span className={`flex items-center gap-1 text-sm ${stat.up ? "text-green-600" : "text-red-600"}`}>
              {stat.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {stat.change} من الشهر الماضي
            </span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">الإيرادات اليومية</h3>
          <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-12 h-12 text-gray-300" />
            <span className="mr-2 text-gray-400">رسم بياني للإيرادات</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">أكثر الأطباق مبيعاً</h3>
          <div className="space-y-3">
            {["مشاوي مشكلة", "كبسة لحم", "فتوش", "حمص", "تبولة"].map((dish, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-gray-900">{dish}</span>
                <span className="text-gray-500">{150 - index * 20} طلب</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
