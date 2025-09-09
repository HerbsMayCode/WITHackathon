'use client'

import { useState, useEffect } from 'react'
import { InstagramHeader } from '@/components/InstagramHeader'
import { PostFeed } from '@/components/PostFeed'
import { DeepfakeModal } from '@/components/DeepfakeModal'
import { EducationalPanel } from '@/components/EducationalPanel'

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<any>(null)
  const [showEducation, setShowEducation] = useState(false)
  const [educationContent, setEducationContent] = useState<any>(null)

  const handlePostClick = (post: any) => {
    if (post.deepfakeLevel === 2) {
      setSelectedPost(post)
    }
  }

  const handleShowEducation = (content: any) => {
    setEducationContent(content)
    setShowEducation(true)
  }

  return (
    <div className="min-h-screen bg-instagram-light">
      <InstagramHeader />
      
      <main className="max-w-md mx-auto pt-16 pb-20">
        <PostFeed 
          onPostClick={handlePostClick}
          onShowEducation={handleShowEducation}
        />
      </main>

      {selectedPost && (
        <DeepfakeModal 
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onShowEducation={handleShowEducation}
        />
      )}

      {showEducation && (
        <EducationalPanel 
          content={educationContent}
          onClose={() => setShowEducation(false)}
        />
      )}
    </div>
  )
}
