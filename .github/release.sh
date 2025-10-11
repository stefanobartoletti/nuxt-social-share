#!/bin/bash

# Check if we're on the release branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "release" ]; then
  echo "❌ Releases can only be made from the 'release' branch"
  echo "Current branch: $CURRENT_BRANCH"
  echo "Please switch to the release branch first: git checkout release"
  exit 1
fi

# Ensure we have the latest changes from main
echo "🔄 Merging latest changes from main..."
git merge main || {
  echo "❌ Failed to merge main branch"
  exit 1
}

# Run quality checks
echo "🔍 Running linting..."
pnpm lint || {
  echo "❌ Linting failed"
  exit 1
}

echo "🧪 Running tests..."
pnpm test || {
  echo "❌ Tests failed"
  exit 1
}

# Build the module
echo "📦 Building module..."
pnpm prepack || {
  echo "❌ Build failed"
  exit 1
}

# Generate changelog and bump version
echo "📝 Generating changelog and bumping version..."
changelogen --release || {
  echo "❌ Changelog generation failed"
  exit 1
}

# Publish to npm
echo "🚀 Publishing to npm..."
npm publish || {
  echo "❌ Publishing failed"
  exit 1
}

# Push changes and tags
echo "⬆️  Pushing changes and tags..."
git push --follow-tags || {
  echo "❌ Failed to push changes"
  exit 1
}

# Switch back to main and merge release
echo "🔄 Switching to main and merging release..."
git checkout main || {
  echo "❌ Failed to checkout main"
  exit 1
}

git merge release || {
  echo "❌ Failed to merge release into main"
  exit 1
}

git push || {
  echo "❌ Failed to push main"
  exit 1
}

echo "✅ Release completed successfully!"