#!/bin/bash

# DeepTrust Instagram - Quick Deployment Script
# This script sets up the project and deploys to GitHub + Vercel

echo "🛡️  DeepTrust Instagram - Deployment Setup"
echo "=========================================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "🔄 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already exists"
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

# Add all files to git
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: DeepTrust Instagram integration - $(date)"

# Check if remote origin exists
if git remote | grep -q origin; then
    echo "🚀 Pushing to GitHub..."
    git push origin main
else
    echo "⚠️  No remote origin found."
    echo "Please add your GitHub repository:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/deeptrust-instagram.git"
    echo "git push -u origin main"
fi

echo ""
echo "🎉 Deployment setup complete!"
echo ""
echo "Next steps:"
echo "1. Create GitHub repository: https://github.com/new"
echo "2. Add remote origin (if not done already)"
echo "3. Deploy to Vercel: https://vercel.com/new"
echo "4. Import your GitHub repository"
echo ""
echo "Your app will be live at: https://your-project-name.vercel.app"
echo ""
