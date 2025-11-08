// IT-Security Training Content for TechCorp Industries
const trainingPages = [
    {
        title: "🛡️ Willkommen zum IT-Security Training",
        content: `
            <p style="font-size: 18px; margin-bottom: 20px;">
                Willkommen beim IT-Security Awareness Training der <strong>TechCorp Industries</strong>!
            </p>
            <p>
                In diesem Training lernen Sie die wichtigsten Grundlagen der IT-Sicherheit kennen.
                Cybersecurity betrifft uns alle – egal ob im Büro, im Homeoffice oder unterwegs.
            </p>

            <div class="training-highlight">
                <strong>📌 Warum ist IT-Security wichtig?</strong><br>
                • Schutz sensibler Kundendaten (DSGVO)<br>
                • Schutz der kritischen Infrastruktur<br>
                • Vermeidung von Datenverlusten und Betriebsunterbrechungen<br>
                • Schutz des Unternehmensrufs
            </div>

            <p style="margin-top: 20px;">
                <strong>IT-Dienstleister:</strong> IT Services Team<br>
                <strong>Ziel:</strong> Sicheres Arbeiten im digitalen Zeitalter
            </p>

            <p style="margin-top: 20px; font-style: italic;">
                Klicken Sie auf "Weiter", um mit dem Training zu beginnen.
            </p>
        `
    },
    {
        title: "📧 Phishing & E-Mail-Sicherheit",
        content: `
            <h3>Was ist Phishing?</h3>
            <p>
                Phishing-Angriffe versuchen, Sie durch gefälschte E-Mails zur Preisgabe von Passwörtern,
                Zugangsdaten oder zum Öffnen von Schadsoftware zu verleiten.
            </p>

            <div class="training-warning">
                <strong>⚠️ Typische Phishing-Merkmale:</strong><br>
                • Dringlichkeit ("Ihr Konto wird gesperrt!")<br>
                • Verdächtige Absender-Adressen<br>
                • Rechtschreib- und Grammatikfehler<br>
                • Aufforderung, auf Links zu klicken oder Anhänge zu öffnen<br>
                • Anfrage nach Passwörtern oder persönlichen Daten
            </div>

            <h3>Richtig handeln:</h3>
            <div class="training-success">
                <strong>✅ So schützen Sie sich:</strong><br>
                • Niemals auf Links in verdächtigen E-Mails klicken<br>
                • Absender-Adresse genau prüfen<br>
                • Bei Unsicherheit: IT-Security Team kontaktieren<br>
                • Verdächtige E-Mails sofort melden<br>
                • Keine Passwörter oder sensible Daten per E-Mail versenden
            </div>

            <p style="margin-top: 15px; font-style: italic;">
                💡 <strong>Merke:</strong> Legitime IT-Mitarbeiter fragen NIEMALS nach Ihrem Passwort!
            </p>
        `
    },
    {
        title: "🔐 Passwort-Sicherheit",
        content: `
            <h3>Sichere Passwörter erstellen</h3>
            <p>
                Passwörter sind Ihre erste Verteidigungslinie gegen unbefugten Zugriff.
            </p>

            <div class="training-success">
                <strong>✅ Ein sicheres Passwort:</strong><br>
                • Mindestens 12 Zeichen lang<br>
                • Kombination aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen<br>
                • Keine Wörter aus dem Wörterbuch<br>
                • Keine persönlichen Informationen (Namen, Geburtstage)<br>
                • Einzigartig für jeden Account
            </div>

            <div class="training-warning">
                <strong>⚠️ Verboten:</strong><br>
                • Passwörter auf Post-Its schreiben<br>
                • Passwörter mit Kollegen teilen<br>
                • Dasselbe Passwort für mehrere Accounts<br>
                • Einfache Passwörter wie "Passwort123" oder "Sommer2024"
            </div>

            <h3>Passwort-Manager nutzen</h3>
            <p>
                Nutzen Sie einen Passwort-Manager, um sich verschiedene komplexe Passwörter zu merken.
                So müssen Sie sich nur ein Master-Passwort merken!
            </p>

            <div class="training-highlight">
                <strong>🔄 Passwort-Wechsel:</strong><br>
                Ändern Sie Ihr Passwort sofort, wenn:<br>
                • Sie einen Phishing-Angriff vermuten<br>
                • Ein Sicherheitsvorfall bekannt wurde<br>
                • Ihr Account verdächtige Aktivitäten zeigt
            </div>
        `
    },
    {
        title: "🗂️ Clean Desk & Datenschutz (DSGVO)",
        content: `
            <h3>Clean-Desk-Policy</h3>
            <p>
                Ein aufgeräumter Arbeitsplatz schützt vertrauliche Informationen vor neugierigen Blicken.
            </p>

            <div class="training-success">
                <strong>✅ Clean Desk bedeutet:</strong><br>
                • Bildschirm sperren beim Verlassen (Windows + L)<br>
                • Vertrauliche Dokumente wegschließen<br>
                • Keine Passwörter oder sensible Daten offen sichtbar<br>
                • Ausdrucke sofort vom Drucker abholen
            </div>

            <h3>DSGVO-Anforderungen</h3>
            <p>
                Die Datenschutz-Grundverordnung (DSGVO) schreibt den Schutz personenbezogener Daten vor.
            </p>

            <div class="training-highlight">
                <strong>📋 Wichtig für Sie:</strong><br>
                • Nur notwendige Daten erheben und verarbeiten<br>
                • Kundendaten vertraulich behandeln<br>
                • Datenpannen sofort dem Datenschutzbeauftragten melden<br>
                • Keine Kundendaten in öffentlichen Clouds speichern ohne Freigabe<br>
                • Daten nur verschlüsselt übertragen
            </div>

            <div class="training-warning">
                <strong>⚠️ Datenpanne?</strong><br>
                Bei versehentlichem Teilen vertraulicher Daten:<br>
                1. Sofort Sharing/Zugriff stoppen<br>
                2. Datenschutzbeauftragten informieren<br>
                3. Vorfall dokumentieren
            </div>

            <h3>🖨️ Drucker-Sicherheit (Pull-Printing)</h3>
            <p>
                Bei vertraulichen Ausdrucken: Authentifizierung am Drucker mit Badge nutzen.
                So stellen Sie sicher, dass nur Sie Ihre Dokumente sehen.
            </p>
        `
    },
    {
        title: "🦠 Malware, Ransomware & USB-Sicherheit",
        content: `
            <h3>Schadsoftware erkennen</h3>
            <p>
                Malware (Viren, Trojaner, Ransomware) kann über E-Mail-Anhänge, Downloads oder USB-Sticks eindringen.
            </p>

            <div class="training-warning">
                <strong>⚠️ Ransomware - Die Gefahr:</strong><br>
                • Verschlüsselt Ihre Daten und fordert Lösegeld<br>
                • Kann sich im Netzwerk verbreiten<br>
                • Führt zu massiven Betriebsunterbrechungen<br>
                • Wiederherstellung ohne Backup oft unmöglich
            </div>

            <h3>Sofortmaßnahmen bei Verdacht:</h3>
            <div class="training-success">
                <strong>✅ Bei Ransomware-Warnung:</strong><br>
                1. PC sofort vom Netzwerk trennen (LAN-Kabel ziehen / WLAN aus)<br>
                2. IT-Security SOFORT alarmieren<br>
                3. Nicht neu starten!<br>
                4. Kein Lösegeld zahlen
            </div>

            <h3>💾 USB-Stick-Sicherheit</h3>
            <div class="training-warning">
                <strong>⚠️ Gefundene USB-Sticks:</strong><br>
                • NIEMALS an Firmen-PC anschließen<br>
                • Können Malware enthalten (gezielt platziert)<br>
                • An IT-Security abgeben
            </div>

            <h3>🔄 Software-Updates</h3>
            <p>
                Kritische Sicherheitsupdates schließen bekannte Schwachstellen.
            </p>
            <div class="training-highlight">
                <strong>Wichtig:</strong> Kritische Updates sofort installieren, nicht verschieben!
            </div>

            <h3>💾 Backups</h3>
            <p>
                Regelmäßige Backups sind Ihre Versicherung gegen Datenverlust durch Ransomware oder Hardware-Defekte.
            </p>
        `
    },
    {
        title: "📡 WLAN, VPN & Risikomanagement",
        content: `
            <h3>Öffentliche WLANs</h3>
            <div class="training-warning">
                <strong>⚠️ Gefahr in öffentlichen Netzwerken:</strong><br>
                • Datenverkehr kann mitgelesen werden<br>
                • "Man-in-the-Middle"-Angriffe möglich<br>
                • Nie ohne Schutz arbeiten
            </div>

            <div class="training-success">
                <strong>✅ Sicher arbeiten unterwegs:</strong><br>
                • VPN aktivieren vor der Arbeit mit Firmendaten<br>
                • Oder: Mobiles Internet (Hotspot) nutzen<br>
                • Sichtschutzfolie gegen "Shoulder Surfing"
            </div>

            <h3>🚨 Risikomanagement</h3>
            <p>
                Sicherheitsrisiken und verdächtige Vorfälle müssen gemeldet werden!
            </p>

            <div class="training-highlight">
                <strong>📢 Melden Sie Risiken an:</strong><br>
                • Ihren direkten supervisor<br>
                • IT-Security Team<br>
                • security team (bei schwerwiegenden Vorfällen)<br>
                • Datenschutzbeauftragten (bei DSGVO-Verstößen)
            </div>

            <p>
                <strong>Beispiele meldepflichtiger Vorfälle:</strong>
            </p>
            <ul>
                <li>Verdacht auf Phishing-Angriff</li>
                <li>Malware-Warnung</li>
                <li>Verlust von Firmen-Hardware (Laptop, Smartphone)</li>
                <li>Unbefugter Zugriff auf Systeme</li>
                <li>Datenpannen (versehentliches Teilen sensibler Daten)</li>
            </ul>

            <div class="training-success">
                <strong>💡 Keine Angst vor Meldung!</strong><br>
                Lieber einmal zu viel melden als zu spät. Frühe Meldung kann Schäden verhindern!
            </div>

            <p style="margin-top: 30px; text-align: center; font-size: 18px; color: #0066CC;">
                <strong>Sie sind bereit! Klicken Sie auf "Spiel starten", um Ihr Wissen zu testen! 🎮</strong>
            </p>
        `
    }
];
