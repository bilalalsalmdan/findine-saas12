"use client";

import { Briefcase, MapPin, Heart } from "lucide-react";

const positions = [
  { title: "مطور Frontend", department: "الهندسة", location: "الرياض", type: "دوام كامل" },
  { title: "مصمم UI/UX", department: "المنتج", location: "الرياض", type: "دوام كامل" },
  { title: "مدير حسابات", department: "المبيعات", location: "عن بعد", type: "دوام كامل" },
];

export default function CareersPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">التوظيف</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            انضم لفريق FineDine وساهم في بناء مستقبل المطاعم
          </p>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto">
          {positions.map((job, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-[#E6034B] text-white rounded-full font-medium hover:bg-[#c80340] transition-colors">
                  تقدم الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
