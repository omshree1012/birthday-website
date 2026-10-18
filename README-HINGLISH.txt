POOKIE BIRTHDAY WEBSITE — SETUP GUIDE (HINGLISH)
=================================================

Kya-kya milega?
- Cute pink Pookie birthday landing page
- Surprise button + confetti
- Interactive cake candles
- 3 cute photo slots (code mein direct images insert karne ke liye ready)
- Birthday letter popup
- Browser mein generate hone wali cute instrumental tune
- Mobile responsive layout
- Internet/hosting ki zaroorat nahi (Google Fonts ke alawa; offline bhi chalega, bas font fallback use hoga)

STEP 1 — ZIP EXTRACT KARO
1. pookie-birthday-website.zip par right-click karo.
2. Extract All... select karo.
3. Folder open karo: pookie-birthday-website

STEP 2 — WEBSITE RUN KARO
1. index.html par double-click karo.
2. Website Chrome/Edge mein open ho jayegi.
3. Open your surprise, cake candles, letter aur music button test karo.

Agar direct double-click se browser feature mein issue aaye:
1. VS Code install hai to folder ko VS Code mein open karo.
2. Extensions mein "Live Server" install karo.
3. index.html par right-click > Open with Live Server.

STEP 3 — NAAM AUR LETTER PERSONALISE KARO
1. index.html ko VS Code / Notepad mein open karo.
2. Ctrl+H dabao (Find and Replace).
3. "Pookie" ko uske naam/nickname se replace kar sakte ho.
4. Birthday letter dhoondho: <div class="letter-paper">
5. Uske andar paragraphs ko apne words se replace karo.
6. Save (Ctrl+S), browser refresh (Ctrl+R).

STEP 4 — PHOTOS ADD KARO (DIRECT CODE MEIN)
1. Apni 3 photos is folder mein copy karo (jaise photo1.jpg, photo2.jpg, photo3.jpg).
2. index.html open karo aur #photoGrid section dhoondho.
3. Har photo slot ke placeholder div ko replace karke <img src="photo1.jpg" alt="Memory 1"> laga do.
4. Ya fir placeholder ke andar <img> tag daal do. Layout aur cute styling automatically apply ho jayegi.
5. Save (Ctrl+S) karo aur browser refresh karo!

STEP 5 — MUSIC
- Music default par ON rehti hai (chhoti si cute generated instrumental melody; koi MP3 file required nahi).
- Modern browser security policy ki wajah se agar direct auto-play na ho, to page par kahin bhi pehla click ya tap karte hi music start ho jati hai.
- "Pause cute tune" button se kabhi bhi pause/play kar sakte ho. Volume apne PC se control karo.

IMPORTANT
- Website offline/local use ke liye bani hai.
- Google Fonts ka custom font internet ke saath load hota hai. Offline mein default fonts use honge.
- Agar baad mein online share karni ho, GitHub Pages ya Vercel par deploy ki ja sakti hai.
- Kisi ki private photos upload/share karne se pehle permission lena achha rahega.

FILES
index.html  = page structure and letter text
style.css   = colors, layout, animations, responsive design
script.js   = surprise, cake, tune, confetti
