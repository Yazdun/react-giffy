import {
  writeStorage,
  useLocalStorage,
  deleteFromStorage,
} from '@rehooks/local-storage'

import { useContext, createContext } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const savedGifs = useLocalStorage('savedGifs', [])

  const addGifs = gifSrc => writeStorage('savedGifs', [...savedGifs[0], gifSrc])

  const deleteGifs = gifSrc =>
    writeStorage(
      'savedGifs',
      savedGifs[0].filter(src => src !== gifSrc),
    )

  const clearGifs = () => deleteFromStorage('savedGifs')

  return (
    <AppContext.Provider value={{ savedGifs, addGifs, deleteGifs, clearGifs }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
