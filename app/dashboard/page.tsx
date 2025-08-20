
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showExpertModal, setShowExpertModal] = useState(false);
  const [showTreatmentModal, setShowTreatmentModal] = useState(false);

  // Mock data
  const recentDiagnoses = [
    {
      id: 1,
      date: '2024-01-15',
      crop: 'Tomato',
      disease: 'Early Blight',
      severity: 'Moderate',
      status: 'Treated',
      image: 'https://readdy.ai/api/search-image?query=Tomato%20plant%20with%20early%20blight%20disease%20symptoms%20on%20leaves%2C%20agricultural%20close-up%20photography%2C%20diseased%20plant%20leaves%20with%20dark%20spots%20and%20yellowing%2C%20farming%20documentation&width=100&height=80&seq=diag1&orientation=landscape'
    },
    {
      id: 2,
      date: '2024-01-12',
      crop: 'Potato',
      disease: 'Late Blight',
      severity: 'High',
      status: 'In Progress',
      image: 'https://readdy.ai/api/search-image?query=Potato%20plant%20with%20late%20blight%20disease%2C%20dark%20brown%20spots%20on%20leaves%2C%20plant%20pathology%2C%20agricultural%20disease%20documentation%2C%20close-up%20photography&width=100&height=80&seq=diag2&orientation=landscape'
    },
    {
      id: 3,
      date: '2024-01-10',
      crop: 'Corn',
      disease: 'Corn Rust',
      severity: 'Low',
      status: 'Monitored',
      image: 'https://readdy.ai/api/search-image?query=Corn%20plant%20with%20rust%20disease%2C%20orange%20pustules%20on%20leaves%2C%20maize%20crop%20disease%2C%20agricultural%20pathology%2C%20farming%20documentation%20photography&width=100&height=80&seq=diag3&orientation=landscape'
    }
  ];

  const stats = [
    { label: 'Total Diagnoses', value: '24', change: '+12%', icon: 'ri-plant-line', color: 'green' },
    { label: 'Issues Resolved', value: '18', change: '+8%', icon: 'ri-check-line', color: 'blue' },
    { label: 'Active Treatments', value: '6', change: '+2%', icon: 'ri-medicine-bottle-line', color: 'orange' },
    { label: 'Crop Health Score', value: '87%', change: '+5%', icon: 'ri-heart-pulse-line', color: 'purple' }
  ];

  const handleExpertConsultation = () => {
    setShowExpertModal(true);
  };

  const handleScheduleTreatment = () => {
    setShowTreatmentModal(true);
  };

  // const handleSubmitTreatmentPlan = async (e) => {
  //   e.preventDefault();

  //   // Simulate treatment plan submission
  //   setTimeout(() => {
  //     setShowTreatmentModal(false);
  //     // Show success notification
  //     alert('Treatment plan scheduled successfully! Reminders have been set up.');
  //   }, 1000);
  // };

  const handleSubmitTreatmentPlan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate treatment plan submission
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    alert("Treatment plan submitted successfully!");
  };


  const handleSubmitExpertRequest = async (e) => {
    e.preventDefault();

    // Simulate expert request submission
    setTimeout(() => {
      setShowExpertModal(false);
      // Show success notification
      alert('Expert consultation request submitted! We will contact you within 24 hours.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-[\'Pacifico\'] text-green-600">NomaApp</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-green-600 font-medium">
                Dashboard
              </Link>
              <Link href="/diagnosis" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                New Diagnosis
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Upgrade
              </Link>
              <div className="relative">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="ri-user-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Yusufia!</h1>
          <p className="text-gray-600">Here's what's happening with your crops today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                  <i className={`${stat.icon} text-${stat.color}-600 text-xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
                <span className={`text-sm font-medium text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-full`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/diagnosis" className="bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-camera-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">New Diagnosis</h3>
                  <p className="text-sm text-gray-600">Upload crop photo</p>
                </div>
              </div>
            </Link>

            <button
              onClick={handleScheduleTreatment}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-calendar-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Schedule Treatment</h3>
                  <p className="text-sm text-gray-600">Plan your next steps</p>
                </div>
              </div>
            </button>

            <button
              onClick={handleExpertConsultation}
              className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:bg-purple-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-community-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ask Expert</h3>
                  <p className="text-sm text-gray-600">Get professional help</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Diagnoses */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Diagnoses</h2>
              <Link href="/history" className="text-green-600 hover:text-green-700 text-sm font-medium cursor-pointer">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentDiagnoses.map((diagnosis) => (
                <div key={diagnosis.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <img
                      src={diagnosis.image}
                      alt={diagnosis.crop}
                      className="w-16 h-16 rounded-lg object-cover object-top"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-900">{diagnosis.crop} - {diagnosis.disease}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            diagnosis.status === 'Treated'
                              ? 'bg-green-100 text-green-800'
                              : diagnosis.status === 'In Progress'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {diagnosis.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{diagnosis.date}</span>
                        <span
                          className={`font-medium ${
                            diagnosis.severity === 'High'
                              ? 'text-red-600'
                              : diagnosis.severity === 'Moderate'
                              ? 'text-yellow-600'
                              : 'text-green-600'
                          }`}
                        >
                          {diagnosis.severity} Severity
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      <i className="ri-more-2-line text-lg w-5 h-5 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Today's Weather</h3>
                <i className="ri-sun-line text-2xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <div className="text-3xl font-bold mb-2">24°C</div>
              <div className="text-blue-100 text-sm mb-4">Sunny, Low humidity</div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-xs text-blue-100 mb-1">Conditions favorable for:</div>
                <div className="text-sm font-medium">Spraying treatments</div>
              </div>
            </div>

            {/* Subscription Status */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Plan Status</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Professional
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Diagnoses Used</span>
                  <span className="font-medium">24 / Unlimited</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Renewal Date</span>
                  <span className="font-medium">Feb 15, 2024</span>
                </div>
              </div>
              <Link
                href="/pricing"
                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center block hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Manage Plan
              </Link>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Today's Tip</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <i className="ri-lightbulb-line text-green-600 text-lg w-5 h-5 flex items-center justify-center mr-2 mt-0.5"></i>
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Prevention is key</h4>
                    <p className="text-sm text-green-700">
                      Regular monitoring and early detection can prevent 80% of crop diseases from spreading.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Treatment Modal */}
      {showTreatmentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Schedule Treatment Plan</h3>
                <button
                  onClick={() => setShowTreatmentModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>

              <form onSubmit={handleSubmitTreatmentPlan} className="space-y-4">
                <div>
                  <label htmlFor="treatmentCrop" className="block text-sm font-medium text-gray-700 mb-2">
                    Crop/Plant
                  </label>
                  <select
                    id="treatmentCrop"
                    name="treatmentCrop"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    required
                  >
                    <option value="">Select crop/plant</option>
                    <option value="tomato">Tomato</option>
                    <option value="potato">Potato</option>
                    <option value="corn">Corn</option>
                    <option value="wheat">Wheat</option>
                    <option value="rice">Rice</option>
                    <option value="soybean">Soybean</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="treatmentType" className="block text-sm font-medium text-gray-700 mb-2">
                    Treatment Type
                  </label>
                  <select
                    id="treatmentType"
                    name="treatmentType"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    required
                  >
                    <option value="">Select treatment type</option>
                    <option value="fungicide">Fungicide Application</option>
                    <option value="insecticide">Insecticide Application</option>
                    <option value="fertilizer">Fertilizer Application</option>
                    <option value="organic">Organic Treatment</option>
                    <option value="preventive">Preventive Spray</option>
                    <option value="irrigation">Irrigation Schedule</option>
                    <option value="pruning">Pruning & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                    Application Frequency
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    required
                  >
                    <option value="">Select frequency</option>
                    <option value="once">One-time application</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="seasonal">Seasonal</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                    Treatment Duration (if recurring)
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                  >
                    <option value="">Select duration</option>
                    <option value="1week">1 week</option>
                    <option value="2weeks">2 weeks</option>
                    <option value="1month">1 month</option>
                    <option value="2months">2 months</option>
                    <option value="3months">3 months</option>
                    <option value="season">Full season</option>
                    <option value="ongoing">Ongoing until stopped</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="reminderTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Reminder Time
                  </label>
                  <select
                    id="reminderTime"
                    name="reminderTime"
                    defaultValue="8am"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                  >
                    <option value="6am">6:00 AM</option>
                    <option value="7am">7:00 AM</option>
                    <option value="8am">8:00 AM</option>
                    <option value="9am">9:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="5pm">5:00 PM</option>
                    <option value="6pm">6:00 PM</option>
                    <option value="7pm">7:00 PM</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                    Product/Chemical Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Copper fungicide, Neem oil"
                  />
                </div>

                <div>
                  <label htmlFor="dosage" className="block text-sm font-medium text-gray-700 mb-2">
                    Dosage/Application Rate
                  </label>
                  <input
                    type="text"
                    id="dosage"
                    name="dosage"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 2ml per liter, 1 cup per plant"
                  />
                </div>

                <div>
                  <label htmlFor="areaSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Treatment Area Size
                  </label>
                  <input
                    type="text"
                    id="areaSize"
                    name="areaSize"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 10 plants, 0.5 acre, 100 sq ft"
                  />
                </div>

                <div>
                  <label htmlFor="treatmentNotes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="treatmentNotes"
                    name="treatmentNotes"
                    maxLength={500}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24 resize-none"
                    placeholder="Special instructions, weather considerations, safety precautions, etc."
                  />
                  <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <i className="ri-calendar-check-line text-blue-600 text-lg w-5 h-5 flex items-center justify-center mr-2 mt-0.5"></i>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Reminder Setup:</h4>
                      <p className="text-sm text-blue-700">
                        You'll receive notifications via the app and email (if enabled) at your chosen time. You can modify or cancel scheduled treatments anytime from your dashboard.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowTreatmentModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Schedule Treatment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showExpertModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Request Expert Consultation</h3>
                <button
                  onClick={() => setShowExpertModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>

              <form onSubmit={handleSubmitExpertRequest} className="space-y-4">
                <div>
                  <label htmlFor="expertName" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="expertName"
                    name="expertName"
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="expertEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="expertEmail"
                    name="expertEmail"
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="expertPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="expertPhone"
                    name="expertPhone"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Type
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-8"
                    required
                  >
                    <option value="">Select consultation type</option>
                    <option value="general">General Crop Health Assessment</option>
                    <option value="disease">Disease Diagnosis & Treatment</option>
                    <option value="pest">Pest Management Strategy</option>
                    <option value="nutrition">Soil & Nutrition Analysis</option>
                    <option value="planning">Crop Planning & Rotation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-8"
                    required
                  >
                    <option value="">Select urgency level</option>
                    <option value="low">Low - Within 3-5 days</option>
                    <option value="medium">Medium - Within 24-48 hours</option>
                    <option value="high">High - Within 12 hours</option>
                    <option value="critical">Critical - Immediate response needed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Size (Optional)
                  </label>
                  <select
                    id="farmSize"
                    name="farmSize"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-8"
                  >
                    <option value="">Select farm size</option>
                    <option value="small">Small (Under 1 acre)</option>
                    <option value="medium">Medium (1-10 acres)</option>
                    <option value="large">Large (10-100 acres)</option>
                    <option value="commercial">Commercial (Over 100 acres)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cropTypes" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Crop Types
                  </label>
                  <input
                    type="text"
                    id="cropTypes"
                    name="cropTypes"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., Tomatoes, Corn, Wheat"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe Your Situation
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    maxLength={500}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 h-24 resize-none"
                    placeholder="Please describe your current crop challenges, symptoms you've observed, or questions you have..."
                  />
                  <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <i className="ri-information-line text-purple-600 text-lg w-5 h-5 flex items-center justify-center mr-2 mt-0.5"></i>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-1">What to expect:</h4>
                      <p className="text-sm text-purple-700">
                        Our certified agricultural experts will review your consultation request and contact you within the specified timeframe. Professional consultation fees may apply based on your subscription plan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowExpertModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Request Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
