import { Route, Routes } from 'react-router-dom'
import { PublicLayout } from './Layouts/PublicLayout'
import { ProtectedLayout } from './Layouts/ProtectedLayout'
import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'

function App() {
  return (
    
    <Routes>
      <Route path='*' element={<PublicLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path='/'  element={<ProtectedLayout />}>
        <Route path='/' element={<HomePage />} />
       
      </Route>
    </Routes>
  )
}

export default App
