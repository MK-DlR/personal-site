// src/data/projects.js

// imports
import messagingPreview from "../assets/projects/messaging-app/messagingPreview.png";
import messagingDetail1 from "../assets/projects/messaging-app/messagingDetail1.png";
import messagingDetail2 from "../assets/projects/messaging-app/messagingDetail2.png";

import waldoPreview from "../assets/projects/waldo-app/waldoPreview.png";
import waldoDetail1 from "../assets/projects/waldo-app/waldoDetail1.png";
import waldoDetail2 from "../assets/projects/waldo-app/waldoDetail2.png";

import inventoryPreview from "../assets/projects/inventory-app/inventoryPreview.png";
import inventoryDetail1 from "../assets/projects/inventory-app/inventoryDetail1.png";
import inventoryDetail2 from "../assets/projects/inventory-app/inventoryDetail2.png";

import battleshipPreview from "../assets/projects/battleship-app/battleshipPreview.png";
import battleshipDetail1 from "../assets/projects/battleship-app/battleshipDetail1.png";
import battleshipDetail2 from "../assets/projects/battleship-app/battleshipDetail2.png";

// project data
const projects = [
  {
    featured: true,
    slug: "hack-the-planet",
    number: "01",
    title: "Hack the Planet",
    blurb: "Full-stack cyberpunk messaging web app.",
    role: "Solo developer",
    timeline: "Feb - Mar 2026",
    year: "2026",
    type: "Full-stack web app",
    liveLink: "https://messaging-app-bice-nine.vercel.app/",
    codeLink: "https://github.com/MK-DlR/messaging-app",
    preview: messagingPreview,
    tags: [
      "Authentication",
      "Design",
      "Express",
      "Guest Account",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "React",
      "Vite",
    ],
    projectAbout:
      "Created for The Odin Project's NodeJS section's 'Messaging App' project. As a regular Discord user, I approached creation from a user's pespective, taking into consideration the functionalities that I felt the app wouldn't be complete without; even if they weren't explicity required by the project description.",
    built:
      "I created an app with core functionality that includes the ability to CRUD messages, 1x1 private DMs, group chats, and user profiles. Based on when users are last seen, their status automatically displays as either online or offline. Messages are displayed in near real-time via client-side polling, allowing for a more natural feeling messaging application.",
    features: [
      "Public guest account for immediate app access",
      "Custom display images for users and chats",
      "Custom user and chat names",
      "Image/gif functionality in messages",
    ],
    detailImages: [messagingDetail1, messagingDetail2],
    quote:
      "Including a public non-editable guest account allows viewers to quickly demo the app without registration.",
    challenges:
      "This was my first real project implementing a guest account, which I only considered adding once I was almost finished. If I were able to go back, I would have kept that functionality in mind from the start of working on the project.",
  },
  {
    featured: true,
    slug: "object-recognition-protocol",
    number: "02",
    title: "Object Recognition Protocol",
    blurb: "Full-stack sci-fi 'Where's Waldo' style game web app.",
    role: "Solo developer",
    timeline: "Feb 2026",
    year: "2026",
    type: "Full-stack web app",
    liveLink: "https://wheres-waldo-vert.vercel.app/",
    codeLink: "https://github.com/MK-DlR/wheres-waldo",
    preview: waldoPreview,
    tags: [
      "Design",
      "Express",
      "Game",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "React",
      "Vite",
    ],
    projectAbout:
      "Created for The Odin Project's NodeJS section's 'Where's Waldo' project. I was inspired by the image that I chose and decided to lean into the sci-fi aesthetic and the fact that many of the characters in the artwork are from different popular medias, allowing many of them to be recognizable to a wide variety of users.",
    built: "info",
    features: [
      "Timer automatically starts when 'Start' button is clicked",
      "3 characters are chosen at random on page refresh",
      "Dropdown character selection on click",
      "Successfully found characters are greyed out",
    ],
    detailImages: [waldoDetail1, waldoDetail2],
    quote:
      "Displaying new characters to find on refresh allows for increased replayability.",
    challenges: "info",
  },

  {
    featured: true,
    slug: "herbtrack",
    number: "03",
    title: "HerbTrack",
    blurb: "Full-stack medicinal plant inventory management web app.",
    role: "Solo developer",
    timeline: "Nov 2025",
    year: "2025",
    type: "Full-stack web app",
    liveLink: "https://inventory-app-e3zm.onrender.com/plants",
    codeLink: "https://github.com/MK-DlR/inventory-app",
    preview: inventoryPreview,
    tags: [
      "Authentication",
      "Design",
      "EJS",
      "Express",
      "Guest Account",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
    ],
    projectAbout: "info",
    built: "info",
    features: ["Feature 1", "Feature 2", "Feature 3", "Etc"],
    detailImages: [inventoryDetail1, inventoryDetail2],
    quote: "info",
    challenges: "info",
  },
  {
    featured: false,
    slug: "battleship",
    number: "04",
    title: "Battleship",
    blurb: "TDD-based naval themed 'Battleship' game web app.",
    role: "Solo developer",
    timeline: "Jul - Aug 2025",
    year: "2025",
    type: "Test driven development",
    liveLink: "https://mk-dlr.github.io/battleship-project/",
    codeLink: "https://github.com/MK-DlR/battleship-project",
    preview: battleshipPreview,
    tags: ["Design", "Game", "JavaScript", "Jest"],
    projectAbout: "info",
    built: "info",
    features: ["Feature 1", "Feature 2", "Feature 3", "Etc"],
    detailImages: [battleshipDetail1, battleshipDetail2],
    quote: "info",
    challenges: "info",
  },
];

export default projects;

/* 
empty project template
{
  featured: false,
  slug: "test-project-slug",
  number: "0#",
  title: "Test Project Name",
  blurb: "This is a project test blurb",
  role: "Solo developer",
  timeline: "info",
  year: "info",
  type: "info",
  liveLink: "link",
  codeLink: "link",
  preview: imagePreview,
  tags: ["Tag"],
  projectAbout: "info",
  built: "info",
  features: ["Feature 1", "Feature 2", "Feature 3", "Etc"],
  detailImages: [detailImage1, detailImage2],
  quote: "info",
  challenges: "info",
},
*/
