# 🎮 IT-Security Adventure 3D

Ein **vollständiges 3D-Spiel** für IT-Sicherheits-Training mit **moderner Grafik und Physik-Engine**.

---

## 🌟 Features

### 🎨 Hochwertige 3D-Grafik
- **Three.js WebGL** - Moderne 3D-Grafik im Browser
- **Dynamische Beleuchtung** mit Schatten (DirectionalLight + PointLights)
- **Realistische Materialien** (PBR - Physically Based Rendering)
- **Post-Processing** für bessere Optik
- **Smooth Kamera-Bewegungen**

### ⚙️ Physik-Engine
- **Cannon.js** - Vollständige 3D-Physik-Simulation
- **Realistische Kollisionserkennung**
- **Schwerkraft und Bewegung**
- **Springen und First-Person Movement**

### 🏢 3D-Büro-Umgebung
- **Große Office-Welt** (60x60 Einheiten)
- **Mehrere Räume** mit Wänden und Türen
- **Realistische Möbel**:
  - 8 Schreibtische mit Computern
  - Konferenztisch mit Stühlen
  - Pflanzen als Dekoration
  - Whiteboards an den Wänden
- **Begehbare Umgebung** mit First-Person Perspektive

### 🎮 Gameplay
- **First-Person Controller**:
  - **WASD** - Bewegung
  - **Maus** - Umschauen (Pointer Lock)
  - **E** - Mit NPCs interagieren
  - **Leertaste** - Springen
  - **ESC** - Dialog schließen / Pause

- **12 NPCs** als 3D-Charaktere:
  - Realistische Humanoid-Modelle
  - Farbcodiert nach Rolle
  - Nametags über den Köpfen
  - 39 Quiz-Fragen zu IT-Sicherheit

- **Interaktionssystem**:
  - Raycast-basierte Interaktion
  - Crosshair zur Orientierung
  - Interaktions-Prompts bei NPCs
  - UI-Overlays für Dialoge

### 🔊 Audio-System
- **8-bit Retro-Musik** (Web Audio API)
- **Sound-Effekte**:
  - Erfolgs-Sound bei richtiger Antwort
  - Fehler-Sound bei falscher Antwort
  - Incident-Warnungen
- **Dynamische Lautstärkeregelung**

### ⚠️ Sicherheitsvorfälle (Incidents)
- **15 zufällige Sicherheitsszenarien**
- Erscheinen alle 30-90 Sekunden
- Interaktive Entscheidungen mit Punkten
- Realistische IT-Security-Situationen

### 📊 Spielmechaniken
- **Punktesystem** (100 Punkte pro korrekter Antwort)
- **Fortschritts-Tracking** (NPCs abgeschlossen)
- **Zeitmessung**
- **Completion-Screen** mit Statistiken

---

## 🚀 Installation & Start

### Voraussetzungen
- Moderner Webbrowser (Chrome, Firefox, Edge, Safari)
- Lokaler Webserver (z.B. Python, Node.js, oder VS Code Live Server)

### Schnellstart

1. **Repository klonen oder herunterladen**

2. **Lokalen Webserver starten**:

   **Option A - Python:**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -SimpleHTTPServer 8000
   ```

   **Option B - Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```

   **Option C - VS Code:**
   - Extension "Live Server" installieren
   - Rechtsklick auf `game3d.html` → "Open with Live Server"

3. **Spiel öffnen**:
   - Browser öffnen: `http://localhost:8000/game3d.html`

4. **Spielen**:
   - Auf "Spiel Starten" klicken
   - Pointer Lock aktivieren (Mausklick)
   - Loslaufen und NPCs finden!

---

## 🎯 Spielanleitung

### Ziel
Besuche **alle 12 NPCs** im Büro und beantworte ihre IT-Sicherheits-Fragen korrekt.

### Steuerung

| Taste | Aktion |
|-------|--------|
| **W** | Vorwärts |
| **A** | Links |
| **S** | Rückwärts |
| **D** | Rechts |
| **Maus** | Umschauen |
| **E** | Interagieren |
| **Leertaste** | Springen |
| **ESC** | Dialog schließen |

### Gameplay-Flow

1. **Erkunde das Büro**
   - Bewege dich frei in der 3D-Umgebung
   - Suche nach NPCs (farbige Charaktere)
   - NPCs haben Nametags über dem Kopf

2. **Interagiere mit NPCs**
   - Schaue einen NPC an (Crosshair)
   - Wenn nah genug: "Drücke [E] um zu interagieren"
   - Beantworte die IT-Sicherheits-Frage

3. **Beantworte Fragen**
   - Wähle die richtige Antwort
   - **Richtig**: +100 Punkte, NPC wird grün
   - **Falsch**: Keine Punkte, aber du lernst daraus

4. **Reagiere auf Incidents**
   - Zufällige Sicherheitsvorfälle erscheinen
   - Triff die richtige Entscheidung
   - Verdiene Extra-Punkte

5. **Abschluss**
   - Alle 12 NPCs abschließen
   - Statistiken ansehen
   - Optional: Neustarten

---

## 🏗️ Technische Details

### Technologie-Stack

| Technologie | Zweck |
|-------------|-------|
| **Three.js (r128)** | 3D-Grafik-Engine (WebGL) |
| **Cannon.js (0.6.2)** | Physik-Engine |
| **Vanilla JavaScript** | Spiel-Logik |
| **HTML5 Canvas** | Rendering |
| **Web Audio API** | Sound und Musik |

### Projekt-Struktur

