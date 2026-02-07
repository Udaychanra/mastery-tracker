import { motion } from 'framer-motion';
import { ArrowRight, Play, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useAppStore } from '@/store/appStore';

export default function FinalPage() {
  const { calculatorResult, resetCalculator } = useAppStore();

  const stage = calculatorResult?.stage || 'Apprentice';

  const handleGoToVideo = () => {
    // In a real app, this would open a video player or redirect to a video
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  const handleShare = (platform: string) => {
    const text = `I'm in ${stage} Phase – Not Quitting.`;
    const url = window.location.href;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleStartOver = () => {
    resetCalculator();
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#0A0A0F] relative overflow-hidden flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/20 to-transparent" />
        
        {/* Abstract wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="url(#waveGradient)" 
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4C1D95" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Quote */}
        <motion.h1 
          className="text-3xl lg:text-5xl font-bold text-white text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white/60">"</span>Most people leave the movie in the middle.<span className="text-white/60">"</span>
        </motion.h1>

        {/* Video CTA Card */}
        <motion.div 
          className="glass-card bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 max-w-lg w-full mx-auto mb-8 border border-purple-500/30"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ borderColor: 'rgba(167, 139, 250, 0.5)' }}
        >
          <motion.button
            onClick={handleGoToVideo}
            className="w-full flex flex-col items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Play Button */}
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6 play-button-glow"
              animate={{ 
                boxShadow: [
                  '0 0 40px rgba(167, 139, 250, 0.4)',
                  '0 0 60px rgba(167, 139, 250, 0.6)',
                  '0 0 40px rgba(167, 139, 250, 0.4)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Play className="w-10 h-10 text-white ml-2" />
            </motion.div>

            {/* CTA Text */}
            <div className="flex items-center gap-3 text-white text-2xl lg:text-3xl font-bold">
              GO TO VIDEO
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8" />
              </motion.span>
            </div>
          </motion.button>
        </motion.div>

        {/* Share Badge */}
        <motion.div 
          className="share-badge rounded-full px-6 py-3 flex items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button 
            onClick={() => handleShare('copy')}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <Share2 className="w-5 h-5 text-white" />
          </button>
          <span className="text-white font-medium">
            I'm in {stage} Phase – Not Quitting.
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleShare('twitter')}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Twitter className="w-4 h-4 text-white" />
            </button>
            <button 
              onClick={() => handleShare('linkedin')}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </button>
            <button 
              onClick={() => handleShare('facebook')}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Facebook className="w-4 h-4 text-white" />
            </button>
          </div>
        </motion.div>

        {/* Start Over Link */}
        <motion.button
          onClick={handleStartOver}
          className="mt-8 text-white/50 hover:text-white text-sm transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Start Over →
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-white py-8 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">Creator</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <button className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Privacy
            </button>
            <button className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Terms
            </button>
            <button className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-gray-500 text-sm">
              © Copyright all Creator Be, Inc.
            </p>
            <p className="text-gray-400 text-xs">
              Crafted with honesty & science by [Creator Name]
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
