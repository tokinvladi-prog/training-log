import { NavLink, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <main className="flex-1 overflow-y-auto overscroll-contain">
        <Outlet />
      </main>
      <nav className="flex h-16 shrink-0 items-center border-t border-t-stone-200 bg-white pb-[env(safe-area-inset-bottom)] text-center text-xs">
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
