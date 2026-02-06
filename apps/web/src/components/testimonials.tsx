'use client';

import { motion } from 'framer-motion';
import { FadeIn, FloatingElement } from './motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'غيرت FineDine طريقة عمل مطعمنا بالكامل. القائمة الرقمية سهلة الاستخدام وعملائنا يحبونها. زادت المبيعات 40% في أول شهر!',
    author: 'أحمد العلي',
    role: 'مالك مطعم البستان',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    quote: 'التحليلات المتقدمة ساعدتنا نفهم عملائنا بشكل أفضل. نعرف الآن الأطباق الأكثر مبيعاً وأوقات الذروة.',
    author: 'سارة محمد',
    role: 'مديرة مطعم لذيذ',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote: 'دعم العملاء ممتاز، والمنصة سهلة الاستخدام. أنصح بها كل صاحب مطعم يريد التطور.',
    author: 'خالد السالم',
    role: 'صاحب سلسلة مطاعم',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#E6034B]/10 text-[#E6034B] text-sm font-medium mb-4">
            آراء العملاء
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            انضم لأكثر من 50,000 مطعم يثقون بـ FineDine
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <FloatingElement className="absolute -top-4 -right-4" duration={3 + index}>
                  <div className="w-12 h-12 rounded-full bg-[#E6034B] flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </FloatingElement>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
