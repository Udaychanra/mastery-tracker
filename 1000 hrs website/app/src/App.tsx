import { AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/appStore';
import HeroPage from '@/pages/HeroPage';
import ResultPage from '@/pages/ResultPage';
import MayaPage from '@/pages/MayaPage';
import SciencePage from '@/pages/SciencePage';
import ResetPage from '@/pages/ResetPage';
import SolutionPage from '@/pages/SolutionPage';
import FinalPage from '@/pages/FinalPage';

function App() {
  const { currentPage } = useAppStore();

  const renderPage = () => {
    switch (currentPage) {
      case 'hero':
        return <HeroPage key="hero" />;
      case 'result':
        return <ResultPage key="result" />;
      case 'maya':
        return <MayaPage key="maya" />;
      case 'science':
        return <SciencePage key="science" />;
      case 'reset':
        return <ResetPage key="reset" />;
      case 'solution':
        return <SolutionPage key="solution" />;
      case 'final':
        return <FinalPage key="final" />;
      default:
        return <HeroPage key="hero" />;
    }
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </div>
  );
}

export default App;
