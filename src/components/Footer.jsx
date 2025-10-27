export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🐾</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Anaarzia
              </span>
            </div>
            <p className="text-gray-600">Premium pet food delivery for your beloved companions</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#about" className="hover:text-orange-600 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-600 transition duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-600 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#feedback" className="hover:text-orange-600 transition duration-300">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-orange-600 transition duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-600 transition duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Connect</h4>
            <p className="text-gray-600 mb-2">hello@anaarzia.com</p>
            <p className="text-gray-600">+91 1800-PET-FOOD</p>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Anaarzia Pet Food Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
