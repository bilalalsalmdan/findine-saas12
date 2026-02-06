"use client";

import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const stats = [
  { label: "الإيرادات اليوم", value: "12,450 ريال", change: "+12%", up: true, icon: DollarSign },
  { label: "الطلبات", value: "48", change: "+8%", up: true, icon: ShoppingCart },
  { label: "العملاء", value: "156", change: "+24%", up: true, icon: Users },
  { label: "متوسط الطلب", value: "259 ريال", change: "-3%", up: false, icon: TrendingUp },
];

const recentOrders = [
  { id: "#1234", customer: "أحمد محمد", items: 3, total: "285 ريال", status: "جديد", time: "5 دقائق" },
  { id: "#1233", customer: "سارة علي", items: 2, total: "150 ريال", status: "قيد التحضير", time: "15 دقيقة" },
  { id: "#1232", customer: "خالد السالم", items: 4, total: "420 ريال", status: "جاهز", time: "30 دقيقة" },
  { id: "#1231", customer: "نورة عبدالله", items: 1, total: "85 ريال", status: "تم التسليم", time: "45 دقيقة" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">نظرة عامة</h2>
        <p className="text-gray-600">معلومات سريعة عن أداء مطعمك</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6034B]/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-[#E6034B]" />
              </div>
              <span className={`flex items-center gap-1 text-sm font-medium ${stat.up ? "text-green-600" : "text-red-600"}`}>
                {stat.up ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">الطلبات الأخيرة</h3>
          <button className="text-[#E6034B] text-sm font-medium hover:underline">عرض الكل</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الطلب</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">العميل</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">العناصر</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">المجموع</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الحالة</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الوقت</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{order.items}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "جديد" ? "bg-blue-100 text-blue-700" :
                      order.status === "قيد التحضير" ? "bg-yellow-100 text-yellow-700" :
                      order.status === "جاهز" ? "bg-green-100 text-green-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
