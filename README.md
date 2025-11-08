# 🛡️ IT-Security Adventure - Wiener Stadtwerke

Ein Pokemon-Style Security Awareness Game für Mitarbeiter der Wiener Stadtwerke mit umfassendem Schulungsmodul.

## 🎮 Über das Spiel

Ein interaktives, browserbasiertes Spiel im 8-Bit-Stil, das Mitarbeiter auf spielerische Weise über wichtige IT-Sicherheitsthemen aufklärt. Das Spiel kombiniert ein umfassendes Schulungsmodul mit praktischen Quizzes und zufälligen Security-Incidents.

### ✨ Features

#### Gameplay
- 🎨 **Pixel-Art Grafik** im Pokemon-Style (Top-Down-Ansicht)
- 🎵 **Dynamische 8-Bit Musik** - Wechselt zwischen Background und Quiz-Musik
- 🎯 **12 NPCs mit 39 Quiz-Fragen** zu verschiedenen IT-Security-Themen
- 🚨 **15 zufällige Security-Incidents** für praxisnahes Training
- 💬 **Interaktive NPCs** mit Sprechblasen, Witzen und individuellen Designs
- 🏃 **Animierte NPC-Bewegungen** - NPCs laufen smooth durch das Büro

#### Schulung & Training
- 📚 **6-seitiges Schulungsmodul** vor dem Spiel
- 🎓 **Umfassende Theorie** zu allen Security-Themen
- ✅ **Sofortiges Feedback** mit ausführlichen Erklärungen
- 📜 **Druckbares Zertifikat** mit Wiener Stadtwerke Branding

#### Gamification
- 🏆 **Badge-System** mit 3 verschiedenen Abzeichen
- 📊 **Detaillierte Statistiken** auf Victory Screen
- ⏱️ **Zeiterfassung** - Spielzeit wird auf Zertifikat angezeigt
- 🏅 **Perfect Score Bonus** - Spezielle Anerkennung für 100%
- 💾 **Auto-Save Funktion** - Fortschritt wird automatisch gespeichert

#### Benutzerfreundlichkeit
- ⌨️ **Keyboard Shortcuts** - ESC und Enter für schnellere Navigation
- 🎵 **Sound Effects** - Verschiedene Sounds für richtig/falsch
- 🔀 **Randomisierte Antworten** - Keine vorhersehbaren Muster
- 🔄 **Progress Saving** - 24h Speicherung im localStorage

## 🔒 IT-Sicherheitsthemen

Das Spiel behandelt alle wichtigen Security-Themen:

### NPC-Quizzes (12 Themen, 39 Fragen)
1. **Phishing-Erkennung** - E-Mail-Sicherheit und verdächtige Links
2. **Passwort-Sicherheit** - Sichere Passwörter und Passwort-Manager
3. **Social Engineering** - Manipulation und psychologische Tricks
4. **Clean-Desk-Policy** - Arbeitsplatzsicherheit
5. **USB-Sicherheit** - Umgang mit unbekannten Medien
6. **Ransomware** - Erkennung und Sofortmaßnahmen
7. **Software-Updates** - Wichtigkeit kritischer Patches
8. **WLAN & VPN** - Sicheres Arbeiten unterwegs
9. **Backup-Strategie** - Datensicherung und Recovery
10. **DSGVO & Datenschutz** - Rechtliche Anforderungen
11. **Drucker-Sicherheit** - Pull-Printing und Badge-Authentifizierung
12. **Risikomanagement** - Meldepflichten und Eskalation

### Random Incidents (15 Szenarien)
- Verdächtige E-Mails und Phishing-Versuche
- Tailgating und unbefugter Zutritt
- Gefundene USB-Sticks
- Social-Engineering-Anrufe
- Datenpannen und DSGVO-Verstöße
- Ungesperrte PCs
- Öffentliche WLANs
- Malware-Warnungen
- Und mehr...

## 🎮 Steuerung

### Tastatur
- **Pfeiltasten (↑ ↓ ← →)** - Spieler bewegen
- **SPACE / ENTER** - Mit NPCs interagieren / Dialog fortsetzen
- **ESC** - Dialoge und Feedback-Boxen schließen

### Buttons
- **🔊 Musik-Button** - Hintergrundmusik ein/ausschalten
- **🚨 INCIDENT AUSLÖSEN** - Manuell ein Security-Incident triggern
- **🔄 NEUES SPIEL** - Fortschritt zurücksetzen und neu starten

## 🚀 Installation & Start

### Einfache Variante (Lokaler Start)

1. Repository klonen oder Dateien herunterladen
2. `index.html` direkt im Browser öffnen
3. Spielen! 🎮

