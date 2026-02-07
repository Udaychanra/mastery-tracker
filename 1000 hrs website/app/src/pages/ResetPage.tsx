import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useAppStore } from '@/store/appStore';

export default function ResetPage() {
  const { setCurrentPage } = useAppStore();

  const handleDontReset = () => {
    setCurrentPage('solution');
  };

  const handleNext = () => {
    setCurrentPage('solution');
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#0A0A0F] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-800/10 rounded-full blur-3xl" />
        
        {/* Lightning effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20 lightning-effect">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path 
            d="M 30% 40% L 35% 50% L 32% 55% L 40% 70%"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2"
            filter="url(#glow)"
          />
          <path 
            d="M 70% 30% L 65% 45% L 68% 50% L 60% 65%"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-end px-6 py-4 lg:px-12">
        <button 
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 bg-[#7C3AED] rounded-lg text-white text-sm font-medium hover:bg-[#6D28D9] transition-colors"
        >
          NEXT <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        {/* Glass Card */}
        <motion.div 
          className="glass-card bg-black/40 backdrop-blur-xl rounded-3xl p-8 lg:p-16 max-w-4xl w-full mx-auto border border-red-500/20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Quote */}
          <motion.div 
            className="text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-white text-2xl lg:text-4xl font-medium leading-relaxed">
              <span className="text-white/60">"</span>If you pivot today
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <motion.span 
                className="text-red-500 text-4xl lg:text-6xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              <span className="text-white text-3xl lg:text-5xl font-bold">BACK TO</span>
              <motion.span 
                className="text-red-500 text-4xl lg:text-6xl font-bold fire-glow"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ZERO
              </motion.span>
              <span className="text-white/60 text-2xl lg:text-4xl">"</span>
            </div>
          </motion.div>

          {/* Big Zero with Fire Effect */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          >
            <div className="relative">
              {/* Fire glow behind zero */}
              <div className="absolute inset-0 bg-red-600/30 blur-3xl scale-150" />
              <motion.span 
                className="relative text-[12rem] lg:text-[16rem] font-bold text-red-500 leading-none fire-glow"
                style={{
                  textShadow: '0 0 60px rgba(239, 68, 68, 0.8), 0 0 120px rgba(239, 68, 68, 0.4), 0 0 180px rgba(220, 38, 38, 0.2)'
                }}
                animate={{ 
                  textShadow: [
                    '0 0 60px rgba(239, 68, 68, 0.8), 0 0 120px rgba(239, 68, 68, 0.4), 0 0 180px rgba(220, 38, 38, 0.2)',
                    '0 0 80px rgba(239, 68, 68, 1), 0 0 160px rgba(239, 68, 68, 0.6), 0 0 240px rgba(220, 38, 38, 0.3)',
                    '0 0 60px rgba(239, 68, 68, 0.8), 0 0 120px rgba(239, 68, 68, 0.4), 0 0 180px rgba(220, 38, 38, 0.2)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                0
              </motion.span>
            </div>
          </motion.div>

          {/* Broken Progress Bar */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="relative h-16 bg-gray-800/50 rounded-2xl overflow-hidden">
              {/* Left side - filled progress */}
              <div 
                className="absolute left-0 top-0 h-full rounded-l-2xl"
                style={{ 
                  width: '45%',
                  background: 'linear-gradient(90deg, #DC2626 0%, #EF4444 100%)'
                }}
              >
                {/* Cracks effect */}
                <svg className="absolute right-0 top-0 h-full w-8" viewBox="0 0 32 64">
                  <path 
                    d="M 0 20 L 8 25 L 4 35 L 12 40 L 8 50 L 16 55"
                    fill="none"
                    stroke="#7F1D1D"
                    strokeWidth="2"
                  />
                  <path 
                    d="M 4 10 L 12 15 L 8 25"
                    fill="none"
                    stroke="#7F1D1D"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              
              {/* Break point with lightning */}
              <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-[10%] h-full flex items-center justify-center">
                <motion.div 
                  className="w-full h-20 bg-gradient-to-b from-transparent via-red-500/50 to-transparent"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </div>
              
              {/* Right side - empty progress */}
              <div 
                className="absolute right-0 top-0 h-full rounded-r-2xl"
                style={{ 
                  width: '45%',
                  background: 'linear-gradient(90deg, #374151 0%, #4B5563 100%)'
                }}
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-end"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.button
              onClick={handleDontReset}
              className="py-4 px-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full text-white font-semibold text-lg flex items-center gap-3 transition-all shadow-lg shadow-red-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DON'T RESET —
              <br className="sm:hidden" />
              WATCH THIS PART
              <Play className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
