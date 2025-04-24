import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './components/Projectos/ProjectDetailsPage'
import Footer from './components/Layout/Footer'
import SkillsPage from './pages/SkillsPage'
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <Router>
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App