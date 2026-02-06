"use client";

import { motion } from "framer-motion";
import { ArrowLeft, UtensilsCrossed, Coffee, Hotel, Store } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: UtensilsCrossed,
    title: "المطاعم",
    description: "حلول متكاملة للمطاعم من جميع الأحجام",
    features: ["قائمة رقمية", "إدارة الطلبات", "تحليلات المبيعات"],
  },
  {
    icon: Coffee,
    title: "المقاهي",
    description: "أدوات خاصة للمقاهي والكافيهات",
    features: ["قائمة المشروبات", "برنامج الولاء", "حجز الطاولات"],
  },
  {
    icon: Hotel,
    title: "الفنادق",
    description: "خدمة الضيوف بكفاءة عالية",
    features: ["خدمة الغرف", "قائمة الضيوف", "تكامل مع أنظمة الفندق"],
  },
  {
    icon: Store,
    title: "سلاسل المطاعم",
    description: "إدارة متعددة الفروع بسهولة",
    features: ["إدارة مركزية", "تقارير الموحد", "تحكم بالأفرع"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">الحلول</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            حلول متخصصة لكل نوع من أعمال المطاعم والضيافة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border hover:shadow-xl transition-shadow"
            >
              <solution.icon className="w-12 h-12 text-[#E6034B] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6034B]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/marketing/demo"
                className="inline-flex items-center gap-2 text-[#E6034B] font-medium hover:gap-3 transition-all"
              >
                اعرف المزيد <ArrowLeft className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
