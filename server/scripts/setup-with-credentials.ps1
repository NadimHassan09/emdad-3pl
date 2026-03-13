# PowerShell script to set PostgreSQL admin credentials and run setup
# Usage: .\scripts\setup-with-credentials.ps1

Write-Host "PostgreSQL Database Setup" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan
Write-Host ""

# Prompt for admin credentials
$adminUser = Read-Host "Enter PostgreSQL admin username (default: postgres)"
if ([string]::IsNullOrWhiteSpace($adminUser)) {
    $adminUser = "postgres"
}

$adminPassword = Read-Host "Enter PostgreSQL admin password" -AsSecureString
$adminPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($adminPassword)
)

# Set environment variables
$env:POSTGRES_ADMIN_USER = $adminUser
$env:POSTGRES_ADMIN_PASSWORD = $adminPasswordPlain

Write-Host ""
Write-Host "Running database setup..." -ForegroundColor Yellow
Write-Host ""

# Run the setup script
npm run db:setup

# Clear the password from memory
$adminPasswordPlain = $null
[System.GC]::Collect()

