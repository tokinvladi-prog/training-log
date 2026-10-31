import type { MuscleGroup, Equipment } from '../types';

export const MUSCLE_GROUP_LABELS: Record<MuscleGroup, string> = {
  chest: 'Грудь',
  back: 'Спина',
  legs: 'Ноги',
  shoulders: 'Плечи',
  biceps: 'Бицепс',
  triceps: 'Трицепс',
  core: 'Кор',
  other: 'Другое',
};
export const MUSCLE_GROUPS = Object.keys(MUSCLE_GROUP_LABELS) as MuscleGroup[];

export const EQUIPMENT_LABELS: Record<Equipment, string> = {
  barbell: 'Штанга',
  dumbbell: 'Гантели',
  machine: 'Тренажёр',
  bodyweight: 'Свой вес',
  cable: 'Блок',
  other: 'Другое',
};
