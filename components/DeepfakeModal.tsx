'use client'

import { useState } from 'react'
import { X, AlertTriangle, Play, SkipForward, BookOpen } from 'lucide-react'

interface DeepfakeModalProps {
  post: any
  onClose: () => void
  onShowEducation: (content: any) => void
}

export function DeepfakeModal({ post, onClose, onShowEducation }: DeepfakeModalProps) {
  const [showVideo, setShowVideo] = useState(false)

  const handleShowVideo = () => {
    setShowVideo(true)
  }

  const handleLearnMore = () => {
    onShowEducation({
      post,
      type: 'harmful-detection',
      title: 'Harmful Deepfake Detected',
      content: post.aiDetected
    })
  }

  if (showVideo) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
              {post.content.thumbnail}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                  Video Playing (Demo)
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2 text-red-700 mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-semibold text-sm">Viewing flagged content</span>
              </div>
              <p className="text-xs text-red-600">
                This video was flagged as {post.aiDetected.confidence}% likely to be a deepfake. 
                Please be cautious about sharing this content.
              </p>
            </div>
            
            <button 
              onClick={handleLearnMore}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded font-semibold text-sm hover:bg-blue-700"
            >
              Learn Why This Was Flagged
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6 text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600 deepfake-warning-pulse" />
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚠️ {post.aiDetected.confidence}% likely deepfake
          </h2>
          
          <p className="text-gray-600 mb-6">
            This content may spread misinformation. Our AI detected multiple signs that this video may not be authentic.
          </p>
          
          <div className="space-y-3 mb-6">
            <button 
              onClick={handleShowVideo}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-red-700"
            >
              <Play className="w-5 h-5" />
              <span>Show Video</span>
            </button>
            
            <button 
              onClick={onClose}
              className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-50"
            >
              <SkipForward className="w-5 h-5" />
              <span>Skip Video</span>
            </button>
          </div>
          
          <button 
            onClick={handleLearnMore}
            className="w-full text-blue-600 text-sm underline hover:text-blue-800 flex items-center justify-center space-x-1"
          >
            <BookOpen className="w-4 h-4" />
            <span>See Why Detected + Educational Toolkit</span>
          </button>
        </div>
      </div>
    </div>
  )
}
