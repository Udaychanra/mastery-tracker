import { motion } from 'framer-motion';
import { ArrowRight, Play, Megaphone, Code, Layout, RotateCcw, AlertTriangle } from 'lucide-react';
import { useAppStore } from '@/store/appStore';

export default function MayaPage() {
  const { pivotScore, setCurrentPage } = useAppStore();

  const handleWatchMayaStory = () => {
    setCurrentPage('science');
  };

  const handleNext = () => {
    setCurrentPage('science');
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12 gap-8 lg:gap-16">
        {/* Left Side - Title and Cycle Diagram */}
        <motion.div 
          className="flex-1 max-w-xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Are You Becoming Maya?
          </h1>

          {/* Pivot Cycle Diagram */}
          <div className="relative">
            {/* SVG Cycle Diagram */}
            <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
              {/* Curved arrows connecting the cycle */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#4C1D95" />
                </marker>
                <linearGradient id="marketingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#4C1D95" />
                </linearGradient>
                <linearGradient id="codingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4C1D95" />
                  <stop offset="100%" stopColor="#312E81" />
                </linearGradient>
                <linearGradient id="productGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#312E81" />
                  <stop offset="100%" stopColor="#1E1B4B" />
                </linearGradient>
              </defs>

              {/* Marketing to Coding Arrow */}
              <path 
                d="M 120 80 Q 200 20 280 80" 
                fill="none" 
                stroke="url(#marketingGradient)" 
                strokeWidth="20"
                markerEnd="url(#arrowhead)"
              />

              {/* Coding to Product Arrow */}
              <path 
                d="M 320 140 Q 360 220 300 280" 
                fill="none" 
                stroke="url(#codingGradient)" 
                strokeWidth="20"
                markerEnd="url(#arrowhead)"
              />

              {/* Product to Reset Arrow */}
              <path 
                d="M 200 320 Q 280 360 320 300" 
                fill="none" 
                stroke="#4C1D95" 
                strokeWidth="20"
                markerEnd="url(#arrowhead)"
              />

              {/* Reset to Marketing Arrow (dashed) */}
              <path 
                d="M 80 280 Q 20 200 80 120" 
                fill="none" 
                stroke="#EF4444" 
                strokeWidth="20"
                strokeDasharray="10,5"
                markerEnd="url(#arrowhead)"
              />

              {/* Marketing Node */}
              <g transform="translate(80, 60)">
                <rect x="0" y="0" width="80" height="40" rx="20" fill="#7C3AED" />
                <text x="40" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">MARKETING</text>
              </g>

              {/* Coding Node */}
              <g transform="translate(280, 60)">
                <rect x="0" y="0" width="70" height="40" rx="20" fill="#4C1D95" />
                <text x="35" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CODING</text>
              </g>

              {/* Product Node */}
              <g transform="translate(260, 280)">
                <rect x="0" y="0" width="70" height="40" rx="20" fill="#312E81" />
                <text x="35" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PRODUCT</text>
              </g>

              {/* Reset Node */}
              <g transform="translate(60, 280)">
                <circle cx="35" cy="20" r="25" fill="#EF4444" />
                <text x="35" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">RESET</text>
              </g>

              {/* Broken Chain Link */}
              <g transform="translate(160, 320)">
                <path d="M 0 0 Q 20 -10 40 0" fill="none" stroke="#6B7280" strokeWidth="4" strokeDasharray="5,3" />
                <circle cx="20" cy="-5" r="3" fill="#EF4444" />
              </g>
            </svg>

            {/* Maya Character Illustration */}
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">👩‍💼</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Pivot Score Widget */}
        <motion.div 
          className="flex-1 max-w-md"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Pivot Score Card */}
          <div className="glass-card bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            {/* Score Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-700 font-semibold">Pivot Score:</span>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${pivotScore >= 1 ? 'text-red-500' : 'text-green-500'}`}>
                  {pivotScore}
                </span>
                {pivotScore >= 1 && (
                  <span className="text-red-500 text-sm font-medium">Reset</span>
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              {/* Marketing */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Megaphone className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 bg-gray-100 inline-block px-3 py-1 rounded-lg text-sm">
                    MARKETING
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Maya's onsmet of marketing · social growths, and website products.
                  </p>
                </div>
              </div>

              {/* Coding */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 bg-gray-100 inline-block px-3 py-1 rounded-lg text-sm">
                    CODING
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Maya starts a emodnsinvb movement and bores to your codinior produes.
                  </p>
                </div>
              </div>

              {/* Product */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Layout className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 bg-gray-100 inline-block px-3 py-1 rounded-lg text-sm">
                    PRODUCT
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Maya ears to use from the product marromes to your user diragram.
                  </p>
                </div>
              </div>

              {/* Reset Warning */}
              <div className="flex items-start gap-4 pt-2 border-t border-gray-200">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-red-500">RESET</h4>
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    This is where the cycle repeats. Maya's journey starts over.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleWatchMayaStory}
            className="w-full mt-6 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-2xl text-white font-semibold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-purple-400/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            WATCH MAYA'S STORY (7:40)
            <Play className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
