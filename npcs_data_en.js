// Extended NPC data with multiple questions per NPC - English Version
const npcsDataEn = [
    {
        id: 'phishing',
        x: 200,
        y: 150,
        color: '#ff6b6b',
        accessories: { glasses: true, tie: true, hair: 'short', hairColor: '#3d2817' },
        name: 'Security Expert Alex',
        title: 'Phishing Specialist',
        joke: 'Why do phishers never go to the casino? Because they prefer to use emails as bait! 🎣',
        dialog: [
            'Hello! I\'m Alex from the IT Security Team.',
            'Phishing is one of the biggest threats!',
            'Let me test your knowledge!'
        ],
        quizzes: [
            {
                question: 'An email asks you to urgently change your password. What do you do?',
                options: [
                    { text: 'Click the link immediately', correct: false },
                    { text: 'Ignore the email and go directly to the website via browser', correct: true },
                    { text: 'Reply and ask for more information', correct: false },
                    { text: 'Provide the password in the email', correct: false }
                ],
                correctExplanation: 'Correct! Never click on links in suspicious emails. Always navigate directly to the official website through your browser!',
                wrongExplanation: 'Unfortunately, that\'s dangerous! Phishing emails try to deceive you. Never click on links in suspicious emails. Always go directly to the official website through your browser.'
            },
            {
                question: 'How do you recognize a phishing email?',
                options: [
                    { text: 'Personal greeting with your name', correct: false },
                    { text: 'Urgency, spelling errors, suspicious sender address', correct: true },
                    { text: 'Company logo is present', correct: false },
                    { text: 'Email arrives during the day', correct: false }
                ],
                correctExplanation: 'Exactly! Phishing emails often create pressure ("Act immediately!"), contain errors, and the sender address only looks real at first glance.',
                wrongExplanation: 'Attention! Attackers copy logos and can sometimes even find out names. Look for urgency, spelling errors, and carefully check the sender address!'
            },
            {
                question: 'You receive an email with a ZIP attachment from an unknown sender. What do you do?',
                options: [
                    { text: 'Open it, could be important', correct: false },
                    { text: 'DO NOT open and inform IT Security', correct: true },
                    { text: 'First open on private phone for testing', correct: false },
                    { text: 'Forward to colleagues', correct: false }
                ],
                correctExplanation: 'Perfect! Unknown attachments can contain malware. Never open them, report to IT Security immediately!',
                wrongExplanation: 'Dangerous! ZIP files and other attachments from unknown senders can contain viruses, trojans, or ransomware. NEVER open them!'
            }
        ]
    },
    {
        id: 'password',
        x: 600,
        y: 150,
        color: '#51cf66',
        accessories: { hair: 'long', hairColor: '#8b4513', glasses: true, badge: true },
        name: 'IT Admin Sarah',
        title: 'Password Guru',
        joke: 'My password is like my love life: complex, secret, and renewed every 90 days! 😄🔐',
        dialog: [
            'Hi! I take care of password security.',
            'Secure passwords are the first line of defense!',
            'Do you know how to use them correctly?'
        ],
        quizzes: [
            {
                question: 'Which is the most secure password?',
                options: [
                    { text: 'Password123', correct: false },
                    { text: 'MyName2024', correct: false },
                    { text: 'asd!K9$mP2@xL7#qR', correct: true },
                    { text: 'SecurePass123', correct: false }
                ],
                correctExplanation: 'Perfect! Long, random passwords with special characters are the most secure. Use a password manager!',
                wrongExplanation: 'Unfortunately not secure enough! Simple words and predictable patterns are easy to crack. A secure password should be long (at least 12 characters), contain upper and lowercase letters, numbers, and special characters. It\'s best to use a password manager!'
            },
            {
                question: 'How often should you use the same password for different accounts?',
                options: [
                    { text: 'Use the same for all important accounts', correct: false },
                    { text: 'Never - every account needs its own password', correct: true },
                    { text: 'Maximum for 3-4 accounts', correct: false },
                    { text: 'Only use the same for unimportant sites', correct: false }
                ],
                correctExplanation: 'Absolutely right! If a password is leaked, otherwise all accounts are at risk. Use a password manager!',
                wrongExplanation: 'Dangerous! If one account is hacked and you use the same password everywhere, attackers can take over all your accounts. Every account needs a UNIQUE password!'
            },
            {
                question: 'What is Multi-Factor Authentication (MFA)?',
                options: [
                    { text: 'Entering multiple passwords in sequence', correct: false },
                    { text: 'Additional code from phone/app alongside the password', correct: true },
                    { text: 'Changing password every 30 days', correct: false },
                    { text: 'Using very long passwords', correct: false }
                ],
                correctExplanation: 'Exactly! MFA means: In addition to the password, you need something only you have (e.g., phone app). This makes accounts much more secure!',
                wrongExplanation: 'That\'s not MFA! Multi-factor means: You need TWO different things to log in. Something you know (password) + something you have (phone/token). Enable MFA wherever possible!'
            },
            {
                question: 'Your colleague asks you to give them your password so they can quickly do something. What do you do?',
                options: [
                    { text: 'Give password, they\'re a colleague after all', correct: false },
                    { text: 'Decline and offer to do it yourself', correct: true },
                    { text: 'Give password but change it afterwards', correct: false },
                    { text: 'Send password via email', correct: false }
                ],
                correctExplanation: 'Correct! Passwords are personal and must NEVER be shared - not even with colleagues. Offer to do the task yourself!',
                wrongExplanation: 'Wrong! Passwords are PERSONAL and must never be shared - not even with colleagues or supervisors. You are responsible for everything that happens with your account!'
            }
        ]
    },
    {
        id: 'social',
        x: 150,
        y: 400,
        color: '#ffd43b',
        accessories: { hat: true, hatColor: '#8b7355', beard: true, beardColor: '#000' },
        name: 'Social Engineering Detective Max',
        title: 'Manipulation Hunter',
        joke: 'I don\'t trust anyone. Not even myself. I could social-engineer myself! 🕵️',
        dialog: [
            'Hey! I\'m Max and I hunt social engineers.',
            'These scammers use psychological tricks!',
            'Can you see through them?'
        ],
        quizzes: [
            {
                question: 'Someone calls and claims to be IT support. They need your password. What do you do?',
                options: [
                    { text: 'Give password, it\'s IT support after all', correct: false },
                    { text: 'Hang up and contact official IT support', correct: true },
                    { text: 'Only reveal the first part of the password', correct: false },
                    { text: 'Send password via email', correct: false }
                ],
                correctExplanation: 'Exactly right! NEVER give passwords over the phone. Always verify through official channels!',
                wrongExplanation: 'This is a classic social engineering attack! Real IT support NEVER asks for your password - neither on the phone nor via email. Attackers pretend to be trustworthy people to get your credentials. Always hang up and call back through official channels!'
            },
            {
                question: 'A person in work clothes without a badge asks you to hold the office door open. What do you do?',
                options: [
                    { text: 'Hold door open, it\'s polite', correct: false },
                    { text: 'Politely decline and inform security/reception', correct: true },
                    { text: 'Ask if they forgot their badge', correct: false },
                    { text: 'Let them in if they give a good reason', correct: false }
                ],
                correctExplanation: 'Perfect! This is called "tailgating". Even if it seems rude: Never let strangers without badges in. Inform security!',
                wrongExplanation: 'This is "tailgating" - a common social engineering technique! Attackers exploit politeness to gain access. NEVER let people without badges in, no matter how friendly they are!'
            },
            {
                question: 'On the phone, someone creates extreme time pressure: "Act immediately or your account will be locked!". What is this?',
                options: [
                    { text: 'Important warning, act immediately', correct: false },
                    { text: 'Typical social engineering tactic - stay calm and verify', correct: true },
                    { text: 'IT emergency, react quickly', correct: false },
                    { text: 'Normal support call', correct: false }
                ],
                correctExplanation: 'Exactly! Time pressure and fear are classic manipulation tactics. When pressured, always pause and verify through official channels!',
                wrongExplanation: 'This is a classic social engineering tactic! Attackers create time pressure and fear so you don\'t think. Don\'t let yourself be rushed - when pressured, always hang up and verify through official channels!'
            }
        ]
    },
    {
        id: 'cleandesk',
        x: 650,
        y: 400,
        color: '#4dabf7',
        accessories: { hair: 'short', hairColor: '#ffd700', tie: true, skinColor: '#d4a574' },
        name: 'Clean Desk Champion Lisa',
        title: 'Clean Desk Officer',
        joke: 'My desk is so clean, even Marie Kondo would be jealous! ✨🗂️',
        dialog: [
            'Hello! I monitor the Clean Desk Policy.',
            'A tidy workplace protects data!',
            'Do you know why?'
        ],
        quizzes: [
            {
                question: 'What should you do when you leave your workplace?',
                options: [
                    { text: 'Leave computer on', correct: false },
                    { text: 'Lock screen (Windows + L)', correct: true },
                    { text: 'Leave passwords on Post-its', correct: false },
                    { text: 'Leave confidential documents lying around', correct: false }
                ],
                correctExplanation: 'Great! Always lock the screen and don\'t leave any confidential information lying around!',
                wrongExplanation: 'This violates the Clean Desk Policy! An unlocked computer or openly lying documents can be viewed or misused by unauthorized persons. Always press Windows + L to lock, put away sensitive documents, and never write passwords on Post-its!'
            },
            {
                question: 'What does NOT belong on your desk?',
                options: [
                    { text: 'Documents with customer data', correct: true },
                    { text: 'Keyboard and mouse', correct: false },
                    { text: 'Coffee cup', correct: false },
                    { text: 'Notepad', correct: false }
                ],
                correctExplanation: 'Correct! Confidential documents must be locked away. Clean Desk means: No sensitive data openly visible!',
                wrongExplanation: 'Wrong! Documents with customer data, passwords, or other sensitive information must NEVER be left openly on the desk. Always lock them away or destroy them!'
            },
            {
                question: 'You print a confidential document. The printer is 2 rooms away. What do you do?',
                options: [
                    { text: 'Wait until later, then pick up', correct: false },
                    { text: 'Go immediately and pick it up', correct: true },
                    { text: 'Ask colleagues to bring it', correct: false },
                    { text: 'Pick it up at the end of the day', correct: false }
                ],
                correctExplanation: 'Perfect! Pick up confidential printouts immediately so they don\'t fall into the wrong hands!',
                wrongExplanation: 'Dangerous! Confidential documents at the printer are a security risk. Others can see or take them. Always pick up IMMEDIATELY!'
            }
        ]
    },
    {
        id: 'usb',
        x: 400,
        y: 500,
        color: '#9775fa',
        accessories: { beard: true, beardColor: '#8b0000', hair: 'short', hairColor: '#000', badge: true },
        name: 'USB Guardian Tom',
        title: 'USB Security Expert',
        joke: 'I don\'t trust any USB stick. They could have been anywhere! 💾😱',
        dialog: [
            'Hey! I warn about dangerous USB sticks.',
            'Unknown media can contain malware!',
            'How do you deal with them?'
        ],
        quizzes: [
            {
                question: 'You find a USB stick in the parking lot. What do you do?',
                options: [
                    { text: 'Immediately plug into work PC', correct: false },
                    { text: 'Turn in to the IT Security team', correct: true },
                    { text: 'Take home', correct: false },
                    { text: 'Open on private laptop', correct: false }
                ],
                correctExplanation: 'Correct! NEVER plug in unknown USB sticks. This is a common attack method!',
                wrongExplanation: 'Very dangerous! USB sticks can be infected with malware. Attackers intentionally place them to compromise systems. As soon as you plug in the stick, malware can execute automatically and infect your system. Always turn in to the IT Security team!'
            },
            {
                question: 'Why are private USB sticks dangerous in the workplace?',
                options: [
                    { text: 'They are not dangerous', correct: false },
                    { text: 'Can introduce malware or leak data', correct: true },
                    { text: 'Only because of storage space issues', correct: false },
                    { text: 'Because they are expensive', correct: false }
                ],
                correctExplanation: 'Exactly! Private USB sticks can inadvertently introduce viruses or be used to steal company data. Therefore: Only approved media!',
                wrongExplanation: 'Wrong! Private USB sticks are a major security risk: They can bring malware into the corporate network or be used for data theft. Use only approved media!'
            },
            {
                question: 'A colleague asks you to copy data to their USB stick. What do you do?',
                options: [
                    { text: 'Copy immediately, no problem', correct: false },
                    { text: 'Check if the data is confidential and the stick is approved', correct: true },
                    { text: 'Copy, but only small files', correct: false },
                    { text: 'Refuse, don\'t trust colleagues', correct: false }
                ],
                correctExplanation: 'Correct! Always check: Is the data confidential? Is the stick approved? If unsure, ask IT Security!',
                wrongExplanation: 'Caution! Before copying data to external media, you must check: 1) Is the stick approved/safe? 2) Is the data confidential? 3) Is copying allowed? If unsure, ask IT Security!'
            }
        ]
    },
    {
        id: 'ransomware',
        x: 250,
        y: 300,
        color: '#e03131',
        accessories: { glasses: true, hair: 'short', hairColor: '#696969', beard: true, beardColor: '#696969' },
        name: 'Ransomware Hunter Dr. Schmidt',
        title: 'Ransomware Specialist',
        joke: 'I encrypt my jokes. If you want to laugh, you have to pay! 😂🔒',
        dialog: [
            'Good day! I fight ransomware attacks.',
            'This malware encrypts your data!',
            'Do you know about it?'
        ],
        quizzes: [
            {
                question: 'What is ransomware?',
                options: [
                    { text: 'Software that makes the computer faster', correct: false },
                    { text: 'Malware that encrypts data and demands ransom', correct: true },
                    { text: 'A backup program', correct: false },
                    { text: 'An antivirus program', correct: false }
                ],
                correctExplanation: 'Correct! Ransomware encrypts your files and attackers demand money for decryption. Very dangerous!',
                wrongExplanation: 'That\'s wrong! Ransomware is one of the most dangerous threats: It encrypts all your files and attackers demand ransom (usually in cryptocurrency). Payment does NOT guarantee decryption!'
            },
            {
                question: 'What do you do if your PC is suddenly locked and shows a ransom demand?',
                options: [
                    { text: 'Pay immediately', correct: false },
                    { text: 'Disconnect PC from network and inform IT Security immediately', correct: true },
                    { text: 'Restart PC', correct: false },
                    { text: 'Wait until it disappears by itself', correct: false }
                ],
                correctExplanation: 'Perfect! Immediately unplug network cable (or turn off WiFi) to stop spreading, then alert IT Security. NEVER pay!',
                wrongExplanation: 'Wrong! With ransomware: 1) IMMEDIATELY disconnect network (unplug cable/turn off WiFi) 2) Inform IT Security 3) NEVER pay ransom (no guarantee of decryption, finances criminals)!'
            },
            {
                question: 'How do you best protect yourself against ransomware?',
                options: [
                    { text: 'Only backups, nothing else helps', correct: false },
                    { text: 'Regular backups + don\'t open suspicious links/attachments + updates', correct: true },
                    { text: 'Antivirus program is sufficient', correct: false },
                    { text: 'Not possible, it\'s unavoidable', correct: false }
                ],
                correctExplanation: 'Exactly! Multiple layers of protection: Backups (offline!), cautious behavior, current software. Together very effective!',
                wrongExplanation: 'Ransomware protection needs multiple layers: 1) Regular OFFLINE backups 2) Don\'t open suspicious email attachments 3) Keep software updated 4) Antivirus program. Only together truly safe!'
            }
        ]
    },
    {
        id: 'updates',
        x: 550,
        y: 300,
        color: '#20c997',
        accessories: { tie: true, hair: 'short', hairColor: '#ff4500', skinColor: '#c68642' },
        name: 'Update Guru Michael',
        title: 'Update Evangelist',
        joke: 'I even update my jokes regularly. Security first! 🔄😄',
        dialog: [
            'Hi! I\'m Michael, responsible for updates.',
            'Current software is safer software!',
            'Do you understand why?'
        ],
        quizzes: [
            {
                question: 'Why are software updates so important?',
                options: [
                    { text: 'Only for new features', correct: false },
                    { text: 'Close security vulnerabilities that attackers can exploit', correct: true },
                    { text: 'Only to waste storage space', correct: false },
                    { text: 'They are not important', correct: false }
                ],
                correctExplanation: 'Exactly! Updates close known security vulnerabilities. Without updates, you\'re an easy target for attackers!',
                wrongExplanation: 'Updates are EXTREMELY important! They close security vulnerabilities that hackers actively exploit. Without updates, your system is vulnerable. Many major cyber attacks could have been prevented through updates!'
            },
            {
                question: 'Your computer shows "Update available". You have a lot to do right now. What do you do?',
                options: [
                    { text: 'Ignore, don\'t have time', correct: false },
                    { text: 'Install update, even if it takes 10 minutes', correct: true },
                    { text: 'Install next week', correct: false },
                    { text: 'Updates are unnecessary', correct: false }
                ],
                correctExplanation: 'Correct! Security updates have priority. Investing 10 minutes is better than days of downtime after an attack!',
                wrongExplanation: 'Dangerous! Security updates should be installed AS SOON AS POSSIBLE. Every delay increases the risk. The 10 minutes for an update are nothing compared to the damage from a cyber attack!'
            },
            {
                question: 'What should you do before the update?',
                options: [
                    { text: 'Nothing, just install', correct: false },
                    { text: 'Save/close important documents', correct: true },
                    { text: 'Avoid updates', correct: false },
                    { text: 'Wait until the PC crashes', correct: false }
                ],
                correctExplanation: 'Exactly! Before updates, always save open documents. The update will then run smoothly!',
                wrongExplanation: 'Before every update, you should save open documents and close programs. This prevents data loss and the update runs smoothly!'
            }
        ]
    },
    {
        id: 'wifi',
        x: 100,
        y: 250,
        color: '#fd7e14',
        accessories: { hair: 'long', hairColor: '#000', glasses: true, skinColor: '#8d5524' },
        name: 'WLAN Specialist Nina',
        title: 'WLAN Security Pro',
        joke: 'Public WiFi without VPN? That\'s like walking around naked! 📡🙈',
        dialog: [
            'Hey! I take care of WLAN security.',
            'Public networks pose risks!',
            'Are you careful?'
        ],
        quizzes: [
            {
                question: 'You\'re working in a café and need internet. What do you do?',
                options: [
                    { text: 'Use public WiFi for everything', correct: false },
                    { text: 'Activate VPN, then use public WiFi', correct: true },
                    { text: 'Do banking transactions in café WiFi', correct: false },
                    { text: 'Prefer WiFi without password', correct: false }
                ],
                correctExplanation: 'Perfect! In public WiFi networks ALWAYS use VPN. This encrypts your data traffic and protects against eavesdroppers!',
                wrongExplanation: 'Public WiFi networks are UNSAFE! Others can read your data traffic. ALWAYS use a VPN (Virtual Private Network) in public networks. Without VPN, never do banking, shopping, or password entries!'
            },
            {
                question: 'What is a VPN and why is it important?',
                options: [
                    { text: 'Makes internet faster', correct: false },
                    { text: 'Encrypts data traffic and protects privacy', correct: true },
                    { text: 'An antivirus program', correct: false },
                    { text: 'Only for streaming movies', correct: false }
                ],
                correctExplanation: 'Exactly! VPN encrypts your entire internet traffic. Especially important in public WiFi networks or when working from home!',
                wrongExplanation: 'A VPN (Virtual Private Network) encrypts your entire data traffic and routes it through a secure server. This protects against eavesdropping and is ESSENTIAL in public WiFi networks or when remote working!'
            },
            {
                question: 'Which WiFi should you use in a café?',
                options: [
                    { text: '"FreeWiFi" without password', correct: false },
                    { text: 'The official café WiFi with VPN', correct: true },
                    { text: 'The strongest signal, no matter which', correct: false },
                    { text: 'All simultaneously', correct: false }
                ],
                correctExplanation: 'Correct! Only use official networks (ask staff) and ALWAYS with VPN. Fake WiFi networks are a popular attack method!',
                wrongExplanation: 'Caution! Attackers create fake WiFi networks with trustworthy names like "FreeWiFi". Ask staff for the OFFICIAL network and use it ONLY with activated VPN!'
            }
        ]
    },
    {
        id: 'backup',
        x: 700,
        y: 250,
        color: '#845ef7',
        accessories: { hair: 'short', hairColor: '#9400d3', badge: true, tie: true },
        name: 'Backup Pro Claudia',
        title: 'Backup Specialist',
        joke: 'I even have a backup of my backup. Paranoid? No, prepared! 💾💾',
        dialog: [
            'Greetings! I\'m responsible for backups.',
            'Backups save your data in emergencies!',
            'Do you know about it?'
        ],
        quizzes: [
            {
                question: 'How often should important data be backed up?',
                options: [
                    { text: 'Once a year is enough', correct: false },
                    { text: 'Regularly and automated (daily/weekly)', correct: true },
                    { text: 'Only when I think of it', correct: false },
                    { text: 'Backups are unnecessary', correct: false }
                ],
                correctExplanation: 'Exactly! Regular, automatic backups are essential. In emergencies (ransomware, hardware failure) you\'ll save your data this way!',
                wrongExplanation: 'Backups must run REGULARLY and AUTOMATICALLY! Once a year or "when I think of it" is far too infrequent. With ransomware or hardware failure without backup, all data is lost!'
            },
            {
                question: 'Where should a backup NOT be stored?',
                options: [
                    { text: 'On external hard drive offline', correct: false },
                    { text: 'Permanently connected to the same computer', correct: true },
                    { text: 'In the cloud encrypted', correct: false },
                    { text: 'In multiple locations', correct: false }
                ],
                correctExplanation: 'Correct! A backup that\'s permanently connected will be encrypted along with ransomware. Backups must be OFFLINE/disconnected!',
                wrongExplanation: 'A backup that\'s permanently connected to the computer is NOT a real backup! With ransomware it will be encrypted too. Rule: 3-2-1 Backup (3 copies, 2 media types, 1 offline/external)!'
            },
            {
                question: 'What is the 3-2-1 backup rule?',
                options: [
                    { text: '3 backups per day', correct: false },
                    { text: '3 copies, 2 media types, 1 offline', correct: true },
                    { text: 'Use 3 computers', correct: false },
                    { text: 'Done in 3 minutes', correct: false }
                ],
                correctExplanation: 'Perfect! 3 copies of your data, on 2 different media types, 1 of them offline/external. This way you\'re maximally protected!',
                wrongExplanation: 'The 3-2-1 rule is the gold standard: 3 COPIES of your data, on 2 different MEDIA TYPES (e.g., hard drive + cloud), 1 copy OFFLINE/EXTERNAL. This way you survive almost any disaster!'
            }
        ]
    },
    {
        id: 'datenschutz',
        x: 400,
        y: 200,
        color: '#ff6b9d',
        accessories: { glasses: true, tie: true, hair: 'short', hairColor: '#4169e1' },
        name: 'Data Protection Officer Robert',
        title: 'GDPR Expert',
        joke: 'I protect data like my grandma protects her goulash recipe! 🛡️📋',
        dialog: [
            'Hello! I\'m Robert from the Data Protection Team.',
            'GDPR and data protection concern us all!',
            'Do you know the rules?'
        ],
        quizzes: [
            {
                question: 'What is personal data?',
                options: [
                    { text: 'Only passwords', correct: false },
                    { text: 'Name, email, phone, IP address - everything for identification', correct: true },
                    { text: 'Only bank data', correct: false },
                    { text: 'Only social security number', correct: false }
                ],
                correctExplanation: 'Exactly! Personal data is ALL information with which a person can be identified. This must be protected!',
                wrongExplanation: 'Personal data is MUCH more: name, address, email, phone, IP address, date of birth, photos, location data... Everything that can identify you must be protected according to GDPR!'
            },
            {
                question: 'A colleague asks for customer data for a presentation. What do you check?',
                options: [
                    { text: 'Just pass it on', correct: false },
                    { text: 'Are they authorized? Do they really need all data? Can data be anonymized?', correct: true },
                    { text: 'Refuse, nobody can see data', correct: false },
                    { text: 'Only if supervisor is present', correct: false }
                ],
                correctExplanation: 'Perfect! Data sharing only according to "need-to-know" principle: Is the person authorized? Is all data necessary? Can it be anonymized?',
                wrongExplanation: 'GDPR principle: Data sharing only when NECESSARY and AUTHORIZED! Ask: 1) Does the person have access? 2) Do they need ALL data? 3) Can data be anonymized/pseudonymized? Data minimization is key!'
            },
            {
                question: 'You find a document with customer data at the printer. What do you do?',
                options: [
                    { text: 'Leave it there', correct: false },
                    { text: 'Secure it and search for owner or inform Data Protection Officer', correct: true },
                    { text: 'Read it and then throw away', correct: false },
                    { text: 'Hang on bulletin board', correct: false }
                ],
                correctExplanation: 'Correct! Report data breach, secure document, and inform owner/Data Protection Officer. This is GDPR compliant!',
                wrongExplanation: 'This is a data breach! Immediately secure document (don\'t read!), search for owner or inform Data Protection Officer. NEVER leave it lying around or post publicly!'
            }
        ]
    },
    {
        id: 'printer',
        x: 300,
        y: 450,
        color: '#868e96',
        accessories: { hat: true, hatColor: '#696969', glasses: true, tie: true },
        name: 'Printer Security Expert Franz',
        title: 'Printer Security Officer',
        joke: 'Authentication at the printer? Yes! We don\'t want everyone seeing your payroll list! 🖨️🔐',
        dialog: [
            'Hello! I\'m Franz, printer security.',
            'Modern printers have authentication!',
            'Do you know why that\'s important?'
        ],
        quizzes: [
            {
                question: 'Why must you authenticate at the printer with a badge?',
                options: [
                    { text: 'Only to control who prints', correct: false },
                    { text: 'So confidential documents don\'t lie around openly', correct: true },
                    { text: 'To save paper', correct: false },
                    { text: 'It\'s unnecessary', correct: false }
                ],
                correctExplanation: 'Exactly! Pull-printing (authentication at the printer) prevents confidential documents from lying around openly. Only when you authenticate with your badge does it print!',
                wrongExplanation: 'Wrong! Pull-printing protects confidential data! Documents are only printed when you authenticate at the printer with your badge. This way others can\'t see or take your printouts.'
            },
            {
                question: 'You print something confidential. What happens with pull-printing?',
                options: [
                    { text: 'Printer prints immediately', correct: false },
                    { text: 'Document waits until I log in at the printer with badge', correct: true },
                    { text: 'Is sent via email', correct: false },
                    { text: 'Is automatically deleted', correct: false }
                ],
                correctExplanation: 'Correct! The document waits in the queue. Only when you hold your badge at the printer does it print. Maximum security!',
                wrongExplanation: 'No! With pull-printing, the document waits safely in the queue. You go to the printer, hold up your badge, and only THEN does it print. This way nobody sees your confidential documents!'
            },
            {
                question: 'What is the advantage of authenticated printers?',
                options: [
                    { text: 'Faster printing', correct: false },
                    { text: 'Data protection - only I can pick up my printouts', correct: true },
                    { text: 'Cheaper prints', correct: false },
                    { text: 'Better print quality', correct: false }
                ],
                correctExplanation: 'Perfect! Authenticated printers protect your privacy and prevent data breaches. Nobody can "accidentally" take your printouts!',
                wrongExplanation: 'The main advantage is DATA PROTECTION! Through authentication at the printer, only YOU can pick up your printouts. Confidential data doesn\'t lie around openly - this prevents data breaches!'
            }
        ]
    },
    {
        id: 'risk',
        x: 500,
        y: 450,
        color: '#fa5252',
        accessories: { hair: 'long', hairColor: '#ff1493', badge: true, skinColor: '#e0ac69' },
        name: 'Risk Manager Andrea',
        title: 'Risk Management Expert',
        joke: 'Reporting risks is like visiting the doctor: Better early than too late! 🚨📊',
        dialog: [
            'Hello! I\'m Andrea, risk management.',
            'Security risks must be reported!',
            'Do you know to whom?'
        ],
        quizzes: [
            {
                question: 'You discover a security risk at the company. To whom do you report it?',
                options: [
                    { text: 'Only tell colleagues', correct: false },
                    { text: 'Inform supervisor or security team', correct: true },
                    { text: 'Ignore, not my problem', correct: false },
                    { text: 'Post on social media', correct: false }
                ],
                correctExplanation: 'Correct! ALWAYS report security risks to your supervisor or the security team. Only then can measures be taken!',
                wrongExplanation: 'Wrong! Security risks must be officially reported - to your supervisor or directly to the security team. Only informing colleagues or ignoring is dangerous!'
            },
            {
                question: 'What is a security risk that must be reported?',
                options: [
                    { text: 'Coffee machine is broken', correct: false },
                    { text: 'Unsecured door to server room, suspicious behavior, data leaks', correct: true },
                    { text: 'Printer is empty', correct: false },
                    { text: 'No WiFi reception', correct: false }
                ],
                correctExplanation: 'Exactly! Physical security (open doors), suspicious behavior, and possible data leaks are security risks that must be reported immediately!',
                wrongExplanation: 'Security risks are: open/broken security doors, suspicious behavior, possible data leaks, missing security updates, etc. Everything that endangers company security must be reported!'
            },
            {
                question: 'Why is it important to report risks?',
                options: [
                    { text: 'To denounce colleagues', correct: false },
                    { text: 'Early detection prevents greater damage and attacks', correct: true },
                    { text: 'Because it\'s mandatory', correct: false },
                    { text: 'It\'s not important', correct: false }
                ],
                correctExplanation: 'Perfect! Early detection is everything! A small risk today can be a major cyber attack tomorrow. Reporting enables preventive measures to be taken!',
                wrongExplanation: 'Reporting risks is ESSENTIAL for prevention! A risk reported today can prevent a major cyber attack or data loss tomorrow. It\'s not about denunciation, but about protecting the company!'
            }
        ]
    }
];
