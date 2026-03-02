export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 bg-cream-50 flex items-center justify-center loading-screen"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center">
        {/* Brand wordmark */}
        <h2 className="font-heading text-2xl sm:text-3xl tracking-[0.3em] text-coffee-900 mb-10 loading-fade-in">
          ARABICA
        </h2>

        {/* Coffee cup illustration */}
        <div className="relative w-20 h-24 mb-8">
          {/* Steam lines - wavy */}
          <div className="absolute -top-6 left-3 flex gap-2">
            <div className="loading-steam loading-steam-1">
              <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
                <path d="M4 20C4 20 0 14 4 10C8 6 4 0 4 0" stroke="currentColor" strokeWidth="1.5" className="text-coffee-300" />
              </svg>
            </div>
            <div className="loading-steam loading-steam-2">
              <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
                <path d="M4 20C4 20 8 14 4 10C0 6 4 0 4 0" stroke="currentColor" strokeWidth="1.5" className="text-coffee-300" />
              </svg>
            </div>
            <div className="loading-steam loading-steam-3">
              <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
                <path d="M4 20C4 20 0 14 4 10C8 6 4 0 4 0" stroke="currentColor" strokeWidth="1.5" className="text-coffee-300" />
              </svg>
            </div>
          </div>

          {/* Cup body */}
          <div className="absolute bottom-0 left-0 w-16 h-[72px] border-4 border-coffee-900 rounded-b-xl overflow-hidden">
            {/* Coffee surface wave */}
            <div className="absolute bottom-0 left-0 right-0 loading-coffee-fill">
              <div className="loading-coffee-wave" />
              <div className="absolute inset-0 top-2 bg-coffee-700" />
            </div>
          </div>

          {/* Cup handle */}
          <div className="absolute right-[-12px] top-[22px] w-5 h-8 border-4 border-coffee-900 rounded-r-full border-l-0" />

          {/* Saucer */}
          <div className="absolute -bottom-1 -left-2 w-20 h-2 bg-coffee-900 rounded-full" />
        </div>

        {/* Brewing text with animated dots */}
        <p className="text-xs font-heading uppercase tracking-[0.25em] text-coffee-500 loading-fade-in">
          Brewing
          <span className="loading-dots">
            <span className="loading-dot">.</span>
            <span className="loading-dot">.</span>
            <span className="loading-dot">.</span>
          </span>
        </p>
      </div>
    </div>
  );
}
