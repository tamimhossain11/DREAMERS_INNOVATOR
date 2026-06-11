import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Plane,
  Waves,
  Sprout,
  ArrowRight,
  Zap,
  Shield,
  Target,
  Radio,
  Lightbulb,
  Users
} from 'lucide-react'

const HomePage = () => {
  const robots = [
    {
      id: 'drone',
      name: 'Diganta Prohori',
      subtitle: 'Multipurpose Drone',
      description: 'High-end multipurpose drone with hexacopter carbon-fiber frame, Pixhawk 6C controller, and PX4 flight software. Equipped with high-resolution camera, optical sensors, and emergency supply delivery system for diverse mission profiles.',
      icon: Plane,
      path: '/drone',
      gradient: 'from-cyan-400 to-blue-600',
      bgGradient: 'bg-gradient-drone',
      features: ['ZD850 Carbon Fiber Frame', 'Pixhawk 6C Controller', '3D Aerial Mapping', 'Multi-Mission Capable']
    },
    {
      id: 'auv',
      name: 'JolJan 1.0',
      subtitle: 'Autonomous Underwater Vehicle',
      description: 'Advanced AUV with capsule-shaped hull for hydrodynamic stability, high-performance Rovmaker thrusters, and mild steel frame designed for post-flood hazard detection and underwater exploration.',
      icon: Waves,
      path: '/auv',
      gradient: 'from-purple-400 to-indigo-600',
      bgGradient: 'bg-gradient-auv',
      features: ['Capsule Hull Design', 'Rovmaker Thrusters', 'Deep Water Navigation', 'Hazard Detection']
    },
    {
      id: 'rov',
      name: 'Farming Control',
      subtitle: 'Smart Agricultural Control System',
      description: 'Intelligent farming control robot designed to monitor and manage agricultural activities, crop conditions, soil health, and field operations with precision automation and real-time remote control.',
      icon: Sprout,
      path: '/rov',
      gradient: 'from-green-400 to-emerald-600',
      bgGradient: 'bg-gradient-to-br from-green-500 to-emerald-700',
      features: ['Crop Monitoring', 'Remote Field Control', 'Soil Analysis', 'Precision Agriculture']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative py-20 px-4 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            {/* Logo + Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-28 h-28 rounded-full border-4 border-cyber-blue/60 overflow-hidden energy-pulse shadow-2xl shadow-cyber-blue/30">
                  <img
                    src="/images/logo.jpeg"
                    alt="Dreamers Innovator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cyber-blue text-dark-bg text-xs font-cyber font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                  ATBKHS
                </div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-cyber font-black mb-4 glow-text">
              <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                DREAMERS
              </span>
              <br />
              <span className="text-white">INNOVATOR</span>
            </h1>
            <p className="text-sm md:text-base text-cyber-blue font-display tracking-widest mb-6 font-semibold">
              A Initiative of Ashuganj Tap Bidyut Kendra High School
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-display max-w-4xl mx-auto leading-relaxed">
              Team Dreamers Innovator, representing Dreams Of Bangladesh, designs next-generation robotic vehicles for flood management, underwater exploration, and smart agricultural control — competing at the 7th World Invention Competition and Exhibition.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Zap, label: 'Lives Affected Annually', value: '6.3M' },
              { icon: Shield, label: 'Economic Loss Prevented', value: '$1B+' },
              { icon: Target, label: 'Mission Success', value: '100%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 border border-cyber-blue/30 energy-pulse"
              >
                <stat.icon className="w-8 h-8 text-cyber-blue mx-auto mb-4" />
                <div className="text-3xl font-cyber font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-display">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Robots Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-blue">
              INNOVATION SYSTEM
            </h2>
            <p className="text-lg text-gray-300 font-display max-w-3xl mx-auto">
              Our three-part innovation system — a multipurpose drone, autonomous underwater vehicle, and smart farming controller — designed to solve real-world challenges in Bangladesh and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {robots.map((robot) => (
              <motion.div
                key={robot.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="robot-card glass-card rounded-2xl border border-gray-700/30 overflow-hidden group"
              >
                <div className={`h-48 ${robot.bgGradient} relative overflow-hidden`}>
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <robot.icon className="w-24 h-24 text-white/90" />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-cyber font-bold text-white mb-1">
                        {robot.name}
                      </h3>
                      <p className="text-sm text-gray-400 font-display">
                        {robot.subtitle}
                      </p>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full status-pulse"></div>
                  </div>

                  <p className="text-gray-300 font-display mb-6 leading-relaxed">
                    {robot.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {robot.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link to={robot.path} className="block w-full">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full ${robot.bgGradient} text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all group-hover:shadow-lg`}
                    >
                      <span>Access Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-card-bg/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-purple">
              OUR MISSION & VISION
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="glass-card border border-purple-500/30 rounded-xl p-8 circuit-lines"
            >
              <h3 className="text-2xl font-cyber font-bold text-purple-400 mb-6">
                OUR MISSION
              </h3>
              <p className="text-gray-300 font-display leading-relaxed mb-6">
                Team Dreamers Innovator, representing Dreams Of Bangladesh and ATBKHS, designs next-generation robotic systems for flood management, underwater exploration, and smart agriculture. As participants in the 7th World Invention Competition and Exhibition, we are committed to advancing technology that solves real-world challenges.
              </p>
              <p className="text-gray-300 font-display leading-relaxed">
                Beyond competition, we run STEM programs and door-to-door robotics workshops to spark curiosity and confidence among the young innovators of tomorrow.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card border border-cyan-500/30 rounded-xl p-8 data-stream"
            >
              <h3 className="text-2xl font-cyber font-bold text-cyan-400 mb-6">
                OUR VISION
              </h3>
              <p className="text-gray-300 font-display leading-relaxed mb-6">
                At Dreamers Innovator, we are more than just a team — we are a group of young people who dare to make a difference. By combining creativity, determination, and teamwork, we build technologies that save lives, empower farmers, and help communities stand stronger.
              </p>
              <p className="text-gray-300 font-display leading-relaxed">
                Our goal is clear: <span className="text-cyber-blue font-semibold">"To encourage the next generation to dream big and believe in their power to create change."</span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Impact Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-pink">
              PROJECT IMPACT
            </h2>
            <p className="text-lg text-gray-300 font-display max-w-4xl mx-auto leading-relaxed">
              Bangladesh faces severe challenges every monsoon with devastating floods, while also needing smarter agricultural solutions. Our innovations address both — from aerial surveillance to underwater hazard detection and precision farming.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Aerial Surveillance',
                description: 'Diganta Prohori provides multipurpose aerial coverage — from 3D flood mapping to agricultural field surveys and emergency supply delivery.'
              },
              {
                icon: Shield,
                title: 'Underwater Exploration',
                description: 'JolJan 1.0 detects underwater hazards and structural damage post-flood, ensuring safe recovery and rebuilding efforts in affected communities.'
              },
              {
                icon: Sprout,
                title: 'Smart Farming',
                description: 'Farming Control brings precision agriculture to Bangladesh — monitoring crop health, soil conditions, and field operations remotely in real time.'
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-xl glass-card border border-gray-700/30 energy-pulse"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 bg-gradient-cyber rounded-full mb-6"
                >
                  <impact.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-cyber font-bold text-white mb-4">
                  {impact.title}
                </h3>
                <p className="text-gray-400 font-display leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Media Showcase Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-card-bg/10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-blue">
              PROJECT SHOWCASE
            </h2>
            <p className="text-lg text-gray-300 font-display max-w-3xl mx-auto leading-relaxed">
              Witness our journey from concept to reality — lab sessions, testing phases, and breakthrough moments from Team Dreamers Innovator.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Video */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 glass-card rounded-xl overflow-hidden border border-cyan-500/30 group"
            >
              <div className="relative aspect-video bg-gray-900/50 overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  poster="/images/img-1.jpeg"
                  controls
                  muted
                >
                  <source src="/images/vid-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 rounded-full text-xs font-display font-medium bg-red-500/80 text-white">
                    LAB SESSION
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-cyber font-bold text-white mb-2">
                  Multipurpose Drone — Lab Session
                </h3>
                <p className="text-gray-400 font-display mb-4">
                  Behind-the-scenes look at our team assembling and calibrating Diganta Prohori in our robotics lab at ATBKHS.
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-display font-medium transition-colors"
                >
                  <span>View All Media</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Featured Images */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card rounded-xl overflow-hidden border border-purple-500/30 group">
                <div className="relative aspect-square bg-gray-900/50 overflow-hidden">
                  <img
                    src="/images/img-6.jpeg"
                    alt="Diganta Prohori Drone"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-cyber font-bold text-lg">Diganta Prohori</div>
                    <div className="text-gray-300 font-display text-sm">Multipurpose Drone</div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl overflow-hidden border border-indigo-500/30 group">
                <div className="relative aspect-square bg-gray-900/50 overflow-hidden">
                  <img
                    src="/images/img-7.jpeg"
                    alt="JolJan 1.0 AUV"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-cyber font-bold text-lg">JolJan 1.0</div>
                    <div className="text-gray-300 font-display text-sm">Underwater Vehicle</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Lab Sessions', value: '50+', icon: '🔬' },
              { label: 'Test Videos', value: '25+', icon: '🎥' },
              { label: 'Project Images', value: '100+', icon: '📸' },
              { label: 'Development Hours', value: '500+', icon: '⏱️' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 glass-card rounded-xl border border-gray-700/30"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-cyber font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 font-display text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage
