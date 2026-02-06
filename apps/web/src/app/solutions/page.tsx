import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/motion';
import { 
  Utensils, 
  Coffee, 
  Pizza, 
  Cake, 
  Truck, 
  Building2,
  Store,
  ChefHat,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'الحلول - FineDine',
  description: 'حلول متخصصة لجميع أنواع المطاعم والمقاهي وخدمات الطعام',
};

const solutions = [
  {
    icon: Utensils,
    title: 'المطاعم الراقية',
    description: 'قوائم رقمية أنيقة مع صور عالية الجودة وأوصاف مفصلة للأطباق',
    features: ['قائمة متعددة الأقسام', 'توصيات الأطباق', 'اقتراحات النبيذ'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Coffee,
    title: 'المقاهي',
    description: 'نظام سريع للمقاهي مع دعم التخصيص والإضافات',
    features: ['تخصيص المشروبات', 'نقاط الولاء', 'طلب مسبق'],
    color: 'from-brown-500 to-amber-600',
  },
  {
    icon: Pizza,
    title: 'مطاعم الوجبات السريعة',
    description: 'تجربة طلب سريعة مع دمج خدمات التوصيل',
    features: ['دمج مع دليفري', 'تتبع الطلبات', 'عروض خاصة'],
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Cake,
    title: 'المخابز والحلويات',
    description: 'عرض المنتجات اليومية والحجز المسبق للمناسبات',
    features: ['منتجات يومية', 'حجز مناسبات', 'بطاقات هدايا'],
    color: 'from-pink-500 to-rose-400',
  },
  {
    icon: Truck,
    title: 'خدمات الطعام',
    description: 'إدارة فعالة لخدمات الطعام الخارجية والمناسبات',
    features: ['قوائم مناسبات', 'عروض مخصصة', 'إدارة الحجوزات'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'الفنادق',
    description: 'حل متكامل لخدمات الغرف والمطاعم والمقاهي',
    features: ['خدمة الغرف', 'حجز المطعم', 'برنامج الولاء'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Store,
    title: 'سلاسل المطاعم',
    description: 'إدارة مركزية لجميع فروعك مع تحكم كامل',
    features: ['إدارة الفروع', 'تقارير مركزية', 'نشر القوائم'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ChefHat,
    title: 'عربات الطعام',
    description: 'حل متنقل ومثالي لعربات الطعام والبوفيهات',
    features: ['موقع متغير', 'قائمة يومية', 'وسائل تواصل'],
    color: 'from-orange-500 to-amber-500',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                حلول متخصصة
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                حلول لكل نوع من المطاعم
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                سواء كنت مطعم راقٍ، مقهى، أو سلسلة مطاعم، لدينا الحل المناسب لك
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <StaggerItem key={index}>
                  <ScaleOnHover>
                    <div className="group h-full p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <solution.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-sm text-gray-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E6034B]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        لم تجد حل مناسب؟
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                فريقنا جاهز لمساعدتك في إيجاد الحل المثالي لعملك
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="flex items-center gap-2 bg-[#E6034B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c80340] transition-colors shadow-lg shadow-[#E6034B]/25"
                >
                  اطلع على الأسعار
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <button className="flex items-center gap-2 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 transition-colors">
                  تواصل مع المبيعات
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
