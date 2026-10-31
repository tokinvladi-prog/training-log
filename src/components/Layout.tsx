import { NavLink, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
      <nav className="sticky bottom-0 z-50 flex h-16 items-center border-t border-t-stone-200 bg-white text-center text-xs ">
        <NavLink to="/" className="flex-1" end>
          Сегодня
        </NavLink>
        <NavLink to="/week" className="flex-1">
          Неделя
        </NavLink>
        <NavLink to="/history" className="flex-1">
          История
        </NavLink>
        <NavLink to="/progress" className="flex-1">
          Прогресс
        </NavLink>
        <NavLink to="/more" className="flex-1">
          Ещё
        </NavLink>
      </nav>
    </div>
  );
}
