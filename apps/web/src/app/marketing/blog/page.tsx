"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "كيف تزيد مبيعات مطعمك بنسبة 40%",
    excerpt: "تعرف على الاستراتيجيات الفعالة لزيادة الإيرادات وتحسين تجربة العملاء",
    date: "2026-02-01",
    category: "نصائح",
  },
  {
    title: "مستقبل القوائم الرقمية في 2026",
    excerpt: "تعرف على أحدث التقنيات والاتجاهات في عالم المطاعم الرقمية",
    date: "2026-01-28",
    category: "تقنية",
  },
  {
    title: "دليلك الشامل لإدارة المطاعم",
    excerpt: "كل ما تحتاج معرفته لإدارة مطعم ناجح وربحي",
    date: "2026-01-20",
    category: "إدارة",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">المدونة</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            آخر الأخبار والنصائح لإدارة المطاعم
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden bg-white border hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#E6034B]/20 to-[#7c3aed]/20" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="px-2 py-1 rounded-full bg-gray-100">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/marketing/blog/${index + 1}`} className="text-[#E6034B] font-medium">
                  اقرأ المزيد ←
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
