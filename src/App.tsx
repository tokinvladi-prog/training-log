import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import TodayPage from './pages/TodayPage';
import WeekPage from './pages/WeekPage';
import HistoryPage from './pages/HistoryPage';
import WorkoutPage from './pages/WorkoutPage';
import ProgressPage from './pages/ProgressPage';
import MorePage from './pages/MorePage';
import TemplatePage from './pages/TemplatePage';
import ExercisesPage from './pages/ExercisesPage';
import Settings from './Settings';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TodayPage />} />
        <Route path="/week" element={<WeekPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/:id" element={<WorkoutPage mode="history" />} />
        <Route path="/workout/:id" element={<WorkoutPage mode="live" />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
