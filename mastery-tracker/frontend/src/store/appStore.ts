import { create } from 'zustand';
import type { AppState, PageType, CalculatorResult } from '@/types';

const initialCalculatorInput = {
  startDate: '',
  hoursPerWeek: 15,
  pivots: [],
};

export const useAppStore = create<AppState>((set) => ({
  currentPage: 'hero',
  calculatorInput: { ...initialCalculatorInput },
  calculatorResult: null,
  pivotScore: 0,

  setCurrentPage: (page: PageType) => set({ currentPage: page }),

  setCalculatorInput: (input) => set((state) => ({
    calculatorInput: { ...state.calculatorInput, ...input }
  })),

  setCalculatorResult: (result: CalculatorResult) => set({ 
    calculatorResult: result,
    pivotScore: result.stage === 'Apprentice' ? 1 : 0
  }),

  addPivot: (pivot: string) => set((state) => {
    if (state.calculatorInput.pivots.includes(pivot)) return state;
    return {
      calculatorInput: {
        ...state.calculatorInput,
        pivots: [...state.calculatorInput.pivots, pivot]
      },
      pivotScore: state.pivotScore + 1
    };
  }),

  removePivot: (pivot: string) => set((state) => ({
    calculatorInput: {
      ...state.calculatorInput,
      pivots: state.calculatorInput.pivots.filter(p => p !== pivot)
    },
    pivotScore: Math.max(0, state.pivotScore - 1)
  })),

  resetCalculator: () => set({
    calculatorInput: { ...initialCalculatorInput },
    calculatorResult: null,
    pivotScore: 0,
    currentPage: 'hero'
  }),
}));
