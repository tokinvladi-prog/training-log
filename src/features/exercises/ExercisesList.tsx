import { EQUIPMENT_LABELS, MUSCLE_GROUP_LABELS } from '../../lib/labels';
import type { Exercise } from '../../types';

export default function ExercisesList({
  exercises,
}: {
  exercises: Exercise[] | undefined;
}) {
  if (exercises === undefined)
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-3">
        <div className="h-11 w-11 animate-spin rounded-full border-4 border-stone-200 border-t-blue-600" />
        <h1 className="text-xl font-bold">Готовим базу упражнений...</h1>
        <p className="text-sm text-stone-600">
          Только при первом запуске, займет пару секунд
        </p>
      </div>
    );

  return (
    <ul className="flex flex-col gap-2.5">
      {exercises.map((e) => (
        <li
          key={e.id}
          className="flex flex-col rounded-2xl border border-stone-200 p-4"
        >
          <h2 className="font-bold">{e.name}</h2>
          <span className="text-xs text-stone-600">
            {MUSCLE_GROUP_LABELS[e.muscleGroup]} ·{' '}
            {EQUIPMENT_LABELS[e.equipment]}
          </span>
        </li>
      ))}
    </ul>
  );
}
