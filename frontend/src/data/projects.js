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
    built:
      "For this project, I was interested in creating something that someone could play more than once, which led to implementing a core functionality that would shuffle the characters before selecting 3 of them from the pool. I also wanted to ensure there was clear feedback on where the user was clicking before placing their guess - and which character/s had been successfully found.",
    features: [
      "Timer automatically starts when 'Start' button is clicked",
      "3 characters are chosen at random on page refresh",
      "Dropdown character selection on click",
      "Successfully found characters are greyed out",
    ],
    detailImages: [waldoDetail1, waldoDetail2],
    quote:
      "Displaying new characters to find on refresh allows for increased replayability.",
    challenges:
      "Initially, I faced some issues with getting the character coordinates to work correctly, but it turned out that I had forgotten to account for the original styling/sizing of the image, which was an easy fix that felt obvious in hindsight. I also would have publicaly implemented the leaderboard (currently it's accessible via prisma), so that players can see where they rank. This is something I plan on adding in the future when I return to it.",
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
    projectAbout:
      "Created for The Odin Project's NodeJS section's 'Inventory App' project. For this project, I wanted to create something with real-world use. My partner is a herbalism student, so I chose to create an application that would allow him to easily track and update his medicinal herb inventory.",
    built:
      "Since I customized the actual functionality of this project to be beneficial of my partner, many of the features are requests that he made. I created two seperate forms for creating both plants and medicinal uses, while also allowing them to be associated with one another. Plants can also be filtered by medicinal use, stock status, quantity, and order status; this allows for much more efficient inventory management.",
    features: [
      "Public guest account for immediate app access",
      "Private admin account for actual data manipulation",
      "Uses the Trefle API to find images based on scientific name",
      "Allows association between plants and medicinal uses",
    ],
    detailImages: [inventoryDetail1, inventoryDetail2],
    quote:
      "Associating a plant with many medicinal uses allows for precise filtering.",
    challenges:
      "If I were to restart this project and create it again from the ground up, I would use React rather than EJS, so that I could take advantage of the vitual DOM and its more efficient rendering.",
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
    projectAbout:
      "Created for The Odin Project's JavaScript section's 'Battleship' project. This project was created using TDD as an exercise in practicing writing successful tests before fully committing to writing the actual code functionality.",
    built:
      "As someone who grew up playing Battleship, I wanted to do my best to recreate the classic game while also including things I felt an online version would be incomplete without. During the setup phase, a button allows for randomized ship placement - in the case of two human players, a 'pass device' screen is implemented between displaying P1 vs P2 screens. The battle log also allows for a clear record of all attacks, both successful and not.",
    features: [
      "Allows for human vs computer and human vs human games",
      "Randomize ship placement for players",
      "Battle log keeps a record of all attacks and sunken ships",
      "Fully playable on computers, tablets, and mobile devices",
    ],
    detailImages: [battleshipDetail1, battleshipDetail2],
    quote:
      "Creating a second player allows for local human vs human games to be played.",
    challenges:
      "One thing that I did overlook was a way of easily tracking how many ships are left to be sunk - and which ones they are. Were I to return to this project, I would implement a clear tracker of which ships were still in play as well as allowing for drag and drop custom ship placement.",
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
