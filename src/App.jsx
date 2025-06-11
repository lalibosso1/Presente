import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Home from './Pages/Home/Home'
import Conteudo from './Pages/Conteudo/Conteudo'

function AnimatedRoutes() {
  const location = useLocation()

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 0.98 }
  }

  const pageTransition = {
    duration: 0.3,
    ease: "easeInOut"
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Home />
          </motion.div>
        }/>
        <Route path="/conteudo" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Conteudo />
          </motion.div>
        }/>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}
