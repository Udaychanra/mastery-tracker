import { differenceInWeeks } from 'date-fns';
import type { Stage } from '@/types';
import { STAGES } from '@/types';

export function calculateRealHours(startDate: string, hoursPerWeek: number): number {
  const start = new Date(startDate);
  const today = new Date();
  const weeks = differenceInWeeks(today, start);
  
  if (weeks < 0) return 0;
  
  const realHours = weeks * hoursPerWeek * 0.47;
  return Math.round(realHours);
}

export function getStage(hours: number): Stage {
  if (hours < 1000) return 'Explorer';
  if (hours < 3000) return 'Apprentice';
  if (hours < 6000) return 'Builder';
  if (hours < 8000) return 'Professional';
  if (hours < 10000) return 'Elite';
  return 'Mastery';
}

export function getStageInfo(hours: number) {
  const stage = getStage(hours);
  return STAGES.find(s => s.name === stage) || STAGES[0];
}

export function getStageMessage(stage: Stage): string {
  const messages: Record<Stage, string> = {
    'Explorer': "You're just beginning your journey. Keep exploring!",
    'Apprentice': "You're building foundations. This is where 68% of people quit.",
    'Builder': "You're constructing real skills. Stay consistent!",
    'Professional': "You've reached professional level. Keep pushing!",
    'Elite': "You're among the elite. Mastery is within reach!",
    'Mastery': "You've achieved mastery. Your dedication paid off!"
  };
  return messages[stage];
}

export function calculatePivotScore(pivots: string[]): number {
  return pivots.length;
}

export function getWarningPercentage(stage: Stage): number | null {
  if (stage === 'Apprentice') return 68;
  if (stage === 'Builder') return 45;
  if (stage === 'Professional') return 25;
  return null;
}
