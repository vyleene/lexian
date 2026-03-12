import { useEffect, useState } from 'react'
import {
  DEFAULT_PANEL,
  DEFAULT_THEME,
  type AppViewProps,
  type PanelKey,
  type ThemeMode,
} from '../models/AppModel'

export function AppController(): AppViewProps {
  const [activePanel, setActivePanel] = useState<PanelKey>(DEFAULT_PANEL)
  const [theme, setTheme] = useState<ThemeMode>(DEFAULT_THEME)
  const [showSplash, setShowSplash] = useState(true)
  const [hideSplash, setHideSplash] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setHideSplash(true)
    }, 2000)

    const removeTimer = window.setTimeout(() => {
      setShowSplash(false)
    }, 2300)

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  const onToggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'))
  }

  const onSelectPanel = (panel: PanelKey) => {
    setActivePanel(panel)
  }

  return {
    activePanel,
    theme,
    showSplash,
    hideSplash,
    onToggleTheme,
    onSelectPanel,
  }
}
