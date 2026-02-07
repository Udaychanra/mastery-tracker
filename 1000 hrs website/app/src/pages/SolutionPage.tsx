import { motion } from 'framer-motion';
import { ArrowRight, Play, Check, Brain, Battery, Users } from 'lucide-react';
import { useAppStore } from '@/store/appStore';

export default function SolutionPage() {
  const { setCurrentPage } = useAppStore();

  const handleWatchEpisode = () => {
    setCurrentPage('final');
  };

  const handleNext = () => {
    setCurrentPage('final');
  };

  return (
    <motion.div 
      className="min-h-screen purple-gradient-bg relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-end px-6 py-4 lg:px-12">
        <button 
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-colors"
        >
          NEXT <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        {/* Quote */}
        <motion.h1 
          className="text-3xl lg:text-5xl font-bold text-white text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white/60">"</span>This episode was made for this moment.<span className="text-white/60">"</span>
        </motion.h1>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
          {/* Mental Model */}
          <motion.div 
            className="glass-card rounded-3xl p-6 relative overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, borderColor: 'rgba(167, 139, 250, 0.5)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-purple-500/30 rounded-2xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-purple-300" />
              </div>
              <motion.div 
                className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Mental Model</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Reframe failure as feedback. The right mindset for sustained effort.
            </p>
          </motion.div>

          {/* Stay Power */}
          <motion.div 
            className="glass-card rounded-3xl p-6 relative overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.03, borderColor: 'rgba(167, 139, 250, 0.5)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-purple-500/30 rounded-2xl flex items-center justify-center">
                <Battery className="w-7 h-7 text-purple-300" />
              </div>
              <motion.div 
                className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Stay Power</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Build resilience to push through the plateau and keep going.
            </p>
          </motion.div>

          {/* Proof You're Normal */}
          <motion.div 
            className="glass-card rounded-3xl p-6 relative overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.03, borderColor: 'rgba(167, 139, 250, 0.5)' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-purple-500/30 rounded-2xl flex items-center justify-center">
                <Users className="w-7 h-7 text-purple-300" />
              </div>
              <motion.div 
                className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: 'spring' }}
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Proof You're Normal</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              See that everyone struggles. You are not alone in this phase.
            </p>
          </motion.div>
        </div>

        {/* Video Thumbnail */}
        <motion.div 
          className="relative max-w-2xl w-full mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Video Background */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative">
              {/* Abstract background pattern */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Person silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-600/40 to-indigo-600/40 rounded-full blur-2xl absolute inset-0" />
                  <div className="relative text-8xl">🧑‍💻</div>
                </div>
              </div>

              {/* Video Title Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div 
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 cursor-pointer play-button-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
                <h3 className="text-white text-2xl lg:text-3xl font-bold text-center">
                  THE TRUTH<br />ABOUT<br />MASTERY
                </h3>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                <span className="text-white text-sm font-medium">17:42</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={handleWatchEpisode}
          className="py-4 px-12 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-full text-white font-semibold text-lg flex items-center gap-3 transition-colors shadow-lg shadow-purple-500/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          WATCH EPISODE (17:42)
          <Play className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
