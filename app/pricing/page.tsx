'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small gardens',
      price: { monthly: 0, annual: 0 },
      features: [
        '5 diagnoses per month',
        'Basic recommendations',
        'Community support',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For serious farmers',
      price: { monthly: 29, annual: 290 },
      features: [
        'Unlimited diagnoses',
        'Advanced AI analysis',
        'Weather integration',
        'Progress tracking',
        'Priority support',
        'Treatment reminders',
        'Export reports'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large operations',
      price: { monthly: 99, annual: 990 },
      features: [
        'Everything in Professional',
        'Expert consultations',
        'Custom integrations',
        'Team management',
        '24/7 dedicated support',
        'Advanced analytics',
        'API access'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    if (planId !== 'starter') {
      setShowPayment(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-['Pacifico'] text-green-600">NomaApp</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                Dashboard
              </Link>
              <Link href="/pricing" className="text-green-600 font-medium">
                Pricing
              </Link>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {!showPayment ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Select the perfect plan for your farming needs. Upgrade or downgrade at any time.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center bg-gray-200 rounded-full p-1 w-64 mx-auto">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual (Save 17%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl shadow-sm p-8 relative ${
                  plan.popular ? 'border-2 border-green-500' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                    {plan.price.monthly > 0 && (
                      <span className="text-xl text-gray-600 font-normal">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.price.monthly > 0 && (
                    <p className="text-sm text-green-600 font-medium">
                      Save ${(plan.price.monthly * 12) - plan.price.annual} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center mr-3"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes! Professional plan comes with a 14-day free trial. No credit card required to start.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Payment Form */
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Subscription</h2>
              <p className="text-gray-600">
                {plans.find(p => p.id === selectedPlan)?.name} Plan - 
                ${isAnnual 
                  ? plans.find(p => p.id === selectedPlan)?.price.annual
                  : plans.find(p => p.id === selectedPlan)?.price.monthly
                }
                /{isAnnual ? 'year' : 'month'}
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="123"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    ${isAnnual 
                      ? plans.find(p => p.id === selectedPlan)?.price.annual
                      : plans.find(p => p.id === selectedPlan)?.price.monthly
                    }
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold border-t pt-4">
                  <span>Total</span>
                  <span>
                    ${isAnnual 
                      ? plans.find(p => p.id === selectedPlan)?.price.annual
                      : plans.find(p => p.id === selectedPlan)?.price.monthly
                    }
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowPayment(false)}
                  className="flex-1 bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              By subscribing, you agree to our Terms of Service and Privacy Policy. 
              Your subscription will auto-renew until cancelled.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}