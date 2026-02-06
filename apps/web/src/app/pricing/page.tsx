import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Pricing } from '@/components/pricing';
import { FadeIn } from '@/components/motion';
import { Check, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'الأسعار - FineDine',
  description: 'خطط أسعار مرنة تناسب كل حجم مطعم، من البداية حتى السلاسل الكبرى',
};

const faqs = [
  {
    question: 'هل يمكنني تغيير خطتي في أي وقت؟',
    answer: 'نعم، يمكنك الترقية أو تخفيض خطتك في أي وقت. التغييرات تسري فوراً.',
  },
  {
    question: 'هل هناك عقد ملزم؟',
    answer: 'لا، جميع خططنا شهرية ويمكنك الإلغاء في أي وقت بدون رسوم إضافية.',
  },
  {
    question: 'ما هي طرق الدفع المتاحة؟',
    answer: 'نقبل البطاقات الائتمانية، مدى، Apple Pay، والتحويل البنكي للخطط السنوية.',
  },
  {
    question: 'هل يوجد خصم للاشتراك السنوي؟',
    answer: 'نعم، وفّر 20% عند الاشتراك السنوي مقابل الشهري.',
  },
];

const comparisonFeatures = [
  { name: 'قوائم QR', starter: '1', growth: 'غير محدود', pro: 'غير محدود' },
  { name: 'الطلبات الشهرية', starter: '100', growth: 'غير محدود', pro: 'غير محدود' },
  { name: 'المستخدمين', starter: '2', growth: '10', pro: 'غير محدود' },
  { name: 'الدعم', starter: 'بريد', growth: '24/7', pro: 'مدير مخصص' },
  { name: 'التحليلات', starter: 'أساسية', growth: 'متقدمة', pro: 'مخصصة' },
  { name: 'API', starter: false, growth: false, pro: true },
  { name: 'أفرع إضافية', starter: false, growth: '5', pro: 'غير محدود' },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                خطط أسعار شفافة
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                اختر الخطة المناسبة لاحتياجات مطعمك. يمكنك الترقية أو التخفيض في أي وقت.
              </p>
            </FadeIn>
          </div>
        </section>

        <Pricing />

        {/* Comparison Table */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">مقارنة الخطط</h2>
            </FadeIn>

            <FadeIn>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-right py-4 px-6 font-semibold text-gray-900">الميزة</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">البداية</th>
                      <th className="text-center py-4 px-6 font-semibold text-[#E6034B]">النمو</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">الاحترافية</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                        <td className="text-center py-4 px-6">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-gray-300">—</span>
                            )
                          ) : (
                            <span className="text-gray-600">{feature.starter}</span>
                          )}
                        </td>
                        <td className="text-center py-4 px-6 bg-[#E6034B]/5">
                          {typeof feature.growth === 'boolean' ? (
                            feature.growth ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-gray-300">—</span>
                            )
                          ) : (
                            <span className="text-[#E6034B] font-medium">{feature.growth}</span>
                          )}
                        </td>
                        <td className="text-center py-4 px-6">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-gray-300">—</span>
                            )
                          ) : (
                            <span className="text-gray-600">{feature.pro}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
            </FadeIn>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E6034B]/10 flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-[#E6034B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
