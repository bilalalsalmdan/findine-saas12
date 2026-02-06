'use client';

import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from './motion';
import { 
  Sparkles, 
  Globe, 
  Smartphone, 
  BarChart3, 
  Zap, 
  Shield,
  Palette,
  Clock
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'قائمة QR ذكية',
    description: 'قوائم رقمية تفاعلية مع ذكاء اصطناعي لترجمة الوصفات وتحسين الصور',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Globe,
    title: 'موقع متكامل',
    description: 'موقع إلكتروني احترافي لمطعمك مع حجز الطاولات والطلبات أونلاين',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Smartphone,
    title: 'تطبيق المطعم',
    description: 'تطبيق مخصص لإدارة الطلبات وتتبع المخزون وإدارة الموظفين',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'تحليلات متقدمة',
    description: 'إحصائيات مفصلة حول المبيعات والعملاء والأكثر مبيعاً',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'تحديث فوري',
    description: 'تعديل القائمة والأسعار في الوقت الفعلي بدون طباعة جديدة',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'أمان عالي',
    description: 'حماية كاملة للبيانات مع تشفير SSL ونظام GDPR متوافق',
    color: 'from-red-500 to-pink-500',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#E6034B]/10 text-[#E6034B] text-sm font-medium mb-4">
            المميزات الرئيسية
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            كل ما تحتاجه لإدارة مطعمك
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            منصة متكاملة تجمع بين القائمة الرقمية، الموقع الإلكتروني، والتحليلات في مكان واحد
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <ScaleOnHover>
                <div className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
