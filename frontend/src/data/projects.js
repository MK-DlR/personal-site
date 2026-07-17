// src/data/projects.js

// imports
import messagingPreview from "../assets/projects/messaging-app/messagingPreview.png";
import messagingDetail1 from "../assets/projects/messaging-app/messagingDetail1.png";
import messagingDetail2 from "../assets/projects/messaging-app/messagingDetail2.png";

// TEMPORARY //
import detailImage1 from "../assets/placeholder-preview.png";
import detailImage2 from "../assets/placeholder-preview.png";
import imagePreview from "../assets/placeholder-preview.png";

// project data
const projects = [
  {
    featured: true,
    slug: "hack-the-planet",
    number: "01",
    title: "Hack the Planet",
    blurb: "Full-stack cyberpunk messaging web app.",
    role: "Solo developer",
    timeline: "Feb - March 2026",
    year: "2026",
    type: "Full-stack web app",
    liveLink: "https://messaging-app-bice-nine.vercel.app/",
    codeLink: "https://github.com/MK-DlR/messaging-app",
    preview: messagingPreview,
    stack: [
      "Authentication",
      "Design",
      "Express",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "React",
      "Vite",
    ],
    problem:
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
    featured: false,
    slug: "test-project-2",
    number: "02",
    title: "Test Project 2",
    blurb: "This is a project test blurb",
    role: "info",
    timeline: "info",
    year: "info",
    type: "info",
    liveLink: "https://github.com/MK-DlR",
    codeLink: "https://github.com/MK-DlR?tab=repositories",
    preview: imagePreview,
    stack: ["React"],
    problem: "info",
    built: "info",
    features: ["Feature 1", "Feature 2", "Feature 3", "Etc"],
    detailImages: [detailImage1, detailImage2],
    quote: "info",
    challenges: "info",
  },
];

export default projects;
