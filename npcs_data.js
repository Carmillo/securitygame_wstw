// Extended NPC data with multiple questions per NPC
const npcsData = [
    {
        id: 'phishing',
        x: 200,
        y: 150,
        color: '#ff6b6b',
        accessories: { glasses: true, tie: true, hair: 'short', hairColor: '#3d2817' },
        name: 'Security-Experte Alex',
        title: 'Phishing-Spezialist',
        joke: 'Warum gehen Phisher nie ins Casino? Weil sie lieber E-Mails zum Ködern nutzen! 🎣',
        dialog: [
            'Hallo! Ich bin Alex vom IT-Security Team.',
            'Phishing ist eine der größten Bedrohungen!',
            'Lass mich dein Wissen testen!'
        ],
        quizzes: [
            {
                question: 'Eine E-Mail fordert dich auf, dringend dein Passwort zu ändern. Was tust du?',
                options: [
                    { text: 'Sofort auf den Link klicken', correct: false },
                    { text: 'Die E-Mail ignorieren und direkt über Browser zur Website gehen', correct: true },
                    { text: 'Antworten und nach mehr Infos fragen', correct: false },
                    { text: 'Das Passwort in der Mail angeben', correct: false }
                ],
                correctExplanation: 'Richtig! Niemals auf Links in verdächtigen E-Mails klicken. Immer direkt über den Browser zur offiziellen Website navigieren!',
                wrongExplanation: 'Das ist leider gefährlich! Phishing-Mails versuchen dich zu täuschen. Klicke niemals auf Links in verdächtigen E-Mails. Gehe immer direkt über deinen Browser zur offiziellen Website.'
            },
            {
                question: 'Woran erkennst du eine Phishing-Mail?',
                options: [
                    { text: 'Persönliche Anrede mit deinem Namen', correct: false },
                    { text: 'Dringlichkeit, Rechtschreibfehler, verdächtige Absender-Adresse', correct: true },
                    { text: 'Firmenlogo ist vorhanden', correct: false },
                    { text: 'E-Mail kommt tagsüber', correct: false }
                ],
                correctExplanation: 'Genau! Phishing-Mails erzeugen oft Druck ("Sofort handeln!"), enthalten Fehler und die Absender-Adresse sieht nur auf den ersten Blick echt aus.',
                wrongExplanation: 'Achtung! Angreifer kopieren Logos und können teilweise auch Namen herausfinden. Achte auf Dringlichkeit, Rechtschreibfehler und prüfe die Absender-Adresse genau!'
            },
            {
                question: 'Du erhältst eine E-Mail mit einem ZIP-Anhang von einem unbekannten Absender. Was machst du?',
                options: [
                    { text: 'Öffnen, könnte wichtig sein', correct: false },
                    { text: 'NICHT öffnen und IT-Security informieren', correct: true },
                    { text: 'Erst auf privatem Handy öffnen zum Testen', correct: false },
                    { text: 'An Kollegen weiterleiten', correct: false }
                ],
                correctExplanation: 'Perfekt! Unbekannte Anhänge können Malware enthalten. Niemals öffnen, sofort IT-Security melden!',
                wrongExplanation: 'Gefährlich! ZIP-Dateien und andere Anhänge von unbekannten Absendern können Viren, Trojaner oder Ransomware enthalten. NIEMALS öffnen!'
            }
        ]
    },
    {
        id: 'password',
        x: 600,
        y: 150,
        color: '#51cf66',
        accessories: { hair: 'long', hairColor: '#8b4513', glasses: true, badge: true },
        name: 'IT-Admin Sarah',
        title: 'Passwort-Guru',
        joke: 'Mein Passwort ist wie mein Liebesleben: komplex, geheim und alle 90 Tage neu! 😄🔐',
        dialog: [
            'Hi! Ich kümmere mich um Passwort-Sicherheit.',
            'Sichere Passwörter sind die erste Verteidigungslinie!',
            'Weißt du, wie man sie richtig verwendet?'
        ],
        quizzes: [
            {
                question: 'Welches ist das sicherste Passwort?',
                options: [
                    { text: 'Passwort123', correct: false },
                    { text: 'MeinName2024', correct: false },
                    { text: 'asd!K9$mP2@xL7#qR', correct: true },
                    { text: 'WienerStadtwerke', correct: false }
                ],
                correctExplanation: 'Perfekt! Lange, zufällige Passwörter mit Sonderzeichen sind am sichersten. Verwende einen Passwort-Manager!',
                wrongExplanation: 'Leider nicht sicher genug! Einfache Wörter und vorhersehbare Muster sind leicht zu knacken. Ein sicheres Passwort sollte lang sein (mindestens 12 Zeichen), Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthalten. Am besten nutzt du einen Passwort-Manager!'
            },
            {
                question: 'Wie oft solltest du das gleiche Passwort für verschiedene Accounts verwenden?',
                options: [
                    { text: 'Für alle wichtigen Accounts das gleiche', correct: false },
                    { text: 'Nie - jeder Account braucht ein eigenes Passwort', correct: true },
                    { text: 'Maximal für 3-4 Accounts', correct: false },
                    { text: 'Nur für unwichtige Seiten das gleiche', correct: false }
                ],
                correctExplanation: 'Absolut richtig! Wenn ein Passwort geleakt wird, sind sonst alle Accounts gefährdet. Nutze einen Passwort-Manager!',
                wrongExplanation: 'Gefährlich! Wenn ein Account gehackt wird und du das gleiche Passwort überall nutzt, können Angreifer alle deine Accounts übernehmen. Jeder Account braucht ein EINZIGARTIGES Passwort!'
            },
            {
                question: 'Was ist Multi-Faktor-Authentifizierung (MFA)?',
                options: [
                    { text: 'Mehrere Passwörter nacheinander eingeben', correct: false },
                    { text: 'Zusätzlicher Code vom Handy/App neben dem Passwort', correct: true },
                    { text: 'Passwort alle 30 Tage ändern', correct: false },
                    { text: 'Sehr lange Passwörter verwenden', correct: false }
                ],
                correctExplanation: 'Genau! MFA bedeutet: Neben dem Passwort brauchst du noch etwas, das nur du hast (z.B. Handy-App). Das macht Accounts viel sicherer!',
                wrongExplanation: 'Das ist nicht MFA! Multi-Faktor bedeutet: Du brauchst ZWEI verschiedene Dinge zum Einloggen. Etwas das du weißt (Passwort) + etwas das du hast (Handy/Token). Aktiviere MFA wo immer möglich!'
            },
            {
                question: 'Dein Kollege bittet dich, ihm dein Passwort zu geben, damit er schnell etwas erledigen kann. Was machst du?',
                options: [
                    { text: 'Passwort geben, er ist ja Kollege', correct: false },
                    { text: 'Ablehnen und anbieten, es selbst zu erledigen', correct: true },
                    { text: 'Passwort geben, aber danach ändern', correct: false },
                    { text: 'Passwort per E-Mail schicken', correct: false }
                ],
                correctExplanation: 'Richtig! Passwörter sind persönlich und dürfen NIEMALS geteilt werden - auch nicht mit Kollegen. Biete an, die Aufgabe selbst zu erledigen!',
                wrongExplanation: 'Falsch! Passwörter sind PERSÖNLICH und dürfen niemals geteilt werden - selbst nicht mit Kollegen oder Vorgesetzten. Du bist für alles verantwortlich, was mit deinem Account passiert!'
            }
        ]
    },
    {
        id: 'social',
        x: 150,
        y: 400,
        color: '#ffd43b',
        accessories: { hat: true, hatColor: '#8b7355', beard: true, beardColor: '#000' },
        name: 'Social-Engineering-Detektiv Max',
        title: 'Manipulations-Jäger',
        joke: 'Ich vertraue niemandem. Nicht mal mir selbst. Ich könnte mich ja selbst social-engineeren! 🕵️',
        dialog: [
            'Moin! Ich bin Max und jage Social Engineers.',
            'Diese Betrüger nutzen psychologische Tricks!',
            'Kannst du sie durchschauen?'
        ],
        quizzes: [
            {
                question: 'Jemand ruft an und gibt sich als IT-Support aus. Er braucht dein Passwort. Was machst du?',
                options: [
                    { text: 'Passwort nennen, es ist ja IT-Support', correct: false },
                    { text: 'Auflegen und offiziellen IT-Support kontaktieren', correct: true },
                    { text: 'Nur den ersten Teil des Passworts verraten', correct: false },
                    { text: 'Passwort per E-Mail schicken', correct: false }
                ],
                correctExplanation: 'Genau richtig! NIEMALS Passwörter am Telefon weitergeben. Immer über offizielle Kanäle verifizieren!',
                wrongExplanation: 'Das ist ein klassischer Social-Engineering-Angriff! Echter IT-Support fragt NIEMALS nach deinem Passwort - weder am Telefon, noch per E-Mail. Angreifer geben sich als vertrauenswürdige Personen aus, um an deine Zugangsdaten zu kommen. Immer auflegen und über offizielle Kanäle zurückrufen!'
            },
            {
                question: 'Eine Person in Arbeitskleidung ohne Badge bittet dich, die Tür zum Büro aufzuhalten. Was tust du?',
                options: [
                    { text: 'Tür aufhalten, ist ja höflich', correct: false },
                    { text: 'Höflich ablehnen und Security/Empfang informieren', correct: true },
                    { text: 'Fragen ob sie ihren Badge vergessen hat', correct: false },
                    { text: 'Reinlassen, wenn sie einen guten Grund nennt', correct: false }
                ],
                correctExplanation: 'Perfekt! Das nennt man "Tailgating". Auch wenn es unhöflich wirkt: Niemals fremde Personen ohne Badge einlassen. Security informieren!',
                wrongExplanation: 'Das ist "Tailgating" - eine häufige Social-Engineering-Technik! Angreifer nutzen Höflichkeit aus, um Zugang zu bekommen. Lass NIEMALS Personen ohne Badge rein, egal wie freundlich sie sind!'
            },
            {
                question: 'Am Telefon erzeugt jemand extremen Zeitdruck: "Sofort handeln, sonst wird Ihr Account gesperrt!". Was ist das?',
                options: [
                    { text: 'Wichtige Warnung, sofort handeln', correct: false },
                    { text: 'Typische Social-Engineering-Taktik - ruhig bleiben und verifizieren', correct: true },
                    { text: 'IT-Notfall, schnell reagieren', correct: false },
                    { text: 'Normaler Support-Anruf', correct: false }
                ],
                correctExplanation: 'Genau! Zeitdruck und Angst sind klassische Manipulations-Taktiken. Bei Druck immer Pause machen und über offizielle Wege verifizieren!',
                wrongExplanation: 'Das ist eine klassische Social-Engineering-Taktik! Angreifer erzeugen Zeitdruck und Angst, damit du nicht nachdenkst. Lass dich nicht hetzen - bei Druck immer auflegen und über offizielle Kanäle verifizieren!'
            }
        ]
    },
    {
        id: 'cleandesk',
        x: 650,
        y: 400,
        color: '#4dabf7',
        accessories: { hair: 'short', hairColor: '#ffd700', tie: true, skinColor: '#d4a574' },
        name: 'Clean-Desk-Champion Lisa',
        title: 'Clean-Desk-Beauftragte',
        joke: 'Mein Schreibtisch ist so clean, selbst Marie Kondo wäre neidisch! ✨🗂️',
        dialog: [
            'Servus! Ich achte auf Clean-Desk-Policy.',
            'Ein aufgeräumter Arbeitsplatz schützt Daten!',
            'Weißt du warum?'
        ],
        quizzes: [
            {
                question: 'Was solltest du tun, wenn du deinen Arbeitsplatz verlässt?',
                options: [
                    { text: 'Computer eingeschaltet lassen', correct: false },
                    { text: 'Bildschirm sperren (Windows + L)', correct: true },
                    { text: 'Passwörter auf Post-Its lassen', correct: false },
                    { text: 'Vertrauliche Dokumente offen liegen lassen', correct: false }
                ],
                correctExplanation: 'Super! Immer den Bildschirm sperren und keine vertraulichen Infos offen liegen lassen!',
                wrongExplanation: 'Das verstößt gegen die Clean-Desk-Policy! Ein ungesperrter Computer oder offen liegende Dokumente können von Unbefugten eingesehen oder missbraucht werden. Drücke immer Windows + L zum Sperren, räume sensible Dokumente weg und schreibe Passwörter niemals auf Post-Its!'
            },
            {
                question: 'Was gehört NICHT auf deinen Schreibtisch?',
                options: [
                    { text: 'Dokumente mit Kundendaten', correct: true },
                    { text: 'Tastatur und Maus', correct: false },
                    { text: 'Kaffeetasse', correct: false },
                    { text: 'Notizblock', correct: false }
                ],
                correctExplanation: 'Richtig! Vertrauliche Dokumente müssen weggeschlossen werden. Clean Desk bedeutet: Keine sensiblen Daten offen sichtbar!',
                wrongExplanation: 'Falsch! Dokumente mit Kundendaten, Passwörtern oder anderen sensiblen Infos dürfen NIEMALS offen auf dem Schreibtisch liegen. Immer wegschließen oder vernichten!'
            },
            {
                question: 'Du druckst ein vertrauliches Dokument. Der Drucker ist 2 Räume weiter. Was tust du?',
                options: [
                    { text: 'Warten bis später, dann abholen', correct: false },
                    { text: 'Sofort hingehen und abholen', correct: true },
                    { text: 'Kollegen bitten es mitzubringen', correct: false },
                    { text: 'Am Ende des Tages abholen', correct: false }
                ],
                correctExplanation: 'Perfekt! Vertrauliche Ausdrucke sofort abholen, damit sie nicht in falsche Hände geraten!',
                wrongExplanation: 'Gefährlich! Vertrauliche Dokumente am Drucker sind ein Sicherheitsrisiko. Andere können sie sehen oder mitnehmen. Immer SOFORT abholen!'
            }
        ]
    },
    {
        id: 'usb',
        x: 400,
        y: 500,
        color: '#9775fa',
        accessories: { beard: true, beardColor: '#8b0000', hair: 'short', hairColor: '#000', badge: true },
        name: 'USB-Wächter Tom',
        title: 'USB-Sicherheits-Experte',
        joke: 'Ich traue keinem USB-Stick. Die könnten überall gewesen sein! 💾😱',
        dialog: [
            'Hey! Ich warne vor gefährlichen USB-Sticks.',
            'Unbekannte Medien können Malware enthalten!',
            'Wie gehst du damit um?'
        ],
        quizzes: [
            {
                question: 'Du findest einen USB-Stick auf dem Parkplatz. Was tust du?',
                options: [
                    { text: 'Sofort am Arbeits-PC einstecken', correct: false },
                    { text: 'Beim IT-Security Team abgeben', correct: true },
                    { text: 'Mit nach Hause nehmen', correct: false },
                    { text: 'Am privaten Laptop öffnen', correct: false }
                ],
                correctExplanation: 'Richtig! Unbekannte USB-Sticks NIEMALS einstecken. Das ist eine häufige Angriffsmethode!',
                wrongExplanation: 'Sehr gefährlich! USB-Sticks können mit Malware infiziert sein. Angreifer platzieren sie absichtlich, um Systeme zu kompromittieren. Sobald du den Stick einsteckst, kann Schadsoftware automatisch ausgeführt werden und dein System infizieren. Immer beim IT-Security Team abgeben!'
            },
            {
                question: 'Warum sind private USB-Sticks am Arbeitsplatz gefährlich?',
                options: [
                    { text: 'Sind nicht gefährlich', correct: false },
                    { text: 'Können Malware einschleppen oder Daten abfließen lassen', correct: true },
                    { text: 'Nur wegen Speicherplatz-Problemen', correct: false },
                    { text: 'Weil sie teuer sind', correct: false }
                ],
                correctExplanation: 'Genau! Private USB-Sticks können unbemerkt Viren einschleppen oder genutzt werden, um Firmendaten zu stehlen. Daher: Nur genehmigte Datenträger!',
                wrongExplanation: 'Falsch! Private USB-Sticks sind ein großes Sicherheitsrisiko: Sie können Malware ins Firmennetz bringen oder zum Datendiebstahl genutzt werden. Verwende nur genehmigte Datenträger!'
            },
            {
                question: 'Ein Kollege bittet dich, Daten auf seinen USB-Stick zu kopieren. Was machst du?',
                options: [
                    { text: 'Sofort kopieren, kein Problem', correct: false },
                    { text: 'Prüfen ob die Daten vertraulich sind und Stick genehmigt ist', correct: true },
                    { text: 'Kopieren, aber nur kleine Dateien', correct: false },
                    { text: 'Ablehnen, Kollegen nicht trauen', correct: false }
                ],
                correctExplanation: 'Richtig! Immer prüfen: Sind die Daten vertraulich? Ist der Stick genehmigt? Bei Unsicherheit IT-Security fragen!',
                wrongExplanation: 'Vorsicht! Bevor du Daten auf externe Medien kopierst, musst du prüfen: 1) Ist der Stick genehmigt/sicher? 2) Sind die Daten vertraulich? 3) Ist das Kopieren erlaubt? Bei Unsicherheit IT-Security fragen!'
            }
        ]
    },
    {
        id: 'ransomware',
        x: 250,
        y: 300,
        color: '#e03131',
        accessories: { glasses: true, hair: 'short', hairColor: '#696969', beard: true, beardColor: '#696969' },
        name: 'Ransomware-Jäger Dr. Schmidt',
        title: 'Ransomware-Spezialist',
        joke: 'Ich verschlüssele meine Witze. Wer lachen will, muss zahlen! 😂🔒',
        dialog: [
            'Guten Tag! Ich bekämpfe Ransomware-Angriffe.',
            'Diese Schadsoftware verschlüsselt deine Daten!',
            'Kennst du dich aus?'
        ],
        quizzes: [
            {
                question: 'Was ist Ransomware?',
                options: [
                    { text: 'Software die den Computer schneller macht', correct: false },
                    { text: 'Schadsoftware die Daten verschlüsselt und Lösegeld fordert', correct: true },
                    { text: 'Ein Backup-Programm', correct: false },
                    { text: 'Ein Antivirusprogramm', correct: false }
                ],
                correctExplanation: 'Richtig! Ransomware verschlüsselt deine Dateien und Angreifer fordern Geld für die Entschlüsselung. Sehr gefährlich!',
                wrongExplanation: 'Das ist falsch! Ransomware ist eine der gefährlichsten Bedrohungen: Sie verschlüsselt alle deine Dateien und Angreifer fordern Lösegeld (meist in Kryptowährung). Zahlung garantiert NICHT die Entschlüsselung!'
            },
            {
                question: 'Was machst du, wenn dein PC plötzlich gesperrt ist und eine Lösegeldforderung zeigt?',
                options: [
                    { text: 'Sofort bezahlen', correct: false },
                    { text: 'PC vom Netzwerk trennen und IT-Security sofort informieren', correct: true },
                    { text: 'PC neu starten', correct: false },
                    { text: 'Warten bis es von selbst verschwindet', correct: false }
                ],
                correctExplanation: 'Perfekt! Sofort Netzwerkkabel ziehen (oder WLAN aus) um Ausbreitung zu stoppen, dann IT-Security alarmieren. NIEMALS zahlen!',
                wrongExplanation: 'Falsch! Bei Ransomware: 1) SOFORT Netzwerk trennen (Kabel raus/WLAN aus) 2) IT-Security informieren 3) NIEMALS Lösegeld zahlen (keine Garantie für Entschlüsselung, finanziert Kriminelle)!'
            },
            {
                question: 'Wie schützt man sich am besten vor Ransomware?',
                options: [
                    { text: 'Nur Backups, nichts anderes hilft', correct: false },
                    { text: 'Regelmäßige Backups + keine verdächtigen Links/Anhänge öffnen + Updates', correct: true },
                    { text: 'Antivirusprogramm reicht aus', correct: false },
                    { text: 'Gar nicht, ist unvermeidbar', correct: false }
                ],
                correctExplanation: 'Genau! Mehrere Schutzschichten: Backups (offline!), vorsichtiges Verhalten, aktuelle Software. Zusammen sehr effektiv!',
                wrongExplanation: 'Ransomware-Schutz braucht mehrere Ebenen: 1) Regelmäßige OFFLINE-Backups 2) Keine verdächtigen E-Mail-Anhänge öffnen 3) Software aktuell halten 4) Antivirusprogramm. Nur zusammen wirklich sicher!'
            }
        ]
    },
    {
        id: 'updates',
        x: 550,
        y: 300,
        color: '#20c997',
        accessories: { tie: true, hair: 'short', hairColor: '#ff4500', skinColor: '#c68642' },
        name: 'Update-Guru Michael',
        title: 'Update-Evangelist',
        joke: 'Ich update sogar meine Witze regelmäßig. Sicherheit first! 🔄😄',
        dialog: [
            'Hi! Ich bin Michael, zuständig für Updates.',
            'Aktuelle Software ist sicherer Software!',
            'Verstehst du warum?'
        ],
        quizzes: [
            {
                question: 'Warum sind Software-Updates so wichtig?',
                options: [
                    { text: 'Nur für neue Features', correct: false },
                    { text: 'Schließen Sicherheitslücken, die Angreifer ausnutzen können', correct: true },
                    { text: 'Nur um Speicherplatz zu verschwenden', correct: false },
                    { text: 'Sind nicht wichtig', correct: false }
                ],
                correctExplanation: 'Genau! Updates schließen bekannte Sicherheitslücken. Ohne Updates bist du ein leichtes Ziel für Angreifer!',
                wrongExplanation: 'Updates sind EXTREM wichtig! Sie schließen Sicherheitslücken, die Hacker aktiv ausnutzen. Ohne Updates ist dein System angreifbar. Viele große Cyberangriffe hätten durch Updates verhindert werden können!'
            },
            {
                question: 'Dein Computer zeigt "Update verfügbar" an. Du hast gerade viel zu tun. Was machst du?',
                options: [
                    { text: 'Ignorieren, habe keine Zeit', correct: false },
                    { text: 'Update installieren, auch wenn es 10 Minuten dauert', correct: true },
                    { text: 'Nächste Woche installieren', correct: false },
                    { text: 'Updates sind unnötig', correct: false }
                ],
                correctExplanation: 'Richtig! Sicherheitsupdates haben Priorität. 10 Minuten investieren ist besser als tagelanger Ausfall nach einem Angriff!',
                wrongExplanation: 'Gefährlich! Sicherheitsupdates sollten SCHNELLSTMÖGLICH installiert werden. Jede Verzögerung erhöht das Risiko. Die 10 Minuten für ein Update sind nichts verglichen mit dem Schaden eines Cyberangriffs!'
            },
            {
                question: 'Was solltest du vor dem Update tun?',
                options: [
                    { text: 'Nichts, einfach installieren', correct: false },
                    { text: 'Wichtige Dokumente speichern/schließen', correct: true },
                    { text: 'Updates vermeiden', correct: false },
                    { text: 'Warten bis der PC abstürzt', correct: false }
                ],
                correctExplanation: 'Genau! Vor Updates immer offene Dokumente speichern. Das Update wird dann reibungslos durchlaufen!',
                wrongExplanation: 'Vor jedem Update solltest du offene Dokumente speichern und Programme schließen. So vermeidest du Datenverlust und das Update läuft reibungslos!'
            }
        ]
    },
    {
        id: 'wifi',
        x: 100,
        y: 250,
        color: '#fd7e14',
        accessories: { hair: 'long', hairColor: '#000', glasses: true, skinColor: '#8d5524' },
        name: 'WLAN-Spezialistin Nina',
        title: 'WLAN-Sicherheits-Profi',
        joke: 'Öffentliches WLAN ohne VPN? Das ist wie nackt durch Wien spazieren! 📡🙈',
        dialog: [
            'Hey! Ich kümmere mich um WLAN-Sicherheit.',
            'Öffentliche Netzwerke bergen Risiken!',
            'Bist du vorsichtig?'
        ],
        quizzes: [
            {
                question: 'Du arbeitest im Café und brauchst Internet. Was tust du?',
                options: [
                    { text: 'Öffentliches WLAN nutzen für alles', correct: false },
                    { text: 'VPN aktivieren, dann öffentliches WLAN nutzen', correct: true },
                    { text: 'Banktransaktionen im Café-WLAN', correct: false },
                    { text: 'WLAN ohne Passwort bevorzugen', correct: false }
                ],
                correctExplanation: 'Perfekt! In öffentlichen WLANs IMMER VPN nutzen. Das verschlüsselt deinen Datenverkehr und schützt vor Mitlesern!',
                wrongExplanation: 'Öffentliche WLANs sind UNSICHER! Andere können deinen Datenverkehr mitlesen. Nutze IMMER ein VPN (Virtual Private Network) in öffentlichen Netzen. Ohne VPN niemals Banking, Shopping oder Passwort-Eingaben!'
            },
            {
                question: 'Was ist ein VPN und warum ist es wichtig?',
                options: [
                    { text: 'Macht Internet schneller', correct: false },
                    { text: 'Verschlüsselt Datenverkehr und schützt Privatsphäre', correct: true },
                    { text: 'Ein Antivirusprogramm', correct: false },
                    { text: 'Nur für Filme streamen', correct: false }
                ],
                correctExplanation: 'Genau! VPN verschlüsselt deinen gesamten Internet-Traffic. Besonders wichtig in öffentlichen WLANs oder beim Homeoffice!',
                wrongExplanation: 'Ein VPN (Virtual Private Network) verschlüsselt deinen gesamten Datenverkehr und leitet ihn über einen sicheren Server. Das schützt vor Mitlesen und ist ESSENTIELL in öffentlichen WLANs oder beim Remote-Work!'
            },
            {
                question: 'Welches WLAN solltest du im Café nutzen?',
                options: [
                    { text: '"FreeWiFi" ohne Passwort', correct: false },
                    { text: 'Das offizielle Café-WLAN mit VPN', correct: true },
                    { text: 'Das stärkste Signal, egal welches', correct: false },
                    { text: 'Alle gleichzeitig', correct: false }
                ],
                correctExplanation: 'Richtig! Nur offizielle Netzwerke nutzen (Personal fragen) und IMMER mit VPN. Fake-WLANs sind eine beliebte Angriffsmethode!',
                wrongExplanation: 'Vorsicht! Angreifer erstellen Fake-WLANs mit vertrauenswürdigen Namen wie "FreeWiFi". Frage das Personal nach dem OFFIZIELLEN Netzwerk und nutze es NUR mit aktiviertem VPN!'
            }
        ]
    },
    {
        id: 'backup',
        x: 700,
        y: 250,
        color: '#845ef7',
        accessories: { hair: 'short', hairColor: '#9400d3', badge: true, tie: true },
        name: 'Backup-Profi Claudia',
        title: 'Backup-Spezialistin',
        joke: 'Ich hab sogar ein Backup von meinem Backup. Paranoid? Nein, vorbereitet! 💾💾',
        dialog: [
            'Grüß dich! Ich bin für Backups zuständig.',
            'Backups retten deine Daten im Ernstfall!',
            'Weißt du Bescheid?'
        ],
        quizzes: [
            {
                question: 'Wie oft sollten wichtige Daten gesichert werden?',
                options: [
                    { text: 'Einmal im Jahr reicht', correct: false },
                    { text: 'Regelmäßig und automatisiert (täglich/wöchentlich)', correct: true },
                    { text: 'Nur wenn ich daran denke', correct: false },
                    { text: 'Backups sind unnötig', correct: false }
                ],
                correctExplanation: 'Genau! Regelmäßige, automatische Backups sind essentiell. Im Notfall (Ransomware, Hardware-Defekt) rettest du so deine Daten!',
                wrongExplanation: 'Backups müssen REGELMÄSSIG und AUTOMATISCH laufen! Einmal im Jahr oder "wenn ich dran denke" ist viel zu selten. Bei Ransomware oder Hardware-Ausfall ohne Backup sind alle Daten verloren!'
            },
            {
                question: 'Wo sollte ein Backup NICHT gespeichert werden?',
                options: [
                    { text: 'Auf externer Festplatte offline', correct: false },
                    { text: 'Permanent am selben Computer angeschlossen', correct: true },
                    { text: 'In der Cloud verschlüsselt', correct: false },
                    { text: 'An mehreren Orten', correct: false }
                ],
                correctExplanation: 'Richtig! Ein Backup das permanent angeschlossen ist, wird bei Ransomware mitverschlüsselt. Backups müssen OFFLINE/getrennt sein!',
                wrongExplanation: 'Ein Backup das permanent am Computer hängt ist KEIN echtes Backup! Bei Ransomware wird es mitverschlüsselt. Regel: 3-2-1 Backup (3 Kopien, 2 Medienarten, 1 offline/extern)!'
            },
            {
                question: 'Was ist die 3-2-1 Backup-Regel?',
                options: [
                    { text: '3 Backups pro Tag', correct: false },
                    { text: '3 Kopien, 2 Medientypen, 1 offline', correct: true },
                    { text: '3 Computer verwenden', correct: false },
                    { text: 'In 3 Minuten fertig', correct: false }
                ],
                correctExplanation: 'Perfekt! 3 Kopien deiner Daten, auf 2 verschiedenen Medientypen, 1 davon offline/extern. So bist du maximal geschützt!',
                wrongExplanation: 'Die 3-2-1 Regel ist der Gold-Standard: 3 KOPIEN deiner Daten, auf 2 verschiedenen MEDIENTYPEN (z.B. Festplatte + Cloud), 1 Kopie OFFLINE/EXTERN. So überlebst du fast jede Katastrophe!'
            }
        ]
    },
    {
        id: 'datenschutz',
        x: 400,
        y: 200,
        color: '#ff6b9d',
        accessories: { glasses: true, tie: true, hair: 'short', hairColor: '#4169e1' },
        name: 'Datenschutz-Beauftragter Robert',
        title: 'DSGVO-Experte',
        joke: 'Ich schütze Daten wie meine Oma ihr Gulasch-Rezept! 🛡️📋',
        dialog: [
            'Servus! Ich bin Robert vom Datenschutz-Team.',
            'DSGVO und Datenschutz betreffen uns alle!',
            'Kennst du die Regeln?'
        ],
        quizzes: [
            {
                question: 'Was sind personenbezogene Daten?',
                options: [
                    { text: 'Nur Passwörter', correct: false },
                    { text: 'Name, E-Mail, Telefon, IP-Adresse - alles zur Identifizierung', correct: true },
                    { text: 'Nur Bankdaten', correct: false },
                    { text: 'Nur Sozialversicherungsnummer', correct: false }
                ],
                correctExplanation: 'Genau! Personenbezogene Daten sind ALLE Infos, mit denen man eine Person identifizieren kann. Diese müssen geschützt werden!',
                wrongExplanation: 'Personenbezogene Daten sind VIEL mehr: Name, Adresse, E-Mail, Telefon, IP-Adresse, Geburtsdatum, Fotos, Standortdaten... Alles womit man dich identifizieren kann muss nach DSGVO geschützt werden!'
            },
            {
                question: 'Ein Kollege fragt nach Kundendaten für eine Präsentation. Was prüfst du?',
                options: [
                    { text: 'Einfach weitergeben', correct: false },
                    { text: 'Ist er berechtigt? Braucht er wirklich alle Daten? Können Daten anonymisiert werden?', correct: true },
                    { text: 'Ablehnen, niemand darf Daten sehen', correct: false },
                    { text: 'Nur wenn Chef dabei ist', correct: false }
                ],
                correctExplanation: 'Perfekt! Datenweitergabe nur nach "Need-to-know" Prinzip: Ist Person berechtigt? Sind alle Daten nötig? Können sie anonymisiert werden?',
                wrongExplanation: 'DSGVO-Prinzip: Datenweitergabe nur wenn NÖTIG und BERECHTIGT! Frage: 1) Hat die Person Zugriff? 2) Braucht sie ALLE Daten? 3) Können Daten anonymisiert/pseudonymisiert werden? Datensparsamkeit ist key!'
            },
            {
                question: 'Du findest ein Dokument mit Kundendaten am Drucker. Was machst du?',
                options: [
                    { text: 'Liegen lassen', correct: false },
                    { text: 'Sicher verwahren und Besitzer suchen oder Datenschutzbeauftragten informieren', correct: true },
                    { text: 'Lesen und dann wegwerfen', correct: false },
                    { text: 'An schwarzes Brett hängen', correct: false }
                ],
                correctExplanation: 'Richtig! Datenpanne melden, Dokument sichern und Besitzer/Datenschutzbeauftragten informieren. So handelst du DSGVO-konform!',
                wrongExplanation: 'Das ist eine Datenpanne! Dokument sofort sichern (nicht lesen!), Besitzer suchen oder Datenschutzbeauftragten informieren. NIEMALS liegen lassen oder öffentlich aufhängen!'
            }
        ]
    },
    {
        id: 'printer',
        x: 300,
        y: 450,
        color: '#868e96',
        accessories: { hat: true, hatColor: '#696969', glasses: true, tie: true },
        name: 'Drucker-Security-Experte Franz',
        title: 'Drucker-Sicherheits-Beauftragter',
        joke: 'Authentifizierung am Drucker? Ja! Wir wollen doch nicht, dass jeder deine Gehaltsliste sieht! 🖨️🔐',
        dialog: [
            'Grüß Gott! Ich bin Franz, Drucker-Sicherheit.',
            'Moderne Drucker haben Authentifizierung!',
            'Weißt du warum das wichtig ist?'
        ],
        quizzes: [
            {
                question: 'Warum muss man sich am Drucker mit Badge authentifizieren?',
                options: [
                    { text: 'Nur zur Kontrolle wer druckt', correct: false },
                    { text: 'Damit vertrauliche Dokumente nicht offen herumliegen', correct: true },
                    { text: 'Um Papier zu sparen', correct: false },
                    { text: 'Ist unnötig', correct: false }
                ],
                correctExplanation: 'Genau! Pull-Printing (Authentifizierung am Drucker) verhindert, dass vertrauliche Dokumente offen herumliegen. Erst wenn du dich mit deinem Badge authentifizierst, wird gedruckt!',
                wrongExplanation: 'Falsch! Pull-Printing schützt vertrauliche Daten! Dokumente werden erst gedruckt, wenn du dich am Drucker mit deinem Badge authentifizierst. So können andere deine Ausdrucke nicht sehen oder mitnehmen.'
            },
            {
                question: 'Du druckst etwas Vertrauliches. Was passiert bei Pull-Printing?',
                options: [
                    { text: 'Drucker druckt sofort', correct: false },
                    { text: 'Dokument wartet, bis ich mich am Drucker mit Badge anmelde', correct: true },
                    { text: 'Wird per E-Mail geschickt', correct: false },
                    { text: 'Wird automatisch gelöscht', correct: false }
                ],
                correctExplanation: 'Richtig! Das Dokument wartet in der Warteschlange. Erst wenn du am Drucker dein Badge hinhältst, wird es gedruckt. Maximum Security!',
                wrongExplanation: 'Nein! Bei Pull-Printing wartet das Dokument sicher in der Warteschlange. Du gehst zum Drucker, hältst dein Badge hin, und erst DANN wird gedruckt. So sieht niemand deine vertraulichen Dokumente!'
            },
            {
                question: 'Was ist der Vorteil von authentifizierten Druckern?',
                options: [
                    { text: 'Schnelleres Drucken', correct: false },
                    { text: 'Datenschutz - nur ich kann meine Ausdrucke abholen', correct: true },
                    { text: 'Billigere Drucke', correct: false },
                    { text: 'Bessere Druckqualität', correct: false }
                ],
                correctExplanation: 'Perfekt! Authentifizierte Drucker schützen deine Privatsphäre und verhindern Datenpannen. Niemand kann deine Ausdrucke "aus Versehen" mitnehmen!',
                wrongExplanation: 'Der Hauptvorteil ist DATENSCHUTZ! Durch Authentifizierung am Drucker kannst nur DU deine Ausdrucke abholen. Vertrauliche Daten liegen nicht offen herum - das verhindert Datenpannen!'
            }
        ]
    },
    {
        id: 'risk',
        x: 500,
        y: 450,
        color: '#fa5252',
        accessories: { hair: 'long', hairColor: '#ff1493', badge: true, skinColor: '#e0ac69' },
        name: 'Risk-Manager Andrea',
        title: 'Risikomanagement-Expertin',
        joke: 'Risiken melden ist wie Arzt besuchen: Lieber früh als zu spät! 🚨📊',
        dialog: [
            'Servus! Ich bin Andrea, Risikomanagement.',
            'Sicherheitsrisiken müssen gemeldet werden!',
            'Weißt du an wen?'
        ],
        quizzes: [
            {
                question: 'Du entdeckst ein Sicherheitsrisiko in der Firma. An wen meldest du es?',
                options: [
                    { text: 'Nur Kollegen erzählen', correct: false },
                    { text: 'Vorgesetzten oder Konzernsicherheit informieren', correct: true },
                    { text: 'Ignorieren, ist nicht mein Problem', correct: false },
                    { text: 'In Social Media posten', correct: false }
                ],
                correctExplanation: 'Richtig! Sicherheitsrisiken IMMER dem Vorgesetzten oder der Konzernsicherheit melden. Nur so können Maßnahmen ergriffen werden!',
                wrongExplanation: 'Falsch! Sicherheitsrisiken müssen offiziell gemeldet werden - an deinen Vorgesetzten oder direkt an die Konzernsicherheit. Nur Kollegen informieren oder ignorieren ist gefährlich!'
            },
            {
                question: 'Was ist ein Sicherheitsrisiko, das gemeldet werden muss?',
                options: [
                    { text: 'Kaffeemaschine ist kaputt', correct: false },
                    { text: 'Ungesicherte Tür zum Serverraum, verdächtiges Verhalten, Datenlecks', correct: true },
                    { text: 'Drucker ist leer', correct: false },
                    { text: 'Kein WLAN-Empfang', correct: false }
                ],
                correctExplanation: 'Genau! Physische Sicherheit (offene Türen), verdächtiges Verhalten und mögliche Datenlecks sind Sicherheitsrisiken die sofort gemeldet werden müssen!',
                wrongExplanation: 'Sicherheitsrisiken sind: offene/defekte Sicherheitstüren, verdächtiges Verhalten, mögliche Datenlecks, fehlende Security-Updates, etc. Alles was die Sicherheit der Firma gefährdet muss gemeldet werden!'
            },
            {
                question: 'Warum ist es wichtig, Risiken zu melden?',
                options: [
                    { text: 'Um Kollegen zu denunzieren', correct: false },
                    { text: 'Früherkennung verhindert größere Schäden und Angriffe', correct: true },
                    { text: 'Weil es Pflicht ist', correct: false },
                    { text: 'Ist nicht wichtig', correct: false }
                ],
                correctExplanation: 'Perfekt! Früherkennung ist alles! Ein kleines Risiko heute kann morgen ein großer Cyber-Angriff sein. Durch Meldung können präventive Maßnahmen ergriffen werden!',
                wrongExplanation: 'Risiken melden ist ESSENTIELL für Prävention! Ein heute gemeldetes Risiko kann morgen einen großen Cyber-Angriff oder Datenverlust verhindern. Es geht nicht um Denunziation, sondern um Schutz der Firma!'
            }
        ]
    }
];
