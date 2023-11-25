import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterationPage from './pages/registeration/registeration'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterationPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
