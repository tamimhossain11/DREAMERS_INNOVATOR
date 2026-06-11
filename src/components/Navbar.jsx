import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Multipurpose Drone', path: '/drone' },
    { name: 'JolJan 1.0', path: '/auv' },
    { name: 'Farming Control', path: '/rov' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyber-blue/50 energy-pulse flex-shrink-0"
            >
              <img
                src="/images/logo.jpeg"
                alt="Dreamers Innovator Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="font-cyber text-sm font-bold glow-text text-cyber-blue tracking-widest">
                DREAMERS INNOVATOR
              </span>
              <span className="text-gray-400 text-xs font-display tracking-wider">
                ATBKHS Initiative
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <motion.span
                  className={`font-display text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-cyber-blue glow-text'
                      : 'text-gray-300 hover:text-cyber-blue'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyber-blue"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-cyber-blue transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cyber-blue/20 mt-2 pt-4 pb-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-cyber-blue bg-cyber-blue/10'
                      : 'text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/5'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
