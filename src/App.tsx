import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterationPage from './pages/registeration/registeration'
import CategoryPage from './pages/category/category'
import HomePage from './pages/home/home'
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import { browseRoute, categoryRoute, homeRoute, registerRoute } from './route'
import BrowsePage from './pages/browseEntertainment/browse'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={registerRoute} element={<RegisterationPage />} />
        <Route path={categoryRoute} element={<ProtectedRoute> <CategoryPage /> </ProtectedRoute>} />
        <Route path={browseRoute} element={<ProtectedRoute> <BrowsePage /> </ProtectedRoute>} />
        <Route path={homeRoute} element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
