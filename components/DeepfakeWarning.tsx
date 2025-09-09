'use client'

import { useState } from 'react'
import { AlertTriangle, X, ChevronUp, Info } from 'lucide-react'

interface DeepfakeWarningProps {
  post: any
  onDismiss: () => void
  onLearnMore: () => void
}

export function DeepfakeWarning({ post, onDismiss, onLearnMore }: DeepfakeWarningProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-orange-400 text-white slide-in-bottom">
      {/* Main Warning Bar */}
      <div 
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">
            ⚠ Possible Deepfake — This content may not be authentic.
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <ChevronUp className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          <button 
            onClick={(e) => {
              e.stopPropagation()
              onDismiss()
            }}
            className="hover:bg-orange-600 rounded p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="px-3 pb-3 border-t border-orange-600">
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">AI Confidence:</span>
              <span className="text-xs">{post.aiDetected.confidence}%</span>
            </div>
            
            <div>
              <span className="text-xs font-medium block mb-1">Detection Reasons:</span>
              <ul className="text-xs space-y-1 opacity-90">
                {post.aiDetected.reasons.slice(0, 2).map((reason: string, index: number) => (
                  <li key={index} className="flex items-start space-x-1">
                    <span className="text-orange-200 mt-0.5">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-2 pt-2 border-t border-orange-600">
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  onLearnMore()
                }}
                className="flex items-center space-x-1 bg-white text-orange-600 px-3 py-1.5 rounded text-xs font-medium hover:bg-orange-50"
              >
                <Info className="w-3 h-3" />
                <span>See Why</span>
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  onLearnMore()
                }}
                className="text-xs underline opacity-80 hover:opacity-100"
              >
                Learn about deepfakes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
