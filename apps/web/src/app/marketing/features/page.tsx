"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Palette } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "الذكاء الاصطناعي",
    description: "تحليل ذكي للبيانات وتوصيات مخصصة لتحسين المبيعات",
  },
  {
    icon: Zap,
    title: "سرعة فائقة",
    description: "نظام سريع ومتجاوب يعمل على جميع الأجهزة",
  },
  {
    icon: Shield,
    title: "أمان عالي",
    description: "حماية كاملة للبيانات مع تشفير SSL",
  },
  {
    icon: Palette,
    title: "تخصيص كامل",
    description: "تصميم يعكس هوية علامتك التجارية",
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">المميزات</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            كل ما تحتاجه لإدارة مطعمك بكفاءة واحترافية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-gray-50"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E6034B]/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-[#E6034B]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
