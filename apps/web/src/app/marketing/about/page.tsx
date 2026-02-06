"use client";

import { Building2, Users, Target, Award } from "lucide-react";

const stats = [
  { label: "مطعم نشط", value: "50K+", icon: Building2 },
  { label: "موظف", value: "200+", icon: Users },
  { label: "دولة", value: "25", icon: Target },
  { label: "جائزة", value: "15", icon: Award },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">من نحن</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن نبني مستقبل إدارة المطاعم في العالم العربي
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50">
              <stat.icon className="w-8 h-8 text-[#E6034B] mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">رؤيتنا</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نسعى لتمكين كل مطعم في العالم العربي من التحول الرقمي بسهولة وكفاءة.
              نؤمن بأن التكنولوجيا يجب أن تخدم الإنسان وتسهل عمله، لا أن تُعقده.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">مهمتنا</h2>
            <p className="text-gray-600 leading-relaxed">
              توفير منصة متكاملة وسهلة الاستخدام تساعد أصحاب المطاعم على إدارة أعمالهم
              بكفاءة أكبر، وزيادة إيراداتهم، وتحسين تجربة عملائهم.
            </p>
          </div>
          <div className="h-80 bg-gradient-to-br from-[#E6034B]/20 to-[#7c3aed]/20 rounded-2xl flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}
