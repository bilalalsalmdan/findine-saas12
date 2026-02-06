"use client";

import { Code, Terminal, Key, Webhook } from "lucide-react";

const endpoints = [
  { method: "GET", path: "/api/v1/menus", description: "جلب جميع القوائم" },
  { method: "POST", path: "/api/v1/orders", description: "إنشاء طلب جديد" },
  { method: "GET", path: "/api/v1/customers", description: "جلب قائمة العملاء" },
];

export default function APIPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API</h1>
          <p className="text-lg text-gray-600">دمج FineDine مع تطبيقاتك</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gray-50">
            <Terminal className="w-8 h-8 text-[#E6034B] mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">REST API</h3>
            <p className="text-gray-600">واجهة برمجية RESTful سهلة الاستخدام</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50">
            <Webhook className="w-8 h-8 text-[#E6034B] mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Webhooks</h3>
            <p className="text-gray-600">إشعارات فورية للأحداث المهمة</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
          <div className="flex items-center gap-2 mb-4">
            <Key className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">مثال على الطلب</span>
          </div>
          <code className="text-green-400 text-sm block">
            curl -X GET &quot;https://api.finedine.com/v1/menus&quot; \<br />
            &nbsp;&nbsp;-H &quot;Authorization: Bearer YOUR_API_KEY&quot;
          </code>
        </div>
      </div>
    </div>
  );
}
