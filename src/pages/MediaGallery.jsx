import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Image as ImageIcon,
  Video,
  Calendar,
  MapPin,
  Users,
  Wrench,
  TestTube,
  Zap
} from 'lucide-react'

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  // Media data with categorization
  const mediaItems = [
    // Lab Working Session Videos
    {
      id: 'vid-1',
      type: 'video',
      src: '/images/vid-1.mp4',
      thumbnail: '/images/img-1.jpeg',
      title: 'Drone Assembly Lab Session',
      description: 'Team working on Diganta Prohori drone assembly and calibration in the lab',
      category: 'lab-session',
      date: '2024-01-15',
      location: 'Robotics Lab - Dreams of Bangladesh',
      tags: ['drone', 'assembly', 'teamwork']
    },
    {
      id: 'vid-2',
      type: 'video',
      src: '/images/vid-2.mp4',
      thumbnail: '/images/img-2.jpeg',
      title: 'JolJan 1.0 Development Session',
      description: 'JolJan 1.0 underwater vehicle development and testing preparations',
      category: 'lab-session',
      date: '2024-01-18',
      location: 'Marine Systems Lab',
      tags: ['auv', 'development', 'underwater']
    },
    {
      id: 'vid-3',
      type: 'video',
      src: '/images/vid-3.mp4',
      thumbnail: '/images/img-3.jpeg',
      title: 'Farming Control Calibration Workshop',
      description: 'Farming Control agricultural robot calibration and field system testing',
      category: 'lab-session',
      date: '2024-01-20',
      location: 'Control Systems Lab',
      tags: ['rov', 'calibration', 'rescue']
    },
    
    // Test Videos
    {
      id: 'vid-4',
      type: 'video',
      src: '/images/vid-4.mp4',
      thumbnail: '/images/img-4.jpeg',
      title: 'Drone Flight Test',
      description: 'Diganta Prohori autonomous flight testing and navigation system validation',
      category: 'test-videos',
      date: '2024-01-25',
      location: 'Open Field Testing Area',
      tags: ['drone', 'flight-test', 'autonomous']
    },
    {
      id: 'vid-5',
      type: 'video',
      src: '/images/vid-5.mp4',
      thumbnail: '/images/img-5.jpeg',
      title: 'Water Tank JolJan 1.0 Test',
      description: 'JolJan 1.0 underwater navigation and hazard detection testing',
      category: 'test-videos',
      date: '2024-01-28',
      location: 'Water Testing Facility',
      tags: ['auv', 'underwater', 'navigation']
    },

    // Project Images
    {
      id: 'img-1',
      type: 'image',
      src: '/images/img-1.jpeg',
      title: 'Team Dreamers Innovator',
      description: 'The complete team from ATBKHS behind the Dreamers Innovator project',
      category: 'team',
      date: '2024-01-10',
      location: 'Dreams of Bangladesh HQ',
      tags: ['team', 'group', 'founders']
    },
    {
      id: 'img-6',
      type: 'image',
      src: '/images/img-6.jpeg',
      title: 'Diganta Prohori - Multipurpose Drone',
      description: 'Complete assembled drone with hexacopter frame and Pixhawk controller',
      category: 'robots',
      date: '2024-01-22',
      location: 'Assembly Lab',
      tags: ['drone', 'surveillance', 'complete']
    },
    {
      id: 'img-7',
      type: 'image',
      src: '/images/img-7.jpeg',
      title: 'JolJan 1.0 - AUV System',
      description: 'Autonomous underwater vehicle with capsule hull design',
      category: 'robots',
      date: '2024-01-24',
      location: 'Marine Lab',
      tags: ['auv', 'underwater', 'capsule']
    },
    {
      id: 'img-8',
      type: 'image',
      src: '/images/img-8.jpeg',
      title: 'Farming Control - Agricultural Robot',
      description: 'Smart agricultural control robot with field monitoring and irrigation system',
      category: 'robots',
      date: '2024-01-26',
      location: 'Rescue Systems Lab',
      tags: ['rov', 'rescue', 'floating']
    },
    {
      id: 'img-9',
      type: 'image',
      src: '/images/img-9.jpeg',
      title: 'Electronics Integration',
      description: 'Advanced control systems and sensor integration process',
      category: 'development',
      date: '2024-01-12',
      location: 'Electronics Lab',
      tags: ['electronics', 'sensors', 'integration']
    },
    {
      id: 'img-10',
      type: 'image',
      src: '/images/img-10.jpeg',
      title: 'Testing Environment Setup',
      description: 'Controlled testing environment for robot validation',
      category: 'testing',
      date: '2024-01-30',
      location: 'Testing Facility',
      tags: ['testing', 'environment', 'validation']
    },
    {
      id: 'img-11',
      type: 'image',
      src: '/images/img-11.jpeg',
      title: 'Component Assembly',
      description: 'Precision assembly of robotic components and systems',
      category: 'development',
      date: '2024-01-14',
      location: 'Assembly Station',
      tags: ['assembly', 'components', 'precision']
    },
    {
      id: 'img-12',
      type: 'image',
      src: '/images/img-12.jpeg',
      title: 'Final System Integration',
      description: 'Complete system integration and final testing phase',
      category: 'testing',
      date: '2024-02-01',
      location: 'Integration Lab',
      tags: ['integration', 'final', 'complete']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Media', icon: ImageIcon, count: mediaItems.length },
    { id: 'lab-session', name: 'Lab Sessions', icon: Users, count: mediaItems.filter(item => item.category === 'lab-session').length },
    { id: 'test-videos', name: 'Test Videos', icon: TestTube, count: mediaItems.filter(item => item.category === 'test-videos').length },
    { id: 'robots', name: 'Robots', icon: Zap, count: mediaItems.filter(item => item.category === 'robots').length },
    { id: 'team', name: 'Team', icon: Users, count: mediaItems.filter(item => item.category === 'team').length },
    { id: 'development', name: 'Development', icon: Wrench, count: mediaItems.filter(item => item.category === 'development').length },
    { id: 'testing', name: 'Testing', icon: TestTube, count: mediaItems.filter(item => item.category === 'testing').length }
  ]

  const filteredMedia = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter)

  const openModal = (media) => {
    setSelectedMedia(media)
    if (media.type === 'video') {
      setIsPlaying(false)
    }
  }

  const closeModal = () => {
    setSelectedMedia(null)
    setIsPlaying(false)
  }

  const navigateMedia = (direction) => {
    const currentIndex = filteredMedia.findIndex(item => item.id === selectedMedia.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredMedia.length
    } else {
      newIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length
    }
    
    setSelectedMedia(filteredMedia[newIndex])
    setIsPlaying(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="min-h-screen pt-24 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-cyber font-black mb-6 glow-text">
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              MEDIA
            </span>
            <br />
            <span className="text-white">GALLERY</span>
          </h1>
          <p className="text-xl text-gray-300 font-display max-w-4xl mx-auto leading-relaxed">
            Explore our journey as Team Dreamers Innovator — developing multipurpose drones, underwater vehicles, and smart farming systems through lab sessions and project milestones.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-display font-medium flex items-center space-x-2 transition-all ${
                  activeFilter === category.id
                    ? 'bg-gradient-cyber text-white shadow-lg shadow-cyber-blue/25'
                    : 'glass-card text-gray-300 hover:text-white border border-gray-700/30'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Media Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredMedia.map((media) => (
              <motion.div
                key={media.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => openModal(media)}
                className="glass-card rounded-xl overflow-hidden border border-gray-700/30 cursor-pointer group"
              >
                <div className="relative aspect-video bg-gray-900/50 overflow-hidden">
                  <img
                    src={media.type === 'video' ? media.thumbnail : media.src}
                    alt={media.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-display font-medium ${
                      media.type === 'video' 
                        ? 'bg-red-500/80 text-white' 
                        : 'bg-blue-500/80 text-white'
                    }`}>
                      {media.type === 'video' ? (
                        <div className="flex items-center space-x-1">
                          <Video className="w-3 h-3" />
                          <span>VIDEO</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <ImageIcon className="w-3 h-3" />
                          <span>IMAGE</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-1 text-white text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(media.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-cyber font-bold text-white mb-2 line-clamp-1">
                    {media.title}
                  </h3>
                  <p className="text-gray-400 font-display text-sm line-clamp-2 mb-3">
                    {media.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span className="line-clamp-1">{media.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {media.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs bg-cyber-blue/20 text-cyber-blue px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl w-full max-h-[90vh] bg-dark-bg rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateMedia('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateMedia('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
                  {/* Media Content */}
                  <div className="lg:col-span-2 relative bg-black">
                    {selectedMedia.type === 'video' ? (
                      <div className="relative w-full h-full min-h-[400px]">
                        <video
                          className="w-full h-full object-contain"
                          controls
                          muted={isMuted}
                          autoPlay={isPlaying}
                        >
                          <source src={selectedMedia.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div className="w-full h-full min-h-[400px] flex items-center justify-center">
                        <img
                          src={selectedMedia.src}
                          alt={selectedMedia.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Media Info */}
                  <div className="p-6 glass-card border-l border-gray-700/30">
                    <div className="mb-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-display font-medium mb-3 ${
                        selectedMedia.type === 'video' 
                          ? 'bg-red-500/20 text-red-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {selectedMedia.type === 'video' ? (
                          <>
                            <Video className="w-4 h-4" />
                            <span>VIDEO</span>
                          </>
                        ) : (
                          <>
                            <ImageIcon className="w-4 h-4" />
                            <span>IMAGE</span>
                          </>
                        )}
                      </div>
                      
                      <h2 className="text-2xl font-cyber font-bold text-white mb-3">
                        {selectedMedia.title}
                      </h2>
                      <p className="text-gray-300 font-display leading-relaxed mb-4">
                        {selectedMedia.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-display">
                          {new Date(selectedMedia.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="font-display">{selectedMedia.location}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-cyber font-bold text-gray-400 mb-2">TAGS</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMedia.tags.map(tag => (
                          <span key={tag} className="text-sm bg-cyber-blue/20 text-cyber-blue px-3 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 font-mono">
                      Media ID: {selectedMedia.id}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MediaGallery
