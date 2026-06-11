import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  Plane, 
  Waves, 
  Heart,
  Zap,
  Target,
  Users,
  Award,
  Wrench,
  Eye,
  ArrowRight
} from 'lucide-react'

const BlogPage = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "Behind the Scenes: Lab Sessions & Testing",
      subtitle: "Exclusive look at our development process",
      date: "2 February 2025",
      readTime: "5 min read",
      category: "Lab Sessions",
      icon: Wrench,
      gradient: "from-green-400 to-emerald-600",
      content: [
        "Ever wondered what goes on behind the scenes when we're developing our Smart Flood Management System? Our lab sessions are where the magic happens - where ideas transform into reality through countless hours of dedication, problem-solving, and teamwork.",
        "**The Assembly Process**",
        "Each robot begins as individual components carefully selected for their specific roles. Watch our team meticulously assembling Diganta Prohori's hexacopter frame, integrating the Pixhawk 6C controller, and calibrating each sensor. Every connection matters, every calibration is crucial.",
        "**Testing and Validation**",
        "Before any robot sees real-world deployment, it undergoes rigorous testing in controlled environments. Our testing videos showcase JolJan 1.0's underwater navigation capabilities, Farming Control's field operations, and Diganta Prohori's aerial surveillance missions.",
        "**Team Collaboration**",
        "What makes these sessions special isn't just the technology - it's the people. Our lab videos capture the collaborative spirit that drives innovation. From brainstorming solutions to celebrating breakthroughs, every moment reflects our commitment to making a difference.",
        "**Real Impact**",
        "These aren't just development exercises. Every test, every calibration, every late-night debugging session brings us closer to saving lives during floods. The footage in our gallery shows the determination behind every component, every line of code, every successful test run.",
        "Visit our Media Gallery to see exclusive lab footage, testing videos, and behind-the-scenes moments that showcase our journey from concept to competition-ready robots."
      ]
    },
    {
      id: 2,
      title: "Tick. Tock. Tick… Boom!",
      subtitle: "The Story of Our First Flight",
      date: "16 May 2025",
      readTime: "3 min read",
      category: "Journey",
      icon: Plane,
      gradient: "from-cyan-400 to-blue-600",
      content: [
        "That's how our very first advanced flood surveillance drone met the ground hard. After months of sleepless nights, trial runs, and endless tweaking, we finally saw it take off… only to watch it crash within moments. Our hearts sank. With the National Round of the World Invention Competition and Exhibition just two weeks away, it felt like the world had stopped.",
        "But here's the thing: failure wasn't the end of our story.",
        "We went back to our little lab, still crushed but not broken. Piece by piece, idea by idea, we rebuilt. This time, we went lighter and stronger. Carbon-fiber body with a hexagonal frame. It wasn't just about fixing a drone. It was about proving to ourselves that we could rise after falling.",
        "Fast forward to 27 May 2025, Mohammadpur open playground. We held our breath as the drone lifted again. And this time… it soared. It mapped routes with GPS, reported damage, even carried emergency supplies. Every mission we dreamed of. It completed. Perfectly.",
        "We didn't cheer right away. We just stood there, frozen, as tears welled up. Then the joy hit us all at once. Laughing, crying, hugging.",
        "Because this wasn't just a successful test. It was proof that we could crash, rebuild, and still fly higher than before."
      ]
    },
    {
      id: 2,
      title: "JolJan 1.0: Into the Depths of Possibility",
      subtitle: "Our Biggest Leap in Underwater Robotics",
      date: "12 August 2025",
      readTime: "5 min read",
      category: "Innovation",
      icon: Waves,
      gradient: "from-purple-400 to-indigo-600",
      content: [
        "At Team Dreamers Innovator, every prototype is a leap toward the future of underwater robotics. JolJan 1.0 marked our biggest leap yet, a fully functioning Autonomous Underwater Vehicle (AUV) designed and built to meet the demanding standards of international competitions like 7th World Invention Competition and Exhibition.",
        "This version was not just a test platform. It was the result of months of planning, design, and late-night problem solving. From hardware and control systems to software integration and documentation, we built a clear roadmap where every subsystem had a goal and every team member had a mission. Our aim was simple: create an AUV that could navigate complex underwater tasks while promoting innovation with a purpose.",
        "**Design Breakthroughs**",
        "Previous builds taught us valuable lessons. The previous prototypes showed us what worked and what didn't. For JolJan 1.0, we introduced a capsule-shaped hull that balances internal space with smooth hydrodynamics, giving the vehicle greater stability during deep-water navigation.",
        "We paired this new design with high-performance thrusters sourced from Rovmaker, known for precision and reliability. This upgrade delivered sharper turns, stronger propulsion, and exceptional depth control, critical for competitive tasks. Inside, a mild steel frame provides strength under pressure, while a lightweight aluminum shell offers corrosion resistance without adding unnecessary weight.",
        "**Next Steps**",
        "With the body, movement, and endurance now proven, our next focus is integrating a torpedo system to expand mission capabilities, pushing JolJan 1.0 closer to a fully competition-ready platform for World Invention Competition and Exhibition and beyond.",
        "**Powered by Teamwork**",
        "Behind JolJan 1.0 is a diverse team of engineers, programmers, and designers working side by side. Every improvement reflects not just technical skill but a shared commitment to innovation and real-world impact.",
        "JolJan 1.0 is more than a machine; it's a milestone. Each version brings us closer to mastering underwater robotics and to inspiring solutions that serve humanity.",
        "To explore the depths of possibility—one breakthrough at a time."
      ]
    }
  ]

  const highlights = [
    {
      icon: Target,
      title: "Mission Success",
      description: "From crash to flight in 11 days",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "Team Spirit",
      description: "United through challenges",
      color: "text-blue-400"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Breakthrough designs",
      color: "text-purple-400"
    },
    {
      icon: Heart,
      title: "Community",
      description: "Impact beyond competition",
      color: "text-pink-400"
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
                PROJECT
              </span>
              <br />
              <span className="text-white">BLOG</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-display max-w-4xl mx-auto leading-relaxed">
              Follow our journey of innovation, challenges, and breakthroughs in developing the Smart Flood Management System.
            </p>
          </motion.div>
        </motion.section>

        {/* Highlights */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 border border-gray-700/30 energy-pulse text-center"
              >
                <highlight.icon className={`w-8 h-8 ${highlight.color} mx-auto mb-4`} />
                <div className={`text-2xl font-cyber font-bold ${highlight.color} mb-2`}>
                  {highlight.title}
                </div>
                <div className="text-gray-400 font-display text-sm">
                  {highlight.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blog Posts */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="glass-card rounded-2xl border border-gray-700/30 overflow-hidden data-stream"
            >
              {/* Post Header */}
              <div className={`h-32 bg-gradient-to-r ${post.gradient} relative overflow-hidden`}>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <post.icon className="w-16 h-16 text-white/80" />
                </motion.div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-display px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-400 font-display mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-3 glow-text">
                  {post.title}
                </h2>
                <p className="text-xl text-gray-300 font-display mb-8">
                  {post.subtitle}
                </p>

                <div className="prose prose-invert max-w-none">
                  {post.content.map((paragraph, pIndex) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={pIndex} className="text-xl font-cyber font-bold text-cyber-blue mt-8 mb-4">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      )
                    }
                    return (
                      <motion.p
                        key={pIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: pIndex * 0.1 }}
                        className="text-gray-300 font-display leading-relaxed mb-6"
                      >
                        {paragraph}
                      </motion.p>
                    )
                  })}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-8 inline-flex items-center space-x-2 text-cyber-blue font-display font-semibold cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.section>

        {/* Project Timeline */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-purple">
              PROJECT TIMELINE
            </h2>
            <p className="text-lg text-gray-300 font-display max-w-3xl mx-auto">
              Key milestones in our journey to create the Smart Flood Management System.
            </p>
          </motion.div>

          <div className="glass-card rounded-2xl p-8 border border-purple-500/30 circuit-lines">
            <div className="space-y-8">
              {[
                { date: "January 2025", event: "Project Conception", description: "Team formation and initial research on flood management challenges" },
                { date: "March 2025", event: "Design Phase", description: "Detailed design of three-robot system architecture" },
                { date: "May 16, 2025", event: "First Drone Crash", description: "Initial prototype failure - learning from setbacks" },
                { date: "May 27, 2025", event: "Successful Flight", description: "Diganta Prohori completes first successful mission" },
                { date: "August 12, 2025", event: "JolJan 1.0 Launch", description: "Advanced AUV prototype with breakthrough design" },
                { date: "Present", event: "Competition Ready", description: "Preparing for 7th World Invention Competition and Exhibition" }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-4 h-4 bg-cyber-purple rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-cyber font-bold text-white">
                        {milestone.event}
                      </h3>
                      <span className="text-sm font-display text-cyber-purple">
                        {milestone.date}
                      </span>
                    </div>
                    <p className="text-gray-400 font-display">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            className="glass-card border border-cyan-500/30 rounded-2xl p-12 energy-pulse"
          >
            <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6 glow-text text-cyan-400">
              STAY UPDATED
            </h2>
            <p className="text-lg text-gray-300 font-display leading-relaxed mb-8 max-w-3xl mx-auto">
              Follow our journey as we continue to innovate, learn, and build solutions that make a difference. 
              Every challenge is a step toward saving lives and protecting communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-cyber font-bold text-cyber-blue mb-2">Next Update</div>
                <div className="text-gray-400 font-display">Competition Results</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-cyber font-bold text-cyber-purple mb-2">Coming Soon</div>
                <div className="text-gray-400 font-display">Farming Control Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-cyber font-bold text-cyber-pink mb-2">Future</div>
                <div className="text-gray-400 font-display">Real Deployment</div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default BlogPage

