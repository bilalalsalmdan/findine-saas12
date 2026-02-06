"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">اتصل بنا</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا للاستفسارات أو الدعم
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E6034B] text-white py-4 rounded-xl font-semibold hover:bg-[#c80340] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6034B]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#E6034B]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">البريد الإلكتروني</h3>
                <p className="text-gray-600">support@finedine.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6034B]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#E6034B]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">الهاتف</h3>
                <p className="text-gray-600">+966 50 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6034B]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#E6034B]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">العنوان</h3>
                <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
