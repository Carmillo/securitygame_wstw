// Multi-language support for IT-Security Game
// Supports: German (de), English (en)

const LANGUAGES = {
    de: {
        // UI Elements
        ui: {
            title: 'IT-Security Adventure',
            subtitle: 'TechCorp Industries - Security Awareness Training',
            points: 'Punkte',
            music: 'Musik',
            musicOn: 'AN',
            musicOff: 'AUS',
            newGame: 'NEUES SPIEL',
            newGameConfirm: 'Möchtest du wirklich ein neues Spiel starten? Dein aktueller Fortschritt geht verloren!',
            controls: 'Steuerung',
            space: 'LEERTASTE',
            interact: 'Interagieren',
            arrows: 'PFEILTASTEN',
            move: 'Bewegen',
            esc: 'ESC',
            close: 'Schließen',
            enter: 'ENTER',
            continue: 'Weiter',
            startGame: 'Spiel starten',
            nextPage: 'Weiter',
            previousPage: 'Zurück',
            trainingComplete: 'Schulung abgeschlossen!',
            readyToPlay: 'Du bist jetzt bereit für das Spiel. Viel Erfolg!',
            // Welcome info
            welcomeTitle: '🎓 Willkommen!',
            welcomeMessage: '<h3>So funktioniert das Spiel:</h3><ul style="text-align: left; margin: 20px 0;"><li><strong>1. Schulung:</strong> Zuerst lernst du die Grundlagen der IT-Sicherheit</li><li><strong>2. Spiel:</strong> Dann wendest du dein Wissen im interaktiven Spiel an</li><li><strong>3. Belohnung:</strong> Am Ende erhältst du ein Zertifikat! 🏆</li></ul><p style="margin-top: 20px;">Viel Erfolg und hab Spaß beim Lernen!</p>',
            welcomeButton: 'Los geht\'s! 🚀'
        },

        // Training Module
        training: {
            title: 'IT-Security Schulung',
            subtitle: 'Lerne die Grundlagen der IT-Sicherheit',
            page: 'Seite'
        },

        // Quiz
        quiz: {
            question: 'Frage',
            correct: 'Richtig! 🎉',
            wrong: 'Falsch! 😕',
            tryAgain: 'Versuche es nochmal!',
            npcComplete: 'Alle Fragen beantwortet! 🎊',
            pointsEarned: 'Punkt(e) erhalten!'
        },

        // Incidents
        incident: {
            title: 'SECURITY INCIDENT!',
            question: 'Was machst du?',
            correct: 'Richtig gehandelt! 🛡️',
            wrong: 'Falsch! Das war riskant! ⚠️',
            explanation: 'Erklärung'
        },

        // Victory Screen
        victory: {
            title: '🎉 HERZLICHEN GLÜCKWUNSCH! 🎉',
            subtitle: 'Du hast das IT-Security Training erfolgreich abgeschlossen!',
            stats: 'Deine Statistik',
            totalQuestions: 'Gesamte Fragen',
            correctAnswers: 'Richtige Antworten',
            successRate: 'Erfolgsquote',
            playTime: 'Spielzeit',
            minutes: 'Minuten',
            incidentsHandled: 'Behandelte Incidents',
            badges: 'Errungene Abzeichen',
            badge1: '🛡️ Security Pro',
            badge1Desc: 'Training abgeschlossen',
            badge2: '⚡ Quick Thinker',
            badge2Desc: 'Mindestens 5 Incidents gelöst',
            badge3: '🎯 Perfect Score',
            badge3Desc: 'Mindestens 90% Erfolgsquote',
            perfectScore: '🌟 PERFEKTE LEISTUNG! 100% erreicht! 🌟',
            certificate: '📜 ZERTIFIKAT DRUCKEN',
            certificateTitle: 'IT-SECURITY AWARENESS',
            certificateSubtitle: 'Teilnahme-Zertifikat',
            certificateText: 'hat erfolgreich das IT-Security Awareness Training absolviert.',
            certificateDate: 'Ausstellungsdatum',
            certificateProvider: 'IT-Dienstleister: IT Services Team',
            certificateCompany: 'Security Awareness Game - TechCorp Industries'
        },

        // Leaderboard
        leaderboard: {
            title: '🏆 GLOBAL LEADERBOARD',
            rank: 'Rang',
            player: 'Spieler',
            country: 'Land',
            score: 'Punkte',
            time: 'Zeit',
            totalScore: 'Gesamt',
            close: 'Schließen',
            loading: 'Lade Bestenliste...',
            error: 'Fehler beim Laden der Bestenliste',
            noEntries: 'Noch keine Einträge'
        },

        // User Registration
        registration: {
            title: '🎮 Willkommen zum IT-Security Adventure!',
            username: 'Dein Name',
            usernamePlaceholder: 'Gib deinen Namen ein',
            country: 'Dein Land',
            countryPlaceholder: 'Wähle dein Land',
            language: 'Sprache / Language',
            submit: 'Los geht\'s!',
            usernameRequired: 'Bitte gib einen Namen ein',
            countryRequired: 'Bitte wähle ein Land'
        }
    },

    en: {
        // UI Elements
        ui: {
            title: 'IT-Security Adventure',
            subtitle: 'TechCorp Industries - Security Awareness Training',
            points: 'Points',
            music: 'Music',
            musicOn: 'ON',
            musicOff: 'OFF',
            newGame: 'NEW GAME',
            newGameConfirm: 'Do you really want to start a new game? Your current progress will be lost!',
            controls: 'Controls',
            space: 'SPACE',
            interact: 'Interact',
            arrows: 'ARROW KEYS',
            move: 'Move',
            esc: 'ESC',
            close: 'Close',
            enter: 'ENTER',
            continue: 'Continue',
            startGame: 'Start Game',
            nextPage: 'Next',
            previousPage: 'Back',
            trainingComplete: 'Training Complete!',
            readyToPlay: 'You are now ready for the game. Good luck!',
            // Welcome info
            welcomeTitle: '🎓 Welcome!',
            welcomeMessage: '<h3>How the game works:</h3><ul style="text-align: left; margin: 20px 0;"><li><strong>1. Training:</strong> First, you\'ll learn the basics of IT security</li><li><strong>2. Game:</strong> Then apply your knowledge in the interactive game</li><li><strong>3. Reward:</strong> At the end, you\'ll receive a certificate! 🏆</li></ul><p style="margin-top: 20px;">Good luck and have fun learning!</p>',
            welcomeButton: 'Let\'s Go! 🚀'
        },

        // Training Module
        training: {
            title: 'IT-Security Training',
            subtitle: 'Learn the basics of IT security',
            page: 'Page'
        },

        // Quiz
        quiz: {
            question: 'Question',
            correct: 'Correct! 🎉',
            wrong: 'Wrong! 😕',
            tryAgain: 'Try again!',
            npcComplete: 'All questions answered! 🎊',
            pointsEarned: 'point(s) earned!'
        },

        // Incidents
        incident: {
            title: 'SECURITY INCIDENT!',
            question: 'What do you do?',
            correct: 'Good decision! 🛡️',
            wrong: 'Wrong! That was risky! ⚠️',
            explanation: 'Explanation'
        },

        // Victory Screen
        victory: {
            title: '🎉 CONGRATULATIONS! 🎉',
            subtitle: 'You have successfully completed the IT-Security Training!',
            stats: 'Your Statistics',
            totalQuestions: 'Total Questions',
            correctAnswers: 'Correct Answers',
            successRate: 'Success Rate',
            playTime: 'Play Time',
            minutes: 'minutes',
            incidentsHandled: 'Incidents Handled',
            badges: 'Badges Earned',
            badge1: '🛡️ Security Pro',
            badge1Desc: 'Training completed',
            badge2: '⚡ Quick Thinker',
            badge2Desc: 'At least 5 incidents solved',
            badge3: '🎯 Perfect Score',
            badge3Desc: 'At least 90% success rate',
            perfectScore: '🌟 PERFECT SCORE! 100% achieved! 🌟',
            certificate: '📜 PRINT CERTIFICATE',
            certificateTitle: 'IT-SECURITY AWARENESS',
            certificateSubtitle: 'Certificate of Participation',
            certificateText: 'has successfully completed the IT-Security Awareness Training.',
            certificateDate: 'Date of Issue',
            certificateProvider: 'IT Service Provider: IT Services Team',
            certificateCompany: 'Security Awareness Game - TechCorp Industries'
        },

        // Leaderboard
        leaderboard: {
            title: '🏆 GLOBAL LEADERBOARD',
            rank: 'Rank',
            player: 'Player',
            country: 'Country',
            score: 'Points',
            time: 'Time',
            totalScore: 'Total',
            close: 'Close',
            loading: 'Loading leaderboard...',
            error: 'Error loading leaderboard',
            noEntries: 'No entries yet'
        },

        // User Registration
        registration: {
            title: '🎮 Welcome to IT-Security Adventure!',
            username: 'Your Name',
            usernamePlaceholder: 'Enter your name',
            country: 'Your Country',
            countryPlaceholder: 'Select your country',
            language: 'Language / Sprache',
            submit: 'Let\'s Go!',
            usernameRequired: 'Please enter a name',
            countryRequired: 'Please select a country'
        }
    }
};

