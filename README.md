# Tappy - Open Source NFC Business Card Engine

A free, private NFC business card generator that runs entirely in your browser.
Create a digital business card, customize its design, and export everything you need to host it yourself — including a web profile, vCard and QR code.

<img width="391" height="126" alt="grafik" src="https://github.com/user-attachments/assets/63794d9f-3862-4e6d-ab1e-04279c94b27f" />


### Live Demo:
https://siryanni.github.io/Tappy/

---

## Why Tappy?

One day I fell down the rabbit hole of NFC business cards, only to discover that almost all of them were tied to monthly fees. While these services provide a hosted profile, that also means giving the service control over where your profile lives and how it works.
Tappy takes a different approach: you generate the files yourself and host them wherever you want.
There is no account, no database, and no subscription required.

---

## Features

1. **Multiple themes:** Choose between several designs
2. **Custom Profiles:** Add your name, contact info, bio, and websites of your choice
3. **vCard Generation:** Generate a contact file that can be saved directly to most phones.
4. **QR-Code Generation:** Every export can include a QR-Code, if URL to profile-host is provided
5. **ZIP-export:** The generated files then can be downloaded as a ready-to-host ZIP-archive
6. **Local Processing:** Your profile data is processed directly in your browser

---

## How It Works

1.**Create your profile:** Open the Tappy editor, enter your information, upload a profile picture and choose out of 4 themes.

2.**Export:** Tappy generates a ZIP package containing your profile page, vCard and, optionally, QR code.

3.**Host your profile:** Upload the generated files to any static hosting provider, such as GitHub Pages, Netlify or Vercel.

4.**Connect your NFC-Card:** Write the URL of your hosted profile to an NFC tag or card using any NFC writing app.

Once configured, tapping the NFC card with a smartphone opens your digital business card.

---

## Privacy

Tappy does not require an account or a backend.
Your profile information is processed locally in your browser while creating the card. The generated files are downloaded directly to your device, giving you control over where and how your profile is hosted.
Tappy does not provide hosting for your profile — you own the generated files and choose where they are hosted.

---

## AI Usage

AI tools were used as a development aid during the development of Tappy.
I used AI mainly for debugging, discussing implementation approaches, and getting suggestions when I was stuck on technical problems (e.g. Base64 implementation)
I reviewed, adapted and tested the generated suggestions myself. The project concept, design decisions and feature selection were my own.

---

## About me!

I am SirYanni, and I built Tappy to create a simpler alternative to imo overpriced NFC business card subscriptions.

---

## License

This project is open source. You are welcome to fork it, add custom themes, or modify the code for your own needs.

