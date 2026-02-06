export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-orange-400">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-white text-center mb-8">
          FineDine Menu
        </h1>
        <p className="text-xl text-white/90 text-center mb-12 max-w-2xl mx-auto">
          Modern restaurant management platform with digital menus, ordering, and analytics
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Digital Menus</h3>
              <p className="text-gray-600">Create beautiful digital menus with QR codes for your restaurant.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Order Management</h3>
              <p className="text-gray-600">Manage orders in real-time with kitchen display system.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Analytics</h3>
              <p className="text-gray-600">Track sales, popular items, and customer behavior.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 FineDine. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
