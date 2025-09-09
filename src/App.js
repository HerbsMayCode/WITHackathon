import React, { useState, useEffect } from 'react';
import { Camera, Send, Heart, MessageCircle, Share, Bookmark, MoreHorizontal, AlertTriangle, Shield, X, Info } from 'lucide-react';

const InstagramDeepTrustApp = () => {
  const [posts, setPosts] = useState([]);
  const [currentView, setCurrentView] = useState('feed');
  const [showEducation, setShowEducation] = useState(false);
  const [currentDetection, setCurrentDetection] = useState(null);

  // Mock Instagram posts
  const mockPosts = [
    {
      id: 1,
      username: "celebrity_fan_123",
      avatar: "https://via.placeholder.com/32x32/e91e63/ffffff?text=CF",
      verified: false,
      content: "OMG Hugh Jackman singing my favorite song! 😍 #wolverine #musical",
      image: "https://via.placeholder.com/400x400/2196f3/ffffff?text=🎬",
      likes: 1247,
      timeAgo: "2h",
      isDeepfake: true,
      harmLevel: 1,
      confidence: 0.78,
      reasons: [
        { type: 'Facial Analysis', description: 'Inconsistent facial features detected around mouth and jawline during speech', severity: 'medium' },
        { type: 'Audio-Visual Sync', description: 'Slight misalignment between lip movements and audio detected', severity: 'low' },
        { type: 'Context Verification', description: 'No official record of this performance by the celebrity', severity: 'medium' }
      ]
    },
    {
      id: 2,
      username: "breaking_news_now",
      avatar: "https://via.placeholder.com/32x32/f44336/ffffff?text=BN",
      verified: true,
      content: "🚨 URGENT: Government official makes shocking announcement about new policies",
      image: "https://via.placeholder.com/400x400/ff9800/ffffff?text=📺",
      likes: 45672,
      timeAgo: "45m",
      isDeepfake: true,
      harmLevel: 2,
      confidence: 0.89,
      reasons: [
        { type: 'Deepfake Detection', description: 'High confidence AI-generated face detected (89% certainty)', severity: 'high' },
        { type: 'Misinformation Risk', description: 'Content contains unverified political claims that could spread false information', severity: 'high' },
        { type: 'Public Figure Analysis', description: 'High-impact subject with potential for widespread misinformation', severity: 'high' }
      ]
    },
    {
      id: 3,
      username: "travel.vibes",
      avatar: "https://via.placeholder.com/32x32/4caf50/ffffff?text=TV",
      verified: false,
      content: "Beautiful sunset from Bali 🌅 Can't believe this view! #travel #bali #paradise",
      image: "https://via.placeholder.com/400x400/ff5722/ffffff?text=🌴",
      likes: 892,
      timeAgo: "4h",
      isDeepfake: false,
      harmLevel: 0
    },
    {
      id: 4,
      username: "ai_content_daily",
      avatar: "https://via.placeholder.com/32x32/9c27b0/ffffff?text=AI",
      verified: false,
      content: "Daily dose of creativity! ✨ What do you think of this artwork?",
      image: "https://via.placeholder.com/400x400/673ab7/ffffff?text=🎨",
      likes: 234,
      timeAgo: "1d",
      isDeepfake: true,
      harmLevel: 1,
      confidence: 0.65,
      highAiContent: true,
      reasons: [
        { type: 'Account Pattern', description: 'This account consistently posts AI-generated content (85% of recent posts)', severity: 'medium' },
        { type: 'Content Analysis', description: 'Image shows characteristics of AI generation tools', severity: 'low' }
      ]
    }
  ];

  // Mock DM conversations
  const mockDMs = [
    {
      id: 1,
      username: "suspicious_sender",
      avatar: "https://via.placeholder.com/40x40/f44336/ffffff?text=SS",
      lastMessage: "Check out this crazy video!",
      timeAgo: "5m",
      hasDeepfakeContent: true,
      unread: true
    },
    {
      id: 2,
      username: "john_doe",
      avatar: "https://via.placeholder.com/40x40/2196f3/ffffff?text=JD",
      lastMessage: "Hey, how was your day?",
      timeAgo: "2h",
      hasDeepfakeContent: false,
      unread: false
    },
    {
      id: 3,
      username: "fake_news_bot",
      avatar: "https://via.placeholder.com/40x40/ff9800/ffffff?text=FB",
      lastMessage: "URGENT: You need to see this...",
      timeAgo: "1d",
      hasDeepfakeContent: true,
      unread: false
    }
  ];

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  const showDetectionDetails = (post) => {
    setCurrentDetection(post);
    setShowEducation(true);
  };

  // Instagram Post Component
  const InstagramPost = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [showHarmfulOverlay, setShowHarmfulOverlay] = useState(post.harmLevel === 2);

    return (
      <div className="bg-white mb-4">
        {/* Account Warning for High AI Content */}
        {post.highAiContent && (
          <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3">
            <div className="flex items-center text-sm">
              <Shield className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0" />
              <span className="text-yellow-800">
                This account frequently posts AI-generated content
              </span>
            </div>
          </div>
        )}

        {/* Post Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <img
              src={post.avatar}
              alt={post.username}
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-semibold text-sm">{post.username}</span>
                {post.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center ml-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                <span className="text-gray-500 text-sm ml-2">• {post.timeAgo}</span>
              </div>
            </div>
          </div>
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </div>

        {/* Post Image/Video Container */}
        <div className="relative bg-gray-100 aspect-square">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-full object-cover"
          />

          {/* Level 2 Harmful Content Overlay (In-Post) */}
          {showHarmfulOverlay && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white p-6">
              <div className="bg-red-500 rounded-full p-4 mb-4">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Potentially Harmful Content
              </h3>
              <p className="text-sm text-center mb-6 opacity-90">
                This content may contain misinformation or deepfake media
              </p>
              <div className="flex flex-col space-y-3 w-full max-w-xs">
                <button
                  onClick={() => setShowHarmfulOverlay(false)}
                  className="bg-white text-black py-3 px-6 rounded-lg font-medium"
                >
                  View Anyway
                </button>
                <button
                  onClick={() => showDetectionDetails(post)}
                  className="bg-transparent border border-white text-white py-3 px-6 rounded-lg font-medium"
                >
                  Learn More
                </button>
              </div>
            </div>
          )}

          {/* Level 1 Non-Harmful Flag */}
          {post.isDeepfake && post.harmLevel === 1 && (
            <div 
              className="absolute bottom-4 left-4 right-4 bg-yellow-400 bg-opacity-95 text-black px-4 py-2 rounded-lg flex items-center cursor-pointer"
              onClick={() => showDetectionDetails(post)}
            >
              <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium flex-1">
                Possible synthetic content
              </span>
              <Info className="w-4 h-4 opacity-70" />
            </div>
          )}
        </div>

        {/* Post Actions */}
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLiked(!liked)}
                className="transition-colors"
              >
                <Heart 
                  className={`w-6 h-6 ${liked ? 'text-red-500 fill-current' : 'text-black'}`} 
                />
              </button>
              <MessageCircle className="w-6 h-6" />
              <Share className="w-6 h-6" />
            </div>
            <Bookmark className="w-6 h-6" />
          </div>

          {/* Likes */}
          <div className="mb-2">
            <span className="font-semibold text-sm">
              {(post.likes + (liked ? 1 : 0)).toLocaleString()} likes
            </span>
          </div>

          {/* Caption */}
          <div className="text-sm">
            <span className="font-semibold">{post.username}</span>
            <span className="ml-1">{post.content}</span>
          </div>
        </div>
      </div>
    );
  };

  // DM Item Component
  const DMItem = ({ dm }) => (
    <div className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
      <div className="relative">
        <img
          src={dm.avatar}
          alt={dm.username}
          className="w-12 h-12 rounded-full"
        />
        {dm.hasDeepfakeContent && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-3 h-3 text-white" />
          </div>
        )}
      </div>
      <div className="ml-3 flex-1">
        <div className="flex items-center justify-between">
          <span className={`text-sm ${dm.unread ? 'font-semibold' : 'font-normal'}`}>
            {dm.username}
          </span>
          <span className="text-xs text-gray-500">{dm.timeAgo}</span>
        </div>
        <div className="flex items-center">
          <p className={`text-sm text-gray-600 truncate ${dm.unread ? 'font-medium' : ''}`}>
            {dm.lastMessage}
          </p>
          {dm.hasDeepfakeContent && (
            <Shield className="w-3 h-3 text-red-500 ml-2 flex-shrink-0" />
          )}
        </div>
      </div>
      {dm.unread && (
        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
      )}
    </div>
  );

  // Education Panel
  const EducationPanel = () => {
    if (!showEducation) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-xl font-semibold">Learn More</h1>
              <p className="text-sm opacity-90 mt-1">
                About synthetic content and how to stay safe
              </p>
            </div>
            <button
              onClick={() => setShowEducation(false)}
              className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Detection Reasons */}
          {currentDetection?.reasons && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why was this flagged?
              </h3>
              <div className="space-y-3">
                {currentDetection.reasons.map((reason, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      reason.severity === 'high' ? 'bg-red-50 border-red-400' :
                      reason.severity === 'medium' ? 'bg-yellow-50 border-yellow-400' :
                      'bg-blue-50 border-blue-400'
                    }`}
                  >
                    <div className="font-medium text-gray-900 mb-1">
                      {reason.type}
                    </div>
                    <div className="text-sm text-gray-600">{reason.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What are Deepfakes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What is synthetic content?
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Synthetic content includes deepfakes, AI-generated images, and manipulated media. 
              This content uses artificial intelligence to create realistic but fake videos, 
              images, or audio that can make people appear to say or do things they never did.
            </p>
          </div>

          {/* How to Stay Safe */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How to stay safe from synthetic content
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">1</span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900 text-sm">Cross-check important information</div>
                  <div className="text-xs text-gray-600 mt-1">
                    Verify claims through multiple trusted news sources before sharing
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">2</span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900 text-sm">Look for verification badges</div>
                  <div className="text-xs text-gray-600 mt-1">
                    Official accounts are more likely to post authentic content
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">3</span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900 text-sm">Be skeptical of sensational claims</div>
                  <div className="text-xs text-gray-600 mt-1">
                    If something seems too shocking or unbelievable, investigate further
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">4</span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900 text-sm">Check the source and context</div>
                  <div className="text-xs text-gray-600 mt-1">
                    Look for original sources and consider when/where content was created
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">5</span>
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900 text-sm">Use reverse image/video search</div>
                  <div className="text-xs text-gray-600 mt-1">
                    Tools like Google Lens can help find the original source of content
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Red Flags */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Red flags to watch for
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="text-sm font-medium text-red-800">Visual inconsistencies</div>
                <div className="text-xs text-red-600 mt-1">Unnatural facial movements or blurry edges</div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="text-sm font-medium text-red-800">Audio mismatch</div>
                <div className="text-xs text-red-600 mt-1">Voice doesn't match lip movements</div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="text-sm font-medium text-red-800">Lighting issues</div>
                <div className="text-xs text-red-600 mt-1">Inconsistent shadows or lighting</div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="text-sm font-medium text-red-800">Context clues</div>
                <div className="text-xs text-red-600 mt-1">Claims that seem out of character</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Feed View
  const FeedView = () => (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {posts.map((post) => (
        <InstagramPost key={post.id} post={post} />
      ))}
    </div>
  );

  // DMs View
  const DMsView = () => (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="border-b border-gray-200 px-4 py-4">
        <h2 className="text-xl font-semibold">Direct Messages</h2>
      </div>
      <div>
        {mockDMs.map((dm) => (
          <DMItem key={dm.id} dm={dm} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Instagram Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
          <div className="flex items-center">
            <Camera className="w-6 h-6 mr-3" />
            <h1 className="text-xl font-bold">Instagram</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentView('dms')}
              className={`p-2 ${currentView === 'dms' ? 'text-blue-500' : ''}`}
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {currentView === 'feed' ? <FeedView /> : <DMsView />}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-2 max-w-md mx-auto">
          <button
            onClick={() => setCurrentView('feed')}
            className={`p-3 ${currentView === 'feed' ? 'text-black' : 'text-gray-400'}`}
          >
            <div className="w-6 h-6 border-2 border-current rounded-sm"></div>
          </button>
          <button className="p-3 text-gray-400">
            <div className="w-6 h-6 border-2 border-current rounded-full"></div>
          </button>
          <button className="p-3 text-gray-400">
            <div className="w-6 h-6 border-2 border-current"></div>
          </button>
          <button className="p-3 text-gray-400">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-3 text-gray-400">
            <div className="w-6 h-6 bg-current rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Education Panel */}
      <EducationPanel />
    </div>
  );
};

export default InstagramDeepTrustApp;
