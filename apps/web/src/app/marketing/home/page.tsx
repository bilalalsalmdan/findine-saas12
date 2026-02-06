"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Globe, Smartphone, BarChart3 } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8 border border-white/20">
              🚀 المنصة رقم #1 لإدارة المطاعم
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            منصة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6034B] to-[#7c3aed]">الذكاء الاصطناعي</span>{" "}
            لجذب عملاء أكثر لمطعمك
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            أبهر عملاءك وحقق إيرادات أكثر مع قوائم QR المدعومة بالذكاء الاصطناعي، 
            مواقع المطاعم، والمشاركات الاجتماعية الآلية
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/auth/register"
              className="bg-[#E6034B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c80340] transition-colors shadow-2xl shadow-[#E6034B]/30"
            >
              ابدأ تجربتك المجانية
            </Link>
            <Link
              href="/marketing/demo"
              className="flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              شاهد العرض التوضيحي
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "50K+", label: "مطعم نشط" },
              { value: "10M+", label: "طلب شهرياً" },
              { value: "99.9%", label: "وقت التشغيل" },
              { value: "4.9/5", label: "تقييم العملاء" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E6034B]/10 text-[#E6034B] text-sm font-medium mb-4">
              المميزات الرئيسية
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              كل ما تحتاجه لإدارة مطعمك
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "قائمة QR ذكية", desc: "قوائم رقمية تفاعلية مع ذكاء اصطناعي" },
              { icon: Globe, title: "موقع متكامل", desc: "موقع إلكتروني احترافي لمطعمك" },
              { icon: Smartphone, title: "تطبيق المطعم", desc: "إدارة الطلبات والمخزون" },
              { icon: BarChart3, title: "تحليلات متقدمة", desc: "إحصائيات مفصلة عن المبيعات" },
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-[#E6034B] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
