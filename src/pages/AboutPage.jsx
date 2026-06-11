import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Globe, 
  Award,
  Heart,
  Lightbulb,
  Zap,
  Shield,
  BookOpen,
  Cpu,
  Wrench,
  Eye
} from 'lucide-react'

const AboutPage = () => {
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

  const teamValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of robotics technology to create solutions that make a real difference in flood management and disaster response.'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Our work extends beyond competition - we run STEM programs and robotics workshops to inspire the next generation in Bangladesh.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Every system we build is designed for critical missions where lives depend on performance, durability, and precision.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'While rooted in Bangladesh, our solutions address climate challenges that affect communities worldwide.'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: '7th World Invention Competition',
      description: 'Representing Bangladesh with our Smart Flood Management System',
      status: 'Participating'
    },
    {
      icon: Target,
      title: 'Lives Impacted',
      description: 'Designed to help 6.3M people affected by floods annually in Bangladesh',
      status: 'Mission'
    },
    {
      icon: Cpu,
      title: 'Advanced Technology',
      description: 'Integration of AI, autonomous systems, and real-time monitoring',
      status: 'Innovation'
    },
    {
      icon: BookOpen,
      title: 'STEM Education',
      description: 'Door-to-door robotics workshops inspiring young minds',
      status: 'Community'
    }
  ]

  return (
    <div className="min-h-screen pt-24 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-cyber font-black mb-6 glow-text">
              <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                ABOUT
              </span>
              <br />
              <span className="text-white">DREAMERS INNOVATOR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-display max-w-4xl mx-auto leading-relaxed">
              We are more than just a team — we are young innovators from ATBKHS who dare to make a difference through robotics technology and creative problem-solving.
            </p>
          </motion.div>
        </motion.section>

        {/* Mission Statement */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-blue">
              OUR STORY
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              variants={itemVariants}
              className="glass-card border border-cyan-500/30 rounded-xl p-8 data-stream"
            >
              <h3 className="text-2xl font-cyber font-bold text-cyan-400 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3" />
                THE CHALLENGE
              </h3>
              <p className="text-gray-300 font-display leading-relaxed mb-6">
                Bangladesh, as the world's largest delta, faces devastating floods every monsoon season. Between 1971 and 2014, 78 major floods claimed over 41,700 lives and caused economic losses of $12.2 billion.
              </p>
              <p className="text-gray-300 font-display leading-relaxed mb-6">
                Each year, floods affect around 6.3 million people, with an average annual economic loss of about $1 billion. We saw this urgent need and decided to act.
              </p>
              
              {/* Challenge Image */}
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/images/img-10.jpeg" 
                  alt="Flood Challenge Assessment"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-cyan-500/20"></div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card border border-purple-500/30 rounded-xl p-8 circuit-lines"
            >
              <h3 className="text-2xl font-cyber font-bold text-purple-400 mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3" />
                OUR SOLUTION
              </h3>
              <p className="text-gray-300 font-display leading-relaxed mb-6">
                Team Dreamers Innovator developed a comprehensive three-part innovation system: Diganta Prohori for multipurpose aerial operations, JolJan 1.0 for underwater hazard detection, and Farming Control for smart agricultural management.
              </p>
              <p className="text-gray-300 font-display leading-relaxed mb-6">
                Together, these systems aim to save lives, improve rescue efforts, and reduce the long-term impact of floods on communities.
              </p>
              
              {/* Solution Image */}
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/images/img-12.jpeg" 
                  alt="Integrated Solution System"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-purple-500/20"></div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Team Values */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-purple">
              OUR VALUES
            </h2>
            <p className="text-lg text-gray-300 font-display max-w-3xl mx-auto">
              The principles that guide our work and define who we are as a team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-8 border border-gray-700/30 energy-pulse"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 bg-gradient-cyber rounded-full mb-6"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-cyber font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 font-display leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements & Impact */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-pink">
              ACHIEVEMENTS & IMPACT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl p-6 border border-gray-700/30 holographic"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-cyber rounded-lg">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-cyber font-bold text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-xs font-display text-cyber-blue bg-cyber-blue/20 px-2 py-1 rounded-full">
                        {achievement.status}
                      </span>
                    </div>
                    <p className="text-gray-400 font-display leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Dreams of Bangladesh */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card border border-cyan-500/30 rounded-2xl p-12 text-center circuit-lines"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block p-6 bg-gradient-cyber rounded-full mb-8"
            >
              <Users className="w-12 h-12 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-cyber font-bold text-cyan-400 mb-6">
              DREAMS OF BANGLADESH
            </h2>
            <p className="text-lg text-gray-300 font-display leading-relaxed max-w-4xl mx-auto mb-8">
              Team Dreamers Innovator represents Dreams of Bangladesh and ATBKHS — Ashuganj Tap Bidyut Kendra High School — an organization dedicated to advancing technology and education. We believe in the power of innovation to solve real-world problems and inspire the next generation.
            </p>
            
            {/* Team Photo */}
            <div className="relative rounded-xl overflow-hidden mb-8 max-w-2xl mx-auto">
              <img 
                src="/images/img-1.jpeg" 
                alt="Team Dreamers Innovator - ATBKHS Dreams of Bangladesh"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-cyber font-bold text-lg">Team Dreamers Innovator</div>
                <div className="text-gray-300 font-display text-sm">ATBKHS — Innovating for Bangladesh's Future</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-cyber-blue mb-2">100+</div>
                <div className="text-gray-400 font-display">Students Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-cyber-purple mb-2">50+</div>
                <div className="text-gray-400 font-display">Workshops Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-cyber-pink mb-2">3</div>
                <div className="text-gray-400 font-display">Advanced Robots</div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Development Journey */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-green">
              DEVELOPMENT JOURNEY
            </h2>
            <p className="text-lg text-gray-300 font-display max-w-3xl mx-auto">
              From initial concepts to working prototypes - witness our engineering process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Development Images */}
            {[
              { 
                src: '/images/img-9.jpeg', 
                title: 'Electronics Integration', 
                description: 'Advanced sensor and control system integration',
                color: 'border-green-500/30'
              },
              { 
                src: '/images/img-11.jpeg', 
                title: 'Precision Assembly', 
                description: 'Careful assembly of robotic components',
                color: 'border-blue-500/30'
              },
              { 
                src: '/images/img-2.jpeg', 
                title: 'Testing Phase', 
                description: 'Rigorous testing and validation processes',
                color: 'border-purple-500/30'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-card rounded-xl overflow-hidden border ${item.color} group`}
              >
                <div className="relative aspect-video bg-gray-900/50 overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full status-pulse"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-cyber font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-display text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6 glow-text text-white">
              JOIN OUR MISSION
            </h2>
            <p className="text-lg text-gray-300 font-display leading-relaxed mb-8">
              "To encourage the next generation to dream big and believe in their power to create change."
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="px-8 py-4 bg-gradient-cyber rounded-lg font-display font-semibold text-white energy-pulse">
                Building Tomorrow's Solutions Today
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default AboutPage

