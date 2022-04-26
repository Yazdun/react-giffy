import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages'
import { AppProvider } from './context'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
