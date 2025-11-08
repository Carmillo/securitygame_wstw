// Random security incidents that appear during gameplay - English Version
const incidentsDataEn = [
    {
        id: 'suspicious_email',
        icon: '📧',
        title: 'INCIDENT: Suspicious Email',
        description: 'You receive an email: "Your account will be locked in 24 hours! Click here to verify."',
        options: [
            {
                text: 'Click the link',
                correct: false,
                explanation: 'Wrong! This is phishing. Never click links in suspicious emails.'
            },
            {
                text: 'Report to IT Security',
                correct: true,
                explanation: 'Correct! Always report suspicious emails to the IT Security team.'
            },
            {
                text: 'Ignore and delete',
                correct: false,
                explanation: 'Almost right, but better: inform IT Security so others can be warned!'
            }
        ]
    },
    {
        id: 'tailgating',
        icon: '🚪',
        title: 'INCIDENT: Unknown Person',
        description: 'A person without a visible badge wants to follow you through the secured door.',
        options: [
            {
                text: 'Hold the door open',
                correct: false,
                explanation: 'Wrong! This is tailgating - a social engineering technique.'
            },
            {
                text: 'Politely decline and inform Security',
                correct: true,
                explanation: 'Correct! Security comes before politeness. Always inform Security.'
            },
            {
                text: 'Ask if they forgot their badge',
                correct: false,
                explanation: 'No! Not your job to verify. Inform Security!'
            }
        ]
    },
    {
        id: 'usb_found',
        icon: '💾',
        title: 'INCIDENT: USB Drive Found',
        description: 'You find a USB drive on the floor labeled "Salary List 2024".',
        options: [
            {
                text: 'Plug it into your PC',
                correct: false,
                explanation: 'Very dangerous! USB drives can contain malware.'
            },
            {
                text: 'Hand it to IT Security',
                correct: true,
                explanation: 'Perfect! Always hand unknown USB drives to the IT Security team.'
            },
            {
                text: 'Throw it away',
                correct: false,
                explanation: 'Better: hand it to IT Security. This way they can check if it was an attack.'
            }
        ]
    },
    {
        id: 'password_call',
        icon: '📞',
        title: 'INCIDENT: Suspicious Call',
        description: 'Caller: "Hello, IT Support here. We urgently need to verify your password."',
        options: [
            {
                text: 'Provide password',
                correct: false,
                explanation: 'NEVER! Real IT Support never asks for passwords.'
            },
            {
                text: 'Hang up and contact IT Support via official number',
                correct: true,
                explanation: 'Excellent! Always verify through official channels.'
            },
            {
                text: 'Ask for employee number',
                correct: false,
                explanation: 'No! Hang up and call back via official number.'
            }
        ]
    },
    {
        id: 'open_document',
        icon: '📄',
        title: 'INCIDENT: Forgotten Document',
        description: 'A document with confidential customer data is left at the printer. No one is nearby.',
        options: [
            {
                text: 'Leave it there',
                correct: false,
                explanation: 'Wrong! This is a data breach. Secure the document!'
            },
            {
                text: 'Secure it and inform the Data Protection Officer',
                correct: true,
                explanation: 'Correct! Secure the document and inform the responsible person.'
            },
            {
                text: 'Read it and then dispose',
                correct: false,
                explanation: 'No! Don\'t read it (data protection), inform the responsible person instead.'
            }
        ]
    },
    {
        id: 'screen_unlocked',
        icon: '💻',
        title: 'INCIDENT: Unlocked Computer',
        description: 'A colleague is away, their PC is unlocked and showing sensitive emails.',
        options: [
            {
                text: 'Ignore it',
                correct: false,
                explanation: 'Wrong! This is a security risk.'
            },
            {
                text: 'Lock the PC (Windows+L) and inform colleague',
                correct: true,
                explanation: 'Perfect! This protects the company and helps your colleague.'
            },
            {
                text: 'Read the emails',
                correct: false,
                explanation: 'Absolutely wrong! Lock the PC and inform your colleague.'
            }
        ]
    },
    {
        id: 'software_update',
        icon: '🔄',
        title: 'INCIDENT: Update Notification',
        description: 'Windows shows: "Critical security update available. Install now?"',
        options: [
            {
                text: 'Ignore, I don\'t have time',
                correct: false,
                explanation: 'Dangerous! Install critical updates immediately.'
            },
            {
                text: 'Install now',
                correct: true,
                explanation: 'Correct! Critical security updates have highest priority.'
            },
            {
                text: 'Install next week',
                correct: false,
                explanation: 'Too late! Critical updates mean acute danger - install immediately.'
            }
        ]
    },
    {
        id: 'public_wifi',
        icon: '📡',
        title: 'INCIDENT: Public WiFi',
        description: 'You\'re at a café and urgently need to access company data. Only public WiFi available.',
        options: [
            {
                text: 'Log into WiFi directly',
                correct: false,
                explanation: 'Dangerous! Public WiFi networks are insecure.'
            },
            {
                text: 'Activate VPN, then work',
                correct: true,
                explanation: 'Perfect! VPN encrypts your traffic on public networks.'
            },
            {
                text: 'Use mobile data',
                correct: true,
                explanation: 'Also correct! Mobile data is safer than public WiFi.'
            }
        ]
    },
    {
        id: 'ransomware_warning',
        icon: '⚠️',
        title: 'INCIDENT: Suspicious Files',
        description: 'Your antivirus shows: "Suspicious file blocked. Possibly ransomware."',
        options: [
            {
                text: 'Ignore it',
                correct: false,
                explanation: 'Dangerous! Ransomware can spread.'
            },
            {
                text: 'Disconnect PC from network and inform IT Security IMMEDIATELY',
                correct: true,
                explanation: 'Excellent! Quick action prevents spreading.'
            },
            {
                text: 'Restart',
                correct: false,
                explanation: 'Wrong! First disconnect from network, then alert IT Security.'
            }
        ]
    },
    {
        id: 'password_postit',
        icon: '📝',
        title: 'INCIDENT: Password on Post-It',
        description: 'You see a colleague has passwords written on a Post-It stuck to their monitor.',
        options: [
            {
                text: 'Ignore it',
                correct: false,
                explanation: 'Wrong! This is a massive security risk.'
            },
            {
                text: 'Kindly point out the risk to colleague',
                correct: true,
                explanation: 'Correct! Collegial help - explain the risk and recommend a password manager.'
            },
            {
                text: 'Take a photo as evidence',
                correct: false,
                explanation: 'No! Don\'t document, address it directly.'
            }
        ]
    },
    {
        id: 'data_leak',
        icon: '📤',
        title: 'INCIDENT: Accidental Sharing',
        description: 'You realize you\'ve shared confidential data in a public cloud.',
        options: [
            {
                text: 'Hope nobody saw it',
                correct: false,
                explanation: 'Wrong! This is a data breach that must be reported.'
            },
            {
                text: 'Immediately stop sharing and inform Data Protection Officer',
                correct: true,
                explanation: 'Correct! Act quickly and inform responsible person (GDPR requirement).'
            },
            {
                text: 'Delete the file',
                correct: false,
                explanation: 'Not enough! Stop sharing AND inform Data Protection Officer.'
            }
        ]
    },
    {
        id: 'shoulder_surfing',
        icon: '👀',
        title: 'INCIDENT: Watching Person',
        description: 'On the train you notice the person next to you is looking at your laptop.',
        options: [
            {
                text: 'Continue working',
                correct: false,
                explanation: 'Wrong! Shoulder surfing is a real threat.'
            },
            {
                text: 'Use privacy screen or change position',
                correct: true,
                explanation: 'Correct! Protect confidential data from prying eyes.'
            },
            {
                text: 'Confront the person',
                correct: false,
                explanation: 'Not necessary. Changing position or using privacy screen is sufficient.'
            }
        ]
    },
    {
        id: 'backup_reminder',
        icon: '💾',
        title: 'INCIDENT: Backup Overdue',
        description: 'You notice: Your last backup was 3 months ago. You have important new data.',
        options: [
            {
                text: 'Do it next week',
                correct: false,
                explanation: 'Too late! If data is lost, 3 months of work is gone.'
            },
            {
                text: 'Perform backup immediately',
                correct: true,
                explanation: 'Correct! Regular backups are essential. 3 months is far too long!'
            },
            {
                text: 'It\'s not that important',
                correct: false,
                explanation: 'Very wrong! With ransomware or hardware failure, all data is lost.'
            }
        ]
    },
    {
        id: 'unknown_device',
        icon: '🔌',
        title: 'INCIDENT: Unknown Device',
        description: 'An unknown device is connected to your laptop (shows Bluetooth notification).',
        options: [
            {
                text: 'Ignore it',
                correct: false,
                explanation: 'Dangerous! Unknown devices can steal data.'
            },
            {
                text: 'Disconnect and inform IT Security',
                correct: true,
                explanation: 'Correct! Disconnect unknown connections immediately.'
            },
            {
                text: 'Turn off Bluetooth',
                correct: false,
                explanation: 'Not enough! First inform IT Security, then turn off Bluetooth.'
            }
        ]
    },
    {
        id: 'fake_login',
        icon: '🔐',
        title: 'INCIDENT: Strange Login Page',
        description: 'The company login page looks a bit different today. URL is almost the same.',
        options: [
            {
                text: 'Log in as usual',
                correct: false,
                explanation: 'Danger! This could be a phishing page.'
            },
            {
                text: 'Check URL carefully and contact IT Security if in doubt',
                correct: true,
                explanation: 'Perfect! When uncertain, always ask IT Security.'
            },
            {
                text: 'Change password',
                correct: false,
                explanation: 'No! First contact IT Security, then act.'
            }
        ]
    }
];
