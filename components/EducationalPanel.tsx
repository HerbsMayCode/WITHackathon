'use client'

import { X, AlertTriangle, Shield, Eye, BookOpen, CheckCircle } from 'lucide-react'

interface EducationalPanelProps {
  content: any
  onClose: () => void
}

export function EducationalPanel({ content, onClose }: EducationalPanelProps) {
  const { post, type, title } = content

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Detection Details */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="font-semibold text-gray-900">Detection Analysis</h3>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Confidence Level:</span>
                <span className="font-semibold text-red-600">{post.aiDetected.confidence}%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Harm Score:</span>
                <span className={`font-semibold ${post.harmScore > 70 ? 'text-red-600' : post.harmScore > 40 ? 'text-orange-500' : 'text-yellow-600'}`}>
                  {post.harmScore}/100
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Subject Type:</span>
                <span className="font-semibold">{post.aiDetected.subject}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Context:</span>
                <span className="font-semibold">{post.aiDetected.context}</span>
              </div>
            </div>
          </div>

          {/* Detection Reasons */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Eye className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-gray-900">What Our AI Detected</h3>
            </div>
            
            <ul className="space-y-2">
              {post.aiDetected.reasons.map((reason: string, index: number) => (
                <li key={index} className="flex items-start space-x-3 text-sm">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risk Factors */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Shield className="w-5 h-5 text-orange-500" />
              <h3 className="font-semibold text-gray-900">Potential Risks</h3>
            </div>
            
            <ul className="space-y-2">
              {post.aiDetected.riskFactors.map((risk: string, index: number) => (
                <li key={index} className="flex items-start space-x-3 text-sm">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{risk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Educational Content */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <BookOpen className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold text-gray-900">How to Verify Content</h3>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-green-800">Check the source:</span>
                    <span className="text-green-700 ml-1">Look for verified accounts and original sources</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-green-800">Cross-reference:</span>
                    <span className="text-green-700 ml-1">Check if multiple reliable sources report the same information</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-green-800">Look for inconsistencies:</span>
                    <span className="text-green-700 ml-1">Unnatural movements, lighting, or audio sync issues</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-green-800">When in doubt:</span>
                    <span className="text-green-700 ml-1">Don't share until you can verify the authenticity</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Common Scam Patterns */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Common Deepfake Scam Patterns</h3>
            
            <div className="space-y-3 text-sm">
              <div className="border border-orange-200 rounded-lg p-3 bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-1">Celebrity Endorsements</h4>
                <p className="text-orange-700">Fake videos of celebrities endorsing products or making statements they never made</p>
              </div>
              
              <div className="border border-red-200 rounded-lg p-3 bg-red-50">
                <h4 className="font-semibold text-red-800 mb-1">Political Misinformation</h4>
                <p className="text-red-700">Fabricated speeches or statements by political figures to spread false information</p>
              </div>
              
              <div className="border border-yellow-200 rounded-lg p-3 bg-yellow-50">
                <h4 className="font-semibold text-yellow-800 mb-1">Financial Scams</h4>
                <p className="text-yellow-700">Fake videos of business leaders making investment recommendations or announcements</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700"
            >
              Got it, thanks!
            </button>
            
            <div className="text-center">
              <a 
                href="#" 
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Report this content as harmful
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
