import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Sidebar({ lectures, isMobileOpen, onClose, isCollapsed, onToggleCollapse }) {
  return (
    <>
      <aside
        className={`sticky top-16 hidden h-[calc(100vh-4rem)] shrink-0 overflow-hidden border-r border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 transition-all duration-300 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 lg:flex lg:flex-col ${
          isCollapsed ? 'w-16' : 'w-[20.5rem]'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-3 py-3 dark:border-slate-700">
          {!isCollapsed && (
            <h2 className="pl-1 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Lectures</h2>
          )}
          <button
            onClick={onToggleCollapse}
            className="group inline-flex rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            aria-label={isCollapsed ? 'Open sidebar' : 'Close sidebar'}
            title={isCollapsed ? 'Open sidebar' : 'Close sidebar'}
          >
            {isCollapsed ? (
              <Menu size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            ) : (
              <X size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            )}
          </button>
        </div>

        {!isCollapsed && (
          <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
            {lectures.map((lecture, index) => (
              <NavLink
                key={lecture.slug}
                to={`/lecture/${lecture.slug}`}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2.5 text-sm leading-snug transition ${
                    isActive
                      ? 'border border-accent-200 bg-accent-50 text-accent-700 shadow-sm dark:border-accent-700 dark:bg-accent-700/20 dark:text-accent-100'
                      : 'border border-transparent text-slate-700 hover:border-slate-200 hover:bg-white dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800'
                  }`
                }
              >
                <span className="mr-2 text-xs text-slate-400 dark:text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                {lecture.title}
              </NavLink>
            ))}
          </nav>
        )}
      </aside>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" onClick={onClose} />
          <aside className="relative z-10 flex h-full w-[85%] max-w-xs flex-col overflow-hidden border-r border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Lectures</h2>
              <button
                onClick={onClose}
                className="group inline-flex rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                aria-label="Close mobile sidebar"
                title="Close mobile sidebar"
              >
                <X size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
            </div>
            <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-1">
              {lectures.map((lecture, index) => (
                <NavLink
                  key={lecture.slug}
                  to={`/lecture/${lecture.slug}`}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2.5 text-sm leading-snug transition ${
                      isActive
                        ? 'border border-accent-200 bg-accent-50 text-accent-700 shadow-sm dark:border-accent-700 dark:bg-accent-700/20 dark:text-accent-100'
                        : 'border border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <span className="mr-2 text-xs text-slate-400 dark:text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                  {lecture.title}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

export default Sidebar;
