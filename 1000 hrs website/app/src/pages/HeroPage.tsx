import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Play, Sparkles } from 'lucide-react';
import { useAppStore } from '@/store/appStore';
import { calculateRealHours, getStage, getStageMessage } from '@/lib/calculator';
import { differenceInWeeks } from 'date-fns';

export default function HeroPage() {
  const { calculatorInput, setCalculatorInput, setCalculatorResult, setCurrentPage } = useAppStore();
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    if (!calculatorInput.startDate) return;
    
    setIsCalculating(true);
    
    setTimeout(() => {
      const realHours = calculateRealHours(calculatorInput.startDate, calculatorInput.hoursPerWeek);
      const stage = getStage(realHours);
      const weeks = differenceInWeeks(new Date(), new Date(calculatorInput.startDate));
      
      setCalculatorResult({
        realHours,
        stage,
        weeks,
        message: getStageMessage(stage)
      });
      
      setIsCalculating(false);
      setCurrentPage('result');
    }, 500);
  };

  const handleWatchScience = () => {
    setCurrentPage('science');
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-6">
          <button className="px-4 py-2 border border-white/30 rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors">
            Login
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        <motion.div 
          className="glass-card rounded-3xl p-8 lg:p-12 max-w-xl w-full mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Quote */}
          <motion.div 
            className="text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              "You're Not Failing.<br />
              You're Just Not Done Yet."
            </h1>
            <p className="text-white/70 text-base">
              Calculate your REAL deliberate practice hours.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Start Date Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                <Calendar className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={calculatorInput.startDate}
                onChange={(e) => setCalculatorInput({ startDate: e.target.value })}
                className="w-full glass-input rounded-xl py-4 pl-12 pr-4 text-white"
                placeholder="mm/dd/yyyy"
              />
            </div>

            {/* Hours per Week Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/80 text-sm">Hours per Week</span>
                <span className="text-white bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {calculatorInput.hoursPerWeek} hrs/week
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="1"
                  value={calculatorInput.hoursPerWeek}
                  onChange={(e) => setCalculatorInput({ hoursPerWeek: parseInt(e.target.value) })}
                  className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer slider-glow"
                  style={{
                    background: `linear-gradient(to right, #A78BFA 0%, #A78BFA ${(calculatorInput.hoursPerWeek / 40) * 100}%, rgba(255,255,255,0.2) ${(calculatorInput.hoursPerWeek / 40) * 100}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <div className="flex justify-between mt-2 text-white/50 text-xs">
                  <span>0 hrs</span>
                  <span>40+ hrs</span>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <motion.button
              onClick={handleCalculate}
              disabled={!calculatorInput.startDate || isCalculating}
              className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] disabled:bg-[#7C3AED]/50 disabled:cursor-not-allowed rounded-xl text-white font-semibold text-lg button-pulse transition-colors"
              whileHover={{ scale: calculatorInput.startDate ? 1.02 : 1 }}
              whileTap={{ scale: calculatorInput.startDate ? 0.98 : 1 }}
            >
              {isCalculating ? 'Calculating...' : 'SHOW ME WHERE I AM'}
            </motion.button>

            {/* Secondary CTA */}
            <button 
              onClick={handleWatchScience}
              className="w-full flex items-center justify-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Play className="w-4 h-4" />
              Watch the Science Behind It
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
