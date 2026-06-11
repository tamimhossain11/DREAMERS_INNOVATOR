import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Sprout,
  Battery,
  Wifi,
  Navigation,
  Camera,
  Gauge,
  MapPin,
  Thermometer,
  Activity,
  Droplets,
  Play,
  Pause,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Zap,
  Wind,
  Target,
  Sun,
  Settings,
  FlaskConical
} from 'lucide-react'

const ROVDashboard = () => {
  const [isActive, setIsActive] = useState(false)
  const [speed, setSpeed] = useState(0)
  const [battery, setBattery] = useState(91)
  const [soilMoisture, setSoilMoisture] = useState(62)
  const [temperature, setTemperature] = useState(28)
  const [humidity, setHumidity] = useState(74)
  const [cameraMode, setCameraMode] = useState('rgb')
  const [fieldCoverage, setFieldCoverage] = useState(34)
  const [spraying, setSpraying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSpeed(prev => Math.max(0, prev + (Math.random() - 0.5) * 1.5))
        setBattery(prev => Math.max(0, prev - 0.08))
        setSoilMoisture(prev => Math.max(20, Math.min(95, prev + (Math.random() - 0.5) * 1)))
        setTemperature(prev => Math.max(20, prev + (Math.random() - 0.5) * 0.4))
        setHumidity(prev => Math.max(40, Math.min(95, prev + (Math.random() - 0.5) * 0.8)))
        setFieldCoverage(prev => Math.min(100, prev + 0.2))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  const telemetryData = [
    { label: 'Speed', value: `${speed.toFixed(1)} km/h`, icon: Zap, color: 'text-green-400' },
    { label: 'Soil Moisture', value: `${soilMoisture.toFixed(0)}%`, icon: Droplets, color: 'text-blue-400' },
    { label: 'Temperature', value: `${temperature.toFixed(1)}°C`, icon: Thermometer, color: 'text-orange-400' },
    { label: 'Humidity', value: `${humidity.toFixed(0)}%`, icon: Wind, color: 'text-cyan-400' }
  ]

  const operationModes = ['Manual Control', 'Field Survey', 'Crop Monitoring', 'Irrigation Mode', 'Harvest Assist']
  const [currentMode, setCurrentMode] = useState('Field Survey')

  const cropConditions = [
    { name: 'Crop Health', value: 82, color: 'bg-green-500', status: 'Good' },
    { name: 'Soil pH', value: 68, color: 'bg-yellow-500', status: '6.8 pH' },
    { name: 'Nutrient Level', value: 55, color: 'bg-blue-500', status: 'Moderate' }
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
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-700 rounded-xl">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-cyber font-bold text-white glow-text">
                  FARMING CONTROL
                </h1>
                <p className="text-gray-400 font-display">Smart Agricultural Control System Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-400 status-pulse' : 'bg-gray-400'}`}></div>
                <span className="font-display font-medium">
                  {isActive ? 'OPERATING' : 'STANDBY'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            {/* Movement Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-green-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-green-400 mb-6 flex items-center">
                <Navigation className="w-5 h-5 mr-2" />
                FIELD NAVIGATION
              </h2>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsActive(!isActive)}
                  className={`w-full py-3 px-6 rounded-lg font-display font-semibold flex items-center justify-center space-x-2 transition-all ${
                    isActive
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isActive ? 'STOP' : 'START'}</span>
                </motion.button>

                {/* Directional Controls */}
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 transition-colors"
                  >
                    <ArrowUp className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <div></div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg text-emerald-400 transition-colors"
                  >
                    <RotateCcw className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6 mx-auto" />
                  </motion.button>

                  <div></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-green-400 transition-colors"
                  >
                    <ArrowDown className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <div></div>
                </div>
              </div>
            </motion.div>

            {/* Crop Condition Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-green-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-green-400 mb-6 flex items-center">
                <FlaskConical className="w-5 h-5 mr-2" />
                CROP CONDITIONS
              </h2>

              <div className="space-y-4">
                {cropConditions.map((condition) => (
                  <div key={condition.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-display text-gray-300">{condition.name}</span>
                      <span className="font-cyber text-white">{condition.status}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${condition.value}%` }}
                        className={`h-2 rounded-full ${condition.color}`}
                      />
                    </div>
                  </div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSpraying(!spraying)}
                  className={`w-full py-2 px-4 rounded-lg font-display font-medium flex items-center justify-center space-x-2 transition-all ${
                    spraying
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                      : 'bg-green-500/20 text-green-400 border border-green-500/50'
                  }`}
                >
                  <Droplets className="w-4 h-4" />
                  <span>{spraying ? 'STOP IRRIGATION' : 'START IRRIGATION'}</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Operation Modes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-green-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-green-400 mb-6">
                OPERATION MODES
              </h2>
              <div className="space-y-2">
                {operationModes.map((mode) => (
                  <motion.button
                    key={mode}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentMode(mode)}
                    className={`w-full p-3 rounded-lg text-left font-display transition-all ${
                      currentMode === mode
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                        : 'bg-gray-700/20 text-gray-300 hover:bg-gray-700/30'
                    }`}
                  >
                    {mode}
                  </motion.button>
                ))}
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
              className="glass-card rounded-xl p-6 border border-green-500/30 energy-pulse"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-cyber font-bold text-green-400 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  FIELD CAMERA
                </h2>
                <div className="flex space-x-2">
                  {['rgb', 'thermal', 'ndvi'].map((mode) => (
                    <motion.button
                      key={mode}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCameraMode(mode)}
                      className={`px-3 py-1 rounded-md text-sm font-display uppercase transition-colors ${
                        cameraMode === mode
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {mode}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="aspect-video bg-black/50 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0">
                  {cameraMode === 'rgb' && (
                    <img
                      src="/images/img-8.jpeg"
                      alt="RGB Field Camera"
                      className="w-full h-full object-cover opacity-75"
                    />
                  )}
                  {cameraMode === 'thermal' && (
                    <img
                      src="/images/img-5.jpeg"
                      alt="Thermal Field Camera"
                      className="w-full h-full object-cover opacity-60 filter hue-rotate-180 contrast-125"
                    />
                  )}
                  {cameraMode === 'ndvi' && (
                    <img
                      src="/images/img-4.jpeg"
                      alt="NDVI Crop Health"
                      className="w-full h-full object-cover opacity-65 filter hue-rotate-90 saturate-150"
                    />
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                  <div className="absolute inset-4 border border-green-500/30 rounded">
                    <div className="absolute top-2 left-2 text-green-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      {cameraMode.toUpperCase()} MODE
                    </div>
                    <div className="absolute top-2 right-2 text-green-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      REC ●
                    </div>
                    <div className="absolute bottom-2 left-2 text-green-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      COVERAGE: {fieldCoverage.toFixed(1)}%
                    </div>
                    <div className="absolute bottom-2 right-2 text-green-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      {new Date().toLocaleTimeString()}
                    </div>
                  </div>
                </div>

                {/* Scan lines overlay for NDVI effect */}
                {cameraMode === 'ndvi' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
                  </div>
                )}

                {/* Targeting reticle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <Target className="w-16 h-16 text-green-400/40" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Field Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-green-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-green-400 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                FIELD MAPPING
              </h2>
              <div className="aspect-video bg-gray-900/50 rounded-lg relative overflow-hidden">
                {/* Field grid */}
                <div className="absolute inset-0 cyber-grid opacity-15"></div>

                {/* Field zones */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-20 h-14 border border-green-500/40 rounded bg-green-500/10 flex items-center justify-center">
                    <span className="text-green-400 text-xs font-mono">ZONE A</span>
                  </div>
                  <div className="absolute top-4 right-4 w-20 h-14 border border-yellow-500/40 rounded bg-yellow-500/10 flex items-center justify-center">
                    <span className="text-yellow-400 text-xs font-mono">ZONE B</span>
                  </div>
                  <div className="absolute bottom-10 left-4 w-20 h-14 border border-blue-500/40 rounded bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-400 text-xs font-mono">ZONE C</span>
                  </div>
                  <div className="absolute bottom-10 right-4 w-20 h-14 border border-emerald-500/40 rounded bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 text-xs font-mono">ZONE D</span>
                  </div>
                </div>

                {/* Robot position */}
                <motion.div
                  animate={{
                    x: [120, 140, 120],
                    y: [100, 120, 100]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute w-5 h-5 bg-green-400 rounded-full border-2 border-white"
                  style={{ top: '50%', left: '40%' }}
                >
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-green-400 rounded-full"
                  />
                </motion.div>

                {/* Path trail */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M 80 120 Q 120 90 160 110 T 240 130"
                    stroke="#22c55e"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6,4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </svg>

                <div className="absolute bottom-4 left-4 text-green-400 text-sm font-mono">
                  FIELD: Sector 3 — 2.4 Ha
                </div>
                <div className="absolute bottom-4 right-4 text-green-400 text-sm font-mono">
                  COVERED: {fieldCoverage.toFixed(1)}%
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
              className="glass-card rounded-xl p-6 border border-green-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-green-400 mb-6 flex items-center">
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
                    <Wifi className="w-5 h-5 text-green-400" />
                    <span className="font-display text-gray-300">Field Link</span>
                  </div>
                  <span className="font-cyber text-green-400">Excellent</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-4 rounded ${
                        i < 5 ? 'bg-green-400' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Sprayer Status */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-5 h-5 text-blue-400" />
                    <span className="font-display text-gray-300">Irrigation</span>
                  </div>
                  <span className={`font-cyber ${spraying ? 'text-blue-400' : 'text-gray-500'}`}>
                    {spraying ? 'ACTIVE' : 'OFF'}
                  </span>
                </div>

                {/* Sun/Light */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sun className="w-5 h-5 text-yellow-400" />
                    <span className="font-display text-gray-300">Light Level</span>
                  </div>
                  <span className="font-cyber text-yellow-400">87%</span>
                </div>
              </div>
            </motion.div>

            {/* Environmental Data */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-green-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-green-400 mb-6">
                FIELD SENSORS
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

            {/* Mission Control */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-green-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-green-400 mb-4">
                FIELD MISSION
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Operation Time</span>
                  <span className="font-cyber text-white">
                    {isActive ? '02:14:37' : '00:00:00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Area Covered</span>
                  <span className="font-cyber text-white">{(fieldCoverage * 0.024).toFixed(2)} Ha</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Samples Taken</span>
                  <span className="font-cyber text-white">18 / 40</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Mode</span>
                  <span className="font-cyber text-green-400">{currentMode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Irrigation</span>
                  <span className={`font-cyber ${spraying ? 'text-blue-400' : 'text-gray-500'}`}>
                    {spraying ? 'Running' : 'Idle'}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 py-2 px-4 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg font-display font-medium flex items-center justify-center space-x-2 transition-all"
              >
                <Settings className="w-4 h-4" />
                <span>SYSTEM SETTINGS</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ROVDashboard
