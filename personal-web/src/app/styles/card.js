export default function Card({
  title,
  children,
  footer,
  topBarLight = 3,
  topBarDark = 3,
  secondDots = true,
  variant = 'medium',
  lightBg = 'bg-[var(--text-color)]',
  darkBg = 'bg-[var(--background)]',
  mediumBg = 'bg-[var(--foreground)]',
  className = '',
}) {
  const bgClasses = {
    light: lightBg,
    medium: mediumBg,
    dark: darkBg
  };
  const bgClass = bgClasses[variant] || mediumBg;

  return (
    <div
      className={`
        ${bgClass} rounded-2xl shadow-2xl
        hover:scale-105 transition-transform
        w-full h-full flex flex-col justify-between
        ${className}
      `}
    >
      {/* Top bar */}
      <div className="bg-gray-300 h-8 rounded-t-2xl mb-4 flex justify-between items-center px-3">
        <div className="flex space-x-2">
          {Array(topBarLight).fill().map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-[var(--background)]" />
          ))}
        </div>
        {secondDots && (
          <div className="flex space-x-2">
            {Array(topBarDark).fill().map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-[var(--text-color)]" />
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow gap-4">
        <div className="w-full h-40 bg-gray-700 rounded-md opacity-60" />
        <div>
          <h2 className="font-bold text-2xl mb-2">{title}</h2>
          <div>{children}</div>
        </div>
      </div>

      {/* Footer */}
      {footer && <div className="px-6 pb-6">{footer}</div>}
    </div>
  );
}
