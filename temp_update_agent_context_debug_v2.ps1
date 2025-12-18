$env:SPECIFY_FEATURE = 'physical-ai-book'
# Load common.ps1 using its absolute path
. "C:\Users\PMYLS\Desktop\book 3\.specify\scripts\powershell\common.ps1"

$envData = Get-FeaturePathsEnv
Write-Host "DEBUG: REPO_ROOT is $($envData.REPO_ROOT)"
Write-Host "DEBUG: IMPL_PLAN is $($envData.IMPL_PLAN)"
& "C:\Users\PMYLS\Desktop\book 3\.specify\scripts\powershell\update-agent-context.ps1" -AgentType gemini