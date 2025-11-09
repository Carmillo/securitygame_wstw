// IT-Security Adventure Game for TechCorp Industries
// Pokemon-style top-down game with 8-bit music

// Training system
let trainingComplete = false;
let currentTrainingPage = 0;

// Time tracking
let gameStartTime = null;
let trainingStartTime = Date.now();

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

// Detect if device is touch-enabled
const isTouchDevice = ('ontouchstart' in window) ||
                      (navigator.maxTouchPoints > 0) ||
                      (navigator.msMaxTouchPoints > 0);

let keys = {};
let dialogActive = false;
let quizActive = false;
let currentNPC = null;
let score = 0;
let completedQuizzes = new Set();
let welcomeShown = false;
let isTransitioning = false;
let currentQuestionIndex = 0;
let npcProgress = {}; // Tracks which questions each NPC has completed

// Incident system
let incidentActive = false;
let incidentTimeoutId = null;
let nextIncidentTime = 0;
let usedIncidents = new Set();
let incidentScore = 0;

// NPC movement
let npcMovementInterval = null;
let npcTargets = {}; // Target positions for NPCs

// Audio context for 8-bit music
let audioContext;
let musicPlaying = false;
let musicGainNode;
let currentOscillators = [];
let backgroundMusicTimeout = null;
let quizMusicTimeout = null;
let isQuizMusicPlaying = false;

// Load NPCs from external file (language-aware)
let npcs = [];
let totalQuestions = 0;

// Function to load language-specific data
function loadLanguageData() {
    // Select data based on current language
    if (currentLanguage === 'en') {
        npcs = typeof npcsDataEn !== 'undefined' ? npcsDataEn : npcsData;
    } else {
        npcs = npcsData;
    }

    // Calculate total questions
    totalQuestions = 0;
    npcs.forEach(npc => {
        totalQuestions += npc.quizzes.length;
    });

    // Initialize NPC progress tracking and targets
    npcs.forEach(npc => {
        if (!npcProgress[npc.id]) {
            npcProgress[npc.id] = {
                currentQuestion: 0,
                completed: false
            };
        }
        // Initialize target position same as current position
        if (!npcTargets[npc.id]) {
            npcTargets[npc.id] = { x: npc.x, y: npc.y };
        }
    });

    // Update score display with total
    document.getElementById('totalQuestions').textContent = totalQuestions;
}

// Initialize with default data
loadLanguageData();

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
    if (!audioContext || !musicPlaying || isQuizMusicPlaying) return;

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
    backgroundMusicTimeout = setTimeout(() => {
        if (musicPlaying && !isQuizMusicPlaying) {
            playBackgroundMusic();
        }
    }, melody.length * beatDuration * 1000);
}

// Quiz music - more intense and mysterious
function playQuizMusic() {
    if (!audioContext || !musicPlaying) return;

    const now = audioContext.currentTime;
    const beatDuration = 0.18;

    // Tense quiz melody - more dramatic
    const melody = [
        392.00, 440.00, 466.16, 440.00, // G A Bb A
        392.00, 349.23, 392.00, 440.00, // G F G A
        466.16, 523.25, 587.33, 523.25, // Bb C D C
        466.16, 440.00, 392.00, 349.23, // Bb A G F
    ];

    // More aggressive bass
    const bass = [
        196.00, 196.00, 233.08, 233.08, // G G Bb Bb
        174.61, 174.61, 196.00, 196.00, // F F G G
        233.08, 261.63, 293.66, 261.63, // Bb C D C
        233.08, 220.00, 196.00, 174.61  // Bb A G F
    ];

    for (let i = 0; i < melody.length; i++) {
        playNote(melody[i], beatDuration * 0.7, now + i * beatDuration);
        playNote(bass[i] / 2, beatDuration * 0.9, now + i * beatDuration);
    }

    // Loop the quiz music
    quizMusicTimeout = setTimeout(() => {
        if (musicPlaying && isQuizMusicPlaying) {
            playQuizMusic();
        }
    }, melody.length * beatDuration * 1000);
}

// Stop all music
function stopAllMusic() {
    if (backgroundMusicTimeout) {
        clearTimeout(backgroundMusicTimeout);
        backgroundMusicTimeout = null;
    }
    if (quizMusicTimeout) {
        clearTimeout(quizMusicTimeout);
        quizMusicTimeout = null;
    }
}

// Switch to quiz music
function startQuizMusic() {
    if (!musicPlaying) return;

    stopAllMusic();
    isQuizMusicPlaying = true;
    playQuizMusic();
}

// Switch back to background music
function startBackgroundMusic() {
    if (!musicPlaying) return;

    stopAllMusic();
    isQuizMusicPlaying = false;
    playBackgroundMusic();
}

