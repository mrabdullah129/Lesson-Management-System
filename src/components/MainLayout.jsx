import { useEffect, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function MainLayout({ lectures }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('lms-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('lms-theme', theme);
  }, [theme]);

  const filteredLectures = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();
    if (!normalizedSearch) {
      return lectures;
    }

    return lectures.filter((lecture) => lecture.title.toLowerCase().includes(normalizedSearch));
  }, [lectures, searchQuery]);

  return (
    <div className="min-h-screen bg-app-surface text-slate-900 transition-colors dark:text-slate-100">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onMenuToggle={() => setIsMobileOpen((current) => !current)}
        isNavbarCollapsed={isNavbarCollapsed}
        onNavbarToggle={() => setIsNavbarCollapsed((current) => !current)}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />
      <div className="mx-auto flex max-w-[1440px]">
        <Sidebar
          lectures={filteredLectures}
          isMobileOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((current) => !current)}
        />
        <main className="min-w-0 flex-1 py-2">
          <Outlet context={{ lectures }} />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
