'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MagneticButton, FloatingElement } from './motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Floating Elements */}
      <FloatingElement className="absolute top-20 right-10 w-20 h-20 opacity-30" duration={4}>
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#E6034B] to-[#7c3aed] blur-xl" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-10 w-32 h-32 opacity-20" duration={5}>
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#E6034B] blur-2xl" />
      </FloatingElement>

      {/* Content */}
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
          منصة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6034B] to-[#7c3aed]">الذكاء الاصطناعي</span>{' '}
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
          <MagneticButton className="bg-[#E6034B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c80340] transition-colors shadow-2xl shadow-[#E6034B]/30">
            ابدأ تجربتك المجانية
          </MagneticButton>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            شاهد العرض التوضيحي
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '50K+', label: 'مطعم نشط' },
            { value: '10M+', label: 'طلب شهرياً' },
            { value: '99.9%', label: 'وقت التشغيل' },
            { value: '4.9/5', label: 'تقييم العملاء' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
