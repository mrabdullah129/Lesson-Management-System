import { Link } from 'react-router-dom';
import { Menu, Moon, Search, Sun, UserCircle2, X } from 'lucide-react';

function Navbar({
  searchQuery,
  onSearchChange,
  onMenuToggle,
  isNavbarCollapsed,
  onNavbarToggle,
  theme,
  onThemeToggle
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-slate-700/80 dark:bg-slate-900/90">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className={`overflow-hidden transition-all duration-300 ${isNavbarCollapsed ? 'max-h-0 opacity-0' : 'max-h-24 opacity-100'}`}>
          <div className="flex h-16 items-center gap-3">
            <button
              onClick={onMenuToggle}
              className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 lg:hidden"
              aria-label="Open lecture menu"
            >
              <Menu size={18} />
            </button>

            <div className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <span className="text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-100">LMS Portal</span>
            </div>

            <Link
              to="/meet-developer"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-accent-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Meet the developer
            </Link>

            <div className="ml-auto flex w-full max-w-md items-center rounded-xl border border-slate-300 bg-white px-3 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <Search className="text-slate-400 dark:text-slate-500" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search lectures..."
                className="w-full border-0 bg-transparent px-2 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>

            <button
              onClick={onThemeToggle}
              className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="rounded-full border border-slate-200 bg-white p-1 text-slate-600 shadow-sm transition hover:text-accent-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              aria-label="Open profile"
            >
              <UserCircle2 size={28} />
            </button>

            <button
              onClick={onNavbarToggle}
              className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Collapse navbar"
              title="Collapse navbar"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${isNavbarCollapsed ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex h-12 items-center gap-3">
            <button
              onClick={onNavbarToggle}
              className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Expand navbar"
              title="Expand navbar"
            >
              <Menu size={18} />
            </button>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Navbar is collapsed</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
