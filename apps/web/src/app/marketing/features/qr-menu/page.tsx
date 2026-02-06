"use client";

import { QrCode, Scan, Smartphone, Zap } from "lucide-react";

const features = [
  { icon: Scan, title: "مسح سريع", description: "QR codes عالية الجودة للمسح السريع" },
  { icon: Smartphone, title: "لا يحتاج تطبيق", description: "العملاء يفتحون القائمة مباشرة" },
  { icon: Zap, title: "تحديث فوري", description: "تحديث القائمة في الوقت الفعلي" },
];

export default function QRMenuPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#E6034B]/10 text-[#E6034B] text-sm font-medium mb-4">
            QR Menu
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            قائمة QR الرقمية
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            قوائم رقمية تفاعلية لا تحتاج لتطبيقات
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-50 text-center">
              <feature.icon className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#E6034B] to-[#7c3aed] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">أنشئ قائمتك الرقمية الآن</h2>
          <button className="bg-white text-[#E6034B] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
            ابدأ مجاناً
          </button>
        </div>
      </div>
    </div>
  );
}
