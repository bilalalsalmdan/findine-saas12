"use client";

import { Download, QrCode, Copy, RefreshCw } from "lucide-react";

const qrCodes = [
  { id: 1, name: "القائمة الرئيسية", scans: 1250, active: true },
  { id: 2, name: "قائمة العشاء", scans: 890, active: true },
  { id: 3, name: "قائمة الغداء", scans: 0, active: false },
];

export default function QRCodesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">رموز QR</h2>
          <p className="text-gray-600">إدارة وتحميل رموز QR للقوائم</p>
        </div>
        <button className="bg-[#E6034B] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#c80340] transition-colors">
          إنشاء رمز جديد
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {qrCodes.map((qr) => (
          <div key={qr.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{qr.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${qr.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                {qr.active ? "نشط" : "غير نشط"}
              </span>
            </div>
            
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center mb-4">
              <QrCode className="w-32 h-32 text-gray-400" />
            </div>

            <p className="text-sm text-gray-500 mb-4">{qr.scans} مسح</p>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                تحميل
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Copy className="w-4 h-4" />
                نسخ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
