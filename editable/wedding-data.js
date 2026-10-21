/**
 * wedding-data.js — Customer-facing editable data layer for sage-parchment
 * Wedding Invitation: Dhanya & Lavin
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Dhanya",
    brideShort: "Dhanya",
    groom: "Lavin",
    groomShort: "Lavin",
    hashtag: "#DhanyaWedsLavin",
  },

  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their wedding ceremony",
  },

  event: {
    title: "The Wedding of Dhanya & Lavin",
    startsAt: "2026-11-15T10:30:00+05:30",
    endsAt: "2026-11-15T15:30:00+05:30",
    dateLabel: "15 . 11 . 2026",
    dayLabel: "Saturday & Sunday, 14 & 15 Nov",
    timeLabel: "Wedding Muhurtham at 10:30 AM on 15th",
    dressCode: "Traditional / Festive Indian Attire",
    note: "Lunch and celebrations to follow",
  },

  venue: {
    name: "Cauvery Hall",
    address: "Stuart Hill, Madikeri, Kodagu, Karnataka 571201",
    mapsQuery: "Cauvery Hall, Stuart Hill, Madikeri, Karnataka 571201",
    url: "https://maps.app.goo.gl/p3Zind8bRpkAkQTK8?g_st=iw",
    lat: 12.4239,
    lng: 75.7389,
  },

  story: [
    {
      year: "2024",
      title: "The Journey Begins",
      text: "A serendipitous meeting, shared smiles, and the beginning of a beautiful bond filled with laughter and trust.",
      image: "story-1",
      objectPosition: "center 38%",
    },
    {
      year: "2025",
      title: "A Promise Made",
      text: "Two souls discovering true companionship, countless conversations, and promises to walk hand in hand forever.",
      image: "story-2",
      objectPosition: "center 48%",
    },
    {
      year: "2026",
      title: "The Wedding Celebration",
      text: "Surrounded by loved ones and blessed with love, we unite as one to embark on our lifelong journey.",
      image: "story-3",
      objectPosition: "center center",
    },
  ],

  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation: "Two families, one thread of gold — and a lifetime of happiness made luminous together.",
    source: "A blessing from both families",
  },

  footer: {
    families: "With love & warm wishes from the Families",
    contacts: [],
  },

  music: {
    src: "./editable/assets/music.mp3",
    title: "Sound of Heaven (Sitar) — Rishab Sharma",
  },

  meta: {
    title: "Dhanya & Lavin — Wedding Invitation",
    description: "Dhanya and Lavin cordially invite you to celebrate their wedding on November 14 & 15, 2026 at Cauvery Hall, Madikeri, Karnataka.",
    url: "https://suhas-weds.vercel.app/",
    image: "./external/media.invitestory.in/sage-parchment/og-image.jpg",
    siteName: "Dhanya & Lavin Wedding",
  },

  moments: [
    {
      src: "./editable/assets/moment-1.jpg",
      alt: "Dhanya & Lavin wedding rings",
    },
    {
      src: "./editable/assets/moment-2.jpg",
      alt: "Dhanya & Lavin walking hand in hand",
    },
    {
      src: "./editable/assets/moment-3.jpg",
      alt: "Dhanya & Lavin embrace",
      objectPosition: "35% center",
    },
    {
      src: "./editable/assets/moment-4.jpg",
      alt: "Dhanya & Lavin walking outdoors",
      objectPosition: "center 20%",
    },
  ],

  images: {
    gatePanel: "./editable/assets/gate-panel.jpg",
    heroArch: "./editable/assets/hero-arch.jpg",
    mapPreview: "./editable/assets/map-preview.jpg",
    lotus: "./editable/assets/lotus.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    story1: "./editable/assets/story-1.jpg",
    story2: "./editable/assets/story-2.jpg",
    story3: "./editable/assets/story-3.jpg",
    moment1: "./editable/assets/moment-1.jpg",
    moment2: "./editable/assets/moment-2.jpg",
    moment3: "./editable/assets/moment-3.jpg",
    moment4: "./editable/assets/moment-4.jpg",
  },
};
