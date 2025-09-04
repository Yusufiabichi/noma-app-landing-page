// 'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "NomaApp – AI-Powered Crop Diagnosis",
  description: "NomaApp helps farmers detect crop diseases and pests instantly using AI-powered photo analysis and smart recommendations.",
};


export default function Home() {
  return (
    <>
      <Head>
        <title>NomaApp – AI-Powered Crop Diagnosis</title>
        <meta
          name="description"
          content="NomaApp helps farmers detect crop diseases and pests instantly using AI-powered photo analysis and smart recommendations."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* your existing code here */}
        <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-3xl font-[\'Pacifico\'] text-green-600">
                <Image 
                  src="/nomaapplogo.png"
                  alt="NomaApp logo"
                  width={10} // or your desired width
                  height={10} // or your desired height
                  className="w-20 h-30 object-cover object-top"
                />
              </span>
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
              <Link href="/auth" className="bg-noma-green text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

     {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      // style={{backgroundImage: `url(\'https://readdy.ai/api/search-image?query=Beautiful%20agricultural%20landscape%20with%20green%20crops%20growing%20in%20fertile%20fields%20under%20bright%20blue%20sky%2C%20modern%20farming%20technology%20integrated%20seamlessly%20with%20nature%2C%20vibrant%20green%20colors%2C%20professional%20photography%20style%2C%20high%20resolution%2C%20peaceful%20rural%20setting%20with%20mountains%20in%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape\')`}}>
        style={{
          backgroundImage: "url('/6.jpg')" // put a static hero image in /public
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-noma-offwhite">
          <div className="max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Helping African Smallholder Farmers Protect Their Crops with AI
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-2xl mb-8 text-noma-lightgreen leading-relaxed">
              NomaApp is launching in <span className="font-semibold text-white">3 months</span>. 
              Diagnose crop diseases and pests instantly with your phone, 
              get personalized, eco-friendly solutions, and save your harvest.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/waitlist"
                className="bg-noma-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap shadow-lg"
              >
                Join the Waitlist
              </Link>
              <Link
                href="#demo"
                className="bg-noma-gray/70 backdrop-blur-sm text-noma-offwhite px-8 py-4 rounded-full text-lg font-semibold hover:bg-noma-gray transition-colors cursor-pointer whitespace-nowrap"
              >
                Watch Demo
              </Link>
            </div>

            {/* Countdown / Launch Reminder */}
            <div className="mt-6 text-noma-offwhite/80 text-sm md:text-base">
              🚀 MVP Launching <span className="font-semibold text-white">November 2025</span> — 
              Be among the first to use it!
            </div>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative">
              <img
                src="/2.jpg"
                alt="African farmers in the field"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-noma-green/30 to-noma-yellow/20"></div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-noma-green">NomaApp</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                NomaApp is an AI-powered mobile application designed to help 
                <span className="font-semibold text-noma-green"> African smallholder farmers </span> 
                protect their crops from pests and diseases. 
                By combining computer vision with local agricultural expertise, 
                we provide instant, eco-friendly, and affordable solutions 
                 right from a farmer’s phone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is simple: <span className="font-semibold text-noma-yellow">
                empower farmers, increase yields, and improve food security</span> across Africa.  
                We’re launching our first MVP in <span className="font-semibold text-noma-green">3 months</span>, 
                and we invite farmers, agronomists, and partners to join us on this journey.
              </p>
              <Link
                href="#waitlist"
                className="inline-block bg-noma-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition-colors shadow-lg"
              >
                Join the Waitlist
              </Link>
              <Link
                href="#waitlist"
                className="inline-block bg-noma-yellow text-black px-8 ml-5 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg"
              >
                Partnership & Investors
              </Link>
            </div>
          </div>
        </div>
      </section>



     {/* Features Section */}
      <section id="features" className="py-20 bg-noma-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-noma-green mb-4">
              Smart Farming Made Simple
            </h2>
            <p className="text-xl text-noma-gray max-w-3xl mx-auto">
              NomaApp combines the power of AI with practical solutions 
              to help African smallholder farmers protect their crops, 
              reduce losses, and grow healthier harvests.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-noma-green/10 to-noma-lightgreen/20 p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-noma-green rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-camera-lens-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-noma-green mb-4">Instant Photo Diagnosis</h3>
              <p className="text-noma-gray leading-relaxed">
                Take a photo of your crop and get quick AI-powered diagnosis of diseases and pests — 
                saving you time and preventing crop losses early.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-noma-yellow/10 to-noma-yellow/20 p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-noma-yellow rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-brain-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-noma-green mb-4">Personalized Recommendations</h3>
              <p className="text-noma-gray leading-relaxed">
                Get clear, farmer-friendly advice tailored to your crop and location, 
                with eco-friendly treatment options that protect your soil and harvest.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-noma-gray/10 to-noma-offwhite p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-noma-gray rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-noma-green mb-4">Track Crop Health</h3>
              <p className="text-noma-gray leading-relaxed">
                Monitor your farm’s progress over time with simple reports 
                to see what works and make better farming decisions.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-noma-green/10 to-noma-lightgreen/20 p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-noma-green rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-earth-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-noma-green mb-4">Weather Insights</h3>
              <p className="text-noma-gray leading-relaxed">
                Stay ahead of rain, drought, and disease outbreaks with 
                timely alerts based on your local weather conditions.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-noma-yellow/10 to-noma-yellow/20 p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-noma-yellow rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-community-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-noma-green mb-4">Farmer Community</h3>
              <p className="text-noma-gray leading-relaxed">
                Connect with experts and fellow farmers, share experiences, 
                and learn best practices that improve your harvest.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-noma-gray/10 to-noma-offwhite p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-noma-gray rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-noma-green mb-4">Sustainable Solutions</h3>
              <p className="text-noma-gray leading-relaxed">
                Access organic and eco-friendly options that are safe for your crops, 
                your soil, and your family’s future.
              </p>
            </div>
          </div>

          {/* CTA under Features */}
          <div className="text-center mt-16">
            <Link
              href="#waitlist"
              className="bg-noma-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition-colors shadow-lg"
            >
              Join the waitlist now!
            </Link>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-noma-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How NomaApp Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Protect your crops in <span className="text-noma-green font-semibold">3 simple steps</span> 
              using AI technology designed for African smallholder farmers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Farmer%20holding%20smartphone%20taking%20high%20quality%20photo%20of%20crop%20plants%20in%20agricultural%20field%2C%20close-up%20shot%20of%20mobile%20phone%20camera%20capturing%20diseased%20plant%20leaves%2C%20modern%20technology%20meets%20traditional%20farming%2C%20bright%20natural%20lighting%2C%20professional%20photography&width=400&height=300&seq=step1&orientation=landscape" 
                  alt="Take Photo" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg" 
                />
                <div className="absolute -top-4 -right-4 bg-noma-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Take a Photo</h3>
              <p className="text-gray-700 leading-relaxed">
                Use any smartphone camera to capture your crop. 
                No expensive equipment needed — NomaApp works even in low-connectivity areas.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Advanced%20artificial%20intelligence%20analysis%20visualization%2C%20digital%20brain%20processing%20agricultural%20data%2C%20futuristic%20AI%20interface%20analyzing%20plant%20diseases%20with%20glowing%20neural%20networks%2C%20high-tech%20computer%20vision%20technology%2C%20blue%20and%20green%20color%20scheme%2C%20scientific%20accuracy&width=400&height=300&seq=step2&orientation=landscape" 
                  alt="AI Analysis" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg" 
                />
                <div className="absolute -top-4 -right-4 bg-noma-yellow text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-700 leading-relaxed">
                Our AI scans the photo in seconds to detect diseases, pests, and nutrient issues 
                with <span className="font-semibold text-noma-green">95% accuracy</span>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20agricultural%20treatment%20recommendations%20displayed%20on%20tablet%20screen%2C%20detailed%20crop%20care%20instructions%20with%20visual%20guides%2C%20farmer%20implementing%20AI-suggested%20solutions%20in%20greenhouse%20environment%2C%20successful%20crop%20recovery%2C%20modern%20farming%20tools%20and%20techniques&width=400&height=300&seq=step3&orientation=landscape" 
                  alt="Get Recommendations" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg" 
                />
                <div className="absolute -top-4 -right-4 bg-noma-lightgreen text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Recommendations</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive instant eco-friendly treatment plans and 
                step-by-step guidance to save your harvest — tailored to your crop & location.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a 
              href="./waitlist/waitlist.tsx" 
              className="bg-noma-green text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-800 transition"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>



      {/* Patner With us */}

      <section id="partners" className="py-20 bg-noma-green text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg mb-8">
            We are building the future of AI-powered agriculture in Africa. 
            Join us as an investor, research collaborator, or NGO partner to scale our impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#waitlist" className="bg-noma-yellow text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition">Farmer Waitlist</a>
            <a href="mailto:partnerships@nomaapp.com" className="bg-white text-noma-green px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">Partnerships & Investors</a>
          </div>
        </div>
      </section>



      {/* Pricing Section */}
      {/* <section id="pricing" className="py-20 bg-white">
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
      </section> */}


      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-noma-lightgreen/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join the Farmer Waitlist
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Be among the first <span className="font-semibold text-noma-green">10,000 farmers</span> 
            to access NomaApp when we launch in <span className="text-noma-yellow">3 months</span>.  
            Sign up free today!
          </p>

          {/* Form */}
          <form className="bg-white shadow-xl rounded-2xl p-8 grid gap-6 text-left">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="+234 801 234 5678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-gray-800 font-semibold mb-2">Location</label>
              <input
                id="location"
                type="text"
                placeholder="Village / Town / City"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
                required
              />
            </div>

            {/* Crop Type */}
            <div>
              <label htmlFor="crop" className="block text-gray-800 font-semibold mb-2">Main Crop Grown</label>
              <select
                id="crop"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
                required
              >
                <option value="">Select crop</option>
                <option value="maize">Maize</option>
                <option value="rice">Rice</option>
                <option value="cassava">Cassava</option>
                <option value="soybean">Soybean</option>
                <option value="vegetables">Vegetables</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              className="w-full bg-noma-green text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-green-800 transition"
            >
              Join the Waitlist Now
            </button>

            {/* Trust text */}
            <p className="text-sm text-gray-500 text-center mt-4">
              100% Free – Your details are safe with us.  
              You’ll get early access + updates on launch.
            </p>
          </form>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Farming?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                NomaApp is on a mission to empower millions of African farmers with AI-powered crop protection, be among the first to join the movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#waitlist" className="bg-noma-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                  Join Us
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
                  <span className="text-gray-300"><a href="mailto:nomaappai@gmail.com" target='_blank'>nomaappai@gmail.com</a></span>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line text-green-400 text-xl w-6 h-6 flex items-center justify-center mr-4"></i>
                  <span className="text-gray-300"><a href="https://wa.me/2347068538000" target='_blank'>+234 706 853 8000</a></span>
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
              <div className="m-3">
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-2 rounded-l-md w-full text-gray-900"
                  />
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-green-500 rounded-r-md hover:bg-green-600 transition-colors"
                  >
                    Join
                  </button>
                </form>
              </div>

              

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
              <div className="mt-8 text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} NomaApp. All rights reserved.
              </div>
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
    </>
  );
}


// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
//       {/* Header */}
      
//     </div>
//   );
// }
