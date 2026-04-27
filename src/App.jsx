import { Navigate, Route, Routes } from 'react-router-dom';
import DeveloperPage from './components/DeveloperPage';
import MainLayout from './components/MainLayout';
import LecturePage from './components/LecturePage';
import { lectures } from './data/lectures';

function App() {
  return (
    <Routes>
      <Route path="/meet-developer" element={<DeveloperPage />} />
      <Route path="/" element={<MainLayout lectures={lectures} />}>
        <Route index element={<Navigate to={`/lecture/${lectures[0].slug}`} replace />} />
        <Route path="lecture/:slug" element={<LecturePage lectures={lectures} />} />
      </Route>
      <Route path="*" element={<Navigate to={`/lecture/${lectures[0].slug}`} replace />} />
    </Routes>
  );
}

export default App;
