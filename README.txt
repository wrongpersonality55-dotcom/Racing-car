Night Drive 3D - installable web app

Files: index.html (the game), manifest.webmanifest (name + icons), sw.js (offline), icons/ (logo).

Installing only works when the app is opened from an https:// link (or http://localhost). A file opened straight from your disk cannot be installed.

Easy ways to get a link:
1. Netlify Drop (app.netlify.com/drop): drag this whole folder in. You get an https link.
2. GitHub Pages or Cloudflare Pages: upload the folder and turn on Pages.
3. Only on your own laptop: open a terminal in this folder, run  python3 -m http.server 8000  and visit http://localhost:8000

Then open the link:
- Laptop (Chrome or Edge): tap the Install button on the home page, or the install icon in the address bar.
- Android (Chrome): tap Install on the home page, or menu, then Install app.
- iPhone / iPad (Safari): tap Share, then Add to Home Screen.
