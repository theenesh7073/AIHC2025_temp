# Step 1: Run the build
npm run build

# Step 2: If build succeeded, copy the config file
if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful. Copying config file..."
    Copy-Item "C:\Users\ASUS\Desktop\AIHC2025_temp\staticwebapp.config.json" "C:\Users\ASUS\Desktop\AIHC2025_temp\dist\staticwebapp.config.json"

    # Step 3: Deploy the app
    Write-Host "Starting deployment..."
    swa deploy --env production ./dist --deployment-token aff044ebcce3ae239179929200163b5d32178b60c52f04cc9d8f677a9b3bac1a02-3103dbba-2e02-43aa-bcf4-e7afc841930a0000504043aac600
} else {
    Write-Host "Build failed. Skipping file copy and deployment."
}