import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plane, 
  Battery, 
  Wifi, 
  Navigation, 
  Camera, 
  Gauge,
  MapPin,
  Wind,
  Thermometer,
  Eye,
  Play,
  Pause,
  RotateCcw,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Zap,
  Satellite,
  Radio,
  AlertTriangle,
  CheckCircle,
  Clock,
  Compass
} from 'lucide-react'

const DroneDashboard = () => {
  const [isFlying, setIsFlying] = useState(false)
  const [altitude, setAltitude] = useState(0)
  const [battery, setBattery] = useState(87)
  const [speed, setSpeed] = useState(0)
  const [temperature, setTemperature] = useState(22)
  const [windSpeed, setWindSpeed] = useState(8)
  const [cameraMode, setCameraMode] = useState('normal')
  const [gpsLocked, setGpsLocked] = useState(true)
  const [signalStrength, setSignalStrength] = useState(4)
  const [flightTime, setFlightTime] = useState(0)
  const [waypoints, setWaypoints] = useState({ completed: 3, total: 5 })
  const [emergencyMode, setEmergencyMode] = useState(false)
  const [deliveryStatus, setDeliveryStatus] = useState('ready')

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (isFlying) {
        setAltitude(prev => Math.max(0, prev + (Math.random() - 0.5) * 2))
        setSpeed(prev => Math.max(0, prev + (Math.random() - 0.5) * 5))
        setBattery(prev => Math.max(0, prev - 0.1))
        setTemperature(prev => prev + (Math.random() - 0.5) * 0.5)
        setWindSpeed(prev => Math.max(0, prev + (Math.random() - 0.5) * 2))
        setFlightTime(prev => prev + 1)
        setSignalStrength(prev => Math.max(1, Math.min(5, prev + (Math.random() - 0.5))))
        setGpsLocked(Math.random() > 0.1) // 90% GPS lock rate
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isFlying])

  const telemetryData = [
    { label: 'Altitude', value: `${altitude.toFixed(1)}m`, icon: ArrowUp, color: 'text-cyan-400' },
    { label: 'Speed', value: `${speed.toFixed(1)} km/h`, icon: Zap, color: 'text-yellow-400' },
    { label: 'Temperature', value: `${temperature.toFixed(1)}°C`, icon: Thermometer, color: 'text-red-400' },
    { label: 'Wind Speed', value: `${windSpeed.toFixed(1)} m/s`, icon: Wind, color: 'text-blue-400' }
  ]

  const flightModes = ['Manual Control', 'Autonomous Flight', 'Survey Pattern', 'Emergency Return', 'Delivery Mode']
  const [currentMode, setCurrentMode] = useState('Autonomous Flight')

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
              <div className="p-3 bg-gradient-drone rounded-xl">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-cyber font-bold text-white glow-text">
                  DIGANTA PROHORI
                </h1>
                <p className="text-gray-400 font-display">Multipurpose Drone Control Center</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isFlying ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isFlying ? 'bg-green-400 status-pulse' : 'bg-gray-400'}`}></div>
                <span className="font-display font-medium">
                  {isFlying ? 'FLYING' : 'GROUNDED'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            {/* Flight Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-cyan-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-cyan-400 mb-6 flex items-center">
                <Navigation className="w-5 h-5 mr-2" />
                FLIGHT CONTROLS
              </h2>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFlying(!isFlying)}
                  className={`w-full py-3 px-6 rounded-lg font-display font-semibold flex items-center justify-center space-x-2 transition-all ${
                    isFlying 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {isFlying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isFlying ? 'LAND' : 'TAKEOFF'}</span>
                </motion.button>

                {/* Directional Controls */}
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg text-cyan-400 transition-colors"
                  >
                    <ArrowUp className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <div></div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg text-cyan-400 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-400 transition-colors"
                  >
                    <RotateCcw className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg text-cyan-400 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6 mx-auto" />
                  </motion.button>
                  
                  <div></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg text-cyan-400 transition-colors"
                  >
                    <ArrowDown className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <div></div>
                </div>
              </div>
            </motion.div>

            {/* Flight Modes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-cyan-500/30 circuit-lines"
            >
              <h2 className="text-xl font-cyber font-bold text-cyan-400 mb-6">
                FLIGHT MODES
              </h2>
              <div className="space-y-2">
                {flightModes.map((mode) => (
                  <motion.button
                    key={mode}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentMode(mode)}
                    className={`w-full p-3 rounded-lg text-left font-display transition-all ${
                      currentMode === mode
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'bg-gray-700/20 text-gray-300 hover:bg-gray-700/30'
                    }`}
                  >
                    {mode}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Advanced Status Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-cyan-500/30"
            >
              <h2 className="text-xl font-cyber font-bold text-cyan-400 mb-6 flex items-center">
                <Satellite className="w-5 h-5 mr-2" />
                SYSTEM STATUS
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: gpsLocked ? 0 : 360 }}
                      transition={{ duration: 2, repeat: gpsLocked ? 0 : Infinity }}
                    >
                      <Compass className={`w-4 h-4 ${gpsLocked ? 'text-green-400' : 'text-red-400'}`} />
                    </motion.div>
                    <span className="font-display text-gray-300 text-sm">GPS Lock</span>
                  </div>
                  <span className={`font-cyber text-sm ${gpsLocked ? 'text-green-400' : 'text-red-400'}`}>
                    {gpsLocked ? 'LOCKED' : 'SEARCHING'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="font-display text-gray-300 text-sm">Flight Time</span>
                  </div>
                  <span className="font-cyber text-blue-400 text-sm">
                    {Math.floor(flightTime / 60)}:{(flightTime % 60).toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="font-display text-gray-300 text-sm">Waypoints</span>
                  </div>
                  <span className="font-cyber text-purple-400 text-sm">
                    {waypoints.completed}/{waypoints.total}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setEmergencyMode(!emergencyMode)}
                  className={`w-full py-2 px-4 rounded-lg font-display font-medium flex items-center justify-center space-x-2 transition-all ${
                    emergencyMode 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/50' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>{emergencyMode ? 'EXIT EMERGENCY' : 'EMERGENCY MODE'}</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Center Column - Main Display */}
          <div className="space-y-6">
            {/* Camera Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-cyan-500/30 data-stream"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-cyber font-bold text-cyan-400 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  LIVE FEED
                </h2>
                <div className="flex space-x-2">
                  {['normal', 'thermal', 'night'].map((mode) => (
                    <motion.button
                      key={mode}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCameraMode(mode)}
                      className={`px-3 py-1 rounded-md text-sm font-display capitalize transition-colors ${
                        cameraMode === mode
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {mode}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div className="aspect-video bg-black/50 rounded-lg relative overflow-hidden">
                {/* Background Image/Video based on camera mode */}
                <div className="absolute inset-0">
                  {cameraMode === 'normal' && (
                    <img 
                      src="/images/img-6.jpeg" 
                      alt="Drone Camera Feed" 
                      className="w-full h-full object-cover opacity-70"
                    />
                  )}
                  {cameraMode === 'thermal' && (
                    <img 
                      src="/images/img-10.jpeg" 
                      alt="Thermal Camera Feed" 
                      className="w-full h-full object-cover opacity-60 filter hue-rotate-180"
                    />
                  )}
                  {cameraMode === 'night' && (
                    <img 
                      src="/images/img-11.jpeg" 
                      alt="Night Vision Feed" 
                      className="w-full h-full object-cover opacity-50 filter grayscale contrast-125"
                    />
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <div className="absolute inset-4 border border-cyan-500/30 rounded">
                    <div className="absolute top-2 left-2 text-cyan-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      {cameraMode.toUpperCase()} MODE
                    </div>
                    <div className="absolute top-2 right-2 text-cyan-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      REC ●
                    </div>
                    <div className="absolute bottom-2 left-2 text-cyan-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      ALT: {altitude.toFixed(1)}m
                    </div>
                    <div className="absolute bottom-2 right-2 text-cyan-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      {new Date().toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                
                {/* Crosshair overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="w-8 h-0.5 bg-cyan-400/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-0.5 h-8 bg-cyan-400/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-16 h-16 border border-cyan-400/50 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-cyan-500/30 radar-sweep"
            >
              <h2 className="text-xl font-cyber font-bold text-cyan-400 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                NAVIGATION MAP
              </h2>
              <div className="aspect-video bg-gray-900/50 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                <motion.div
                  animate={{
                    x: [100, 120, 100],
                    y: [100, 80, 100]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute w-4 h-4 bg-cyan-400 rounded-full"
                  style={{ top: '40%', left: '30%' }}
                >
                  <div className="w-full h-full bg-cyan-400 rounded-full"></div>
                </motion.div>
                <div className="absolute bottom-4 left-4 text-cyan-400 text-sm font-mono">
                  GPS: 40.7128° N, 74.0060° W
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
              className="glass-card rounded-xl p-6 border border-cyan-500/30"
            >
              <h2 className="text-xl font-cyber font-bold text-cyan-400 mb-6 flex items-center">
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

                {/* Signal */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-cyan-400" />
                    <span className="font-display text-gray-300">Signal</span>
                  </div>
                  <span className="font-cyber text-cyan-400">Strong</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-4 rounded ${
                        i < 4 ? 'bg-cyan-400' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Telemetry Data */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-cyan-500/30 data-stream"
            >
              <h2 className="text-xl font-cyber font-bold text-cyan-400 mb-6">
                TELEMETRY
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

            {/* Mission Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-cyan-500/30 circuit-lines"
            >
              <h2 className="text-xl font-cyber font-bold text-cyan-400 mb-4">
                MISSION STATUS
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Flight Time</span>
                  <span className="font-cyber text-white">
                    {isFlying ? '12:34' : '00:00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Distance</span>
                  <span className="font-cyber text-white">2.3 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Waypoints</span>
                  <span className="font-cyber text-white">3/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Mode</span>
                  <span className="font-cyber text-cyan-400">{currentMode}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DroneDashboard
