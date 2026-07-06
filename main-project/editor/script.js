let base64Image = "";

// Handle Image Upload and convert to Base64 (Full Data-URL String)
document.getElementById('avatarInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // Behält den kompletten String inkl. "data:image/png;base64,..." bei
            base64Image = event.target.result; 
        };
        reader.readAsDataURL(file);
    }
});

// Handle Adding dynamic Social Links
document.getElementById('addSocialBtn').addEventListener('click', function() {
    const container = document.getElementById('socialsContainer');
    
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '8px';
    div.style.marginBottom = '8px';
    div.className = 'social-row';

    div.innerHTML = `
        <select class="social-type" onchange="toggleCustomLabel(this)" style="padding: 6px; border-radius: 6px; font-family: inherit;">
            <option value="GitHub">GitHub</option>
            <option value="Instagram">Instagram</option>
            <option value="Discord">Discord</option>
            <option value="Website">Website</option>
            <option value="Custom">Custom</option>
        </select>
        <input type="text" class="social-label" placeholder="Name" style="width: 80px; padding: 6px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.2); font-family: inherit; display: none;">
        <input type="url" class="social-url" placeholder="https://..." style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.2); font-family: inherit;">
        <button type="button" onclick="this.parentElement.remove()" style="background: none; border: none; color: red; cursor: pointer; font-weight: bold;">X</button>
    `;
    container.appendChild(div);
});

function toggleCustomLabel(selectElement) {
    const row = selectElement.parentElement;
    const labelInput = row.querySelector('.social-label');
    if (selectElement.value === 'Custom') {
        labelInput.style.display = 'block';
    } else {
        labelInput.style.display = 'none';
    }
}

