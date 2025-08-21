
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';



export default function DiagnosisPage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [cropType, setCropType] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showExpertModal, setShowExpertModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) return;

    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      setResult({
        disease: 'Early Blight',
        confidence: 94,
        severity: 'Moderate',
        treatment: [
          'Remove affected leaves immediately',
          'Apply copper-based fungicide',
          'Improve air circulation around plants',
          'Avoid overhead watering'
        ],
        prevention: [
          'Rotate crops yearly',
          'Maintain proper spacing',
          'Use disease-resistant varieties'
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const cropTypes = [
    'Tomato', 'Potato', 'Corn', 'Wheat', 'Rice', 'Soybean', 
    'Cotton', 'Apple', 'Grape', 'Citrus', 'Other'
  ];

  const handleSaveToDashboard = async () => {
    if (!result) return;

    setIsSaving(true);

    // Simulate saving to dashboard
    setTimeout(() => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    }, 1000);
  };

  const handleGetExpertHelp = () => {
    setShowExpertModal(true);
  };

  const handleSubmitExpertRequest = async (e: React.FormEvent) => {
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
              <Link href="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Dashboard
              </Link>
              <Link href="/diagnosis" className="text-green-600 font-medium">
                New Diagnosis
              </Link>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">New Crop Diagnosis</h1>
          <p className="text-gray-600">Upload a photo of your crop for AI-powered analysis and treatment recommendations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Crop Photo</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crop Photo *
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
                  {previewUrl ? (
                    <div className="relative">
                      <img src={previewUrl} alt="Preview" className="mx-auto max-h-64 rounded-lg object-cover object-top" />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewUrl(null);
                          setSelectedImage(null);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 cursor-pointer"
                      >
                        <i className="ri-close-line text-sm w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <i className="ri-camera-line text-4xl text-gray-400 mb-2 w-16 h-16 flex items-center justify-center mx-auto"></i>
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required
                  />
                </div>
              </div>

              {/* Crop Type */}
              <div>
                <label htmlFor="cropType" className="block text-sm font-medium text-gray-700 mb-2">
                  Crop Type *
                </label>
                <select
                  id="cropType"
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 pr-8"
                  required
                >
                  <option value="">Select crop type</option>
                  {cropTypes.map((crop) => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
              </div>

              {/* Symptoms */}
              <div>
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                  Observed Symptoms (Optional)
                </label>
                <textarea
                  id="symptoms"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  maxLength={500}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 h-24 resize-none"
                  placeholder="Describe any symptoms you've noticed (yellowing leaves, spots, wilting, etc.)"
                />
                <p className="text-xs text-gray-500 mt-1">{symptoms.length}/500 characters</p>
              </div>

              <button
                type="submit"
                disabled={!selectedImage || !cropType || isAnalyzing}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
              >
                {isAnalyzing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </div>
                ) : (
                  'Analyze Crop'
                )}
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Analysis Results</h2>

            {isAnalyzing ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Our AI is analyzing your crop image...</p>
                <p className="text-sm text-gray-500 mt-2">This usually takes 10-30 seconds</p>
              </div>
            ) : result ? (
              <div className="space-y-6">
                {/* Diagnosis */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <i className="ri-alert-line text-red-600 text-xl w-6 h-6 flex items-center justify-center mr-2"></i>
                    <h3 className="font-semibold text-red-800">Detected Issue</h3>
                  </div>
                  <p className="text-red-700 font-medium text-lg">{result.disease}</p>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="text-red-600">Confidence: {result.confidence}%</span>
                    <span className="mx-2 text-red-400">•</span>
                    <span className="text-red-600">Severity: {result.severity}</span>
                  </div>
                </div>

                {/* Treatment */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <i className="ri-medicine-bottle-line text-green-600 text-lg w-5 h-5 flex items-center justify-center mr-2"></i>
                    Recommended Treatment
                  </h3>
                  <ul className="space-y-2">
                    {result.treatment.map((step: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prevention */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <i className="ri-shield-check-line text-blue-600 text-lg w-5 h-5 flex items-center justify-center mr-2"></i>
                    Future Prevention
                  </h3>
                  <ul className="space-y-2">
                    {result.prevention.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-check-line text-blue-600 text-sm w-4 h-4 flex items-center justify-center mr-2 mt-1"></i>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={handleSaveToDashboard}
                    disabled={isSaving}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSaving ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </div>
                    ) : (
                      'Save to Dashboard'
                    )}
                  </button>
                  <button 
                    onClick={handleGetExpertHelp}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Get Expert Help
                  </button>
                </div>

                {/* Success Message */}
                {showSuccessMessage && (
                  <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <i className="ri-check-line text-green-600 text-lg w-5 h-5 flex items-center justify-center mr-2"></i>
                      <span className="text-green-700 font-medium">Diagnosis saved successfully! Redirecting to dashboard...</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <i className="ri-plant-line text-4xl text-gray-300 mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
                <p>Upload a crop photo to get started with AI diagnosis</p>
              </div>
            )}
          </div>
        </div>

        {/* Expert Help Modal */}
        {showExpertModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Get Expert Help</h3>
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
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
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      maxLength={500}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24 resize-none"
                      placeholder="Provide any additional details about your crop condition, farm size, or specific concerns..."
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <i className="ri-information-line text-blue-600 text-lg w-5 h-5 flex items-center justify-center mr-2 mt-0.5"></i>
                      <div>
                        <h4 className="font-medium text-blue-800 mb-1">What to expect:</h4>
                        <p className="text-sm text-blue-700">
                          Our certified agricultural experts will review your case and contact you via your preferred method. Consultation fees may apply based on your subscription plan.
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
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Request Expert Help
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
