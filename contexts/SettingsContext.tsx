import {defaultSettings, Settings} from "../models/settings"
import React, {useState} from "react"

type SettingsContextValueType = {
  settings: Settings,
  updateSettings: (updated: Settings) => void,
}

const defaultSettingsContextValue = {
  settings: defaultSettings,
  updateSettings: () => {}
}

export const SettingsContext = React.createContext<SettingsContextValueType>(defaultSettingsContextValue)

export const SettingsProvider = (props: {children: React.ReactNode}) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const updateSettings = (updated: Settings) => {
    console.log(updated)
    setSettings(updated)
  }
  return <SettingsContext.Provider value={{settings, updateSettings}}>
    {props.children}
  </SettingsContext.Provider>
}