// MAIN EXPORT LOGIC
document.getElementById('exportBtn').addEventListener('click', async function() {
    const fullName = document.getElementById('nameInput').value.trim();
    const jobTitle = document.getElementById('jobInput').value.trim();
    const company = document.getElementById('companyInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const note = document.getElementById('noteInput').value.trim();
    const selectedTheme = document.getElementById('themeInput').value;
    const githubPagesUrl = document.getElementById('githubPagesUrlInput').value.trim();

    if (!fullName) {
        alert('Please enter at least a Full Name!');
        return;
    }

    // Social Links auslesen
    const socialRows = document.querySelectorAll('.social-row');
    let socialLinksHtml = "";
    let vcardUrls = "";

    // Theme-spezifische Button-Klassen oder Styles definieren
    let btnStyle = "display: block; margin-bottom: 12px; padding: 10px; border-radius: 8px; text-decoration: none; font-weight: bold; text-align: center;";
    if (selectedTheme === 'cream') {
        btnStyle += " background: rgba(0,0,0,0.05); color: #222;";
    } else if (selectedTheme === 'hacker') {
        btnStyle += " background: #111; color: #00ff00; border: 1px solid #00ff00; text-transform: uppercase; font-size: 14px;";
    } else if (selectedTheme === 'corporate') {
        btnStyle += " background: #f0f4f8; color: #0056b3; border: 1px solid #d0e1f9;";
    } else if (selectedTheme === 'sunset') {
        btnStyle += " background: white; color: #ff5e62; box-shadow: 0 2px 4px rgba(0,0,0,0.05);";
    }

    socialRows.forEach(row => {
        let type = row.querySelector('.social-type').value;
        const customLabel = row.querySelector('.social-label').value.trim();
        const url = row.querySelector('.social-url').value.trim();
        
        if (type === 'Custom' && customLabel) {
            type = customLabel;
        }

        if (url) {
            socialLinksHtml += `<a href="${url}" target="_blank" style="${btnStyle}">${type}</a>`;
            vcardUrls += `URL;TYPE=${type}:${url}\r\n`;
        }
    });

    // vCard (VCF) Generierung (Falls ein Bild existiert, extrahieren wir für die VCF das reine Base64)
    let vcardLines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${fullName}`,
        `TEL;TYPE=CELL:${phone}`,
        `EMAIL;TYPE=INTERNET:${email}`
    ];

    if (jobTitle) vcardLines.push(`TITLE:${jobTitle}`);
    if (company) vcardLines.push(`ORG:${company}`);
    if (note) vcardLines.push(`NOTE:${note}`);
    
    if (base64Image) {
        const pureBase64 = base64Image.split(',')[1];
        vcardLines.push(`PHOTO;TYPE=JPEG;ENCODING=b:${pureBase64}`);
    }

    let vcardContent = vcardLines.join("\r\n") + "\r\n" + vcardUrls + "END:VCARD";
    const downloadFileName = `${fullName.replace(/\s+/g, '_')}_Contact.vcf`;

    // THEME-ENGINE: Styles basierend auf der Auswahl festlegen
    let themeStyles = {
        body: "background-color: antiquewhite; font-family: 'Playfair Display', Georgia, serif;",
        container: "background-color: rgba(255, 255, 255, 0.5); border: 1px solid rgba(0, 0, 0, 0.1); color: #222;",
        primaryBtn: "background-color: #222; color: antiquewhite;",
        subtitle: "color: #555; font-style: italic;",
        metaText: "font-size: 14px; margin: 4px 0; color: #444;"
    };

    if (selectedTheme === 'hacker') {
        themeStyles = {
            body: "background-color: #0d0d0d; font-family: 'Fira Code', monospace; color: #00ff00;",
            container: "background-color: #1a1a1a; border: 1px solid #00ff00; color: #00ff00; box-shadow: 0 0 10px rgba(0,255,0,0.2);",
            primaryBtn: "background-color: #00ff00; color: #0d0d0d; font-weight: bold; text-transform: uppercase;",
            subtitle: "color: #888; font-family: inherit;",
            metaText: "font-size: 13px; margin: 4px 0; color: #00ff00; opacity: 0.8;"
        };
    } else if (selectedTheme === 'corporate') {
        themeStyles = {
            body: "background-color: #f4f7f6; font-family: 'Inter', sans-serif; color: #333;",
            container: "background-color: #ffffff; border: 1px solid #e1e8ed; color: #333; box-shadow: 0 10px 25px rgba(0,0,0,0.05);",
            primaryBtn: "background-color: #0056b3; color: #ffffff; font-weight: 600;",
            subtitle: "color: #666; font-weight: 500;",
            metaText: "font-size: 14px; margin: 4px 0; color: #555;"
        };
    } else if (selectedTheme === 'sunset') {
        themeStyles = {
            body: "background: linear-gradient(135deg, #ff9966, #ff5e62); font-family: 'Inter', sans-serif; min-height: 100vh; color: #333;",
            container: "background-color: rgba(255, 255, 255, 0.85); border: none; color: #333; backdrop-filter: blur(10px); box-shadow: 0 8px 32px rgba(0,0,0,0.15);",
            primaryBtn: "background: linear-gradient(to right, #ff9966, #ff5e62); color: white; font-weight: 600;",
            subtitle: "color: #777; font-weight: 400; letter-spacing: 0.5px;",
            metaText: "font-size: 14px; margin: 4px 0; color: #555;"
        };
    }

    // Job und Company Zeile für HTML aufbereiten, falls vorhanden
    let businessHtml = "";
    if (jobTitle || company) {
        businessHtml = `<div style="margin-bottom: 16px; font-size: 15px;">`;
        if (jobTitle) businessHtml += `<p style="${themeStyles.metaText}; font-weight: bold;">${jobTitle}</p>`;
        if (company) businessHtml += `<p style="${themeStyles.metaText}; opacity: 0.9;">${company}</p>`;
        businessHtml += `</div>`;
    }

    // Notiz-Sektion für HTML aufbereiten, falls vorhanden
    let noteHtml = "";
    if (note) {
        noteHtml = `<p style="margin: 16px 0; font-size: 14px; line-height: 1.5; font-style: italic; opacity: 0.85; border-left: 2px solid; padding-left: 8px; text-align: left;">${note.replace(/\n/g, '<br>')}</p>`;
    }

    // Das fertige HTML-Template zusammenbauen (Mit direktem src-Mapping für base64Image)
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fullName}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Fira+Code:wght@300..700&family=Inter:wght@300..800&display=swap" rel="stylesheet">
</head>
<body style="${themeStyles.body} margin: 0; padding: 24px; display: flex; flex-direction: column; align-items: center;">

    <div style="${themeStyles.container} padding: 24px; border-radius: 16px; text-align: center; max-w-sm w-full; box-shadow: 0 4px 6px rgba(0,0,0,0.05); box-sizing: border-box;">
        
        ${base64Image ? `<img src="${base64Image}" style="width: 96px; height: 96px; border-radius: 50%; object-fit: cover; margin-bottom: 16px; border: 2px solid ${selectedTheme === 'hacker' ? '#00ff00' : '#222'};">` : ''}
        
        <h1 style="margin-top: 0; margin-bottom: 4px; font-size: 28px;">${fullName}</h1>
        <p style="margin-top: 0; margin-bottom: 16px; font-size: 14px; ${themeStyles.subtitle}">Contact Profile</p>

        ${businessHtml}
        ${noteHtml}

        <button onclick="downloadVCard()" style="padding: 12px 24px; font-family: inherit; font-size: 16px; cursor: pointer; border: none; border-radius: 8px; width: 100%; margin-bottom: 20px; ${themeStyles.primaryBtn}">
            Save to Contacts
        </button>

        <div style="margin-bottom: 20px;">
            ${socialLinksHtml}
        </div>

        <details style="cursor: pointer; text-align: left; border-top: 1px solid rgba(0, 0, 0, 0.1); padding-top: 16px; font-size: 14px;">
            <summary style="font-weight: bold; font-size: 14px; color: #333; outline: none;">About Maker</summary>
            <p style="margin-top: 8px; margin-bottom: 0; opacity: 0.8; font-size: 13px; line-height: 1.5;">
                Hello Fellow Hackers and Networkers! I am SirYanni, and I made Tappy to help avoid 
                (imo pretty expensive) <br>
                NFC-Businesscard services. To use it, simply click "Create Contact" and enter your info. <br>
                When you're done, simply click "export" and your HTML and vcf file will be downloaded. <br>
                Then, you can just unzip the files and transfer them to your NFC card via your Phone.<br><br>
                <strong>My GitHub:</strong> <a href="https://github.com/siryanni" target="_blank" style="color: inherit; font-weight: bold;">github.com/siryanni</a><br>
                <strong>My Instagram:</strong> <a href="https://www.instagram.com/sir___yanni/" target="_blank" style="color: inherit; font-weight: bold;">@sir___yanni</a>
            </p>
        </details>

        <p style="margin-top: 24px; margin-bottom: 0; font-size: 11px; opacity: 0.6;">Powered by Tappy ⚡</p>
    </div>

    <script>
        function downloadVCard() {
            const vcardData = ${JSON.stringify(vcardContent)};
            const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = ${JSON.stringify(downloadFileName)};
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    <\/script>
</body>
</html>`;

    // ZIP-Generierung vorbereiten
    const zip = new JSZip();
    const fileNameBase = fullName.replace(/\s+/g, '_');
    
    zip.file("index.html", htmlContent);
    zip.file(`${fileNameBase}.vcf`, vcardContent);

    // QR-CODE GENERATOR LOGIK
    if (githubPagesUrl) {
        // Auf dem Bildschirm anzeigen
        const qrContainer = document.getElementById('qrPreviewContainer');
        const qrDiv = document.getElementById('qrcode');
        qrDiv.innerHTML = ""; // Alten QR-Code löschen
        qrContainer.style.display = "flex";

        // QR-Code in verdecktes Element rendern, um DataURL abzugreifen
        const qrObj = new QRCode(qrDiv, {
            text: githubPagesUrl,
            width: 180,
            height: 180,
            correctLevel: QRCode.CorrectLevel.H
        });

        // Kurz warten, bis qrcode.js das Image-Tag im DOM generiert hat
        setTimeout(() => {
            const qrImg = qrDiv.querySelector('img');
            if (qrImg && qrImg.src) {
                const qrBase64 = qrImg.src.split(',')[1];
                zip.file("qrcode.png", qrBase64, {base64: true});
            }
            // ZIP finalisieren und herunterladen
            generateAndDownloadZip(zip, fileNameBase);
        }, 100);
    } else {
        // QR-Vorschau verstecken, falls kein Link eingegeben wurde
        document.getElementById('qrPreviewContainer').style.display = "none";
        generateAndDownloadZip(zip, fileNameBase);
    }
});

function generateAndDownloadZip(zip, fileNameBase) {
    zip.generateAsync({type:"blob"}).then(function(content) {
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Tappy_${fileNameBase}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}