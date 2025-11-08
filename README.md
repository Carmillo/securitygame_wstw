# 🛡️ IT-Security Adventure Game

A retro-style Security Awareness Training Game with comprehensive learning module.

## 🎮 About

An interactive, browser-based game in 8-bit style that teaches important IT security topics in a playful way. Combines theoretical training with practical quizzes and random security incidents.

## ✨ Features

### Multilingual Support
- 🌍 **Full English & German Support** - Complete game in both languages
- 🎌 **Language Selection** - Choose your preferred language at start
- 🌐 **39 Countries** - Select your country from comprehensive list

### Gamification & Competition
- 🏆 **Global Leaderboard** - Compete with players worldwide
- 📊 **Smart Scoring System** - Points + time bonus calculation
- 🥇 **Rankings** - Track your position among all players
- 🌍 **Country Flags** - See where players are from

### Learning Content
- 🎨 Retro Pixel-Art Graphics (classic top-down view)
- 🎵 Dynamic 8-Bit Music (background & quiz music)
- 🎯 **12 NPCs with 39 quiz questions** on various IT security topics
- 🚨 **15 random security incident scenarios**
- 📚 **6-page training module** before the game
- 🏆 Badge system with 3 different achievements
- 📜 **Printable certificate** with your name and stats
- ⏱️ Time tracking (displayed on certificate)
- 💾 Auto-save function (24h persistence)
- ⌨️ Keyboard shortcuts (ESC, Enter)
- 🎵 Sound effects for correct/wrong answers

## 🔒 Security Topics

### NPC Quizzes (12 topics, 39 questions)
1. Phishing Recognition
2. Password Security
3. Social Engineering
4. Clean Desk Policy
5. USB Security
6. Ransomware
7. Software Updates
8. WLAN & VPN
9. Backup Strategy
10. GDPR & Data Protection
11. Printer Security
12. Risk Management

### Random Incidents (15 scenarios)
- Suspicious emails
- Tailgating
- Found USB sticks
- Social engineering calls
- Data breaches
- Unlocked PCs
- Public WiFi
- Malware warnings
- And more...

## 🎮 Controls

### Keyboard
- **Arrow Keys (↑ ↓ ← →)** - Move player
- **SPACE / ENTER** - Interact with NPCs / Continue dialog
- **ESC** - Close dialogs and feedback boxes

### Buttons
- **🔊 Music** - Toggle background music
- **🚨 INCIDENT** - Manually trigger a security incident
- **🔄 NEW GAME** - Reset progress and start over

## 🚀 Installation & Start

### Simple Method

1. Download all files
2. Open `index.html` in your browser
3. Play! 🎮

### With Local Web Server (recommended)

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Then open: `http://localhost:8000`

## 📁 Project Structure

```
securitygame_public/
├── index.html            # Main file with HTML structure & styling
├── game.js               # Complete game logic & event handlers
├── languages.js          # Multi-language translation system
├── leaderboard.js        # User registration & leaderboard system
├── npcs_data.js          # German NPC definitions (39 questions)
├── npcs_data_en.js       # English NPC definitions (39 questions)
├── incidents_data.js     # German security incidents (15 scenarios)
├── incidents_data_en.js  # English security incidents (15 scenarios)
├── training_data.js      # German training module (6 pages)
├── training_data_en.js   # English training module (6 pages)
└── README.md             # This file
```

## 💡 Technical Details

- **Technology**: HTML5 Canvas, Vanilla JavaScript
- **Audio**: Web Audio API for 8-bit sounds and music
- **Graphics**: Pixel art with programmatic drawing
- **Storage**: localStorage for progress saving (24h)
- **No external dependencies** - runs completely in browser

## 🎓 Educational Value

### Training Module
- Comprehensive theoretical foundations
- Structured knowledge transfer
- Color-coded hints (yellow/red/green)
- Practical examples

### Practical Training
- Realistic scenarios from everyday work
- Immediate feedback with detailed explanations
- Repetition: Wrong answers must be repeated
- Random order: No patterns, no memorization
- Gamified learning increases motivation and retention

## 🏆 Badge System

- **🛡️ Security Pro** - For completing the training (always)
- **⚡ Quick Thinker** - At least 5 incidents solved correctly
- **🎯 Perfect Score** - At least 90% success rate

## 💾 Progress Saving

- **Automatic saving**: On every score update
- **24h validity**: Save expires after one day
- **What is saved**:
  - Current score
  - NPC progress (which questions answered)
  - Used incidents
  - Play time

## 📱 Compatibility

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Desktop & Laptop (keyboard controls)
- ✅ **Mobile & Tablet** (touch controls with swipe gestures)
- ✅ Responsive design (adapts to screen size)
- ✅ localStorage must be enabled

### Mobile Controls:
- **Swipe** on canvas to move character
- **Tap** near your character to interact with NPCs
- All buttons and UI elements are touch-friendly

## 🎮 How to Play

1. **Enter Your Details**:
   - Choose your name
   - Select your language (English or German)
   - Pick your country

2. **Complete Training**:
   - Read through 6 pages of IT-Security basics
   - All topics are covered comprehensively

3. **Play the Game**:
   - Walk around the office (arrow keys)
   - Talk to 12 security experts (SPACE)
   - Answer their questions correctly
   - Handle random security incidents

4. **Compete Globally**:
   - Your score is calculated (points + time bonus)
   - View the global leaderboard
   - See your ranking among all players
   - Print your certificate

## 🏆 Scoring System

- **Base Points**: 100 points per correct answer
- **Time Bonus**:
  - Under 10 min: +1000 points
  - 10-20 min: +800 points
  - 20-30 min: +600 points
  - 30-40 min: +400 points
  - 40-50 min: +200 points
  - 50-60 min: +100 points
- **Total Score**: Base Points + Time Bonus

## 🚀 How to Upload to itch.io

1. **Create Account**: Go to https://itch.io and create free account
2. **Create Project**: Click "Create new project"
3. **Settings**:
   - Kind of project: **HTML**
   - Title: "IT-Security Adventure"
   - Classification: Educational/Serious Game
4. **Upload Files**:
   - ZIP all files (index.html, game.js, languages.js, etc.)
   - Upload the ZIP file
   - Check "This file will be played in the browser" ✅
   - Set index.html as the main file
5. **Pricing**: Free or "Pay what you want" with suggested donation
6. **Publish**: Click "Save & view page"

Done! Your game is now live and playable in the browser.

## 📄 License

Open source educational game for security awareness training.

## 👨‍💻 Development

Created with ❤️ and Claude Code for better IT security awareness.

### Technical Highlights
- Fully vanilla JavaScript without frameworks
- Modular data structure (separate files for NPCs, incidents, training)
- Smooth NPC movements with vector mathematics
- Responsive speech bubbles with canvas coordinates
- Dynamic audio system with Web Audio API
- LocalStorage integration with error handling

---

**Have fun playing and learning! 🛡️🎮**

*Stay secure, stay aware!*
