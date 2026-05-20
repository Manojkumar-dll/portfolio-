# Manoj Kumar G — Portfolio

A modern, professional portfolio website built with **React + Vite**, designed for GitHub Pages hosting.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- A GitHub account

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev
```

Open `http://localhost:5173/portfolio/` in your browser.

---

## ✏️ Customizing Your Portfolio

All your personal content lives in **one file**: `src/data.js`

Open it and update:
- `github` → your actual GitHub profile URL
- Any other details you want to change

The components automatically reflect whatever is in `data.js`.

---

## 🌐 Deploying to GitHub Pages

Follow these steps **once** to publish your portfolio live.

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** → **New repository**
3. Name it `portfolio` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Update the base URL

Open `vite.config.js` and make sure the `base` matches your repo name:

```js
base: '/portfolio/',  // ← change 'portfolio' to your actual repo name
```

Also update `package.json`, the `homepage` field:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 3 — Push your code to GitHub

```bash
# Inside the portfolio folder:
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

### Step 4 — Deploy to GitHub Pages

```bash
npm run deploy
```

This command builds the site and publishes it to the `gh-pages` branch automatically.

### Step 5 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `gh-pages` / `/ (root)`
5. Click **Save**

### ✅ Your site is live!

After ~1 minute, visit:
```
https://YOUR_GITHUB_USERNAME.github.io/portfolio/
```

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
# Save your changes, then:
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets (favicon etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About + competencies
│   │   ├── Experience.jsx  # Work history
│   │   ├── Skills.jsx      # Tech skills grid
│   │   ├── Education.jsx   # Education + timeline
│   │   ├── Contact.jsx     # Contact cards
│   │   └── Footer.jsx      # Footer
│   ├── data.js             # ← ALL YOUR CONTENT IS HERE
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & design tokens
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎨 Design

- **Framework**: React 18 + Vite
- **Fonts**: Syne (display) + DM Sans (body)
- **Theme**: Dark, professional, with animated particle background
- **Responsive**: Mobile-first, works on all screen sizes
- **Animations**: CSS keyframes + canvas particle network

---

Built with ❤️ using React & Vite
