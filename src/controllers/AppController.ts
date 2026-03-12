import { useEffect, useState } from 'react'
import {
  DEFAULT_PANEL,
  DEFAULT_THEME,
  type AppViewProps,
  type PanelKey,
  type ThemeMode,
} from '../models/AppModel'
import { getCurrentWindow } from '@tauri-apps/api/window';
import { isTauri } from '@tauri-apps/api/core';

type TauriRuntimeWindow = {
  minimize: () => Promise<void>
  close: () => Promise<void>
}

const runWindowAction = async (action: (appWindow: TauriRuntimeWindow) => Promise<void>) => {
  if (!isTauri) return;
  action(getCurrentWindow());
}

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

  const onMinimizeWindow = () => {
    void runWindowAction((appWindow) => appWindow.minimize())
  }

  const onCloseWindow = () => {
    void runWindowAction((appWindow) => appWindow.close())
  }

  return {
    activePanel,
    theme,
    showSplash,
    hideSplash,
    onToggleTheme,
    onSelectPanel,
    onMinimizeWindow,
    onCloseWindow,
  }
}
