import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';
import { useAppStore } from '@/store/appStore';
import { getWarningPercentage } from '@/lib/calculator';

export default function ResultPage() {
  const { calculatorResult, setCurrentPage } = useAppStore();

  if (!calculatorResult) return null;

  const warningPercent = getWarningPercentage(calculatorResult.stage);

  const handleWatchExplanation = () => {
    setCurrentPage('maya');
  };

  const handleNext = () => {
    setCurrentPage('maya');
  };

  return (
    <motion.div 
      className="min-h-screen cream-bg relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-8">
          {/* Real Hours Card */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 flex flex-col items-center justify-center min-h-[280px]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <motion.h2 
              className="text-6xl lg:text-7xl font-bold text-gray-800 mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
            >
              {calculatorResult.realHours.toLocaleString()}
            </motion.h2>
            <p className="text-gray-500 text-lg font-medium uppercase tracking-wide">
              REAL HOURS
            </p>
          </motion.div>

          {/* Stage Badge Card */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 flex flex-col items-center justify-center min-h-[280px]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div 
              className="gold-badge rounded-full px-8 py-6 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
            >
              <span className="text-white font-bold text-xl lg:text-2xl text-center block">
                {calculatorResult.stage.toUpperCase()}<br />PHASE
              </span>
            </motion.div>
            <div className="flex items-center gap-2 text-gray-500">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium uppercase tracking-wide">
                STAGE BADGE
              </span>
            </div>
          </motion.div>

          {/* Warning Card */}
          <motion.div 
            className="warning-card rounded-3xl p-8 flex flex-col items-center justify-center min-h-[280px] text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
            >
              <AlertTriangle className="w-12 h-12 mb-4 opacity-80" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
              WARNING<br />MESSAGE
            </h3>
            {warningPercent && (
              <p className="text-white/90 text-center text-sm">
                This is where {warningPercent}% of people quit.
              </p>
            )}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleWatchExplanation}
          className="w-full max-w-3xl py-5 bg-[#60A5FA] hover:bg-[#3B82F6] rounded-2xl text-white font-semibold text-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-400/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          WATCH THE EXPLANATION
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.div>
  );
}
