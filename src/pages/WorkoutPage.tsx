import { useParams } from 'react-router';

export default function WorkoutPage({ mode }: { mode: 'live' | 'history' }) {
  const { id } = useParams();

  return (
    <>
      <h1>Тренировка #{id}</h1>
      {mode === 'live' && <button>Завершить тренировку</button>}
    </>
  );
}
