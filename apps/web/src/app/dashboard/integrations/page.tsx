"use client";

import { Plug, Check, ExternalLink } from "lucide-react";

const integrations = [
  { name: "Google Analytics", description: "تحليلات متقدمة لزوار موقعك", connected: true },
  { name: "WhatsApp Business", description: "تواصل مباشر مع العملاء", connected: false },
  { name: "Stripe", description: "مدفوعات آمنة عبر الإنترنت", connected: true },
  { name: "Mailchimp", description: "حملات بريد إلكتروني", connected: false },
  { name: "Slack", description: "إشعارات فورية للفريق", connected: false },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">التكاملات</h2>
        <p className="text-gray-600">ربط FineDine مع خدماتك المفضلة</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Plug className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                  <p className="text-sm text-gray-500">{integration.description}</p>
                </div>
              </div>
              {integration.connected ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  <Check className="w-3 h-3" /> متصل
                </span>
              ) : (
                <button className="px-4 py-2 bg-[#E6034B] text-white rounded-lg text-sm font-medium hover:bg-[#c80340] transition-colors">
                  ربط
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
