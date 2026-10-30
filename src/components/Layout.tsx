import { NavLink, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
      <nav className="flex h-16 border-t">
        <NavLink to="/" end>
          Сегодня
        </NavLink>
        <NavLink to="/week">Неделя</NavLink>
        <NavLink to="/history">История</NavLink>
        <NavLink to="/progress">Прогресс</NavLink>
        <NavLink to="/more">Ещё</NavLink>
      </nav>
    </div>
  );
}
