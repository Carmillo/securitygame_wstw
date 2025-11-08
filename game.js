// IT-Security Adventure Game for Wiener Stadtwerke
// Pokemon-style top-down game with 8-bit music

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game constants
const TILE_SIZE = 32;
const PLAYER_SPEED = 2;

// Game state
let player = {
    x: 400,
    y: 300,
    width: TILE_SIZE,
    height: TILE_SIZE,
    speed: PLAYER_SPEED,
    direction: 'down',
    frame: 0,
    animationCounter: 0
};

let keys = {};
let dialogActive = false;
let quizActive = false;
let currentNPC = null;
let score = 0;
let completedQuizzes = new Set();

// Audio context for 8-bit music
let audioContext;
let musicPlaying = false;
let musicGainNode;
let currentOscillators = [];

// NPCs with IT-Security topics
const npcs = [
    {
        id: 'phishing',
        x: 200,
        y: 150,
        color: '#ff6b6b',
        name: 'Security-Experte Alex',
        dialog: [
            'Hallo! Ich bin Alex vom IT-Security Team.',
            'Weißt du, wie man Phishing-Mails erkennt?',
            'Lass mich dein Wissen testen!'
        ],
        quiz: {
            question: 'Eine E-Mail fordert dich auf, dringend dein Passwort zu ändern. Was tust du?',
            options: [
                { text: 'Sofort auf den Link klicken', correct: false },
                { text: 'Die E-Mail ignorieren und direkt über Browser zur Website gehen', correct: true },
                { text: 'Antworten und nach mehr Infos fragen', correct: false },
                { text: 'Das Passwort in der Mail angeben', correct: false }
            ],
            explanation: 'Richtig! Niemals auf Links in verdächtigen E-Mails klicken. Immer direkt über den Browser zur offiziellen Website navigieren!'
        }
    },
    {
        id: 'password',
        x: 600,
        y: 150,
        color: '#51cf66',
        name: 'IT-Admin Sarah',
        dialog: [
            'Hi! Ich kümmere mich um Passwort-Sicherheit.',
            'Sichere Passwörter sind extrem wichtig!',
            'Weißt du, wie man sie richtig verwendet?'
        ],
        quiz: {
            question: 'Welches ist das sicherste Passwort?',
            options: [
                { text: 'Passwort123', correct: false },
                { text: 'MeinName2024', correct: false },
                { text: 'asd!K9$mP2@xL7#qR', correct: true },
                { text: 'WienerStadtwerke', correct: false }
            ],
            explanation: 'Perfekt! Lange, zufällige Passwörter mit Sonderzeichen sind am sichersten. Verwende einen Passwort-Manager!'
        }
    },
    {
        id: 'social',
        x: 150,
        y: 400,
        color: '#ffd43b',
        name: 'Social-Engineering-Detektiv Max',
        dialog: [
            'Moin! Ich bin Max und jage Social Engineers.',
            'Diese Betrüger nutzen psychologische Tricks!',
            'Kannst du sie durchschauen?'
        ],
        quiz: {
            question: 'Jemand ruft an und gibt sich als IT-Support aus. Er braucht dein Passwort. Was machst du?',
            options: [
                { text: 'Passwort nennen, es ist ja IT-Support', correct: false },
                { text: 'Auflegen und offiziellen IT-Support kontaktieren', correct: true },
                { text: 'Nur den ersten Teil des Passworts verraten', correct: false },
                { text: 'Passwort per E-Mail schicken', correct: false }
            ],
            explanation: 'Genau richtig! NIEMALS Passwörter am Telefon weitergeben. Immer über offizielle Kanäle verifizieren!'
        }
    },
    {
        id: 'cleandesk',
        x: 650,
        y: 400,
        color: '#4dabf7',
        name: 'Clean-Desk-Champion Lisa',
        dialog: [
            'Servus! Ich achte auf Clean-Desk-Policy.',
            'Ein aufgeräumter Schreibtisch ist sicherer!',
            'Weißt du warum?'
        ],
        quiz: {
            question: 'Was solltest du tun, wenn du deinen Arbeitsplatz verlässt?',
            options: [
                { text: 'Computer eingeschaltet lassen', correct: false },
                { text: 'Bildschirm sperren (Windows + L)', correct: true },
                { text: 'Passwörter auf Post-Its lassen', correct: false },
                { text: 'Vertrauliche Dokumente offen liegen lassen', correct: false }
            ],
            explanation: 'Super! Immer den Bildschirm sperren und keine vertraulichen Infos offen liegen lassen!'
        }
    },
    {
        id: 'usb',
        x: 400,
        y: 500,
        color: '#9775fa',
        name: 'USB-Wächter Tom',
        dialog: [
            'Hey! Ich warne vor gefährlichen USB-Sticks.',
            'Ein unbekannter USB-Stick kann Malware enthalten!',
            'Wie gehst du damit um?'
        ],
        quiz: {
            question: 'Du findest einen USB-Stick auf dem Parkplatz. Was tust du?',
            options: [
                { text: 'Sofort am Arbeits-PC einstecken', correct: false },
                { text: 'Beim IT-Security Team abgeben', correct: true },
                { text: 'Mit nach Hause nehmen', correct: false },
                { text: 'Am privaten Laptop öffnen', correct: false }
            ],
            explanation: 'Richtig! Unbekannte USB-Sticks NIEMALS einstecken. Das ist eine häufige Angriffsmethode!'
        }
    }
];

