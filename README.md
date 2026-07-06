<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c2d7ca3d7eb734b7b8667a2271a49a1dd01848da
# Tappy - Open Source NFC Business Card Engine

Tappy is a free, minimalist web tool designed to create and export digital business cards. The goal of this project is to provide a privacy-focused alternative to expensive subscription-based NFC card services. Your data is never stored in a database; it remains completely under your control.

### Live Demo:
https://siryanni.github.io/Tappy/

---

## Features

* **Theme Selection:** Quickly switch between multiple designs (Classic Cream, Dark Hacker, Modern Corporate, Sunset Minimal).
* **vCard Generation:** Fully supports profile pictures (Base64 encoded), custom social media links, and a bio/note field that saves directly into the recipient's address book.
* **QR Code Preview:** Automatically generates a matching QR code image included directly in your download.
* **ZIP Export:** Downloads all generated files locally as a single package (index.html, contact file, and QR code).
* **100% Local:** Runs entirely in your browser without any backend tracking or external dependencies.

---

## How It Works

The entire process takes just four simple steps:

1. **Create your Profile:** Open the Tappy editor via the live URL, upload an image, fill in your information, and choose a theme.
2. **Export the Package:** Click "Export Tappy Package (.zip)". You will receive a ZIP file containing your formatted profile page (`index.html`), your contact file (`.vcf`), and the QR code.
3. **Host for Free:** Unzip the package and upload the files to a platform of your choice (such as GitHub Pages, Netlify, or Vercel).
4. **Write to your NFC Card:** Get an inexpensive, blank NFC tag or card (e.g., NTAG213 or NTAG215). Use a smartphone app like "NFC Tools", add a URL record pointing to your hosted profile page, and write it to the card.

Once written, tapping your physical card against a smartphone will instantly open your mobile Tappy profile.

---

## Project Structure

* `index.html`: The user interface of the editor (formerly editor.html).
* `script.js`: The underlying logic handling image conversion, vCard building, and ZIP compilation.
* `style.css`: The layout and styling for the editor interface.
* `README.md`: This documentation.

---

## About the Developer

Hi, I'm SirYanni. I built Tappy to create a straightforward alternative to overpriced NFC business card subscriptions.

* **GitHub:** https://github.com/siryanni
* **Instagram:** https://www.instagram.com/sir___yanni/

---

## License

This project is open source. You are welcome to fork it, add custom themes, or modify the code for your own needs.
<<<<<<< HEAD
=======
=======
# Tappy
Tappy is an intuitive HTML Site for creating a semi-digital "business" Card profile to put on an NFC Tag/Card, including a vcf-File for simplyfied Contact saving. 
>>>>>>> 637beea (Fixed File Bug in js)
>>>>>>> c2d7ca3d7eb734b7b8667a2271a49a1dd01848da
