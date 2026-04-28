import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function LecturePage({ lectures }) {
  const { slug } = useParams();
  const currentIndex = lectures.findIndex((lecture) => lecture.slug === slug);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const currentLecture = currentIndex >= 0 ? lectures[currentIndex] : null;
  const previousLecture = currentIndex > 0 ? lectures[currentIndex - 1] : null;
  const nextLecture = currentIndex >= 0 && currentIndex < lectures.length - 1 ? lectures[currentIndex + 1] : null;

  const filePath = useMemo(() => {
    if (!currentLecture) {
      return '';
    }

    return `/lectures/${encodeURIComponent(currentLecture.fileName)}`;
  }, [currentLecture]);

  useEffect(() => {
    if (!currentLecture) {
      return;
    }

    let isCancelled = false;

    async function verifyLectureFile() {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch(filePath, { method: 'HEAD' });
        if (!response.ok) {
          throw new Error(`Could not load lecture (${response.status})`);
        }
      } catch (loadError) {
        if (!isCancelled) {
          setError(loadError.message || 'Failed to load lecture content.');
          setIsLoading(false);
        }
      }
    }

    verifyLectureFile();

    return () => {
      isCancelled = true;
    };
  }, [currentLecture, filePath]);

  if (!slug) {
    return <Navigate to={`/lecture/${lectures[0].slug}`} replace />;
  }

  if (!currentLecture) {
    return <Navigate to={`/lecture/${lectures[0].slug}`} replace />;
  }

  return (
    <article className="mx-auto flex w-full max-w-6xl flex-col px-3 py-4 sm:px-4 sm:py-6 md:px-8 lg:px-10">
      <header className="mb-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:px-5">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Lecture Content</p>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl md:text-3xl">{currentLecture.title}</h1>
      </header>

      {error && !isLoading && (
        <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-300">{error}</p>
      )}

      {!error && (
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/85 backdrop-blur-[1px] dark:bg-slate-900/75">
              <p className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">Loading original lecture file...</p>
            </div>
          )}
          <iframe
            key={currentLecture.slug}
            src={filePath}
            title={currentLecture.title}
            className="h-[68vh] min-h-[420px] w-full bg-white md:h-[74vh] md:min-h-[560px]"
            onLoad={() => setIsLoading(false)}
          />
        </section>
      )}

      <footer className="mt-6 grid gap-3 border-t border-slate-200 pt-5 dark:border-slate-700 sm:grid-cols-2">
        {previousLecture ? (
          <Link
            to={`/lecture/${previousLecture.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent-600 px-4 py-2.5 text-sm font-medium text-accent-700 transition hover:bg-accent-50 dark:border-accent-500 dark:text-accent-200 dark:hover:bg-accent-900/30"
          >
            <ChevronLeft size={16} /> Previous
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextLecture ? (
          <Link
            to={`/lecture/${nextLecture.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600"
          >
            Next <ChevronRight size={16} />
          </Link>
        ) : (
          <div className="text-center text-sm text-slate-500 dark:text-slate-400">End of curriculum</div>
        )}
      </footer>
    </article>
  );
}

export default LecturePage;