// Country list for selection
const COUNTRIES = [
    { code: 'AT', name_de: 'Österreich', name_en: 'Austria', flag: '🇦🇹' },
    { code: 'DE', name_de: 'Deutschland', name_en: 'Germany', flag: '🇩🇪' },
    { code: 'CH', name_de: 'Schweiz', name_en: 'Switzerland', flag: '🇨🇭' },
    { code: 'US', name_de: 'USA', name_en: 'USA', flag: '🇺🇸' },
    { code: 'GB', name_de: 'Großbritannien', name_en: 'United Kingdom', flag: '🇬🇧' },
    { code: 'FR', name_de: 'Frankreich', name_en: 'France', flag: '🇫🇷' },
    { code: 'IT', name_de: 'Italien', name_en: 'Italy', flag: '🇮🇹' },
    { code: 'ES', name_de: 'Spanien', name_en: 'Spain', flag: '🇪🇸' },
    { code: 'NL', name_de: 'Niederlande', name_en: 'Netherlands', flag: '🇳🇱' },
    { code: 'BE', name_de: 'Belgien', name_en: 'Belgium', flag: '🇧🇪' },
    { code: 'PL', name_de: 'Polen', name_en: 'Poland', flag: '🇵🇱' },
    { code: 'CZ', name_de: 'Tschechien', name_en: 'Czech Republic', flag: '🇨🇿' },
    { code: 'HU', name_de: 'Ungarn', name_en: 'Hungary', flag: '🇭🇺' },
    { code: 'RO', name_de: 'Rumänien', name_en: 'Romania', flag: '🇷🇴' },
    { code: 'SK', name_de: 'Slowakei', name_en: 'Slovakia', flag: '🇸🇰' },
    { code: 'SI', name_de: 'Slowenien', name_en: 'Slovenia', flag: '🇸🇮' },
    { code: 'HR', name_de: 'Kroatien', name_en: 'Croatia', flag: '🇭🇷' },
    { code: 'SE', name_de: 'Schweden', name_en: 'Sweden', flag: '🇸🇪' },
    { code: 'NO', name_de: 'Norwegen', name_en: 'Norway', flag: '🇳🇴' },
    { code: 'DK', name_de: 'Dänemark', name_en: 'Denmark', flag: '🇩🇰' },
    { code: 'FI', name_de: 'Finnland', name_en: 'Finland', flag: '🇫🇮' },
    { code: 'IE', name_de: 'Irland', name_en: 'Ireland', flag: '🇮🇪' },
    { code: 'PT', name_de: 'Portugal', name_en: 'Portugal', flag: '🇵🇹' },
    { code: 'GR', name_de: 'Griechenland', name_en: 'Greece', flag: '🇬🇷' },
    { code: 'TR', name_de: 'Türkei', name_en: 'Turkey', flag: '🇹🇷' },
    { code: 'RU', name_de: 'Russland', name_en: 'Russia', flag: '🇷🇺' },
    { code: 'UA', name_de: 'Ukraine', name_en: 'Ukraine', flag: '🇺🇦' },
    { code: 'JP', name_de: 'Japan', name_en: 'Japan', flag: '🇯🇵' },
    { code: 'CN', name_de: 'China', name_en: 'China', flag: '🇨🇳' },
    { code: 'KR', name_de: 'Südkorea', name_en: 'South Korea', flag: '🇰🇷' },
    { code: 'IN', name_de: 'Indien', name_en: 'India', flag: '🇮🇳' },
    { code: 'AU', name_de: 'Australien', name_en: 'Australia', flag: '🇦🇺' },
    { code: 'NZ', name_de: 'Neuseeland', name_en: 'New Zealand', flag: '🇳🇿' },
    { code: 'CA', name_de: 'Kanada', name_en: 'Canada', flag: '🇨🇦' },
    { code: 'MX', name_de: 'Mexiko', name_en: 'Mexico', flag: '🇲🇽' },
    { code: 'BR', name_de: 'Brasilien', name_en: 'Brazil', flag: '🇧🇷' },
    { code: 'AR', name_de: 'Argentinien', name_en: 'Argentina', flag: '🇦🇷' },
    { code: 'ZA', name_de: 'Südafrika', name_en: 'South Africa', flag: '🇿🇦' },
    { code: 'OTHER', name_de: 'Andere', name_en: 'Other', flag: '🌍' }
];

// Current language (default: German)
let currentLanguage = 'de';

// Get translation helper function
function t(path) {
    const keys = path.split('.');
    let value = LANGUAGES[currentLanguage];

    for (const key of keys) {
        value = value[key];
        if (value === undefined) {
            console.warn(`Translation missing for: ${path} in language: ${currentLanguage}`);
            return path;
        }
    }

    return value;
}

// Set language
function setLanguage(lang) {
    if (LANGUAGES[lang]) {
        currentLanguage = lang;
        localStorage.setItem('gameLanguage', lang);
        return true;
    }
    return false;
}

// Get saved language
function getSavedLanguage() {
    return localStorage.getItem('gameLanguage') || 'de';
}
