import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TypewriterEffect from './componentes/Typewriter.jsx';

// Montar Galería en el portfolio
const portfolioRoot = document.getElementById("react-root");
if (portfolioRoot) {
  createRoot(portfolioRoot).render(<App />);
}

// Montar Typewriter en otra app
const typewriterRoot = document.getElementById("typewriter-root");
if (typewriterRoot) {
  createRoot(typewriterRoot).render(<TypewriterEffect />);
}