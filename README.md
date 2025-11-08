# 🛡️ IT-Security Adventure - Wiener Stadtwerke

Ein Pokémon-Style Security Awareness Game für Mitarbeiter der Wiener Stadtwerke.

## 🎮 Über das Spiel

Ein interaktives, browserbasiertetes Spiel im 8-Bit-Stil, das Mitarbeiter auf spielerische Weise über wichtige IT-Sicherheitsthemen aufklärt.

### Features

- 🎨 **Pixel-Art Grafik** im Pokémon-Style (Top-Down-Ansicht)
- 🎵 **8-Bit Hintergrundmusik** mit Web Audio API
- 🎯 **5 IT-Security Challenges** zu verschiedenen Themen
- 🏆 **Punktesystem** zur Motivation
- 💬 **Interaktive NPCs** mit Dialogen
- ❓ **Quiz-System** zum Testen des Wissens

## 🔒 IT-Sicherheitsthemen

Das Spiel behandelt folgende wichtige Security-Themen:

1. **Phishing-Erkennung** - Wie erkenne ich gefährliche E-Mails?
2. **Passwort-Sicherheit** - Was macht ein sicheres Passwort aus?
3. **Social Engineering** - Schutz vor psychologischen Tricks
4. **Clean-Desk-Policy** - Sichere Arbeitsplatzgestaltung
5. **USB-Sicherheit** - Umgang mit unbekannten USB-Sticks

## 🎮 Steuerung

- **Pfeiltasten (↑ ↓ ← →)** - Spieler bewegen
- **SPACE** - Mit NPCs interagieren / Dialog fortsetzen
- **Musik-Button** - Hintergrundmusik ein/ausschalten

## 🚀 Installation & Start

### Einfache Variante (Lokaler Start)

1. Repository klonen oder Dateien herunterladen
2. `index.html` direkt im Browser öffnen
3. Spielen! 🎮

### Mit lokalem Webserver

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (mit npx)
npx http-server
```

Dann im Browser öffnen: `http://localhost:8000`

## 📁 Projektstruktur

```
securitygame_wstw/
├── index.html          # Hauptdatei mit HTML-Struktur
├── game.js             # Komplette Spiellogik
└── README.md           # Diese Datei
```

## 🎯 Spielziel

Bewege dich durch das virtuelle Büro der Wiener Stadtwerke und sprich mit allen 5 Security-Experten (NPCs mit Ausrufezeichen !). Beantworte ihre Fragen richtig, um alle Challenges zu meistern und zum **Security-Champion** zu werden!

## 💡 Technische Details

- **Technologie**: HTML5 Canvas, Vanilla JavaScript
- **Audio**: Web Audio API für 8-Bit-Sounds
- **Grafik**: Pixel-Art mit programmatischer Zeichnung
- **Keine externen Dependencies** - läuft komplett im Browser

## 🎨 Design-Entscheidungen

- **Pokémon-inspiriert**: Top-Down-Perspektive, Pixel-Art-Stil
- **8-Bit-Musik**: Nostalgisches Gaming-Gefühl
- **Wiener Stadtwerke Branding**: Farbschema und Titel
- **Gamification**: Punkte und Erfolge motivieren zum Lernen

## 🔊 Audio

Die 8-Bit-Musik wird automatisch beim Laden generiert und kann jederzeit mit dem Button gesteuert werden. Die Musik ist optional und stört nicht die Kernfunktionalität.

## 📱 Kompatibilität

- ✅ Alle modernen Browser (Chrome, Firefox, Safari, Edge)
- ✅ Desktop & Laptop (optimiert für größere Bildschirme)
- ⚠️ Mobile Geräte (eingeschränkt - Pfeiltasten erforderlich)

## 🎓 Pädagogischer Wert

Jede Challenge vermittelt wichtiges Security-Wissen:
- **Praktische Szenarien** aus dem Arbeitsalltag
- **Sofortiges Feedback** bei Antworten
- **Erklärungen** für richtiges Verhalten
- **Spielerisches Lernen** steigert Motivation

## 🚀 Erweiterungsmöglichkeiten

- Mehr NPCs mit weiteren Security-Themen
- Mehrere Level/Räume
- Multiplayer-Modus
- Highscore-System
- Mobile Touch-Steuerung
- Weitere Sprachen

## 📄 Lizenz

Entwickelt für die Wiener Stadtwerke - Security Awareness Training

## 👨‍💻 Entwicklung

Erstellt mit ❤️ für bessere IT-Sicherheit bei den Wiener Stadtwerken.

---

**Viel Spaß beim Spielen und Lernen! 🛡️🎮**
