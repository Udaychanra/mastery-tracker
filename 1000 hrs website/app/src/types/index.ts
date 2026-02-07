export interface CalculatorInput {
  startDate: string;
  hoursPerWeek: number;
  pivots: string[];
}

export interface CalculatorResult {
  realHours: number;
  stage: Stage;
  weeks: number;
  message: string;
}

export type Stage = 
  | 'Explorer' 
  | 'Apprentice' 
  | 'Builder' 
  | 'Professional' 
  | 'Elite' 
  | 'Mastery';

export interface StageInfo {
  name: Stage;
  minHours: number;
  maxHours: number;
  color: string;
  badgeColor: string;
}

export const STAGES: StageInfo[] = [
  { name: 'Explorer', minHours: 0, maxHours: 999, color: '#8B5CF6', badgeColor: '#A78BFA' },
  { name: 'Apprentice', minHours: 1000, maxHours: 2999, color: '#F59E0B', badgeColor: '#FCD34D' },
  { name: 'Builder', minHours: 3000, maxHours: 5999, color: '#3B82F6', badgeColor: '#60A5FA' },
  { name: 'Professional', minHours: 6000, maxHours: 7999, color: '#10B981', badgeColor: '#34D399' },
  { name: 'Elite', minHours: 8000, maxHours: 9999, color: '#8B5CF6', badgeColor: '#A78BFA' },
  { name: 'Mastery', minHours: 10000, maxHours: Infinity, color: '#EC4899', badgeColor: '#F472B6' },
];

export type PageType = 
  | 'hero' 
  | 'result' 
  | 'maya' 
  | 'science' 
  | 'reset' 
  | 'solution' 
  | 'final';

export interface AppState {
  currentPage: PageType;
  calculatorInput: CalculatorInput;
  calculatorResult: CalculatorResult | null;
  pivotScore: number;
  setCurrentPage: (page: PageType) => void;
  setCalculatorInput: (input: Partial<CalculatorInput>) => void;
  setCalculatorResult: (result: CalculatorResult) => void;
  addPivot: (pivot: string) => void;
  removePivot: (pivot: string) => void;
  resetCalculator: () => void;
}
