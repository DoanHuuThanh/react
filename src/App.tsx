import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './app/Home.tsx'
import About from './app/About.tsx'
import Layout from './app/Layout.tsx'
import Contact from './app/Contact.tsx'
import Show from './app/g5.tsx'
import Help from './app/Help.tsx'
import Dash from './app/Dash.tsx'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Show" element={<Show />} />
          <Route path="Help" element={<Help />} />
          <Route path="Dash" element={<Dash />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;