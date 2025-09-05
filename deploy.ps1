# Simple deployment script for JKC Construction website
Write-Host "Starting deployment..." -ForegroundColor Green

# Add all changes
Write-Host "Adding changes..." -ForegroundColor Yellow
git add -A

# Commit with timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMessage = "Auto deploy: $timestamp"
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m $commitMessage

# Push to main branch
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "Deployment complete! Website will auto-update in 1-2 minutes." -ForegroundColor Green
Write-Host "Live URL: https://jkconstruction.vercel.app" -ForegroundColor Cyan
