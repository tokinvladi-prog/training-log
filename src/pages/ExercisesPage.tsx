import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { exerciseRepo } from '../repositories/exerciseRepo';
import ExercisesList from '../features/exercises/ExercisesList';
import { MUSCLE_GROUP_LABELS, MUSCLE_GROUPS } from '../lib/labels';
import { cn } from '../lib/utils';
import type { MuscleGroup } from '../types';

type GroupFilter = MuscleGroup | 'all';

export default function ExercisesPage() {
  const [group, setGroup] = useState<GroupFilter>('all');
  const [query, setQuery] = useState('');

  const exercises = useLiveQuery(() => exerciseRepo.getAll());

  const visible = exercises?.filter(
    (e) =>
      (group === 'all' || e.muscleGroup === group) &&
      e.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="flex h-full flex-col">
      <header className="shrink-0 px-5 pt-6 pb-3">
        <h1 className="text-2xl font-extrabold">Упражнения</h1>
      </header>

      <div className="shrink-0 px-4 pb-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по названию"
          aria-label="Поиск"
          className="relative w-full rounded-2xl border border-stone-200 
            p-4 transition outline-none focus-visible:border-blue-600 
            focus-visible:ring-2 focus-visible:ring-blue-200"
        />

        <div className="mt-4 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setGroup('all')}
            aria-pressed={group === 'all'}
            className={cn(
              'rounded-full border border-stone-200 px-4 py-3',
              group === 'all' && 'bg-slate-900 text-white',
            )}
          >
            Все
          </button>

          {MUSCLE_GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              aria-pressed={group === g}
              className={cn(
                'rounded-full border border-stone-200 px-4 py-3',
                group === g && 'bg-slate-900 text-white',
              )}
            >
              {MUSCLE_GROUP_LABELS[g]}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-3">
        <ExercisesList exercises={visible} />
      </div>

      <div className="p-4">
        <button
          type="button"
          className="min-h-12 w-full rounded-2xl bg-blue-600 px-2 py-0.5 text-white"
        >
          Свое упражнение
        </button>
      </div>
    </div>
  );
}
