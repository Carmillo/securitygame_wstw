// Random security incidents that appear during gameplay
const incidentsData = [
    {
        id: 'suspicious_email',
        icon: '📧',
        title: 'INCIDENT: Verdächtige E-Mail',
        description: 'Du erhältst eine E-Mail: "Ihr Konto wird in 24h gesperrt! Klicken Sie hier um zu verifizieren."',
        options: [
            {
                text: 'Link anklicken',
                correct: false,
                explanation: 'Falsch! Das ist Phishing. Niemals auf Links in verdächtigen E-Mails klicken.'
            },
            {
                text: 'IT-Security melden',
                correct: true,
                explanation: 'Richtig! Verdächtige E-Mails immer dem IT-Security Team melden.'
            },
            {
                text: 'Ignorieren und löschen',
                correct: false,
                explanation: 'Fast richtig, aber besser: IT-Security informieren, damit andere gewarnt werden!'
            }
        ]
    },
    {
        id: 'tailgating',
        icon: '🚪',
        title: 'INCIDENT: Unbekannte Person',
        description: 'Eine Person ohne sichtbaren Badge will dir durch die gesicherte Tür folgen.',
        options: [
            {
                text: 'Tür aufhalten',
                correct: false,
                explanation: 'Falsch! Das ist Tailgating - eine Social-Engineering-Technik.'
            },
            {
                text: 'Höflich ablehnen und Security informieren',
                correct: true,
                explanation: 'Richtig! Sicherheit geht vor Höflichkeit. Immer Security informieren.'
            },
            {
                text: 'Fragen ob Badge vergessen wurde',
                correct: false,
                explanation: 'Nein! Nicht deine Aufgabe zu prüfen. Security informieren!'
            }
        ]
    },
    {
        id: 'usb_found',
        icon: '💾',
        title: 'INCIDENT: USB-Stick gefunden',
        description: 'Du findest einen USB-Stick auf dem Boden mit der Aufschrift "Gehaltsliste 2024".',
        options: [
            {
                text: 'Am PC einstecken',
                correct: false,
                explanation: 'Sehr gefährlich! USB-Sticks können Malware enthalten.'
            },
            {
                text: 'IT-Security abgeben',
                correct: true,
                explanation: 'Perfekt! Unbekannte USB-Sticks immer beim IT-Security Team abgeben.'
            },
            {
                text: 'Wegwerfen',
                correct: false,
                explanation: 'Besser: IT-Security abgeben. So kann geprüft werden ob es ein Angriff war.'
            }
        ]
    },
    {
        id: 'password_call',
        icon: '📞',
        title: 'INCIDENT: Verdächtiger Anruf',
        description: 'Anrufer: "Hallo, IT-Support hier. Wir müssen dringend dein Passwort überprüfen."',
        options: [
            {
                text: 'Passwort nennen',
                correct: false,
                explanation: 'NIEMALS! Echter IT-Support fragt nie nach Passwörtern.'
            },
            {
                text: 'Auflegen und IT-Support über offizielle Nummer kontaktieren',
                correct: true,
                explanation: 'Exzellent! Immer über offizielle Kanäle verifizieren.'
            },
            {
                text: 'Nach Mitarbeiternummer fragen',
                correct: false,
                explanation: 'Nein! Auflegen und über offizielle Nummer zurückrufen.'
            }
        ]
    },
    {
        id: 'open_document',
        icon: '📄',
        title: 'INCIDENT: Vergessenes Dokument',
        description: 'Am Drucker liegt ein Dokument mit vertraulichen Kundendaten. Niemand ist in der Nähe.',
        options: [
            {
                text: 'Liegen lassen',
                correct: false,
                explanation: 'Falsch! Das ist eine Datenpanne. Dokument sichern!'
            },
            {
                text: 'Sicher verwahren und Datenschutzbeauftragten informieren',
                correct: true,
                explanation: 'Richtig! Dokument sichern und Verantwortliche informieren.'
            },
            {
                text: 'Lesen und dann entsorgen',
                correct: false,
                explanation: 'Nein! Nicht lesen (Datenschutz), sondern Verantwortliche informieren.'
            }
        ]
    },
    {
        id: 'screen_unlocked',
        icon: '💻',
        title: 'INCIDENT: Ungesperrter PC',
        description: 'Ein Kollege ist weg, sein PC ist nicht gesperrt und zeigt sensible E-Mails.',
        options: [
            {
                text: 'Ignorieren',
                correct: false,
                explanation: 'Falsch! Das ist ein Sicherheitsrisiko.'
            },
            {
                text: 'PC sperren (Windows+L) und Kollegen informieren',
                correct: true,
                explanation: 'Perfekt! So schützt du die Firma und hilfst dem Kollegen.'
            },
            {
                text: 'E-Mails lesen',
                correct: false,
                explanation: 'Absolut falsch! PC sperren und Kollegen informieren.'
            }
        ]
    },
    {
        id: 'software_update',
        icon: '🔄',
        title: 'INCIDENT: Update-Benachrichtigung',
        description: 'Windows zeigt: "Kritisches Sicherheitsupdate verfügbar. Jetzt installieren?"',
        options: [
            {
                text: 'Ignorieren, habe keine Zeit',
                correct: false,
                explanation: 'Gefährlich! Kritische Updates sofort installieren.'
            },
            {
                text: 'Jetzt installieren',
                correct: true,
                explanation: 'Richtig! Kritische Sicherheitsupdates haben höchste Priorität.'
            },
            {
                text: 'Nächste Woche installieren',
                correct: false,
                explanation: 'Zu spät! Kritische Updates bedeuten akute Gefahr - sofort installieren.'
            }
        ]
    },
    {
        id: 'public_wifi',
        icon: '📡',
        title: 'INCIDENT: Öffentliches WLAN',
        description: 'Du bist im Café und musst dringend Firmendaten abrufen. Nur öffentliches WLAN verfügbar.',
        options: [
            {
                text: 'Direkt ins WLAN einloggen',
                correct: false,
                explanation: 'Gefährlich! Öffentliche WLANs sind unsicher.'
            },
            {
                text: 'VPN aktivieren, dann arbeiten',
                correct: true,
                explanation: 'Perfekt! VPN verschlüsselt deinen Traffic in öffentlichen Netzen.'
            },
            {
                text: 'Mobiles Internet nutzen',
                correct: true,
                explanation: 'Auch richtig! Mobiles Internet ist sicherer als öffentliches WLAN.'
            }
        ]
    },
    {
        id: 'ransomware_warning',
        icon: '⚠️',
        title: 'INCIDENT: Verdächtige Dateien',
        description: 'Dein Antivirus zeigt: "Verdächtige Datei blockiert. Möglicherweise Ransomware."',
        options: [
            {
                text: 'Ignorieren',
                correct: false,
                explanation: 'Gefährlich! Ransomware kann sich ausbreiten.'
            },
            {
                text: 'PC vom Netzwerk trennen und IT-Security SOFORT informieren',
                correct: true,
                explanation: 'Exzellent! Schnelles Handeln verhindert Ausbreitung.'
            },
            {
                text: 'Neu starten',
                correct: false,
                explanation: 'Falsch! Erst Netzwerk trennen, dann IT-Security alarmieren.'
            }
        ]
    },
    {
        id: 'password_postit',
        icon: '📝',
        title: 'INCIDENT: Passwort auf Post-It',
        description: 'Du siehst bei einem Kollegen ein Post-It mit Passwörtern am Monitor kleben.',
        options: [
            {
                text: 'Ignorieren',
                correct: false,
                explanation: 'Falsch! Das ist ein massives Sicherheitsrisiko.'
            },
            {
                text: 'Kollegen freundlich auf Risiko hinweisen',
                correct: true,
                explanation: 'Richtig! Kollegiale Hilfe - erkläre das Risiko und empfehle Passwort-Manager.'
            },
            {
                text: 'Foto machen als Beweis',
                correct: false,
                explanation: 'Nein! Nicht dokumentieren, direkt ansprechen.'
            }
        ]
    },
    {
        id: 'data_leak',
        icon: '📤',
        title: 'INCIDENT: Versehentliches Teilen',
        description: 'Du merkst, dass du vertrauliche Daten in einer öffentlichen Cloud geteilt hast.',
        options: [
            {
                text: 'Hoffen dass niemand es gesehen hat',
                correct: false,
                explanation: 'Falsch! Das ist eine Datenpanne die gemeldet werden muss.'
            },
            {
                text: 'Sofort Sharing stoppen und Datenschutzbeauftragten informieren',
                correct: true,
                explanation: 'Richtig! Schnell handeln und Verantwortliche informieren (DSGVO-Pflicht).'
            },
            {
                text: 'Datei löschen',
                correct: false,
                explanation: 'Nicht genug! Sharing stoppen UND Datenschutzbeauftragten informieren.'
            }
        ]
    },
    {
        id: 'shoulder_surfing',
        icon: '👀',
        title: 'INCIDENT: Blickende Person',
        description: 'Im Zug bemerkst du, dass die Person neben dir auf deinen Laptop schaut.',
        options: [
            {
                text: 'Weiterarbeiten',
                correct: false,
                explanation: 'Falsch! Shoulder Surfing ist eine echte Bedrohung.'
            },
            {
                text: 'Sichtschutzfolie nutzen oder Position ändern',
                correct: true,
                explanation: 'Richtig! Vertrauliche Daten vor neugierigen Blicken schützen.'
            },
            {
                text: 'Person ansprechen',
                correct: false,
                explanation: 'Nicht nötig. Position ändern oder Sichtschutz nutzen reicht.'
            }
        ]
    },
    {
        id: 'backup_reminder',
        icon: '💾',
        title: 'INCIDENT: Backup überfällig',
        description: 'Du bemerkst: Dein letztes Backup ist 3 Monate her. Du hast wichtige neue Daten.',
        options: [
            {
                text: 'Nächste Woche machen',
                correct: false,
                explanation: 'Zu spät! Bei Datenverlust sind 3 Monate Arbeit weg.'
            },
            {
                text: 'Sofort Backup durchführen',
                correct: true,
                explanation: 'Richtig! Regelmäßige Backups sind essentiell. 3 Monate ist viel zu lang!'
            },
            {
                text: 'Ist nicht so wichtig',
                correct: false,
                explanation: 'Sehr falsch! Bei Ransomware oder Hardware-Defekt sind alle Daten verloren.'
            }
        ]
    },
    {
        id: 'unknown_device',
        icon: '🔌',
        title: 'INCIDENT: Unbekanntes Gerät',
        description: 'Ein unbekanntes Gerät ist mit deinem Laptop verbunden (zeigt Bluetooth-Benachrichtigung).',
        options: [
            {
                text: 'Ignorieren',
                correct: false,
                explanation: 'Gefährlich! Unbekannte Geräte können Daten abgreifen.'
            },
            {
                text: 'Verbindung trennen und IT-Security informieren',
                correct: true,
                explanation: 'Richtig! Unbekannte Verbindungen sofort trennen.'
            },
            {
                text: 'Bluetooth ausschalten',
                correct: false,
                explanation: 'Nicht genug! Erst IT-Security informieren, dann Bluetooth aus.'
            }
        ]
    },
    {
        id: 'fake_login',
        icon: '🔐',
        title: 'INCIDENT: Komische Login-Seite',
        description: 'Die Firmen-Login-Seite sieht heute etwas anders aus. URL ist fast gleich.',
        options: [
            {
                text: 'Einloggen wie gewohnt',
                correct: false,
                explanation: 'Gefahr! Das könnte eine Phishing-Seite sein.'
            },
            {
                text: 'URL genau prüfen und bei Zweifel IT-Security kontaktieren',
                correct: true,
                explanation: 'Perfekt! Bei Unsicherheit immer IT-Security fragen.'
            },
            {
                text: 'Passwort ändern',
                correct: false,
                explanation: 'Nein! Erst IT-Security kontaktieren, dann handeln.'
            }
        ]
    }
];
