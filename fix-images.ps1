# PowerShell script to fix all external image URLs in pages
$pagesDir = "src/pages"
$files = Get-ChildItem "$pagesDir/*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Add IMAGES import if not present and file has external URLs
    if ($content -match 'https://images\.(pexels|unsplash)\.com' -and $content -notmatch "import { IMAGES } from '../constants/images';") {
        $content = $content -replace "(import Footer from '../components/Footer';)", "`$1`nimport { IMAGES } from '../constants/images';"
        $modified = $true
    }
    
    # Replace external image URLs with local images
    if ($content -match 'https://images\.pexels\.com/[^"]+') {
        $content = $content -replace 'src="https://images\.pexels\.com/[^"]+"', 'src={IMAGES.GALLERY.CONSTRUCTION_1}'
        $modified = $true
    }
    
    if ($content -match 'https://images\.unsplash\.com/[^"]+') {
        $content = $content -replace 'src="https://images\.unsplash\.com/[^"]+"', 'src={IMAGES.GALLERY.CONSTRUCTION_2}'
        $modified = $true
    }
    
    if ($modified) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated $($file.Name)"
    }
}

Write-Host "Image replacement complete!"
