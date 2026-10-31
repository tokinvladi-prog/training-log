import { db } from '../dt/db';
import type { Equipment, Exercise, MuscleGroup } from '../types';

type NewExercise = {
  name: string;
  muscleGroup: MuscleGroup;
  equipment: Equipment;
};

export const exerciseRepo = {
  async getAll(): Promise<Exercise[]> {
    const all = await db.exercises.toArray();
    return all
      .filter((e) => !e.isArchived)
      .sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  },

  async getById(id: string): Promise<Exercise | null> {
    return (await db.exercises.get(id)) ?? null;
  },

  async create(data: NewExercise): Promise<Exercise> {
    const exercise: Exercise = {
      ...data,
      id: crypto.randomUUID(),
      source: 'custom',
      isArchived: false,
      createdAt: new Date().toISOString(),
    };
    await db.exercises.add(exercise);
    return exercise;
  },
};