```
securitygame_wstw/
├── game3d.html         # Haupt-HTML (3D-Version)
├── game3d.js           # 3D-Spiel-Logik (1000+ Zeilen)
├── npcs_data.js        # NPC-Daten (12 Charaktere)
├── incidents_data.js   # Sicherheitsvorfälle (15 Szenarien)
├── training_data.js    # Training-Modul
├── languages.js        # Multi-Sprach-System
├── README_3D.md        # Diese Datei
│
├── index.html          # Original 2D-Spiel
├── game.js             # 2D-Spiel-Logik
└── ...                 # Weitere 2D-Assets
```

### Performance

- **60 FPS** auf modernen Systemen
- **Optimiert** für Desktop-Browser
- **Physik-Simulation**: 60 Hz
- **Shadow Maps**: 2048x2048
- **Mobile**: Funktioniert, aber langsamer

---

## 🎨 3D-Umgebung Details

### Büro-Layout

```
┌─────────────────────────────────────┐
│  🪴              🪴                  │
│                                     │
│  🪑   💻    💻    🪑                │
│  🪑   📊    📊    🪑  Conference    │
│                                     │
│  💻    💻    💻    💻   Desks       │
│                                     │
│  👤    👤    👤    👤   NPCs        │
│                                     │
│  🪴              🪴                  │
└─────────────────────────────────────┘
```

### Objekte
- **Boden**: 60x60m grauer Teppich
- **Decke**: 5m Höhe, weiß
- **Wände**: Hellgrau, mit Doors
- **8 Schreibtische** mit Monitoren
- **1 Konferenztisch** mit 4 Stühlen
- **4 Pflanzen** in den Ecken
- **1 Whiteboard** an der Nordwand
- **12 NPCs** verteilt im Büro

### Beleuchtung
- **Ambient Light**: 40% Helligkeit
- **Directional Light**: Sonne (60%), wirft Schatten
- **3 Point Lights**: Büro-Beleuchtung

---

## 🆚 Vergleich: 2D vs 3D

| Feature | 2D-Version (index.html) | 3D-Version (game3d.html) |
|---------|------------------------|--------------------------|
| **Grafik** | Pixel-Art Canvas | Three.js WebGL |
| **Perspektive** | Top-Down | First-Person |
| **Bewegung** | Arrow Keys / WASD | WASD + Maus |
| **Physik** | Keine | Cannon.js |
| **Immersion** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | Sehr schnell | Schnell |
| **Mobile** | ✅ Optimiert | ⚠️ Funktioniert |
| **Dateigröße** | Klein | Mittel |

---

## 🔧 Anpassung & Erweiterung

### NPCs hinzufügen
Bearbeite `npcs_data.js`:
```javascript
{
    name: "Neuer NPC",
    topic: "Thema",
    greeting: "Hallo!",
    questions: [
        {
            question: "Deine Frage?",
            answers: ["A", "B", "C", "D"],
            correctAnswer: 0
        }
    ]
}
```

### 3D-Modelle ändern
In `game3d.js` → Funktion `createNPCs()`:
- Ändere Farben: `getRandomColor()`
- Ändere Größen: `BoxGeometry(width, height, depth)`
- Ändere Positionen: `npcPositions` Array

### Büro erweitern
In `game3d.js` → Funktion `createOfficeEnvironment()`:
- Füge neue Wände hinzu: `createWalls()`
- Erstelle neue Räume
- Füge Möbel hinzu: `createFurniture()`

### Beleuchtung anpassen
In `game3d.js` → Funktion `setupLights()`:
- Ändere Lichtfarben
- Füge mehr Lichter hinzu
- Passe Schatten an

---

## 🐛 Bekannte Limitierungen

- **Keine komplexen 3D-Modelle**: NPCs sind einfache Geometrien (Box + Sphere)
- **Keine Texturen**: Verwendet Flat-Colors statt Textures
- **Einfache Physik**: Spieler ist eine Kugel (keine Kapsel)
- **Keine Multiplayer-Unterstützung**
- **Mobile Performance**: Kann auf älteren Geräten langsam sein

---

## 🔮 Mögliche Erweiterungen

### Kurzfristig
- [ ] GLB/GLTF 3D-Modelle für NPCs
- [ ] Texturen für Wände und Boden
- [ ] Mehr Räume (Serverraum, Küche, Meeting-Räume)
- [ ] Türen, die sich öffnen lassen
- [ ] Minimap in der UI

### Mittelfristig
- [ ] Third-Person Modus
- [ ] Inventar-System
- [ ] More interaktive Objekte (Computer, Drucker)
- [ ] Animierte NPCs (Idle-Animationen)
- [ ] Partikeleffekte

### Langfristig
- [ ] Multiplayer (WebRTC)
- [ ] VR-Unterstützung (WebXR)
- [ ] Mobile Touch-Controls
- [ ] Level-System mit mehreren Etagen
- [ ] Achievement-System

---

## 📝 Lizenz

© 2025 TechCorp Industries
Erstellt für IT-Sicherheits-Training

---

## 🙏 Credits

- **Three.js**: https://threejs.org/
- **Cannon.js**: https://github.com/schteppe/cannon.js
- **Original 2D-Spiel**: Basis für Inhalte und Logik
- **Entwickelt für**: Wiener Stadtwerke (WSTW)

---

## 📞 Support

Bei Fragen oder Problemen:
1. Überprüfe die Browser-Konsole (F12)
2. Stelle sicher, dass ein Webserver läuft
3. Teste in einem modernen Browser

---

**Viel Spaß beim Spielen! 🎮🔒**
