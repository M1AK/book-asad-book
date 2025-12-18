$env:SPECIFY_FEATURE = 'physical-ai-book'
. (Join-Path (Split-Path (Get-Item -Path $PSScriptRoot).Path -Parent) '.specify/scripts/powershell/common.ps1') # Load common.ps1
$envData = Get-FeaturePathsEnv
Write-Host "DEBUG: REPO_ROOT is $($envData.REPO_ROOT)"
Write-Host "DEBUG: IMPL_PLAN is $($envData.IMPL_PLAN)"
& "./.specify/scripts/powershell/update-agent-context.ps1" -AgentType gemini