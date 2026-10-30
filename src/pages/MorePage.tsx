import { NavLink } from 'react-router';

export default function MorePage() {
  return (
    <nav className="flex flex-col">
      <NavLink to="/template">Шаблон недели</NavLink>
      <NavLink to="/exercises">Упражнения</NavLink>
      <NavLink to="/settings">Настройки</NavLink>
    </nav>
  );
}
