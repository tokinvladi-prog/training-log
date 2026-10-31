export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'legs'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'core'
  | 'other';

export type Equipment =
  | 'barbell'
  | 'dumbbell'
  | 'machine'
  | 'bodyweight'
  | 'cable'
  | 'other';

export type Status = 'planned' | 'in_progress' | 'completed' | 'skipped';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  equipment: Equipment;
  source: 'builtin' | 'custom';
  isArchived: boolean;
  createdAt: string;
}

interface TemplateExercies {
  exerciseId: string;
  order: number;
  targetSets: number;
  targetRepsMin: number;
  targetRepsMax: number;
  note?: string;
}

interface TemplateDay {
  weekday: number;
  name: string;
  exercises: TemplateExercies[];
}

export interface WeekTemplate {
  id: string;
  name: string;
  isActive: boolean;
  days: TemplateDay[];
}

export interface WeekPlan {
  id: string;
  weekStart: Date;
  templateId?: string;
  workoutIds: string[];
}

interface SetEntry {
  id: string;
  order: number;
  reps: number;
  weight: number;
  rpe?: number;
  isWarmup: boolean;
  isDone: boolean;
}

interface WorkoutExercise {
  id: string;
  exerciseId: string;
  exerciseNameSnapshot: string;
  order: number;
  plannedSets: number;
  plannedRepsMin: number;
  plannedRepsMax: number;
  note?: string;
  sets: SetEntry[];
}

export interface Workout {
  id: string;
  weekPlanId?: string;
  date: Date;
  name: string;
  status: Status;
  startedAt: string;
  completedAt: string;
  note?: string;
  exercises: WorkoutExercise[];
}

export interface Settings {
  id: string;
  weightUnit: string;
  weekStartsOn: number;
  defaultRestSeconds: number;
}
