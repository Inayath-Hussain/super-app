import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterationPage from './pages/registeration/registeration'
import CategoryPage from './pages/category/category'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterationPage />} />
        <Route path='/category' element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
