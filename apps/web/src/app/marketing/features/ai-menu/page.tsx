"use client";

import { Sparkles, Brain, Camera, Globe } from "lucide-react";

const features = [
  { icon: Brain, title: "توصيات ذكية", description: "يقترح الأطباق بناءً على تفضيلات العميل" },
  { icon: Camera, title: "تحسين الصور", description: "تحسين تلقائي لصور الأطباق باستخدام AI" },
  { icon: Globe, title: "ترجمة فورية", description: "ترجمة القائمة لأكثر من 50 لغة" },
];

export default function AIMenuPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#E6034B]/10 text-[#E6034B] text-sm font-medium mb-4">
            مميزات AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            القائمة الذكية بالـ AI
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            استخدم قوة الذكاء الاصطناعي لتحسين قائمتك وزيادة المبيعات
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

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">جرب قوة AI في مطعمك</h2>
          <button className="bg-[#E6034B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c80340] transition-colors">
            ابدأ مجاناً
          </button>
        </div>
      </div>
    </div>
  );
}
