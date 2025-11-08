// Leaderboard & User Management System
// Handles: user registration, language selection, scoring, leaderboard display

// User data storage
let userData = {
    username: '',
    country: '',
    countryFlag: '',
    language: 'de',
    startTime: null,
    endTime: null,
    totalPoints: 0,
    totalScore: 0  // Combined score (points + time bonus)
};

// Initialize registration screen
function initializeRegistration() {
    // Populate country dropdown
    const countrySelect = document.getElementById('regCountry');
    COUNTRIES.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.flag} ${country.name_en}`;
        option.dataset.flag = country.flag;
        countrySelect.appendChild(option);
    });

    // Language change handler - update country names
    document.getElementById('regLanguage').addEventListener('change', function(e) {
        const selectedLang = e.target.value;
        const selectedCountry = countrySelect.value;

        // Clear and repopulate with correct language
        countrySelect.innerHTML = '<option value="">Select your country...</option>';
        COUNTRIES.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            const countryName = selectedLang === 'de' ? country.name_de : country.name_en;
            option.textContent = `${country.flag} ${countryName}`;
            option.dataset.flag = country.flag;
            countrySelect.appendChild(option);
        });

        // Restore selection if any
        if (selectedCountry) {
            countrySelect.value = selectedCountry;
        }

        // Update placeholder text based on language
        updateRegistrationLanguage(selectedLang);
    });

    // Submit button handler
    document.getElementById('regSubmit').addEventListener('click', function() {
        const username = document.getElementById('regUsername').value.trim();
        const country = document.getElementById('regCountry').value;
        const language = document.getElementById('regLanguage').value;

        // Validation
        if (!username) {
            alert(language === 'de' ? 'Bitte gib einen Namen ein!' : 'Please enter a name!');
            return;
        }

        if (!country) {
            alert(language === 'de' ? 'Bitte wähle ein Land!' : 'Please select a country!');
            return;
        }

        // Get country flag
        const selectedOption = document.querySelector(`#regCountry option[value="${country}"]`);
        const countryFlag = selectedOption.dataset.flag;

        // Save user data
        userData.username = username;
        userData.country = country;
        userData.countryFlag = countryFlag;
        userData.language = language;
        userData.startTime = Date.now();

        // Set language globally
        setLanguage(language);

        // Save to localStorage
        localStorage.setItem('securityGameUser', JSON.stringify(userData));

        // Hide registration overlay
        document.getElementById('registrationOverlay').style.display = 'none';

        // Start game (trigger training module)
        startGameWithLanguage();
    });

    // Check if user already registered
    const savedUser = localStorage.getItem('securityGameUser');
    if (savedUser) {
        const saved = JSON.parse(savedUser);
        // Check if registration is still valid (24 hours)
        if (saved.startTime && (Date.now() - saved.startTime) < 86400000) {
            userData = saved;
            setLanguage(userData.language);
            document.getElementById('registrationOverlay').style.display = 'none';
            startGameWithLanguage();
        }
    }
}

// Update registration form language
function updateRegistrationLanguage(lang) {
    const usernameLabel = document.querySelector('label[for="regUsername"]');
    const countryLabel = document.querySelector('label[for="regCountry"]');
    const usernamePlaceholder = document.getElementById('regUsername');
    const submitButton = document.getElementById('regSubmit');
    const title = document.querySelector('#registrationBox h2');

    if (lang === 'de') {
        title.textContent = '🎮 Willkommen zum IT-Security Adventure!';
        usernameLabel.textContent = 'Dein Name:';
        usernamePlaceholder.placeholder = 'Gib deinen Namen ein';
        countryLabel.textContent = 'Dein Land:';
        submitButton.textContent = 'Los geht\'s! 🚀';
    } else {
        title.textContent = '🎮 Welcome to IT-Security Adventure!';
        usernameLabel.textContent = 'Your Name:';
        usernamePlaceholder.placeholder = 'Enter your name';
        countryLabel.textContent = 'Your Country:';
        submitButton.textContent = 'Let\'s Go! 🚀';
    }
}

// Calculate total score based on points and time
function calculateTotalScore(points, timeInMinutes) {
    // Base score = points earned
    let score = points * 100;

    // Time bonus (faster completion = higher bonus)
    // Maximum bonus: 1000 points for completing under 10 minutes
    // No bonus after 60 minutes
    if (timeInMinutes <= 10) {
        score += 1000;
    } else if (timeInMinutes <= 20) {
        score += 800;
    } else if (timeInMinutes <= 30) {
        score += 600;
    } else if (timeInMinutes <= 40) {
        score += 400;
    } else if (timeInMinutes <= 50) {
        score += 200;
    } else if (timeInMinutes <= 60) {
        score += 100;
    }

    return score;
}