// Walls and obstacles
const walls = [
    // Border walls
    { x: 0, y: 0, width: 800, height: 20 },
    { x: 0, y: 0, width: 20, height: 600 },
    { x: 780, y: 0, width: 20, height: 600 },
    { x: 0, y: 580, width: 800, height: 20 },
    // Office furniture
    { x: 300, y: 250, width: 200, height: 30 },
    { x: 100, y: 280, width: 80, height: 40 },
    { x: 620, y: 280, width: 80, height: 40 }
];

// Initialize audio
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        musicGainNode = audioContext.createGain();
        musicGainNode.connect(audioContext.destination);
        musicGainNode.gain.value = 0.3;
    }
}

// 8-bit music generation
function playNote(frequency, duration, startTime) {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.connect(gain);
    gain.connect(musicGainNode);

    osc.frequency.value = frequency;
    osc.type = 'square'; // 8-bit sound

    gain.gain.setValueAtTime(0.1, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    osc.start(startTime);
    osc.stop(startTime + duration);

    currentOscillators.push(osc);
}

// Catchy 8-bit melody for background music
function playBackgroundMusic() {
    if (!audioContext || !musicPlaying) return;

    const now = audioContext.currentTime;
    const beatDuration = 0.15;

    // Simple catchy melody (similar to Pokemon style)
    const melody = [
        523.25, 587.33, 659.25, 587.33, // C D E D
        523.25, 440.00, 493.88, 523.25, // C A B C
        587.33, 659.25, 698.46, 659.25, // D E F E
        587.33, 523.25, 587.33, 493.88, // D C D B
    ];

    // Bass line
    const bass = [
        261.63, 261.63, 329.63, 329.63, // C C E E
        220.00, 220.00, 246.94, 246.94, // A A B B
        293.66, 293.66, 349.23, 349.23, // D D F F
        293.66, 261.63, 293.66, 246.94  // D C D B
    ];

    for (let i = 0; i < melody.length; i++) {
        playNote(melody[i], beatDuration * 0.8, now + i * beatDuration);
        playNote(bass[i] / 2, beatDuration * 0.8, now + i * beatDuration); // Bass octave lower
    }

    // Loop the music
    setTimeout(() => {
        if (musicPlaying) {
            playBackgroundMusic();
        }
    }, melody.length * beatDuration * 1000);
}

// Toggle music
document.getElementById('musicToggle').addEventListener('click', function() {
    initAudio();

    musicPlaying = !musicPlaying;
    this.textContent = musicPlaying ? '🔊 Musik: AN' : '🔇 Musik: AUS';

    if (musicPlaying) {
        playBackgroundMusic();
    } else {
        currentOscillators.forEach(osc => {
            try { osc.stop(); } catch(e) {}
        });
        currentOscillators = [];
    }
});

// Sound effect
function playInteractionSound() {
    if (!audioContext) return;

    const now = audioContext.currentTime;
    playNote(659.25, 0.1, now);
    playNote(783.99, 0.1, now + 0.1);
}

// Input handling
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;

    if (e.code === 'Space') {
        e.preventDefault();
        handleSpaceBar();
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Handle spacebar for interactions
function handleSpaceBar() {
    if (quizActive) return;

    if (dialogActive) {
        closeDialog();
    } else {
        checkNPCInteraction();
    }
}

// Check if player is near an NPC
function checkNPCInteraction() {
    for (let npc of npcs) {
        const dist = Math.sqrt(
            Math.pow(player.x - npc.x, 2) +
            Math.pow(player.y - npc.y, 2)
        );

        if (dist < 60) {
            if (!completedQuizzes.has(npc.id)) {
                interactWithNPC(npc);
                playInteractionSound();
            } else {
                showDialog('Du hast diese Challenge bereits gemeistert! 🎉', 'System');
            }
            return;
        }
    }
}

// Interact with NPC
function interactWithNPC(npc) {
    currentNPC = npc;
    let fullDialog = npc.dialog.join('\n\n');
    showDialog(fullDialog, npc.name);
}

// Show dialog
function showDialog(text, name) {
    dialogActive = true;
    document.getElementById('dialogName').textContent = name;
    document.getElementById('dialogText').textContent = text;
    document.getElementById('dialogBox').classList.add('show');
}

// Close dialog and show quiz
function closeDialog() {
    dialogActive = false;
    document.getElementById('dialogBox').classList.remove('show');

    if (currentNPC && !completedQuizzes.has(currentNPC.id)) {
        setTimeout(() => showQuiz(currentNPC), 300);
    }
    currentNPC = null;
}

// Show quiz
function showQuiz(npc) {
    quizActive = true;
    const quiz = npc.quiz;

    document.getElementById('quizQuestion').textContent = quiz.question;

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    quiz.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => handleQuizAnswer(option.correct, quiz.explanation, npc.id, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('quizBox').classList.add('show');
}

// Handle quiz answer
function handleQuizAnswer(correct, explanation, npcId, optionDiv) {
    if (correct) {
        optionDiv.classList.add('correct');
        score++;
        completedQuizzes.add(npcId);
        updateScore();

        setTimeout(() => {
            alert('✅ Richtig!\n\n' + explanation);
            closeQuiz();

            if (score === npcs.length) {
                setTimeout(() => {
                    alert('🏆 GRATULATION! 🏆\n\nDu hast alle IT-Security Challenges gemeistert!\n\nDu bist jetzt ein Security-Champion bei den Wiener Stadtwerken! 🛡️');
                }, 500);
            }
        }, 500);
    } else {
        optionDiv.classList.add('wrong');
        setTimeout(() => {
            alert('❌ Nicht ganz richtig!\n\nVersuch es nochmal!');
            closeQuiz();
        }, 500);
    }
}

// Close quiz
function closeQuiz() {
    quizActive = false;
    document.getElementById('quizBox').classList.remove('show');
}

// Update score display
function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

// Check collision with walls
function checkCollision(newX, newY) {
    const playerRect = {
        x: newX,
        y: newY,
        width: player.width,
        height: player.height
    };

    for (let wall of walls) {
        if (rectanglesCollide(playerRect, wall)) {
            return true;
        }
    }

    return false;
}

// Rectangle collision detection
function rectanglesCollide(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// Update game state
function update() {
    if (dialogActive || quizActive) return;

    let newX = player.x;
    let newY = player.y;
    let moving = false;

    if (keys['ArrowUp']) {
        newY -= player.speed;
        player.direction = 'up';
        moving = true;
    }
    if (keys['ArrowDown']) {
        newY += player.speed;
        player.direction = 'down';
        moving = true;
    }
    if (keys['ArrowLeft']) {
        newX -= player.speed;
        player.direction = 'left';
        moving = true;
    }
    if (keys['ArrowRight']) {
        newX += player.speed;
        player.direction = 'right';
        moving = true;
    }

    // Update animation
    if (moving) {
        player.animationCounter++;
        if (player.animationCounter % 10 === 0) {
            player.frame = (player.frame + 1) % 2;
        }
    } else {
        player.frame = 0;
    }

    // Check collision and update position
    if (!checkCollision(newX, newY)) {
        player.x = newX;
        player.y = newY;
    }
}

// Draw pixel character
function drawCharacter(x, y, color, direction, frame) {
    const pixelSize = 4;
    const offsetX = frame * 2 - 1; // Simple walk animation

    // Head
    ctx.fillStyle = '#fcc89b';
    ctx.fillRect(x + 8, y + 4, 16, 12);

    // Eyes
    ctx.fillStyle = '#000';
    ctx.fillRect(x + 10 + offsetX, y + 8, 3, 3);
    ctx.fillRect(x + 18 - offsetX, y + 8, 3, 3);

    // Body
    ctx.fillStyle = color;
    ctx.fillRect(x + 6, y + 16, 20, 10);

    // Arms
    ctx.fillStyle = color;
    if (direction === 'left') {
        ctx.fillRect(x + 2, y + 16, 4, 8);
        ctx.fillRect(x + 26, y + 18, 4, 6);
    } else if (direction === 'right') {
        ctx.fillRect(x + 2, y + 18, 4, 6);
        ctx.fillRect(x + 26, y + 16, 4, 8);
    } else {
        ctx.fillRect(x + 2, y + 18, 4, 8);
        ctx.fillRect(x + 26, y + 18, 4, 8);
    }

    // Legs
    ctx.fillStyle = '#4a4a4a';
    ctx.fillRect(x + 8 + offsetX, y + 26, 6, 6);
    ctx.fillRect(x + 18 - offsetX, y + 26, 6, 6);
}

// Draw NPC with exclamation mark if not completed
function drawNPC(npc) {
    drawCharacter(npc.x - 16, npc.y - 16, npc.color, 'down', 0);

    // Show exclamation mark if quest not completed
    if (!completedQuizzes.has(npc.id)) {
        ctx.fillStyle = '#ff0000';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('!', npc.x, npc.y - 25);
    } else {
        ctx.fillStyle = '#00ff00';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('✓', npc.x, npc.y - 25);
    }
}

// Render game
function render() {
    // Clear canvas
    ctx.fillStyle = '#4a7c59';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw floor pattern
    ctx.fillStyle = '#5a8c69';
    for (let x = 0; x < canvas.width; x += TILE_SIZE * 2) {
        for (let y = 0; y < canvas.height; y += TILE_SIZE * 2) {
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        }
    }

    // Draw walls
    ctx.fillStyle = '#2d3e3f';
    walls.forEach(wall => {
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });

    // Draw office furniture
    ctx.fillStyle = '#8b5a3c';
    ctx.fillRect(300, 250, 200, 30);
    ctx.fillRect(100, 280, 80, 40);
    ctx.fillRect(620, 280, 80, 40);

    // Draw NPCs
    npcs.forEach(npc => drawNPC(npc));

    // Draw player
    drawCharacter(player.x - 16, player.y - 16, '#3498db', player.direction, player.frame);

    // Draw title
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, 40);
    ctx.fillStyle = '#00d9ff';
    ctx.font = 'bold 20px Courier New';
    ctx.fillText('🛡️ IT-Security Büro - Wiener Stadtwerke', 180, 27);

    // Draw instructions if no quizzes completed
    if (score === 0) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(200, 250, 400, 100);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Courier New';
        ctx.fillText('Willkommen im IT-Security Training!', 230, 280);
        ctx.font = '14px Courier New';
        ctx.fillText('Gehe zu den NPCs mit ! und drücke SPACE', 220, 310);
        ctx.fillText('um IT-Security Challenges zu starten!', 230, 330);
    }
}

// Game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();

// Start music automatically after 1 second
setTimeout(() => {
    initAudio();
    musicPlaying = true;
    document.getElementById('musicToggle').textContent = '🔊 Musik: AN';
    playBackgroundMusic();
}, 1000);