// Toggle music
document.getElementById('musicToggle').addEventListener('click', function() {
    initAudio();

    musicPlaying = !musicPlaying;
    const musicText = musicPlaying ?
        (currentLanguage === 'en' ? `🔊 ${t('ui.music')}: ${t('ui.musicOn')}` : `🔊 ${t('ui.music')}: ${t('ui.musicOn')}`) :
        (currentLanguage === 'en' ? `🔇 ${t('ui.music')}: ${t('ui.musicOff')}` : `🔇 ${t('ui.music')}: ${t('ui.musicOff')}`);
    this.textContent = musicText;

    if (musicPlaying) {
        if (isQuizMusicPlaying) {
            playQuizMusic();
        } else {
            playBackgroundMusic();
        }
    } else {
        stopAllMusic();
        currentOscillators.forEach(osc => {
            try { osc.stop(); } catch(e) {}
        });
        currentOscillators = [];
    }
});

// Manual incident trigger button removed (was for development only)

// New game button
document.getElementById('newGameButton').addEventListener('click', function() {
    if (confirm(t('ui.newGameConfirm'))) {
        clearProgress();
        location.reload();
    }
});

// Sound effects
function playInteractionSound() {
    if (!audioContext) return;

    const now = audioContext.currentTime;
    playNote(659.25, 0.1, now);
    playNote(783.99, 0.1, now + 0.1);
}

function playCorrectSound() {
    if (!audioContext) return;

    const now = audioContext.currentTime;
    // Happy ascending melody
    playNote(523.25, 0.1, now);        // C
    playNote(659.25, 0.1, now + 0.1);  // E
    playNote(783.99, 0.15, now + 0.2); // G
}

function playWrongSound() {
    if (!audioContext) return;

    const now = audioContext.currentTime;
    // Sad descending sound
    playNote(493.88, 0.15, now);       // B
    playNote(392.00, 0.15, now + 0.15); // G
    playNote(329.63, 0.2, now + 0.3);   // E
}

function playLevelUpSound() {
    if (!audioContext) return;

    const now = audioContext.currentTime;
    // Victory jingle
    playNote(523.25, 0.1, now);
    playNote(659.25, 0.1, now + 0.1);
    playNote(783.99, 0.1, now + 0.2);
    playNote(1046.50, 0.2, now + 0.3);
}

