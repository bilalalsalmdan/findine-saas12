'use client';

import { motion } from 'framer-motion';
import { FadeIn, ScaleOnHover } from './motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'البداية',
    price: '0',
    period: 'مجاني للأبد',
    description: 'مثالي للمطاعم الصغيرة والبداية',
    features: [
      'قائمة QR واحدة',
      '100 طلب/شهر',
      'تصميم أساسي',
      'دعم البريد الإلكتروني',
      'إحصائيات أساسية',
    ],
    cta: 'ابدأ مجاناً',
    popular: false,
  },
  {
    name: 'النمو',
    price: '99',
    period: 'ريال/شهر',
    description: 'الخيار الأفضل للمطاعم المتنامية',
    features: [
      'قوائم QR غير محدودة',
      'طلبات غير محدودة',
      'تصميم مخصص',
      'دعم أولوي 24/7',
      'تحليلات متقدمة',
      'ربط مع أنظمة الطلبات',
      'موقع إلكتروني متكامل',
    ],
    cta: 'ابدأ الآن',
    popular: true,
  },
  {
    name: 'الاحترافية',
    price: '299',
    period: 'ريال/شهر',
    description: 'للسلاسل والمطاعم الكبيرة',
    features: [
      'كل مميزات النمو',
      'أفرع غير محدودة',
      'API مخصص',
      'مدير حساب مخصص',
      'تدريب فريق كامل',
      'تكامل مع ERP',
      'ضمان SLA 99.9%',
    ],
    cta: 'تواصل مع المبيعات',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#E6034B]/10 text-[#E6034B] text-sm font-medium mb-4">
            خطط الأسعار
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            اختر الخطة المناسبة لك
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            خطط مرنة تناسب كل حجم مطعم، من البداية حتى السلاسل الكبرى
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <ScaleOnHover>
                <div className={`relative p-8 rounded-2xl ${plan.popular ? 'bg-gray-900 text-white' : 'bg-white'} shadow-xl`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#E6034B] text-white px-4 py-1 rounded-full text-sm font-medium">
                        الأكثر شيوعاً
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </span>
                      <span className={plan.popular ? 'text-gray-400' : 'text-gray-500'}>ريال</span>
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                    <p className={`mt-4 text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-[#E6034B]' : 'bg-[#E6034B]/10'}`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-[#E6034B]'}`} />
                        </div>
                        <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-[#E6034B] text-white hover:bg-[#c80340]'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </ScaleOnHover>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
