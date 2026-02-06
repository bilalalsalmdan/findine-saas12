'use client';

import { motion } from 'framer-motion';
import { FadeIn, MagneticButton } from './motion';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn>
            <div className="bg-gradient-to-r from-[#E6034B] to-[#7c3aed] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                جاهز لتطوير مطعمك؟
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                انضم لأكثر من 50,000 مطعم يستخدمون FineDine لتحسين تجربة عملائهم وزيادة الإيرادات
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton className="bg-white text-[#E6034B] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  ابدأ تجربتك المجانية
                </MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  تواصل مع المبيعات
                </motion.button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-xl">FineDine</span>
            </Link>
            <p className="text-gray-400 mb-6">
              منصة الذكاء الاصطناعي لإدارة المطاعم وجذب المزيد من العملاء
            </p>
            <div className="flex gap-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E6034B] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 0" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-6">المنتجات</h3>
            <ul className="space-y-4">
              {['قائمة QR', 'الموقع الإلكتروني', 'تطبيق المطعم', 'التحليلات', 'API'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">الموارد</h3>
            <ul className="space-y-4">
              {['مركز المساعدة', 'المدونة', 'الوثائق', 'دراسات الحالة', 'الشراكات'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                support@finedine.com
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                800-123-4567
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 FineDine. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                شروط الاستخدام
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                ملفات تعريف الارتباط
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
