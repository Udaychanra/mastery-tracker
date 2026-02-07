import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Brain, Scale } from 'lucide-react';
import { useAppStore } from '@/store/appStore';

export default function SciencePage() {
  const { setCurrentPage } = useAppStore();

  const handleUnderstandTruth = () => {
    setCurrentPage('reset');
  };

  const handleNext = () => {
    setCurrentPage('reset');
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#0F0F1A] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1E1B4B]/50 to-transparent" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
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
        {/* Title */}
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold text-white text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          The Science of Mastery.
        </motion.h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full mb-12">
          {/* Left Side - Violin Graphic */}
          <motion.div 
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-[#1E1B4B] to-[#0F0F1A] rounded-3xl p-8 overflow-hidden">
              {/* Chart Background */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line 
                    key={`h-${i}`}
                    x1="0" 
                    y1={`${20 + i * 20}%`} 
                    x2="100%" 
                    y2={`${20 + i * 20}%`}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                ))}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line 
                    key={`v-${i}`}
                    x1={`${10 + i * 18}%`} 
                    y1="0" 
                    x2={`${10 + i * 18}%`} 
                    y2="100%"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                ))}
                {/* Performance Curve */}
                <path 
                  d="M 10% 80% Q 25% 70% 40% 50% T 70% 30% T 90% 15%"
                  fill="none"
                  stroke="#A78BFA"
                  strokeWidth="3"
                />
                {/* Bar Chart */}
                <rect x="15%" y="60%" width="8%" height="30%" fill="url(#chartGradient)" rx="4" />
                <rect x="30%" y="50%" width="8%" height="40%" fill="url(#chartGradient)" rx="4" />
                <rect x="45%" y="35%" width="8%" height="55%" fill="url(#chartGradient)" rx="4" />
                <rect x="60%" y="25%" width="8%" height="65%" fill="url(#chartGradient)" rx="4" />
                <rect x="75%" y="15%" width="8%" height="75%" fill="url(#chartGradient)" rx="4" />
              </svg>

              {/* Labels */}
              <div className="relative z-10">
                <div className="text-white/60 text-xs uppercase tracking-wider mb-2">THE PRACTICE</div>
                <div className="text-white/60 text-xs uppercase tracking-wider mb-8">METAPHOR</div>
                
                <div className="flex justify-between text-white/40 text-xs mt-32">
                  <span>Focus Duration</span>
                  <span>Neural Adaptation</span>
                </div>
                
                <div className="flex justify-end gap-8 text-white/40 text-xs mt-4">
                  <span>100</span>
                  <span>200</span>
                  <span>300</span>
                  <span>400</span>
                </div>

                {/* Peak Performance Zone */}
                <div className="absolute top-8 right-8 text-right">
                  <div className="text-white/60 text-xs">Peak</div>
                  <div className="text-white/60 text-xs">Performance</div>
                  <div className="text-white/60 text-xs">Zone</div>
                </div>
              </div>

              {/* Violin Illustration */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <svg viewBox="0 0 300 400" className="w-full h-full opacity-60">
                  {/* Violin Body */}
                  <ellipse cx="150" cy="280" rx="80" ry="100" fill="url(#violinGradient)" />
                  <ellipse cx="150" cy="280" rx="60" ry="80" fill="none" stroke="#4B5563" strokeWidth="2" />
                  
                  {/* Violin Neck */}
                  <rect x="140" y="80" width="20" height="120" fill="#374151" />
                  
                  {/* Violin Scroll */}
                  <circle cx="150" cy="60" r="25" fill="#374151" />
                  <circle cx="150" cy="60" r="15" fill="#1F2937" />
                  
                  {/* Strings */}
                  <line x1="145" y1="60" x2="145" y2="350" stroke="#D1D5DB" strokeWidth="1" />
                  <line x1="150" y1="60" x2="150" y2="350" stroke="#D1D5DB" strokeWidth="1" />
                  <line x1="155" y1="60" x2="155" y2="350" stroke="#D1D5DB" strokeWidth="1" />
                  
                  {/* F-Holes */}
                  <path d="M 110 250 Q 100 280 110 310" fill="none" stroke="#1F2937" strokeWidth="3" />
                  <path d="M 190 250 Q 200 280 190 310" fill="none" stroke="#1F2937" strokeWidth="3" />
                  
                  <defs>
                    <linearGradient id="violinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6B7280" />
                      <stop offset="50%" stopColor="#4B5563" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Research Cards */}
          <motion.div 
            className="space-y-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Berlin Study Card */}
            <motion.div 
              className="bg-gradient-to-r from-[#1E1B4B] to-[#312E81] rounded-2xl p-6 border border-purple-500/30"
              whileHover={{ scale: 1.02, borderColor: 'rgba(167, 139, 250, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold text-lg mb-2">Berlin Study</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The origin of the 10,000-hour rule. Elite performers average 3.5 hours of focused, solitary practice daily, not just total hours.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Deliberate Practice Card */}
            <motion.div 
              className="bg-gradient-to-r from-[#1E1B4B] to-[#312E81] rounded-2xl p-6 border border-purple-500/30"
              whileHover={{ scale: 1.02, borderColor: 'rgba(167, 139, 250, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold text-lg mb-2">Deliberate Practice</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    It's not just time; It's not just time; it's purposeful, structured training with immediate feedback and challenge, pushing beyond comfort zones.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality vs Quantity Card */}
            <motion.div 
              className="bg-gradient-to-r from-[#1E1B4B] to-[#312E81] rounded-2xl p-6 border border-purple-500/30"
              whileHover={{ scale: 1.02, borderColor: 'rgba(167, 139, 250, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold text-lg mb-2">Quality vs Quantity</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Better to practice 1 hour intensely and thoughtfully than 3 hours mindlessly. Focus is the multiplier.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote 
          className="text-2xl lg:text-3xl font-semibold text-white text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-purple-400">"</span>
          Talent doesn't replace work.
          <span className="text-purple-400">"</span>
        </motion.blockquote>

        {/* CTA Button */}
        <motion.button
          onClick={handleUnderstandTruth}
          className="py-4 px-12 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-full text-white font-semibold text-lg flex items-center gap-3 transition-colors shadow-lg shadow-purple-500/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          UNDERSTAND THE TRUTH (VIDEO)
          <Play className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
