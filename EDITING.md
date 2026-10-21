# Customer Editing Guide — Dhanya & Lavin Wedding Invitation

This template is a wedding ceremony invitation with a serene sage and parchment aesthetic, featuring a three-chapter love story timeline, live countdown timer, wedding ceremony details with dress code, venue location map with directions, family blessings, and background music.

---

## Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week7/suhas/editable/wedding-data.js)

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: Names (`"Dhanya"`, `"Lavin"`)
- `brideShort` & `groomShort`: Short display names
- `hashtag`: Event hashtag (`"#DhanyaWedsLavin"`)

### Invitation Line
Edit `invite` in `editable/wedding-data.js`:
- `kicker`: Eyebrow line (`"Together with their families"`)
- `line`: Invitation statement (`"cordially invite you to celebrate their wedding ceremony"`)

### Wedding Event & Countdown
Edit `event` in `editable/wedding-data.js`:
- `title`: Event title (`"The Wedding of Dhanya & Lavin"`)
- `startsAt` & `endsAt`: ISO timestamps (`"2026-11-15T10:30:00+05:30"`). Drives the live countdown timer.
- `dateLabel`: Formatted date string (`"14 & 15 . 11 . 2026"`)
- `dayLabel`: Days of the celebration (`"Saturday & Sunday, 14 & 15 Nov"`)
- `timeLabel`: Timing description (`"Wedding Muhurtham at 10:30 AM on 15th"`)
- `dressCode`: Dress code recommendation (`"Traditional / Festive Indian Attire"`)
- `note`: Hospitality note (`"Lunch and celebrations to follow"`)

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Auditorium / Hall name (`"Cauvery Hall"`)
- `address`: Full address in Madikeri (`"Stuart Hill, Madikeri, Kodagu, Karnataka 571201"`)
- `mapsQuery` & `url`: Search query and Google Maps directions link (`"https://maps.app.goo.gl/p3Zind8bRpkAkQTK8?g_st=iw"`)

### Background Music
- Music file: `editable/assets/music.mp3` (Seetha Kalyana Vaibhogame from Agam)
- Configured in `editable/wedding-data.js` and player in `index.html`.

### Media & Artwork
Files located in `editable/assets/`:
- Gate panels & hero: `gate-panel.jpg`, `hero-arch.jpg`
- Moments gallery: `moment-1.jpg`, `moment-2.jpg`, `moment-3.jpg`, `moment-4.jpg`
- Story images: `story-1.jpg`, `story-2.jpg`, `story-3.jpg`
- Decorative graphics: `lotus.png`, `footer-floral.jpg`, `map-preview.jpg`

---

## Validation
Validate changes with:
```bash
node --check editable/wedding-data.js
node --check assets/index-FTKWP6I9.js
```
