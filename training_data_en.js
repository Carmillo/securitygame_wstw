// IT-Security Training Content for TechCorp Industries - English Version
const trainingPagesEn = [
    {
        title: "🛡️ Welcome to IT Security Training",
        content: `
            <p style="font-size: 18px; margin-bottom: 20px;">
                Welcome to the IT Security Awareness Training of <strong>TechCorp Industries</strong>!
            </p>
            <p>
                In this training, you will learn the most important fundamentals of IT security.
                Cybersecurity affects us all – whether in the office, working from home, or on the go.
            </p>

            <div class="training-highlight">
                <strong>📌 Why is IT Security important?</strong><br>
                • Protection of sensitive customer data (GDPR)<br>
                • Protection of critical infrastructure<br>
                • Prevention of data loss and business interruptions<br>
                • Protection of the company's reputation
            </div>

            <p style="margin-top: 20px;">
                <strong>IT Service Provider:</strong> IT Services Team<br>
                <strong>Goal:</strong> Safe working in the digital age
            </p>

            <p style="margin-top: 20px; font-style: italic;">
                Click "Next" to begin the training.
            </p>
        `
    },
    {
        title: "📧 Phishing & Email Security",
        content: `
            <h3>What is Phishing?</h3>
            <p>
                Phishing attacks attempt to trick you into revealing passwords,
                access credentials, or opening malicious software through fake emails.
            </p>

            <div class="training-warning">
                <strong>⚠️ Typical Phishing Characteristics:</strong><br>
                • Urgency ("Your account will be locked!")<br>
                • Suspicious sender addresses<br>
                • Spelling and grammar errors<br>
                • Request to click on links or open attachments<br>
                • Requests for passwords or personal information
            </div>

            <h3>How to Act Correctly:</h3>
            <div class="training-success">
                <strong>✅ How to protect yourself:</strong><br>
                • Never click on links in suspicious emails<br>
                • Carefully check the sender address<br>
                • When in doubt: Contact the IT Security Team<br>
                • Report suspicious emails immediately<br>
                • Never send passwords or sensitive data via email
            </div>

            <p style="margin-top: 15px; font-style: italic;">
                💡 <strong>Remember:</strong> Legitimate IT staff will NEVER ask for your password!
            </p>
        `
    },
    {
        title: "🔐 Password Security",
        content: `
            <h3>Creating Secure Passwords</h3>
            <p>
                Passwords are your first line of defense against unauthorized access.
            </p>

            <div class="training-success">
                <strong>✅ A secure password:</strong><br>
                • At least 12 characters long<br>
                • Combination of uppercase and lowercase letters, numbers, and special characters<br>
                • No dictionary words<br>
                • No personal information (names, birthdays)<br>
                • Unique for each account
            </div>

            <div class="training-warning">
                <strong>⚠️ Prohibited:</strong><br>
                • Writing passwords on sticky notes<br>
                • Sharing passwords with colleagues<br>
                • Using the same password for multiple accounts<br>
                • Simple passwords like "Password123" or "Summer2024"
            </div>

            <h3>Use a Password Manager</h3>
            <p>
                Use a password manager to remember different complex passwords.
                This way, you only need to remember one master password!
            </p>

            <div class="training-highlight">
                <strong>🔄 Password Changes:</strong><br>
                Change your password immediately if:<br>
                • You suspect a phishing attack<br>
                • A security incident has been reported<br>
                • Your account shows suspicious activity
            </div>
        `
    },
    {
        title: "🗂️ Clean Desk & Data Protection (GDPR)",
        content: `
            <h3>Clean Desk Policy</h3>
            <p>
                A tidy workspace protects confidential information from prying eyes.
            </p>

            <div class="training-success">
                <strong>✅ Clean Desk means:</strong><br>
                • Lock screen when leaving (Windows + L)<br>
                • Lock away confidential documents<br>
                • No passwords or sensitive data openly visible<br>
                • Collect printouts from the printer immediately
            </div>

            <h3>GDPR Requirements</h3>
            <p>
                The General Data Protection Regulation (GDPR) mandates the protection of personal data.
            </p>

            <div class="training-highlight">
                <strong>📋 Important for you:</strong><br>
                • Only collect and process necessary data<br>
                • Treat customer data confidentially<br>
                • Report data breaches immediately to the Data Protection Officer<br>
                • Do not store customer data in public clouds without authorization<br>
                • Only transmit data in encrypted form
            </div>

            <div class="training-warning">
                <strong>⚠️ Data Breach?</strong><br>
                If you accidentally share confidential data:<br>
                1. Immediately stop sharing/access<br>
                2. Inform the Data Protection Officer<br>
                3. Document the incident
            </div>

            <h3>🖨️ Printer Security (Pull-Printing)</h3>
            <p>
                For confidential printouts: Use badge authentication at the printer.
                This ensures that only you can see your documents.
            </p>
        `
    },
    {
        title: "🦠 Malware, Ransomware & USB Security",
        content: `
            <h3>Recognizing Malicious Software</h3>
            <p>
                Malware (viruses, trojans, ransomware) can infiltrate via email attachments, downloads, or USB drives.
            </p>

            <div class="training-warning">
                <strong>⚠️ Ransomware - The Threat:</strong><br>
                • Encrypts your data and demands ransom<br>
                • Can spread across the network<br>
                • Leads to massive business interruptions<br>
                • Recovery without backup is often impossible
            </div>

            <h3>Immediate Actions on Suspicion:</h3>
            <div class="training-success">
                <strong>✅ In case of Ransomware warning:</strong><br>
                1. Immediately disconnect PC from network (pull LAN cable / turn off WiFi)<br>
                2. Alert IT Security IMMEDIATELY<br>
                3. Do not restart!<br>
                4. Do not pay ransom
            </div>

            <h3>💾 USB Drive Security</h3>
            <div class="training-warning">
                <strong>⚠️ Found USB Drives:</strong><br>
                • NEVER connect to company PC<br>
                • May contain malware (deliberately placed)<br>
                • Hand over to IT Security
            </div>

            <h3>🔄 Software Updates</h3>
            <p>
                Critical security updates close known vulnerabilities.
            </p>
            <div class="training-highlight">
                <strong>Important:</strong> Install critical updates immediately, do not postpone!
            </div>

            <h3>💾 Backups</h3>
            <p>
                Regular backups are your insurance against data loss from ransomware or hardware failures.
            </p>
        `
    },
    {
        title: "📡 WiFi, VPN & Risk Management",
        content: `
            <h3>Public WiFi Networks</h3>
            <div class="training-warning">
                <strong>⚠️ Danger in public networks:</strong><br>
                • Data traffic can be intercepted<br>
                • "Man-in-the-Middle" attacks possible<br>
                • Never work without protection
            </div>

            <div class="training-success">
                <strong>✅ Working safely on the go:</strong><br>
                • Activate VPN before working with company data<br>
                • Or: Use mobile internet (hotspot)<br>
                • Privacy screen filter against "shoulder surfing"
            </div>

            <h3>🚨 Risk Management</h3>
            <p>
                Security risks and suspicious incidents must be reported!
            </p>

            <div class="training-highlight">
                <strong>📢 Report risks to:</strong><br>
                • Your direct supervisor<br>
                • IT Security Team<br>
                • Security Team (for serious incidents)<br>
                • Data Protection Officer (for GDPR violations)
            </div>

            <p>
                <strong>Examples of reportable incidents:</strong>
            </p>
            <ul>
                <li>Suspected phishing attack</li>
                <li>Malware warning</li>
                <li>Loss of company hardware (laptop, smartphone)</li>
                <li>Unauthorized access to systems</li>
                <li>Data breaches (accidental sharing of sensitive data)</li>
            </ul>

            <div class="training-success">
                <strong>💡 Don't be afraid to report!</strong><br>
                Better to report once too often than too late. Early reporting can prevent damage!
            </div>

            <p style="margin-top: 30px; text-align: center; font-size: 18px; color: #0066CC;">
                <strong>You are ready! Click "Start Game" to test your knowledge! 🎮</strong>
            </p>
        `
    }
];
