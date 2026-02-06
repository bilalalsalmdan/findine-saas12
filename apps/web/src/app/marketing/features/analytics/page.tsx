"use client";

import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

export default function AnalyticsFeaturePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#E6034B]/10 text-[#E6034B] text-sm font-medium mb-4">
            مميزات التحليلات
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            تحليلات متقدمة
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            فهم عميق لأداء مطعمك مع إحصائيات وتقارير مفصلة
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: DollarSign, label: "الإيرادات", value: "145K" },
            { icon: Users, label: "العملاء", value: "1.2K" },
            { icon: TrendingUp, label: "معدل النمو", value: "+23%" },
            { icon: BarChart3, label: "الطلبات", value: "3.4K" },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-50 text-center">
              <stat.icon className="w-8 h-8 text-[#E6034B] mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">اتخذ قرارات مدروسة</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            احصل على رؤى عميقة حول أداء مطعمك واتخذ قرارات تعتمد على البيانات
          </p>
          <button className="bg-[#E6034B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c80340] transition-colors">
            ابدأ الآن
          </button>
        </div>
      </div>
    </div>
  );
}
