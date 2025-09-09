'use client'

import { useState } from 'react'
import { PostCard } from './PostCard'

const demoData = [
  {
    id: 1,
    username: 'celeb_fan_account',
    avatar: '👤',
    isVerified: false,
    content: {
      type: 'video',
      thumbnail: '🎬',
      description: 'Hugh Jackman flirting with fans at the premiere! 😍'
    },
    deepfakeLevel: 1,
    harmScore: 25,
    aiDetected: {
      confidence: 78,
      reasons: [
        'Facial inconsistencies detected around mouth area',
        'Unnatural eye movements',
        'Audio-visual synchronization anomalies'
      ],
      subject: 'Celebrity (Hugh Jackman)',
      context: 'Entertainment/Fan content',
      riskFactors: ['Minor reputational risk', 'Potential misleading content']
    },
    likes: 1247,
    comments: 89,
    shares: 12,
    timeAgo: '2h'
  },
  {
    id: 2,
    username: 'political_updates',
    avatar: '🗳️',
    isVerified: false,
    content: {
      type: 'video',
      thumbnail: '🎥',
      description: 'BREAKING: Senator announces new emergency policies'
    },
    deepfakeLevel: 2,
    harmScore: 85,
    aiDetected: {
      confidence: 92,
      reasons: [
        'Synthetic facial features detected',
        'Voice pattern anomalies',
        'Background inconsistencies',
        'Threatening language patterns detected'
      ],
      subject: 'Political figure',
      context: 'Political misinformation',
      riskFactors: [
        'Potential public panic',
        'Spread of false political information',
        'Reputational damage to public figure'
      ]
    },
    likes: 0,
    comments: 0,
    shares: 0,
    timeAgo: '1h'
  },
  {
    id: 3,
    username: 'movie_clips',
    avatar: '🎭',
    isVerified: true,
    content: {
      type: 'video',
      thumbnail: '🎞️',
      description: 'Behind the scenes from the latest Marvel movie!'
    },
    deepfakeLevel: 0,
    harmScore: 0,
    likes: 5642,
    comments: 234,
    shares: 156,
    timeAgo: '4h'
  },
  {
    id: 4,
    username: 'tech_account_sus',
    avatar: '🤖',
    isVerified: false,
    content: {
      type: 'video',
      thumbnail: '💻',
      description: 'CEO announces revolutionary AI breakthrough'
    },
    deepfakeLevel: 1,
    harmScore: 45,
    aiDetected: {
      confidence: 67,
      reasons: [
        'Facial artifacts around jawline',
        'Inconsistent lighting',
        'Potentially synthetic audio'
      ],
      subject: 'Tech industry figure',
      context: 'Corporate announcement',
      riskFactors: ['Stock market manipulation potential', 'False corporate news']
    },
    likes: 892,
    comments: 67,
    shares: 23,
    timeAgo: '6h',
    isHighVolumeAI: true
  }
]

interface PostFeedProps {
  onPostClick: (post: any) => void
  onShowEducation: (content: any) => void
}

export function PostFeed({ onPostClick, onShowEducation }: PostFeedProps) {
  return (
    <div className="space-y-0">
      {demoData.map((post) => (
        <PostCard 
          key={post.id}
          post={post}
          onClick={onPostClick}
          onShowEducation={onShowEducation}
        />
      ))}
      
      <div className="text-center py-8 text-gray-500">
        <p className="text-sm">End of demo posts</p>
        <p className="text-xs mt-2">
          DeepTrust AI analyzed {demoData.length} posts
        </p>
      </div>
    </div>
  )
}
