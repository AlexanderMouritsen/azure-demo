@echo off
REM Create public directory
if not exist "public" mkdir public
if exist "public" (
    echo Public directory created successfully
) else (
    echo Failed to create public directory
)

REM Copy files to public directory
if exist "index.html" (
    copy index.html public\index.html
    echo Copied index.html to public
)

if exist "styles.css" (
    copy styles.css public\styles.css
    echo Copied styles.css to public
)

REM List public directory
echo.
echo Contents of public directory:
dir public

echo.
echo Setup complete!
