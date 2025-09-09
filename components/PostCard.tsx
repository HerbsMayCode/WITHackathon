'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, AlertTriangle, Info, Shield } from 'lucide-react'
import { DeepfakeWarning } from './DeepfakeWarning'

interface PostCardProps {
  post: any
  onClick: (post: any) => void
  onShowEducation: (content: any) => void
}

export function PostCard({ post, onClick, onShowEducation }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [showWarning, setShowWarning] = useState(post.deepfakeLevel === 1)

  const handleVideoClick = () => {
    if (post.deepfakeLevel === 2) {
      onClick(post)
    }
  }

  const handleEducationClick = () => {
    onShowEducation({
      post,
      type: 'why-flagged',
      title: 'Why this content was flagged',
      content: post.aiDetected
    })
  }

  return (
    <div className="bg-white border-b border-instagram-border">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-lg">
            {post.avatar}
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-sm">{post.username}</span>
            {post.isVerified && <span className="text-blue-500 text-xs">✓</span>}
            {post.isHighVolumeAI && (
              <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                <Shield className="w-3 h-3" />
                <span>High AI Content</span>
              </div>
            )}
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-600" />
      </div>

      {/* Post Content */}
      <div className="relative">
        <div 
          className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl cursor-pointer relative ${
            post.deepfakeLevel === 2 ? 'filter blur-sm' : ''
          }`}
          onClick={handleVideoClick}
        >
          {post.content.thumbnail}
          
          {/* Level 2 - Harmful Deepfake Overlay */}
          {post.deepfakeLevel === 2 && (
            <div className="absolute inset-0 bg-red-600/90 flex flex-col items-center justify-center text-white p-4">
              <AlertTriangle className="w-16 h-16 mb-4 deepfake-warning-pulse" />
              <h3 className="text-xl font-bold mb-2 text-center">⚠️ {post.aiDetected.confidence}% likely deepfake</h3>
              <p className="text-sm text-center mb-4">This content may spread misinformation.</p>
              <div className="flex space-x-3">
                <button 
                  className="bg-white text-red-600 px-4 py-2 rounded font-semibold text-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleVideoClick()
                  }}
                >
                  Show Video
                </button>
                <button className="border border-white px-4 py-2 rounded font-semibold text-sm">
                  Skip Video
                </button>
              </div>
              <button 
                className="mt-3 text-xs underline opacity-80"
                onClick={(e) => {
                  e.stopPropagation()
                  handleEducationClick()
                }}
              >
                See Why Detected + Educational Toolkit
              </button>
            </div>
          )}
        </div>

        {/* Level 1 - Non-harmful Deepfake Warning */}
        {post.deepfakeLevel === 1 && showWarning && (
          <DeepfakeWarning 
            post={post}
            onDismiss={() => setShowWarning(false)}
            onLearnMore={handleEducationClick}
          />
        )}
      </div>

      {/* Post Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLiked(!liked)}
              className={`${liked ? 'text-red-500' : 'text-gray-700'} hover:text-gray-900`}
            >
              <Heart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
            </button>
            <MessageCircle className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
            <Send className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>

        {/* Likes */}
        <div className="font-semibold text-sm mb-1">
          {(post.likes + (liked ? 1 : 0)).toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold mr-2">{post.username}</span>
          <span>{post.content.description}</span>
        </div>

        {/* Comments */}
        {post.comments > 0 && (
          <div className="text-sm text-gray-500 mt-1 cursor-pointer">
            View all {post.comments} comments
          </div>
        )}

        {/* Time */}
        <div className="text-xs text-gray-500 mt-1">
          {post.timeAgo}
        </div>

        {/* Reduced Visibility Notice for Level 2 */}
        {post.deepfakeLevel === 2 && (
          <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">
            <div className="flex items-center space-x-1">
              <Info className="w-3 h-3" />
              <span>Reduced visibility due to potential misinformation</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
