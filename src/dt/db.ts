import Dexie, { type EntityTable } from 'dexie';
import type {
  Exercise,
  Settings,
  WeekPlan,
  WeekTemplate,
  Workout,
} from '../types';

export const db = new Dexie('workout-diary') as Dexie & {
  exercises: EntityTable<Exercise, 'id'>;
  templates: EntityTable<WeekTemplate, 'id'>;
  weekPlans: EntityTable<WeekPlan, 'id'>;
  workouts: EntityTable<Workout, 'id'>;
  settings: EntityTable<Settings, 'id'>;
};

db.version(1).stores({
  exercises: 'id, name, muscleGroup',
  templates: 'id',
  weekPlans: 'id, weekStart',
  workouts: 'id, date, status, weekPlanId',
  settings: 'id',
});
