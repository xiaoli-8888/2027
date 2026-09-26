@echo off
title 本地预览服务器
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel%==0 (
    echo Starting server with Node.js...
    node server.js
    goto :end
)
where python >nul 2>nul
if %errorlevel%==0 (
    echo Starting server with Python...
    python -m http.server 8080
    goto :end
)
where python3 >nul 2>nul
if %errorlevel%==0 (
    echo Starting server with Python3...
    python3 -m http.server 8080
    goto :end
)
echo.
echo [ERROR] Node.js or Python not found!
echo Please install Node.js: https://nodejs.org/
echo.
:end
pause
