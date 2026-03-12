import type { ThemeMode } from '../../models/AppModel'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

interface TitleBarProps {
  theme: ThemeMode
  onToggleTheme: () => void
}

function TitleBar({ theme, onToggleTheme }: TitleBarProps) {
  return (
    <header className="app-titlebar" id="app-titlebar">
      <div className="app-titlebar__brand">
        <span className="app-titlebar__dot"></span>
        <span className="app-titlebar__title">Acadex</span>
      </div>
      <div className="app-titlebar__actions">
        <button
          className="titlebar-btn titlebar-btn--theme"
          id="btn-theme"
          type="button"
          aria-label="Toggle theme"
          aria-pressed={theme === 'light'}
          onClick={onToggleTheme}
        >
          <MoonIcon className="heroicon-url theme-icon theme-icon--moon" aria-hidden="true" />
          <SunIcon className="heroicon-url theme-icon theme-icon--sun" aria-hidden="true" />
        </button>
        <button className="titlebar-btn" id="btn-minimize" aria-label="Minimize window" type="button">
          -
        </button>
        <button className="titlebar-btn titlebar-btn--close" id="btn-close" aria-label="Close window" type="button">
          x
        </button>
      </div>
    </header>
  )
}

export default TitleBar
