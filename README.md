# POOKIE BIRTHDAY WEBSITE — SETUP GUIDE (ENGLISH)

## What’s Included?
- Cute pink Pookie birthday landing page
- Surprise button with confetti
- Interactive cake candles
- 3 cute photo slots (ready for inserting images directly into the code)
- Birthday letter popup
- Cute instrumental tune generated directly in the browser
- Mobile-responsive layout
- No internet connection or hosting required (except for Google Fonts; the website will work offline using fallback fonts)

## STEP 1 — EXTRACT THE ZIP FILE
1. Right-click on `pookie-birthday-website.zip`.
2. Select **Extract All...**
3. Open the extracted folder: `pookie-birthday-website`

## STEP 2 — RUN THE WEBSITE
1. Double-click on `index.html`.
2. The website will open in Chrome or Edge.
3. Test the **Open Your Surprise** button, cake candles, birthday letter, and music button.

If some browser features do not work when opening the file directly:

1. Open the folder in VS Code.
2. Install the **Live Server** extension from Extensions.
3. Right-click on `index.html` and select **Open with Live Server**.

## STEP 3 — PERSONALIZE THE NAME AND LETTER
1. Open `index.html` in VS Code or Notepad.
2. Press `Ctrl + H` to open Find and Replace.
3. Replace `"Pookie"` with the person's name or nickname.
4. Find the birthday letter section: `<div class="letter-paper">`
5. Replace the paragraphs inside it with your own words.
6. Save the file using `Ctrl + S` and refresh the browser using `Ctrl + R`.

## STEP 4 — ADD PHOTOS (DIRECTLY INTO THE CODE)
1. Copy your 3 photos into this folder (for example, `photo1.jpg`, `photo2.jpg`, and `photo3.jpg`).
2. Open `index.html` and find the `#photoGrid` section.
3. Replace each photo slot's placeholder `<div>` with an image tag, such as `<img src="photo1.jpg" alt="Memory 1">`.
4. Alternatively, insert an `<img>` tag inside each placeholder. The existing layout and cute styling will be applied automatically.
5. Save the file using `Ctrl + S` and refresh the browser.

## STEP 5 — MUSIC
- Music is ON by default. A short, cute instrumental melody is generated directly in the browser, so no MP3 file is required.
- Due to modern browser autoplay security policies, the music may not start automatically. If this happens, simply click or tap anywhere on the page once to start it.
- Use the **Pause Cute Tune** button to pause or resume the music at any time. Control the volume using your PC's volume settings.

## IMPORTANT NOTES
- This website is designed for offline and local use.
- The custom Google Fonts load when an internet connection is available. Offline, the website will use default fallback fonts.
- If you want to share the website online later, you can deploy it using GitHub Pages or Vercel.
- It is always a good idea to get permission before uploading or sharing someone else's private photos.

## FILES
- `index.html` — Page structure and birthday letter text
- `style.css` — Colors, layout, animations, and responsive design
- `script.js` — Surprise button, cake interactions, music, and confetti
