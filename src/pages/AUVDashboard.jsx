import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Waves, 
  Battery, 
  Wifi, 
  Navigation, 
  Camera, 
  Gauge,
  MapPin,
  Thermometer,
  Droplets,
  Activity,
  Play,
  Pause,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Compass,
  Radio,
  FlaskConical,
  Zap,
  Fish
} from 'lucide-react'

const AUVDashboard = () => {
  const [isDiving, setIsDiving] = useState(false)
  const [depth, setDepth] = useState(0)
  const [battery, setBattery] = useState(92)
  const [speed, setSpeed] = useState(0)
  const [waterTemp, setWaterTemp] = useState(18)
  const [pressure, setPressure] = useState(1.0)
  const [salinity, setSalinity] = useState(35.2)
  const [sonarMode, setSonarMode] = useState('mapping')

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDiving) {
        setDepth(prev => Math.max(0, prev + (Math.random() - 0.3) * 5))
        setSpeed(prev => Math.max(0, prev + (Math.random() - 0.5) * 2))
        setBattery(prev => Math.max(0, prev - 0.08))
        setWaterTemp(prev => Math.max(0, prev + (Math.random() - 0.5) * 0.3))
        setPressure(prev => Math.max(1.0, prev + (Math.random() - 0.3) * 0.1))
        setSalinity(prev => Math.max(30, prev + (Math.random() - 0.5) * 0.2))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isDiving])

  const telemetryData = [
    { label: 'Depth', value: `${depth.toFixed(1)}m`, icon: ArrowDown, color: 'text-purple-400' },
    { label: 'Speed', value: `${speed.toFixed(1)} knots`, icon: Zap, color: 'text-yellow-400' },
    { label: 'Water Temp', value: `${waterTemp.toFixed(1)}°C`, icon: Thermometer, color: 'text-blue-400' },
    { label: 'Pressure', value: `${pressure.toFixed(2)} bar`, icon: Activity, color: 'text-green-400' },
    { label: 'Salinity', value: `${salinity.toFixed(1)} PSU`, icon: Droplets, color: 'text-cyan-400' }
  ]

  const navigationModes = ['Manual Control', 'Autonomous Navigation', 'Hazard Detection', 'Survey Pattern', 'Emergency Surface']
  const [currentMode, setCurrentMode] = useState('Autonomous Navigation')

  const missionTypes = [
    { name: 'Post-Flood Hazard Detection', icon: MapPin, active: true },
    { name: 'Underwater Navigation', icon: Compass, active: true },
    { name: 'Water Quality Analysis', icon: FlaskConical, active: false },
    { name: 'Structural Assessment', icon: Radio, active: false }
  ]

  return (
    <div className="min-h-screen pt-24 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-auv rounded-xl">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-cyber font-bold text-white glow-text">
                  JOLJAN 1.0
                </h1>
                <p className="text-gray-400 font-display">Autonomous Underwater Vehicle Control Center</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isDiving ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isDiving ? 'bg-blue-400 status-pulse' : 'bg-gray-400'}`}></div>
                <span className="font-display font-medium">
                  {isDiving ? 'DIVING' : 'SURFACE'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            {/* Dive Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-purple-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-purple-400 mb-6 flex items-center">
                <Navigation className="w-5 h-5 mr-2" />
                DIVE CONTROLS
              </h2>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDiving(!isDiving)}
                  className={`w-full py-3 px-6 rounded-lg font-display font-semibold flex items-center justify-center space-x-2 transition-all ${
                    isDiving 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {isDiving ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isDiving ? 'SURFACE' : 'DIVE'}</span>
                </motion.button>

                {/* Directional Controls */}
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-400 transition-colors"
                  >
                    <ArrowUp className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <div></div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-400 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-lg text-indigo-400 transition-colors"
                  >
                    <Compass className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-400 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6 mx-auto" />
                  </motion.button>
                  
                  <div></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-400 transition-colors"
                  >
                    <ArrowDown className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <div></div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Modes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-purple-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-purple-400 mb-6">
                NAVIGATION MODES
              </h2>
              <div className="space-y-2">
                {navigationModes.map((mode) => (
                  <motion.button
                    key={mode}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentMode(mode)}
                    className={`w-full p-3 rounded-lg text-left font-display transition-all ${
                      currentMode === mode
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                        : 'bg-gray-700/20 text-gray-300 hover:bg-gray-700/30'
                    }`}
                  >
                    {mode}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Mission Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-purple-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-purple-400 mb-6">
                ACTIVE MISSIONS
              </h2>
              <div className="space-y-3">
                {missionTypes.map((mission, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-dark-bg/30">
                    <div className="flex items-center space-x-3">
                      <mission.icon className={`w-4 h-4 ${mission.active ? 'text-green-400' : 'text-gray-500'}`} />
                      <span className={`font-display text-sm ${mission.active ? 'text-white' : 'text-gray-500'}`}>
                        {mission.name}
                      </span>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${mission.active ? 'bg-green-400 status-pulse' : 'bg-gray-500'}`}></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center Column - Main Display */}
          <div className="space-y-6">
            {/* Sonar Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-purple-500/30 energy-pulse"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-cyber font-bold text-purple-400 flex items-center">
                  <Radio className="w-5 h-5 mr-2" />
                  SONAR DISPLAY
                </h2>
                <div className="flex space-x-2">
                  {['mapping', 'obstacle', 'fish'].map((mode) => (
                    <motion.button
                      key={mode}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSonarMode(mode)}
                      className={`px-3 py-1 rounded-md text-sm font-display capitalize transition-colors ${
                        sonarMode === mode
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {mode}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div className="aspect-video bg-black/50 rounded-lg relative overflow-hidden">
                {/* Background Image based on sonar mode */}
                <div className="absolute inset-0">
                  {sonarMode === 'mapping' && (
                    <img 
                      src="/images/img-7.jpeg" 
                      alt="AUV Sonar Mapping" 
                      className="w-full h-full object-cover opacity-40 filter blur-sm"
                    />
                  )}
                  {sonarMode === 'obstacle' && (
                    <img 
                      src="/images/img-12.jpeg" 
                      alt="Obstacle Detection" 
                      className="w-full h-full object-cover opacity-50 filter sepia"
                    />
                  )}
                  {sonarMode === 'fish' && (
                    <img 
                      src="/images/img-9.jpeg" 
                      alt="Marine Life Detection" 
                      className="w-full h-full object-cover opacity-45 filter hue-rotate-90"
                    />
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                  <div className="absolute inset-4 border border-purple-500/30 rounded">
                    <div className="absolute top-2 left-2 text-purple-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      {sonarMode.toUpperCase()} MODE
                    </div>
                    <div className="absolute top-2 right-2 text-purple-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      ACTIVE ●
                    </div>
                    <div className="absolute bottom-2 left-2 text-purple-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      DEPTH: {depth.toFixed(1)}m
                    </div>
                    <div className="absolute bottom-2 right-2 text-purple-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      RANGE: 500m
                    </div>
                  </div>
                </div>
                
                {/* Sonar sweep animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 border border-purple-400/50 rounded-full relative">
                    <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-purple-400 transform -translate-x-0.5"></div>
                    <div className="w-24 h-24 border border-purple-400/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-16 h-16 border border-purple-400/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </motion.div>
                
                {/* Detected objects */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full"
                ></motion.div>
              </div>
            </motion.div>

            {/* Underwater Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-purple-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-purple-400 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                UNDERWATER NAVIGATION
              </h2>
              <div className="aspect-video bg-gray-900/50 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-800/30 to-blue-900/50"></div>
                
                {/* Depth layers */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-blue-400/10 to-transparent"></div>
                  <div className="absolute top-1/4 left-0 right-0 h-1/4 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-1/4 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-1/4 bg-gradient-to-b from-blue-800/10 to-transparent"></div>
                </div>
                
                {/* AUV position */}
                <motion.div
                  animate={{
                    x: [150, 170, 150],
                    y: [120, 100, 120]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute w-6 h-3 bg-purple-400 rounded-full"
                  style={{ top: '45%', left: '40%' }}
                >
                  <div className="w-full h-full bg-purple-400 rounded-full"></div>
                </motion.div>
                
                {/* Waypoints */}
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400 rounded-full"></div>
                
                <div className="absolute bottom-4 left-4 text-purple-400 text-sm font-mono">
                  GPS: 34.0522° N, 118.2437° W
                </div>
                <div className="absolute bottom-4 right-4 text-purple-400 text-sm font-mono">
                  DEPTH: {depth.toFixed(1)}m
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Telemetry */}
          <div className="space-y-6">
            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-purple-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-purple-400 mb-6 flex items-center">
                <Gauge className="w-5 h-5 mr-2" />
                SYSTEM STATUS
              </h2>
              
              <div className="space-y-4">
                {/* Battery */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Battery className="w-5 h-5 text-green-400" />
                    <span className="font-display text-gray-300">Battery</span>
                  </div>
                  <span className="font-cyber text-green-400">{battery.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${battery}%` }}
                    className={`h-2 rounded-full ${
                      battery > 50 ? 'bg-green-400' : battery > 20 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                  />
                </div>

                {/* Communication */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-purple-400" />
                    <span className="font-display text-gray-300">Acoustic Link</span>
                  </div>
                  <span className="font-cyber text-purple-400">Connected</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-4 rounded ${
                        i < 3 ? 'bg-purple-400' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Environmental Data */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-purple-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-purple-400 mb-6">
                ENVIRONMENTAL DATA
              </h2>
              
              <div className="space-y-4">
                {telemetryData.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-dark-bg/30 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="font-display text-gray-300">{item.label}</span>
                    </div>
                    <span className={`font-cyber font-bold ${item.color}`}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-purple-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-purple-400 mb-4">
                MISSION PROGRESS
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Dive Time</span>
                  <span className="font-cyber text-white">
                    {isDiving ? '45:23' : '00:00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Distance</span>
                  <span className="font-cyber text-white">1.8 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Samples</span>
                  <span className="font-cyber text-white">12/20</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Mode</span>
                  <span className="font-cyber text-purple-400">{currentMode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Max Depth</span>
                  <span className="font-cyber text-white">{Math.max(depth, 0).toFixed(1)}m</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AUVDashboard