// Input handling
document.addEventListener('keydown', (e) => {
    // ESC key - close dialogs/feedback/incidents
    if (e.code === 'Escape') {
        e.preventDefault();
        if (document.getElementById('feedbackBox').classList.contains('show')) {
            document.getElementById('feedbackContinue').click();
        } else if (dialogActive && !quizActive) {
            closeDialog();
        }
        return;
    }

    // Only track arrow keys for movement
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        keys[e.key] = true;
        e.preventDefault();
    }

    // Space or Enter for interactions
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();

        // Enter in feedback box = continue
        if (document.getElementById('feedbackBox').classList.contains('show')) {
            document.getElementById('feedbackContinue').click();
            return;
        }

        handleSpaceBar();
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Handle spacebar for interactions
function handleSpaceBar() {
    // First priority: Dismiss welcome overlay if showing
    if (score === 0 && !welcomeShown && trainingComplete) {
        welcomeShown = true;
        return;
    }

    // Block spacebar during quiz, incidents, transitions, or feedback
    if (quizActive || isTransitioning || incidentActive) {
        return;
    }

    // Also check if feedback box is showing
    const feedbackBox = document.getElementById('feedbackBox');
    if (feedbackBox && feedbackBox.classList.contains('show')) {
        return;
    }

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
            const progress = npcProgress[npc.id];
            if (!progress.completed) {
                interactWithNPC(npc);
                playInteractionSound();
            } else {
                const message = currentLanguage === 'en' ?
                    `You've mastered all questions from ${npc.name}! 🎉` :
                    `Du hast alle Fragen von ${npc.name} gemeistert! 🎉`;
                showDialog(message, 'System');
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
    isTransitioning = true;
    document.getElementById('dialogBox').classList.remove('show');

    // Store NPC reference before clearing it
    const npcToQuiz = currentNPC;
    currentNPC = null;

    if (npcToQuiz && !completedQuizzes.has(npcToQuiz.id)) {
        setTimeout(() => {
            showQuiz(npcToQuiz);
            isTransitioning = false;
        }, 300);
    } else {
        isTransitioning = false;
    }
}

// Show quiz
function showQuiz(npc) {
    quizActive = true;
    hideSpeechBubble(); // Ensure speech bubble is hidden during quiz
    const progress = npcProgress[npc.id];
    const quiz = npc.quizzes[progress.currentQuestion];

    // Show progress in question text
    const questionNumber = progress.currentQuestion + 1;
    const totalQuestions = npc.quizzes.length;
    const questionText = currentLanguage === 'en' ?
        `${t('quiz.question')} ${questionNumber}/${totalQuestions}: ${quiz.question}` :
        `${t('quiz.question')} ${questionNumber}/${totalQuestions}: ${quiz.question}`;
    document.getElementById('quizQuestion').textContent = questionText;

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    // Randomize answer order to prevent patterns
    const shuffledOptions = [...quiz.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => handleQuizAnswer(option.correct, quiz.correctExplanation, quiz.wrongExplanation, npc.id, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('quizBox').classList.add('show');

    // Start quiz music
    startQuizMusic();
}

// Handle quiz answer
function handleQuizAnswer(correct, correctExplanation, wrongExplanation, npcId, optionDiv) {
    // Disable all options after selection
    const allOptions = document.querySelectorAll('.quiz-option');
    allOptions.forEach(opt => opt.style.pointerEvents = 'none');

    if (correct) {
        optionDiv.classList.add('correct');
        playCorrectSound(); // Sound effect
        score++;
        completedQuizzes.add(npcId);
        updateScore();

        setTimeout(() => {
            closeQuiz();
            showFeedback(true, correctExplanation, npcId);
        }, 800);
    } else {
        optionDiv.classList.add('wrong');
        playWrongSound(); // Sound effect
        setTimeout(() => {
            closeQuiz();
            showFeedback(false, wrongExplanation, npcId);
        }, 800);
    }
}

// Show feedback box
function showFeedback(isCorrect, explanation, npcId) {
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackExplanation = document.getElementById('feedbackExplanation');
    const feedbackContinue = document.getElementById('feedbackContinue');

    const progress = npcProgress[npcId];
    const npc = npcs.find(n => n.id === npcId);

    if (isCorrect) {
        feedbackIcon.textContent = '✅';
        feedbackTitle.textContent = t('quiz.correct');
        feedbackTitle.className = 'feedback-title correct';

        // Move to next question if correct
        progress.currentQuestion++;

        // Check if NPC is fully completed
        if (progress.currentQuestion >= npc.quizzes.length) {
            progress.completed = true;
            completedQuizzes.add(npcId);
            playLevelUpSound(); // Celebrate completing all questions from this NPC
        }
    } else {
        feedbackIcon.textContent = '❌';
        feedbackTitle.textContent = t('quiz.wrong');
        feedbackTitle.className = 'feedback-title wrong';
        // Don't advance question on wrong answer - try again
    }

    feedbackExplanation.textContent = explanation;
    feedbackBox.classList.add('show');

    // Handle continue button
    feedbackContinue.onclick = () => {
        closeFeedback();

        // Check if this NPC has more questions
        if (isCorrect && !progress.completed) {
            // Show next question
            setTimeout(() => {
                currentNPC = npc;
                isTransitioning = true;
                setTimeout(() => {
                    showQuiz(npc);
                    isTransitioning = false;
                }, 300);
            }, 300);
        } else if (isCorrect && progress.completed) {
            // Check if ALL NPCs are completed
            const allCompleted = npcs.every(n => npcProgress[n.id].completed);
            if (allCompleted) {
                setTimeout(() => {
                    showVictoryMessage();
                }, 500);
            }
        }
    };
}

// Close feedback box
function closeFeedback() {
    document.getElementById('feedbackBox').classList.remove('show');

    // Switch back to background music when feedback closes
    startBackgroundMusic();
}

// Show epic victory screen with rewards
function showVictoryMessage() {
    // Calculate stats
    const npcQuestions = totalQuestions;
    const successRate = Math.round((score / (totalQuestions + incidentScore)) * 100);
    const playTimeMinutes = gameStartTime ? Math.floor((Date.now() - gameStartTime) / 1000 / 60) : 0;

    // Submit to leaderboard
    if (typeof submitToLeaderboard === 'function') {
        submitToLeaderboard(score, score, totalQuestions + incidentScore, playTimeMinutes, incidentScore);
    }

    // Show victory screen
    document.getElementById('victoryScreen').classList.add('show');
    document.getElementById('finalScore').textContent = score;
    document.getElementById('npcScore').textContent = `${score - incidentScore} / ${npcQuestions}`;
    document.getElementById('incidentScoreDisplay').textContent = incidentScore;
    document.getElementById('successRate').textContent = successRate + '%';

    // Award badges based on performance
    if (successRate >= 90) {
        document.getElementById('badge3').style.display = 'flex'; // Perfect Score
    } else {
        document.getElementById('badge3').style.opacity = '0.3';
    }

    if (incidentScore >= 5) {
        document.getElementById('badge2').style.display = 'flex'; // Quick Thinker
    } else {
        document.getElementById('badge2').style.opacity = '0.3';
    }

    // Security Pro badge always awarded for completion
    document.getElementById('badge1').style.display = 'flex';

    // Check for perfect score (bonus message)
    if (successRate === 100 && score === totalQuestions + incidentScore) {
        setTimeout(() => {
            const perfectMsg = currentLanguage === 'en' ?
                '🎉 PERFECT! You achieved 100%!\n\n🏅 You are a true Security Expert!\n\nThis result will be highlighted on your certificate.' :
                '🎉 PERFEKT! Du hast 100% erreicht!\n\n🏅 Du bist ein echter Security-Experte!\n\nDieses Ergebnis wird im Zertifikat hervorgehoben.';
            alert(perfectMsg);
        }, 1500);
    }

    // Play victory sound
    playVictorySound();
}

// Victory celebration sound
function playVictorySound() {
    if (!audioContext) return;

    const now = audioContext.currentTime;

    // Victory fanfare
    playNote(523.25, 0.2, now);        // C
    playNote(659.25, 0.2, now + 0.2);  // E
    playNote(783.99, 0.2, now + 0.4);  // G
    playNote(1046.50, 0.4, now + 0.6); // C (high)
}

// Print certificate function
function printCertificate() {
    const promptText = currentLanguage === 'en' ?
        'Your name for the certificate:' :
        'Dein Name für das Zertifikat:';
    const userName = prompt(promptText) || 'Security Champion';
    const locale = currentLanguage === 'en' ? 'en-US' : 'de-AT';
    const today = new Date().toLocaleDateString(locale);

    // Calculate time spent
    const totalTime = gameStartTime ? Math.floor((Date.now() - gameStartTime) / 1000 / 60) : 0; // minutes
    const timeLabel = currentLanguage === 'en' ? 'Processing time' : 'Bearbeitungszeit';
    const minutesLabel = currentLanguage === 'en' ? 'minutes' : 'Minuten';
    const timeText = totalTime > 0 ? `${timeLabel}: ${totalTime} ${minutesLabel}` : '';

    // Check for perfect score
    const successRate = Math.round((score / (totalQuestions + incidentScore)) * 100);
    const isPerfect = successRate === 100 && score === totalQuestions + incidentScore;
    const perfectTextContent = currentLanguage === 'en' ?
        '🏅 PERFECT! 100% achieved! 🏅' :
        '🏅 PERFEKT! 100% erreicht! 🏅';
    const perfectText = isPerfect ? `<p style="color: #ffd700; font-size: 28px; margin-top: 20px;"><strong>${perfectTextContent}</strong></p>` : '';

    // Translations for certificate
    const certTitle = currentLanguage === 'en' ? 'CERTIFICATE' : 'ZERTIFIKAT';
    const certSubtitle = currentLanguage === 'en' ?
        'IT-Security Awareness Training' :
        'IT-Security Awareness Training';
    const certText1 = currentLanguage === 'en' ?
        'This certifies that' :
        'Hiermit wird bescheinigt, dass';
    const certText2 = currentLanguage === 'en' ?
        'has successfully completed the IT-Security Awareness Training of' :
        'das IT-Security Awareness Training der';
    const certText3 = currentLanguage === 'en' ?
        'successfully completed.' :
        'erfolgreich absolviert hat.';
    const pointsLabel = currentLanguage === 'en' ? 'Points achieved' : 'Erreichte Punkte';
    const successLabel = currentLanguage === 'en' ? 'Success rate' : 'Erfolgsquote';
    const providerText = currentLanguage === 'en' ?
        'IT Service Provider: IT Services Team' :
        'IT-Dienstleister: IT Services Team';

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>IT-Security ${certTitle}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                .certificate {
                    background: white;
                    padding: 60px;
                    border: 10px solid gold;
                    border-radius: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                    box-shadow: 0 0 40px rgba(0,0,0,0.3);
                }
                h1 { color: #0066CC; font-size: 48px; margin-bottom: 20px; }
                h2 { color: #E30613; font-size: 32px; margin: 30px 0; }
                .name { font-size: 36px; font-weight: bold; color: #0066CC; margin: 40px 0; }
                .score { font-size: 24px; margin: 20px 0; }
                .date { margin-top: 40px; font-style: italic; }
                .logo { width: 100px; height: 100px; margin: 20px auto; }
            </style>
        </head>
        <body>
            <div class="certificate">
                <svg class="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="#0066CC"/>
                    <circle cx="50" cy="50" r="35" fill="#E30613"/>
                    <text x="50" y="60" font-family="Arial" font-size="35" font-weight="bold" fill="white" text-anchor="middle">W</text>
                </svg>
                <h1>🏆 ${certTitle} 🏆</h1>
                <h2>${certSubtitle}</h2>
                <p>${certText1}</p>
                <div class="name">${userName}</div>
                <p>${certText2}</p>
                <p><strong>TechCorp Industries GmbH</strong></p>
                <p>${certText3}</p>
                <div class="score">
                    <p>${pointsLabel}: <strong>${score}</strong></p>
                    <p>${successLabel}: <strong>${successRate}%</strong></p>
                    ${timeText ? `<p>${timeText}</p>` : ''}
                    ${perfectText}
                </div>
                <div class="date">
                    <p>${today}</p>
                </div>
                <p style="margin-top: 40px; font-size: 12px; color: #666;">
                    ${providerText}<br>
                    Security Awareness Game - TechCorp Industries
                </p>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
}

// Close quiz
function closeQuiz() {
    quizActive = false;
    isTransitioning = false;
    document.getElementById('quizBox').classList.remove('show');

    // Re-enable all options for next time
    const allOptions = document.querySelectorAll('.quiz-option');
    allOptions.forEach(opt => opt.style.pointerEvents = 'auto');
}

// Update score display
function updateScore() {
    document.getElementById('scoreValue').textContent = score;
    saveProgress(); // Auto-save on score change
}

// Save progress to localStorage
function saveProgress() {
    const progress = {
        score,
        npcProgress,
        completedQuizzes: Array.from(completedQuizzes),
        incidentScore,
        usedIncidents: Array.from(usedIncidents),
        trainingComplete,
        gameStartTime,
        timestamp: Date.now()
    };
    localStorage.setItem('securityGameProgress', JSON.stringify(progress));
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('securityGameProgress');
    if (!saved) return false;

    try {
        const progress = JSON.parse(saved);

        // Check if save is less than 24 hours old
        if (Date.now() - progress.timestamp > 24 * 60 * 60 * 1000) {
            localStorage.removeItem('securityGameProgress');
            return false;
        }

        score = progress.score || 0;
        npcProgress = progress.npcProgress || {};
        completedQuizzes = new Set(progress.completedQuizzes || []);
        incidentScore = progress.incidentScore || 0;
        usedIncidents = new Set(progress.usedIncidents || []);
        trainingComplete = progress.trainingComplete || false;
        gameStartTime = progress.gameStartTime;

        updateScore();
        return true;
    } catch (e) {
        console.error('Failed to load progress:', e);
        return false;
    }
}

// Clear progress
function clearProgress() {
    localStorage.removeItem('securityGameProgress');
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
    // Check NPC proximity for speech bubbles
    checkNPCProximity();

    // Update NPC positions - smooth movement toward targets
    updateNPCMovement();

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

// Draw pixel character with optional accessories
function drawCharacter(x, y, color, direction, frame, accessories = {}) {
    const pixelSize = 4;
    const offsetX = frame * 2 - 1; // Simple walk animation

    // Hair/Hat variations
    if (accessories.hat) {
        ctx.fillStyle = accessories.hatColor || '#000';
        ctx.fillRect(x + 6, y, 20, 4); // Hat brim
        ctx.fillRect(x + 8, y - 4, 16, 4); // Hat top
    } else if (accessories.hair) {
        ctx.fillStyle = accessories.hairColor || '#3d2817';
        ctx.fillRect(x + 8, y, 16, 4); // Hair
        if (accessories.hair === 'long') {
            ctx.fillRect(x + 6, y + 4, 4, 8); // Long hair sides
            ctx.fillRect(x + 22, y + 4, 4, 8);
        }
    }

    // Head
    ctx.fillStyle = accessories.skinColor || '#fcc89b';
    ctx.fillRect(x + 8, y + 4, 16, 12);

    // Glasses
    if (accessories.glasses) {
        ctx.fillStyle = '#000';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 9, y + 7, 5, 4);
        ctx.strokeRect(x + 18, y + 7, 5, 4);
        ctx.fillRect(x + 14, y + 9, 4, 1); // Bridge
    }

    // Eyes
    ctx.fillStyle = '#000';
    ctx.fillRect(x + 10 + offsetX, y + 8, 3, 3);
    ctx.fillRect(x + 18 - offsetX, y + 8, 3, 3);

    // Beard/Mustache
    if (accessories.beard) {
        ctx.fillStyle = accessories.beardColor || '#3d2817';
        ctx.fillRect(x + 10, y + 12, 12, 4); // Beard
    }

    // Body
    ctx.fillStyle = color;
    ctx.fillRect(x + 6, y + 16, 20, 10);

    // Tie/Badge
    if (accessories.tie) {
        ctx.fillStyle = '#cc0000';
        ctx.fillRect(x + 15, y + 18, 2, 6);
    }
    if (accessories.badge) {
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(x + 20, y + 18, 4, 4);
    }

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

// Draw NPC with progress indicator
function drawNPC(npc) {
    drawCharacter(npc.x - 16, npc.y - 16, npc.color, 'down', 0, npc.accessories || {});

    const progress = npcProgress[npc.id];

    // Show progress
    if (!progress.completed) {
        ctx.fillStyle = '#ff0000';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(`${progress.currentQuestion}/${npc.quizzes.length}`, npc.x - 10, npc.y - 25);
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
    ctx.fillText('🛡️ IT-Security Büro - TechCorp Industries', 180, 27);

    // Draw instructions if no quizzes completed (dismissable with SPACE)
    if (score === 0 && !welcomeShown) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
        ctx.fillRect(200, 230, 400, 130);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Courier New';
        const welcomeText = currentLanguage === 'en' ?
            'Welcome to IT-Security Training!' :
            'Willkommen im IT-Security Training!';
        const instructText1 = isTouchDevice ?
            (currentLanguage === 'en' ? 'Walk to the NPCs and tap to interact' : 'Gehe zu den NPCs und tippe zum Interagieren') :
            (currentLanguage === 'en' ? 'Walk to the NPCs and press SPACE' : 'Gehe zu den NPCs und drücke SPACE');
        const instructText2 = currentLanguage === 'en' ?
            'to start IT-Security Challenges!' :
            'um IT-Security Challenges zu starten!';
        const dismissText = isTouchDevice ?
            (currentLanguage === 'en' ? 'Tap anywhere to dismiss' : 'Tippe irgendwo um zu schließen') :
            (currentLanguage === 'en' ? 'Press SPACE to dismiss this message' : 'Drücke SPACE um diese Nachricht zu schließen');
        ctx.fillText(welcomeText, 230, 265);
        ctx.font = '14px Courier New';
        ctx.fillText(instructText1, 230, 295);
        ctx.fillText(instructText2, 230, 320);
        ctx.fillStyle = '#00d9ff';
        ctx.font = 'bold 12px Courier New';
        ctx.fillText(dismissText, 230, 345);
    }
}

// Game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Start game loop (always running)
gameLoop();

// Hide welcome message after 5 seconds (only after training complete)
setTimeout(() => {
    if (trainingComplete) {
        welcomeShown = true;
    }
}, 5000);

// Music will be started by training completion (see startGame function at bottom)

// ===== INCIDENT SYSTEM =====

// Schedule next incident
function scheduleNextIncident() {
    if (incidentTimeoutId) {
        clearTimeout(incidentTimeoutId);
    }

    // Random time between 30-60 seconds
    const delay = 30000 + Math.random() * 30000;
    nextIncidentTime = Date.now() + delay;

    incidentTimeoutId = setTimeout(() => {
        if (!incidentActive && !dialogActive && !quizActive) {
            triggerRandomIncident();
        } else {
            // Retry in 10 seconds if busy
            setTimeout(scheduleNextIncident, 10000);
        }
    }, delay);
}

// Trigger random incident
function triggerRandomIncident() {
    // Select incident data based on language
    let incidents;
    if (currentLanguage === 'en') {
        incidents = typeof incidentsDataEn !== 'undefined' ? incidentsDataEn : incidentsData;
    } else {
        incidents = incidentsData;
    }

    // Get unused incidents
    const availableIncidents = incidents.filter(inc => !usedIncidents.has(inc.id));

    // If all used, reset
    if (availableIncidents.length === 0) {
        usedIncidents.clear();
        availableIncidents.push(...incidents);
    }

    // Pick random incident
    const incident = availableIncidents[Math.floor(Math.random() * availableIncidents.length)];
    usedIncidents.add(incident.id);

    showIncident(incident);
}

// Show incident
function showIncident(incident) {
    incidentActive = true;
    incidentCountdown = 15;

    document.getElementById('incidentIcon').textContent = incident.icon;
    document.getElementById('incidentTitle').textContent = incident.title;
    document.getElementById('incidentDescription').textContent = incident.description;

    const optionsContainer = document.getElementById('incidentOptions');
    optionsContainer.innerHTML = '';

    // Randomize answer order to prevent patterns
    const shuffledOptions = [...incident.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'incident-option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => handleIncidentAnswer(option.correct, option.explanation, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('incidentBox').classList.add('show');

    // Play alert sound
    playIncidentSound();
}

// No countdown - removed time pressure

// Handle incident answer
function handleIncidentAnswer(correct, explanation, optionDiv) {
    // Disable all options
    const allOptions = document.querySelectorAll('.incident-option');
    allOptions.forEach(opt => opt.style.pointerEvents = 'none');

    if (correct) {
        optionDiv.classList.add('correct');
        playCorrectSound(); // Sound effect
        incidentScore++;
        score++;
        updateScore();

        setTimeout(() => {
            closeIncident();
            const message = currentLanguage === 'en' ?
                `✅ Correct! +1 Point\n\n${explanation}` :
                `✅ Richtig! +1 Punkt\n\n${explanation}`;
            const title = currentLanguage === 'en' ? 'Incident Resolved' : 'Incident gelöst';
            showDialog(message, title);
            scheduleNextIncident();
        }, 1500);
    } else {
        optionDiv.classList.add('wrong');
        playWrongSound(); // Sound effect

        setTimeout(() => {
            closeIncident();
            const message = currentLanguage === 'en' ?
                `❌ Wrong!\n\n${explanation}` :
                `❌ Falsch!\n\n${explanation}`;
            showDialog(message, 'Incident');
            scheduleNextIncident();
        }, 1500);
    }
}

// Close incident
function closeIncident() {
    incidentActive = false;
    document.getElementById('incidentBox').classList.remove('show');

    // Re-enable options for next time
    const allOptions = document.querySelectorAll('.incident-option');
    allOptions.forEach(opt => opt.style.pointerEvents = 'auto');
}

// Incident alert sound
function playIncidentSound() {
    if (!audioContext) return;

    const now = audioContext.currentTime;

    // Siren-like sound
    playNote(800, 0.1, now);
    playNote(600, 0.1, now + 0.1);
    playNote(800, 0.1, now + 0.2);
    playNote(600, 0.1, now + 0.3);
}

// Start incident system after 20 seconds
setTimeout(() => {
    scheduleNextIncident();
}, 20000);

// ===== SPEECH BUBBLES & NPC INTERACTION =====

// Check proximity to NPCs and show speech bubble
function checkNPCProximity() {
    if (dialogActive || quizActive || incidentActive) {
        hideSpeechBubble();
        return;
    }

    for (let npc of npcs) {
        const dist = Math.sqrt(
            Math.pow(player.x - npc.x, 2) +
            Math.pow(player.y - npc.y, 2)
        );

        // Show speech bubble when within 80 pixels
        if (dist < 80 && dist > 40) {
            showSpeechBubble(npc);
            return;
        }
    }

    hideSpeechBubble();
}

// Show speech bubble
function showSpeechBubble(npc) {
    const bubble = document.getElementById('speechBubble');

    document.getElementById('speechName').textContent = npc.name;
    document.getElementById('speechTitle').textContent = npc.title || 'IT-Security';
    document.getElementById('speechJoke').textContent = npc.joke || 'Hallo! 👋';

    // Position bubble below NPC to not block player
    const canvas = document.getElementById('gameCanvas');
    const rect = canvas.getBoundingClientRect();

    bubble.style.left = (rect.left + npc.x - 150) + 'px';
    bubble.style.top = (rect.top + npc.y + 60) + 'px'; // Below NPC

    bubble.classList.add('show');
}

// Hide speech bubble
function hideSpeechBubble() {
    document.getElementById('speechBubble').classList.remove('show');
}

// ===== NPC RANDOM MOVEMENT =====

// Update NPC positions smoothly toward targets
function updateNPCMovement() {
    const NPC_SPEED = 1; // NPCs move slower than player

    npcs.forEach(npc => {
        const target = npcTargets[npc.id];

        // Calculate distance to target
        const dx = target.x - npc.x;
        const dy = target.y - npc.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If close enough to target, stop moving
        if (distance < NPC_SPEED) {
            npc.x = target.x;
            npc.y = target.y;
            return;
        }

        // Move toward target
        const moveX = (dx / distance) * NPC_SPEED;
        const moveY = (dy / distance) * NPC_SPEED;

        npc.x += moveX;
        npc.y += moveY;
    });
}

// Set new random target positions for NPCs
function moveNPCsRandomly() {
    npcs.forEach(npc => {
        // Don't move if player is nearby or in interaction
        const distToPlayer = Math.sqrt(
            Math.pow(player.x - npc.x, 2) +
            Math.pow(player.y - npc.y, 2)
        );

        if (distToPlayer < 100 || dialogActive || quizActive) {
            return;
        }

        // Try to find a valid position that's not too close to other NPCs
        let attempts = 0;
        let newX, newY, validPosition = false;

        while (attempts < 10 && !validPosition) {
            // Random new position within bounds
            newX = 100 + Math.random() * 600;
            newY = 100 + Math.random() * 400;

            // Check if position is valid (not on wall)
            if (checkCollision(newX, newY)) {
                attempts++;
                continue;
            }

            // Check distance to other NPCs (keep at least 120 pixels apart)
            validPosition = true;
            for (let otherNpc of npcs) {
                if (otherNpc.id === npc.id) continue;

                const dist = Math.sqrt(
                    Math.pow(newX - otherNpc.x, 2) +
                    Math.pow(newY - otherNpc.y, 2)
                );

                if (dist < 120) {
                    validPosition = false;
                    break;
                }
            }

            attempts++;
        }

        if (validPosition) {
            // Set new target instead of instant teleport
            npcTargets[npc.id] = { x: newX, y: newY };
        }
    });
}

// Start NPC movement - every 15 seconds
setInterval(() => {
    moveNPCsRandomly();
}, 15000);

// ===== TRAINING MODULE =====

// Initialize training on page load
function initTraining() {
    // Select training data based on language
    let trainingData;
    if (currentLanguage === 'en') {
        trainingData = typeof trainingPagesEn !== 'undefined' ? trainingPagesEn : trainingPages;
    } else {
        trainingData = trainingPages;
    }

    if (typeof trainingData === 'undefined') {
        console.error('Training data not loaded!');
        startGame();
        return;
    }

    // Show training module
    document.getElementById('trainingModule').classList.remove('hidden');

    // Store in window for access by other functions
    window.currentTrainingData = trainingData;

    // Update total pages
    document.getElementById('trainingPageTotal').textContent = trainingData.length;

    // Render first page
    renderTrainingPage(0);

    // Set up navigation (remove old listeners first)
    const nextBtn = document.getElementById('trainingNext');
    const prevBtn = document.getElementById('trainingPrev');
    const newNextBtn = nextBtn.cloneNode(true);
    const newPrevBtn = prevBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);

    document.getElementById('trainingNext').addEventListener('click', nextTrainingPage);
    document.getElementById('trainingPrev').addEventListener('click', prevTrainingPage);
}

// Render training page
function renderTrainingPage(pageIndex) {
    const content = document.getElementById('trainingContent');
    content.innerHTML = '';

    const trainingData = window.currentTrainingData || trainingPages;
    const page = trainingData[pageIndex];
    const pageDiv = document.createElement('div');
    pageDiv.className = 'training-page active';
    pageDiv.innerHTML = `
        <h2>${page.title}</h2>
        ${page.content}
    `;
    content.appendChild(pageDiv);

    // Update page number
    document.getElementById('trainingPageNum').textContent = pageIndex + 1;

    // Update button visibility
    const prevBtn = document.getElementById('trainingPrev');
    const nextBtn = document.getElementById('trainingNext');

    if (pageIndex === 0) {
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }

    if (pageIndex === trainingData.length - 1) {
        nextBtn.textContent = currentLanguage === 'en' ? '🎮 Start Game!' : '🎮 Spiel starten!';
        nextBtn.style.background = '#28a745';
    } else {
        nextBtn.textContent = currentLanguage === 'en' ? 'Next →' : 'Weiter →';
        nextBtn.style.background = '#0066CC';
    }
}

// Next training page
function nextTrainingPage() {
    const trainingData = window.currentTrainingData || trainingPages;
    if (currentTrainingPage < trainingData.length - 1) {
        currentTrainingPage++;
        renderTrainingPage(currentTrainingPage);
    } else {
        // Training complete, start game
        completeTraining();
    }
}

// Previous training page
function prevTrainingPage() {
    if (currentTrainingPage > 0) {
        currentTrainingPage--;
        renderTrainingPage(currentTrainingPage);
    }
}

// Complete training and start game
function completeTraining() {
    trainingComplete = true;
    gameStartTime = Date.now(); // Start tracking game time
    document.getElementById('trainingModule').classList.add('hidden');
    saveProgress();
    startGame();
}

// Start the game
function startGame() {
    // Game is already running via gameLoop
    // Just ensure music starts
    setTimeout(() => {
        if (!trainingComplete) return;
        initAudio();
        musicPlaying = true;
        const musicText = currentLanguage === 'en' ?
            `🔊 ${t('ui.music')}: ${t('ui.musicOn')}` :
            `🔊 ${t('ui.music')}: ${t('ui.musicOn')}`;
        document.getElementById('musicToggle').textContent = musicText;
        playBackgroundMusic();
    }, 1000);
}

// Start game with selected language (called from leaderboard.js after registration)
function startGameWithLanguage() {
    // Reload language-specific data
    loadLanguageData();

    // Try to load saved progress
    const hasProgress = loadProgress();

    if (hasProgress && trainingComplete) {
        // Skip training if already completed
        document.getElementById('trainingModule').classList.add('hidden');
        console.log('Progress loaded, skipping training');
    } else {
        // Show training
        initTraining();
    }
}

// Initialize training when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Update UI text based on device type
    updateUIForDeviceType();

    // Note: Registration overlay handles initial setup
    // startGameWithLanguage() will be called after registration
});

// Update UI text for touch vs keyboard devices
function updateUIForDeviceType() {
    const dialogContinue = document.getElementById('dialogContinue');

    if (isTouchDevice) {
        // Update dialog continue hint for touch devices
        if (currentLanguage === 'en') {
            dialogContinue.textContent = '▼ TAP to continue';
        } else {
            dialogContinue.textContent = '▼ TIPPEN zum Fortfahren';
        }
    } else {
        // Keep SPACE hint for keyboard devices
        if (currentLanguage === 'en') {
            dialogContinue.textContent = '▼ SPACE to continue';
        } else {
            dialogContinue.textContent = '▼ SPACE zum Fortfahren';
        }
    }
}

// ===== MOBILE TOUCH CONTROLS =====

// Virtual D-Pad for mobile
let touchStartX = 0;
let touchStartY = 0;
let isTouching = false;

// Add touch controls to canvas (canvas already declared at top of file)
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    touchStartX = touch.clientX - rect.left;
    touchStartY = touch.clientY - rect.top;
    isTouching = true;

    // Dismiss welcome overlay if showing
    if (score === 0 && !welcomeShown && trainingComplete) {
        welcomeShown = true;
        return;
    }

    // Check if tapping on NPC area for interaction (like SPACE)
    const canvasX = (touchStartX / rect.width) * canvas.width;
    const canvasY = (touchStartY / rect.height) * canvas.height;

    // If tapping near player, treat as interaction
    const distToPlayer = Math.sqrt(
        Math.pow(canvasX - player.x, 2) +
        Math.pow(canvasY - player.y, 2)
    );

    if (distToPlayer < 50) {
        handleSpaceBar(); // Trigger interaction
    }
}, { passive: false });

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!isTouching) return;

    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const currentX = touch.clientX - rect.left;
    const currentY = touch.clientY - rect.top;

    // Calculate direction based on swipe
    const deltaX = currentX - touchStartX;
    const deltaY = currentY - touchStartY;

    // Clear all keys first
    keys['ArrowUp'] = false;
    keys['ArrowDown'] = false;
    keys['ArrowLeft'] = false;
    keys['ArrowRight'] = false;

    // Set direction based on largest delta (with dead zone)
    const deadZone = 10;
    if (Math.abs(deltaX) > deadZone || Math.abs(deltaY) > deadZone) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal movement
            if (deltaX > 0) {
                keys['ArrowRight'] = true;
            } else {
                keys['ArrowLeft'] = true;
            }
        } else {
            // Vertical movement
            if (deltaY > 0) {
                keys['ArrowDown'] = true;
            } else {
                keys['ArrowUp'] = true;
            }
        }
    }
}, { passive: false });

canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    isTouching = false;
    // Stop movement
    keys['ArrowUp'] = false;
    keys['ArrowDown'] = false;
    keys['ArrowLeft'] = false;
    keys['ArrowRight'] = false;
}, { passive: false });

// Prevent double-tap zoom on mobile
let lastTouchEnd = 0;
canvas.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Add touch handler for dialog box (to close it like SPACE)
const dialogBox = document.getElementById('dialogBox');
if (dialogBox && isTouchDevice) {
    dialogBox.addEventListener('touchend', (e) => {
        if (dialogActive && !quizActive) {
            e.preventDefault();
            closeDialog();
        }
    }, { passive: false });
}
