'use client'

import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'

export function InstagramHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-instagram-border z-50">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="instagram-gradient bg-clip-text text-transparent text-2xl font-bold">
            DeepTrust
          </div>
          <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            DEMO
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Heart className="w-6 h-6" />
          <MessageCircle className="w-6 h-6" />
          <Send className="w-6 h-6" />
        </div>
      </div>
    </header>
  )
}
