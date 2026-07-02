// src/App.jsx

// imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage.jsx'
import AboutDetails from './pages/AboutDetails.jsx'
import AllProjects from './pages/AllProjects.jsx'
import ArtDetails from './pages/ArtDetails.jsx'
import JourneyDetails from './pages/JourneyDetails.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutDetails />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/journey" element={<JourneyDetails />} />
          <Route path="/art" element={<ArtDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;