// Submit score to leaderboard (localStorage based)
function submitToLeaderboard(points, correctAnswers, totalQuestions, playTimeMinutes, incidentsCorrect) {
    userData.endTime = Date.now();
    userData.totalPoints = points;
    userData.totalScore = calculateTotalScore(points, playTimeMinutes);

    // Get existing leaderboard
    let leaderboard = JSON.parse(localStorage.getItem('securityGameLeaderboard') || '[]');

    // Add new entry
    leaderboard.push({
        username: userData.username,
        country: userData.country,
        countryFlag: userData.countryFlag,
        points: points,
        correctAnswers: correctAnswers,
        totalQuestions: totalQuestions,
        playTime: playTimeMinutes,
        incidentsCorrect: incidentsCorrect,
        totalScore: userData.totalScore,
        timestamp: Date.now()
    });

    // Sort by total score (descending)
    leaderboard.sort((a, b) => b.totalScore - a.totalScore);

    // Keep top 100 entries
    leaderboard = leaderboard.slice(0, 100);

    // Save back to localStorage
    localStorage.setItem('securityGameLeaderboard', JSON.stringify(leaderboard));

    return leaderboard;
}

// Display leaderboard
function showLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('securityGameLeaderboard') || '[]');

    const overlay = document.createElement('div');
    overlay.id = 'leaderboardOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
    `;

    let html = `
        <div style="
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 50px rgba(0, 217, 255, 0.3);
            border: 2px solid #00d9ff;
            max-width: 900px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
        ">
            <h2 style="color: #00d9ff; text-align: center; margin-bottom: 30px; font-size: 28px;">
                🏆 ${t('leaderboard.title')} 🏆
            </h2>

            <table style="width: 100%; border-collapse: collapse; color: white; font-family: 'Courier New', monospace;">
                <thead>
                    <tr style="background: #0f3460; border-bottom: 2px solid #00d9ff;">
                        <th style="padding: 12px; text-align: center;">${t('leaderboard.rank')}</th>
                        <th style="padding: 12px; text-align: left;">${t('leaderboard.player')}</th>
                        <th style="padding: 12px; text-align: center;">${t('leaderboard.country')}</th>
                        <th style="padding: 12px; text-align: center;">${t('leaderboard.score')}</th>
                        <th style="padding: 12px; text-align: center;">${t('leaderboard.time')}</th>
                        <th style="padding: 12px; text-align: center;">${t('leaderboard.totalScore')}</th>
                    </tr>
                </thead>
                <tbody>
    `;

    if (leaderboard.length === 0) {
        html += `
            <tr>
                <td colspan="6" style="padding: 40px; text-align: center; color: #888;">
                    ${t('leaderboard.noEntries')}
                </td>
            </tr>
        `;
    } else {
        leaderboard.forEach((entry, index) => {
            const rank = index + 1;
            const rankDisplay = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
            const isCurrentUser = entry.username === userData.username &&
                                  entry.timestamp === userData.endTime;

            html += `
                <tr style="
                    background: ${isCurrentUser ? 'rgba(0, 217, 255, 0.1)' : index % 2 === 0 ? '#16213e' : '#1a1a2e'};
                    border-bottom: 1px solid #0f3460;
                    ${isCurrentUser ? 'border: 2px solid #00d9ff;' : ''}
                ">
                    <td style="padding: 12px; text-align: center; font-weight: bold;">${rankDisplay}</td>
                    <td style="padding: 12px;">
                        ${entry.username}
                        ${isCurrentUser ? '<span style="color: #00d9ff; margin-left: 10px;">← YOU</span>' : ''}
                    </td>
                    <td style="padding: 12px; text-align: center; font-size: 20px;">${entry.countryFlag}</td>
                    <td style="padding: 12px; text-align: center;">${entry.points}</td>
                    <td style="padding: 12px; text-align: center;">${entry.playTime} min</td>
                    <td style="padding: 12px; text-align: center; font-weight: bold; color: #00d9ff;">
                        ${entry.totalScore.toLocaleString()}
                    </td>
                </tr>
            `;
        });
    }

    html += `
                </tbody>
            </table>

            <button onclick="document.getElementById('leaderboardOverlay').remove();" style="
                margin-top: 30px;
                width: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 15px;
                border-radius: 10px;
                cursor: pointer;
                font-family: 'Courier New', monospace;
                font-size: 18px;
                font-weight: bold;
            ">
                ${t('leaderboard.close')}
            </button>
        </div>
    `;

    overlay.innerHTML = html;
    document.body.appendChild(overlay);
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRegistration);
} else {
    initializeRegistration();
}
