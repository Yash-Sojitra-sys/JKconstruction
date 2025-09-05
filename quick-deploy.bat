@echo off
echo Deploying JKC Construction website...
git add -A
git commit -m "Quick deploy update"
git push origin main
echo.
echo Deployment complete! 
echo Live site: https://jkconstruction.vercel.app
pause
