import { Card } from '../components/Card';

export default function TodayPage() {
  return (
    <>
      <header className="flex flex-col gap-1 px-5 pt-6 pb-3">
        <h1 className="text-2xl font-extrabold">Сегодня</h1>
        <span className="text-xs text-stone-600">Понедельник, 26 октября</span>
      </header>

      <main className="flex flex-col gap-2.5 px-4 pb-3">
        <Card
          as="article"
          aria-labelledby="workout-title"
          className="border-2 border-blue-600"
        >
          <header className="flex items-center justify-between">
            <h2 id="workout-title" className="text-xl font-extrabold">
              Грудь/Трицепс
            </h2>
            <span className="text-xs font-bold text-blue-600">
              Запланирована
            </span>
          </header>
          <p className="text-xs text-stone-600">5 упражнений - 15 подходов</p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center justify-between">
              Жим штанги лежа{' '}
              <span className="text-xs text-stone-600">3x6-8</span>
            </li>
            <li className="flex items-center justify-between">
              Жим гантелей на наклонной{' '}
              <span className="text-xs text-stone-600">3x8-10</span>
            </li>
            <li className="flex items-center justify-between">
              Разводка в кроссовере{' '}
              <span className="text-xs text-stone-600">3x12-15</span>
            </li>
            <li className="flex items-center justify-between">
              Французский жим{' '}
              <span className="text-xs text-stone-600">3x10-12</span>
            </li>
            <li className="flex items-center justify-between">
              Разгибания на блоке{' '}
              <span className="text-xs text-stone-600">3x12-15</span>
            </li>
          </ul>
          <button
            type="button"
            className="min-h-12 rounded-2xl bg-blue-600 px-2 py-0.5 text-white"
          >
            Начать тренировку
          </button>
        </Card>

        <Card aria-labelledby="week-title">
          <header className="flex items-center justify-between">
            <h2 id="week-title" className="text-lg font-bold">
              Неделя
            </h2>
            <span className="text-xs text-stone-600">1 из 3 выполнено</span>
          </header>
          <ol className="flex gap-1.5 text-center font-bold">
            <li className="flex-1 rounded-xl border-2 border-blue-600 py-4 text-xs text-blue-600">
              <abbr title="Понедельник" className="no-underline">
                Пн
              </abbr>
            </li>
            <li className="flex-1 rounded-xl border border-stone-200 py-4 text-xs">
              <abbr title="Вторник" className="no-underline">
                Вт
              </abbr>
            </li>
            <li className="flex-1 rounded-xl border border-stone-200 py-4 text-xs">
              <abbr title="Среда" className="no-underline">
                Ср
              </abbr>
            </li>
            <li className="flex-1 rounded-xl border border-stone-200 py-4 text-xs">
              <abbr title="Четверг" className="no-underline">
                Чт
              </abbr>
            </li>
            <li className="flex-1 rounded-xl border border-stone-200 py-4 text-xs">
              <abbr title="Пятница" className="no-underline">
                Пт
              </abbr>
            </li>
            <li className="flex-1 rounded-xl border border-stone-200 py-4 text-xs">
              <abbr title="Суббота" className="no-underline">
                Сб
              </abbr>
            </li>
            <li className="flex-1 rounded-xl border border-stone-200 py-4 text-xs">
              <abbr title="Воскресенье" className="no-underline">
                Вс
              </abbr>
            </li>
          </ol>
        </Card>

        <Card aria-labelledby="record-title">
          <h2 id="record-title" className="text-xs text-stone-600">
            Последний рекорд
          </h2>
          <p className="font-bold">Присед со штангой - e1RM 128 кг</p>
          <time dateTime="2026-10-19" className="text-xs text-stone-600">
            19 октября
          </time>
        </Card>
      </main>
    </>
  );
}
