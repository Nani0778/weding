# Wedding Invitation Website 🎉

A beautiful wedding invitation site for Tanmay Mukkerla & Ananya Reddy 💍

## Features
- Built with React + Tailwind CSS
- RSVP with Google Sheets (via SheetDB) or Firebase
- Deployed-ready for Vercel or Netlify

## RSVP Setup
### Google Sheets
1. Create a Google Sheet with columns: name, email, message
2. Go to https://sheetdb.io > Connect your sheet > Copy API URL
3. Replace `YOUR_SHEETDB_API` in `RSVP.jsx`

### Firebase
1. Go to https://console.firebase.google.com/
2. Create project → Add Firestore DB
3. Get config keys → Replace in `firebaseConfig.js`

## Run Locally
```bash
npm install
npm run dev
```

## Deploy
- Vercel: https://vercel.com → Connect repo → Deploy
- Netlify: https://netlify.com → New site from GitHub → Deploy

Made with ❤️ by Praneet