### Mit lokalem Webserver (empfohlen)

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
├── index.html           # Hauptdatei mit HTML-Struktur & Styling
├── game.js              # Komplette Spiellogik & Event-Handler
├── npcs_data.js         # NPC-Definitionen mit allen Quiz-Fragen
├── incidents_data.js    # Random Security-Incidents
├── training_data.js     # Schulungsmodul-Inhalte
└── README.md            # Diese Datei
```

## 🎯 Spielablauf

1. **Schulungsmodul** (6 Seiten)
   - Durchklicken der wichtigsten Security-Grundlagen
   - Theorie zu allen Themen
   - "Spiel starten" nach Abschluss

2. **Hauptspiel**
   - Bewege dich durch das virtuelle Wiener Stadtwerke Büro
   - Sprich mit 12 verschiedenen Security-Experten
   - Beantworte 3-4 Fragen pro NPC (insgesamt 39 Fragen)
   - Reagiere auf zufällige Security-Incidents

3. **Victory Screen**
   - Detaillierte Statistiken
   - Badge-Verleihung basierend auf Performance
   - Zertifikat drucken mit Spielzeit und Erfolgsquote
   - Bei 100%: Spezielle "Perfect Score" Anerkennung

## 💡 Technische Details

- **Technologie**: HTML5 Canvas, Vanilla JavaScript
- **Audio**: Web Audio API für 8-Bit-Sounds und Musik
- **Grafik**: Pixel-Art mit programmatischer Zeichnung
- **Speicherung**: localStorage für Progress Saving (24h)
- **Keine externen Dependencies** - läuft komplett im Browser

## 🎨 Design-Entscheidungen

- **Pokemon-inspiriert**: Top-Down-Perspektive, Pixel-Art-Stil, 8-Bit-Musik
- **Wiener Stadtwerke Branding**: Logo, Farben (Blau #0066CC, Rot #E30613)
- **Wien IT**: Als IT-Dienstleister erwähnt
- **Individuelle NPCs**: Jeder NPC hat eigene Farbe, Frisur, Accessoires (Brille, Bart, Hut, etc.)
- **Gamification**: Punkte, Badges, Zertifikat motivieren zum Lernen
- **Kein Zeitdruck**: Bewusst keine Timer bei Incidents - stressfreies Lernen

## 🔊 Audio-System

### Musik
- **Background Music**: Fröhliche 8-Bit-Melodie während des Spiels
- **Quiz Music**: Spannende Melodie während Quiz-Fragen
- **Automatischer Wechsel**: Musik passt sich Spielsituation an

### Sound Effects
- **Richtige Antwort**: Aufsteigende Melodie (C-E-G)
- **Falsche Antwort**: Absteigende Melodie
- **NPC Komplett**: Level-Up Jingle
- **Victory**: Triumph-Fanfare
- **Interaction**: Kurzer Bestätigungston
- **Incident**: Alarm-Sound

## 📱 Kompatibilität

- ✅ Alle modernen Browser (Chrome, Firefox, Safari, Edge)
- ✅ Desktop & Laptop (optimiert für größere Bildschirme)
- ⚠️ Mobile Geräte (eingeschränkt - Tastatur erforderlich)
- ✅ localStorage muss aktiviert sein für Progress Saving

## 🎓 Pädagogischer Wert

### Schulungsmodul
- Umfassende theoretische Grundlagen
- Strukturierte Wissensvermittlung
- Farbcodierte Hinweise (Gelb/Rot/Grün)
- Praxisnahe Beispiele

### Praktisches Training
- **Realistische Szenarien** aus dem Arbeitsalltag
- **Sofortiges Feedback** mit ausführlichen Erklärungen
- **Wiederholung**: Falsche Antworten müssen wiederholt werden
- **Zufällige Reihenfolge**: Keine Muster, kein Auswendiglernen
- **Spielerisches Lernen** steigert Motivation und Retention

### Erfolgsmessung
- Detaillierte Statistiken
- Badge-System für verschiedene Leistungen
- Zertifikat mit Zeiterfassung
- Perfect Score Bonus für 100%

## 🏆 Badge-System

- **🛡️ Security Pro** - Für Abschluss des Trainings (immer)
- **⚡ Quick Thinker** - Mindestens 5 Incidents richtig gelöst
- **🎯 Perfect Score** - Mindestens 90% Erfolgsquote

## 💾 Progress Saving

- **Automatisches Speichern**: Bei jedem Score-Update
- **24h Gültigkeit**: Speicher verfällt nach einem Tag
- **Was wird gespeichert**:
  - Aktueller Score
  - NPC-Fortschritt (welche Fragen beantwortet)
  - Verwendete Incidents
  - Spielzeit
- **Neues Spiel**: Orange Button zum manuellen Zurücksetzen

## 🚀 Mögliche Erweiterungen

### Bereits implementiert ✅
- ✅ Schulungsmodul vor dem Spiel
- ✅ Mehrere Fragen pro NPC
- ✅ Random Security Incidents
- ✅ Badge-System und Zertifikat
- ✅ Sound Effects
- ✅ Keyboard Shortcuts
- ✅ Progress Saving
- ✅ Time Tracking
- ✅ Perfect Score Bonus

### Ideen für die Zukunft
- 📱 Mobile Touch-Steuerung
- 🌍 Mehrsprachigkeit (Englisch)
- 🗺️ Größere Map mit mehreren Räumen
- 👥 Multiplayer-Modus
- 📊 Admin-Dashboard mit Team-Statistiken
- 🎯 Schwierigkeitsstufen
- 🏅 Erweiterte Achievements
- 💬 Mehr Incidents und NPCs

## 📄 Lizenz

Entwickelt für die **Wiener Stadtwerke GmbH** - Security Awareness Training
IT-Dienstleister: **Wien IT**

## 👨‍💻 Entwicklung

Erstellt mit ❤️ für bessere IT-Sicherheit bei den Wiener Stadtwerken.

### Technische Highlights
- Vollständig in Vanilla JavaScript ohne Frameworks
- Modulare Datenstruktur (separate Dateien für NPCs, Incidents, Training)
- Smooth NPC-Bewegungen mit Vektor-Mathematik
- Responsive Speech Bubbles mit Canvas-Koordinaten
- Dynamisches Audio-System mit Web Audio API
- LocalStorage-Integration mit Fehlerbehandlung

---

**Viel Spaß beim Spielen und Lernen! 🛡️🎮**

*Stay secure, stay aware!*
