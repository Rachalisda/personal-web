// components/Card.jsx
export default function Card({
  title,
  children,
  footer,
  topBarLight = 3,
  topBarDark  = 3,
  secondDots  = true,      // show second row of dots?
  variant     = 'medium',  // 'light' | 'medium' | 'dark'
  lightBg     = 'bg-[var(--text-color)]',
  darkBg      = 'bg-[var(--background)]',
  mediumBg    = 'bg-[var(--foreground)]',
  className   = '',
}) {
  // map variant to background class
  const bgMap = { light: lightBg, medium: mediumBg, dark: darkBg };
  const bgClass = bgMap[variant] || bgMap.medium;

  return (
    <div
      className={`
        ${bgClass} rounded-2xl shadow-2xl
        hover:scale-105 transition-transform w-full
        ${className}
      `}
    >
      {/* Top bar */}
      <div className="bg-gray-300 h-8 rounded-t-2xl mb-4 flex justify-between items-center px-3">
        {/* first row of dots */}
        <div className="flex space-x-2">
          {Array(topBarLight).fill().map((_, i) => (
            <span
              key={`l${i}`}
              className="w-2 h-2 rounded-full bg-[var(--background)]"
            />
          ))}
        </div>
        {/* second row of dots */}
        {secondDots && (
          <div className="flex space-x-2">
            {Array(topBarDark).fill().map((_, i) => (
              <span
                key={`d${i}`}
                className="w-2 h-2 rounded-full bg-[var(--text-color)]"
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {footer && (
        <div className="flex space-x-4 mt-6 md:mt-0 px-6">
          {footer}
        </div>
      )}

      {/* Body */}
      <div className="p-6 flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-1">
          <h2 className="font-bold text-2xl mb-2">{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
