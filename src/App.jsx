import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";

function Home() {
  return (
    <div>
  <h1>Home Page</h1>
  <p>welcome to my website! This is the home page where you can find the latest updates and news about my projects and activities. 
    Feel free to explore and learn more about what I do. Thank you for visiting!</p>
    </div>
    );

}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about me and my background.</p>
    </div>
  );
}

function Projects() {
  return <h1>Projects Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;