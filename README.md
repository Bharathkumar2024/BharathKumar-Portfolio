# 🚀 Developer Portfolio

Dark maroon + pink aesthetic portfolio — pure HTML, CSS, JS. No frameworks. No build step.

## 📁 Project Structure

```
portfolio/
├── index.html              ← Main HTML (all sections here)
│
├── css/
│   ├── variables.css       ← 🎨 Colors, fonts, spacing — EDIT THIS FIRST
│   ├── base.css            ← Reset, shared utilities, buttons, cursor
│   ├── navbar.css          ← Sticky navbar + mobile overlay
│   ├── hero.css            ← Hero section + avatar card + chips
│   ├── about.css           ← About section + stats
│   ├── skills.css          ← Skills grid + pills
│   ├── experience.css      ← Timeline + experience cards
│   ├── projects.css        ← Project cards grid
│   ├── achievements.css    ← Bento grid achievements
│   ├── contact.css         ← Contact form + info cards
│   ├── footer.css          ← Footer
│   └── responsive.css      ← ALL media queries (mobile/tablet)
│
├── js/
│   ├── cursor.js           ← Custom pink cursor
│   ├── particles.js        ← Hero background particle canvas
│   ├── navbar.js           ← Scroll behavior, active links, hamburger
│   ├── reveal.js           ← Scroll reveal animations
│   ├── counters.js         ← Animated number counters
│   └── contact.js          ← Form validation + send feedback
│
└── assets/
    ├── images/
    │   └── avatar.png      ← PUT YOUR PHOTO HERE
    └── cv.pdf              ← PUT YOUR CV HERE
```

## 🚀 How to Run

Just open `index.html` in your browser. No server needed.

For a better dev experience, use VS Code + **Live Server** extension:
1. Open the `portfolio/` folder in VS Code
2. Right-click `index.html` → "Open with Live Server"

## ✏️ How to Customize

### 1. Change Your Name
Search `YourName` in `index.html` and replace with your actual name.

### 2. Add Your Photo
Replace the `<svg>` in the hero section with:
```html
<img src="assets/images/avatar.png" alt="Your Name" class="hero-photo" />
```
And add to `css/hero.css`:
```css
.hero-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
```

### 3. Change Colors
Edit `css/variables.css` — all colors are CSS variables.
Main ones to change:
- `--accent` → main pink color
- `--bg-base` → darkest background
- `--bg-primary` → section backgrounds

### 4. Update Your Links
Search for `href="#"` in `index.html` and replace with real URLs.

### 5. Add Your Projects
Edit the project cards in the `#projects` section of `index.html`.
Each card looks like:
```html
<div class="project-card reveal reveal-delay-1">
  <div class="project-thumb" style="background:...">EMOJI<span class="project-thumb-num">01</span></div>
  <div class="project-body">
    <div class="project-name">Project Name</div>
    <div class="project-desc">Description...</div>
    <div class="project-stack">
      <span class="stack-tag">React</span>
    </div>
    <div class="project-links">
      <a href="LIVE_URL" class="project-link demo">Live Demo</a>
      <a href="GITHUB_URL" class="project-link code">GitHub</a>
    </div>
  </div>
</div>
```

### 6. Update Achievement Numbers
Find `data-target="11300"` etc. in `index.html` and update to your real stats.

## 🌐 Deploy (Free)

### Vercel
```bash
npx vercel
```

### Netlify
Drag and drop the `portfolio/` folder at netlify.com/drop

### GitHub Pages
Push to GitHub → Settings → Pages → Deploy from branch
