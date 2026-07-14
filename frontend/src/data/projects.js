// src/data/projects.js

// imports
import detailImage1 from "../assets/placeholder-hover.png";
import detailImage2 from "../assets/placeholder-hover.png";
import imagePreview from "../assets/placeholder-preview.png";

/* project data */
const projects = [
  {
    featured: true,
    slug: "test-project-1",
    number: "01",
    title: "Test Project 1",
    blurb: "This is a project test blurb",
    role: "info",
    timeline: "info",
    year: "info",
    type: "info",
    liveLink: "https://github.com/MK-DlR",
    codeLink: "https://github.com/MK-DlR?tab=repositories",
    preview: [imagePreview],
    stack: ["Stack 1", "Stack 2", "Stack 3", "Etc"],
    problem: "info",
    built: "info",
    features: ["Feature 1", "Feature 2", "Feature 3", "Etc"],
    detailImages: [detailImage1, detailImage2],
    quote: "info",
    challenges: "info",
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
    preview: [imagePreview],
    stack: ["Stack 1", "Stack 2", "Stack 3", "Etc"],
    problem: "info",
    built: "info",
    features: ["Feature 1", "Feature 2", "Feature 3", "Etc"],
    detailImages: [detailImage1, detailImage2],
    quote: "info",
    challenges: "info",
  },
  {
    featured: true,
    slug: "test-project-3",
    number: "03",
    title: "Test Project 3",
    blurb: "This is a project test blurb",
    role: "info",
    timeline: "info",
    year: "info",
    type: "info",
    liveLink: "https://github.com/MK-DlR",
    codeLink: "https://github.com/MK-DlR?tab=repositories",
    preview: [imagePreview],
    stack: ["Stack 1", "Stack 2", "Stack 3", "Etc"],
    problem: "info",
    built: "info",
    features: ["Feature 1", "Feature 2", "Feature 3", "Etc"],
    detailImages: [detailImage1, detailImage2],
    quote: "info",
    challenges: "info",
  },
  {
    featured: true,
    slug: "test-project-4",
    number: "04",
    title: "Test Project 4",
    blurb: "This is a project test blurb",
    role: "info",
    timeline: "info",
    year: "info",
    type: "info",
    liveLink: "https://github.com/MK-DlR",
    codeLink: "https://github.com/MK-DlR?tab=repositories",
    preview: [imagePreview],
    stack: ["Stack 1", "Stack 2", "Stack 3", "Etc"],
    problem: "info",
    built: "info",
    features: ["Feature 1", "Feature 2", "Feature 3", "Etc"],
    detailImages: [detailImage1, detailImage2],
    quote: "info",
    challenges: "info",
  },
];

export default projects;

/*
TODO:
fill in with real project data

note:
"stack" will also function as the tags
on AllProjects.jsx (should match the given filter button options)
*/
