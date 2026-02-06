"use client";

import { Building2, Handshake, TrendingUp, Award } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "نمو مشترك", description: "انضم لبرنامج النمو والتوسع معنا" },
  { icon: Handshake, title: "دعم مخصص", description: "فريق دعم مخصص للشركاء" },
  { icon: Award, title: "عمولات تنافسية", description: "نظام عمولات مجزي للشركاء" },
];

export default function PartnersPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">شركاؤنا</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نفخر بالعمل مع أفضل الشركات في مجال الضيافة والتقنية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gray-50">
              <benefit.icon className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#E6034B] to-[#7c3aed] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">كن شريكاً</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            هل ترغب في الانضمام لبرنامج الشركاء؟ تواصل معنا لمعرفة المزيد عن الفرص المتاحة
          </p>
          <button className="bg-white text-[#E6034B] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
}
