# WITHackathon
"One must be chopped and cooked before they serve and eat". <br>
Can I code? no. Did I understand <50% of terminology sent in the WIT introduction email? Yes. Should I have done non-tech? Maybe
Will I still do this? 100%%%%%%<br>
This is the read Me before the hackathon begins!! I can only make cool website designs.... 3 years ago so I hope something triggers in me... to be updated when we have a real idea....

# DeepTrust - Instagram Deepfake Detection Demo

An AI-powered deepfake detection and education system designed for Instagram, featuring a two-tier flagging system and comprehensive educational resources.

## 🚀 Features

- **Two-Tier Flagging System**
  - Level 1: Non-harmful deepfakes with sliding subtitle warnings
  - Level 2: Harmful deepfakes with freeze-frame interstitials
  
- **AI Detection Analysis**
  - Real-time confidence scoring
  - Detailed detection reasoning
  - Subject and context analysis
  - Risk assessment scoring

- **Educational Integration**
  - Click-through education panels
  - Deepfake verification guides
  - Common scam pattern awareness
  - Media literacy resources

- **Account Monitoring**
  - High-volume AI content flagging
  - Algorithmic reach reduction
  - Transparency labels

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/HerbsMayCode/WITHackathon.git
cd WITHackathon
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📱 Demo Content

The demo includes several sample posts demonstrating different deepfake detection scenarios:

1. **Celebrity Fan Video** (Level 1)
   - Hugh Jackman deepfake
   - 78% confidence, 25 harm score
   - Sliding subtitle warning

2. **Political Misinformation** (Level 2)
   - Fake political announcement
   - 92% confidence, 85 harm score
   - Freeze-frame interstitial

3. **Authentic Content**
   - Real movie clip
   - No AI detection

4. **High-Volume AI Account**
   - Tech industry deepfake
   - Account flagging demonstration

## 🎯 Key Demo Features

### Detection System
- **Facial Analysis**: Detects synthetic facial features and artifacts
- **Audio Analysis**: Identifies voice pattern anomalies
- **Context Analysis**: Evaluates subject matter and potential harm
- **Behavioral Analysis**: Monitors account posting patterns

### User Experience
- **Non-intrusive warnings** for low-risk content
- **Strong interventions** for harmful misinformation
- **Educational tooltips** and detailed explanations
- **Appeal system** for false positives

### Educational Components
- **Why This Was Flagged** - Technical detection details
- **How to Verify Content** - User education checklist
- **Common Scam Patterns** - Awareness building
- **Digital Literacy Resources** - Long-term user empowerment

## 📊 Detection Scoring

The system uses a weighted harm score (0-100):
- **0-40**: Non-harmful/Troublesome (Level 1 warning)
- **41-70**: Borderline/Low-risk (Level 1 warning)
- **71-100**: Harmful/Misinformational (Level 2 intervention)

**Scoring Formula:**
```
harm_score = 0.4 × subject_impact + 0.3 × threat_content + 0.2 × claim_veracity + 0.1 × virality
```

## 🎨 Design Philosophy

- **Instagram-native experience** - Familiar UI patterns
- **Progressive disclosure** - Information when needed
- **Education over censorship** - Empowering users with knowledge
- **Transparency** - Clear reasons for all decisions
- **Accessibility** - Screen reader friendly, high contrast warnings

## 🔧 Customization

The demo can be customized by modifying:
- `components/PostFeed.tsx` - Sample data and posts
- `components/PostCard.tsx` - Warning UI and thresholds  
- `components/EducationalPanel.tsx` - Educational content
- `app/globals.css` - Styling and animations

## 📈 Success Metrics (Target)

- 50% reduction in harmful deepfake engagement
- ≥70% increase in user trust scores
- <10% appeal overturn rate
- Successful expansion to other Meta apps

## 🚨 Hackathon Implementation

This is a frontend demo showcasing the user experience. For a full implementation, you would need:

1. **Backend API** - Flask/Node.js server for detection processing
2. **AI Models** - Deepfake detection algorithms (Xception, HuggingFace)
3. **Database** - User activity tracking and account monitoring
4. **Real-time Processing** - Video analysis pipeline
5. **Content Moderation** - Human review workflows

## 🎪 Demo Flow

1. **Browse Feed** - See different post types and detection levels
2. **Level 1 Warning** - Tap celebrity post to see sliding warning
3. **Level 2 Intervention** - Click political post to see freeze modal
4. **Educational Content** - Explore "See Why" panels and learning resources
5. **Account Flagging** - Notice high-volume AI content warnings

## 🏆 Pitch Summary

> "DeepTrust detects deepfakes and informs users with a two-tier flagging system: subtle alerts for minor fakes, freeze-frame warnings for harmful misinformation. Every flag links to educational resources, while accounts posting mostly AI content are transparently moderated. We protect trust, educate users, and slow the spread of misinformation — all in one feature."

## 📄 License

MIT License - Built for the WIT Hackathon 2025

## 👥 Team

Built by the Big Back Engineers team for educational and demonstration purposes.
