'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-3xl font-[\'Pacifico\'] text-green-600">NomaApp</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">
                Sign In
              </Link>
              <Link href="/auth" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: `url(\'https://readdy.ai/api/search-image?query=Beautiful%20agricultural%20landscape%20with%20green%20crops%20growing%20in%20fertile%20fields%20under%20bright%20blue%20sky%2C%20modern%20farming%20technology%20integrated%20seamlessly%20with%20nature%2C%20vibrant%20green%20colors%2C%20professional%20photography%20style%2C%20high%20resolution%2C%20peaceful%20rural%20setting%20with%20mountains%20in%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape\')`}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI-Powered Crop &amp; Pest Diagnosis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Transform your farming with intelligent disease detection and personalized treatment recommendations. Protect your crops with the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/diagnosis" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                Start Free Diagnosis
              </Link>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors cursor-pointer whitespace-nowrap">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets practical farming solutions to give you the tools you need for healthier crops
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-camera-lens-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Photo Analysis</h3>
              <p className="text-gray-700 leading-relaxed">
                Simply snap a photo of your crop and get instant AI-powered diagnosis of diseases, pests, and nutritional deficiencies with 95% accuracy rate.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-brain-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Recommendations</h3>
              <p className="text-gray-700 leading-relaxed">
                Get personalized treatment plans and actionable recommendations based on your specific crop type, location, and growing conditions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Progress Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Monitor your crop health over time with detailed analytics and track the effectiveness of treatments with visual progress reports.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-earth-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Weather Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Get weather-based insights and alerts to prevent disease outbreaks and optimize treatment timing based on local conditions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-community-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Network</h3>
              <p className="text-gray-700 leading-relaxed">
                Connect with agricultural experts and fellow farmers for advice, share experiences, and get professional consultations when needed.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Organic Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                Access eco-friendly and organic treatment options with detailed application guides to maintain sustainable farming practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get crop diagnosis in three simple steps using advanced AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative mb-8">
                <img src="https://readdy.ai/api/search-image?query=Farmer%20holding%20smartphone%20taking%20high%20quality%20photo%20of%20crop%20plants%20in%20agricultural%20field%2C%20close-up%20shot%20of%20mobile%20phone%20camera%20capturing%20diseased%20plant%20leaves%2C%20modern%20technology%20meets%20traditional%20farming%2C%20bright%20natural%20lighting%2C%20professional%20photography&width=400&height=300&seq=step1&orientation=landscape" 
                     alt="Take Photo" className="w-full h-64 object-cover object-top rounded-2xl" />
                <div className="absolute -top-4 -right-4 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Take a Photo</h3>
              <p className="text-gray-700 leading-relaxed">
                Simply use your smartphone to capture a clear image of the affected crop or plant area. Our AI works with any mobile device camera.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-8">
                <img src="https://readdy.ai/api/search-image?query=Advanced%20artificial%20intelligence%20analysis%20visualization%2C%20digital%20brain%20processing%20agricultural%20data%2C%20futuristic%20AI%20interface%20analyzing%20plant%20diseases%20with%20glowing%20neural%20networks%2C%20high-tech%20computer%20vision%20technology%2C%20blue%20and%20green%20color%20scheme%2C%20scientific%20accuracy&width=400&height=300&seq=step2&orientation=landscape" 
                     alt="AI Analysis" className="w-full h-64 object-cover object-top rounded-2xl" />
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-700 leading-relaxed">
                Our advanced machine learning algorithms analyze your image in seconds, identifying diseases, pests, and nutritional issues with high accuracy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-8">
                <img src="https://readdy.ai/api/search-image?query=Professional%20agricultural%20treatment%20recommendations%20displayed%20on%20tablet%20screen%2C%20detailed%20crop%20care%20instructions%20with%20visual%20guides%2C%20farmer%20implementing%20AI-suggested%20solutions%20in%20greenhouse%20environment%2C%20successful%20crop%20recovery%2C%20modern%20farming%20tools%20and%20techniques&width=400&height=300&seq=step3&orientation=landscape" 
                     alt="Get Recommendations" className="w-full h-64 object-cover object-top rounded-2xl" />
                <div className="absolute -top-4 -right-4 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Recommendations</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive detailed treatment plans, product recommendations, and step-by-step guides tailored to your specific crop and growing conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your farming needs. Start free and upgrade as you grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Free</div>
                <p className="text-gray-600">Perfect for small gardens</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-gray-700">5 diagnoses per month</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-gray-700">Basic recommendations</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-gray-700">Community support</span>
                </li>
              </ul>
              <Link href="/auth" className="w-full bg-gray-200 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors cursor-pointer whitespace-nowrap text-center block">
                Get Started
              </Link>
            </div>
            
            <div className="bg-green-600 p-8 rounded-2xl text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-4xl font-bold mb-2">&#8358;2,000<span className="text-xl">/month</span></div>
                <p className="text-green-100">For serious farmers</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-white text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-green-100">Unlimited diagnoses</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-white text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-green-100">Advanced AI analysis</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-white text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-green-100">Weather integration</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-white text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-green-100">Progress tracking</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-white text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-green-100">Priority support</span>
                </li>
              </ul>
              <Link href="/pricing" className="w-full bg-white text-green-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center block">
                Start Free Trial
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">&#8358;5,000<span className="text-xl">/month</span></div>
                <p className="text-gray-600">For large operations</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-gray-700">Expert consultations</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-gray-700">Team management</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                  <span className="text-gray-700">24/7 dedicated support</span>
                </li>
              </ul>
              <Link href="/pricing" className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap text-center block">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Farming?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of farmers worldwide who are already using NomaApp to protect their crops and increase their yields with AI-powered diagnostics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                  Start Your Free Trial
                </Link>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-colors cursor-pointer whitespace-nowrap">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <i className="ri-mail-line text-green-400 text-xl w-6 h-6 flex items-center justify-center mr-4"></i>
                  <span className="text-gray-300">support@nomaapp.ai</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line text-green-400 text-xl w-6 h-6 flex items-center justify-center mr-4"></i>
                  <span className="text-gray-300">+234 706 853 8000</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-pin-line text-green-400 text-xl w-6 h-6 flex items-center justify-center mr-4"></i>
                  <span className="text-gray-300">Kano Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <span className="text-3xl font-[\'Pacifico\'] text-green-400 mb-4 block">NomaApp</span>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering farmers worldwide with AI-powered crop diagnosis and treatment recommendations for healthier, more productive farming.
              </p>
              <div className="flex space-x-4">
                <i className="ri-twitter-fill text-gray-400 hover:text-green-400 text-xl cursor-pointer w-6 h-6 flex items-center justify-center"></i>
                <i className="ri-facebook-fill text-gray-400 hover:text-green-400 text-xl cursor-pointer w-6 h-6 flex items-center justify-center"></i>
                <i className="ri-instagram-line text-gray-400 hover:text-green-400 text-xl cursor-pointer w-6 h-6 flex items-center justify-center"></i>
                <i className="ri-linkedin-fill text-gray-400 hover:text-green-400 text-xl cursor-pointer w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                2024 NomaApp. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
