# Portfolio Deployment Guide

Your portfolio is built with HTML, CSS, and JavaScript. It is ready to be hosted for free on **GitHub Pages**.

## Local Testing
1. Simply double-click `index.html` to open it in your browser.
2. Verify that the Matrix rain animation works and the tabs switch correctly.

## How to Deploy (Free)

### Option 1: GitHub Pages (Recommended)
1. Create a new repository on GitHub (e.g., `my-portfolio`).
2. Open a terminal in this folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub -> **Pages**.
4. Under "Source", select `main` branch and click **Save**.
5. Your site will be live at `https://YOUR_USERNAME.github.io/my-portfolio/`.

### Option 2: Netlify (Drag & Drop)
1. Go to [Netlify.com](https://www.netlify.com/) and sign up.
2. Drag and drop this entire folder onto their dashboard.
3. Your site will be online instantly.

## Customization
- **Edit Content**: Open `index.html` to change text, links, and project details.
- **Change Colors**: Open `style.css` and modify the `:root` variables at the top.
