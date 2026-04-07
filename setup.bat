@echo off
mkdir public 2>nul
move index.html public\ 2>nul
move styles.css public\ 2>nul
echo Setup complete - files moved to public directory
