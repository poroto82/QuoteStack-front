import { Route, Routes } from 'react-router-dom'
import { PublicLayout } from './Layouts/PublicLayout'
import { ProtectedLayout } from './Layouts/ProtectedLayout'
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import TodayPage from './Pages/Today'
import QuotesPage from './Pages/Quotes'

function App() {
  return (
    
    <Routes>

      <Route  element={<PublicLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="today" element={<TodayPage />} />
        <Route path="quotes" element={<QuotesPage />} />
      </Route>

      <Route path='/'  element={<ProtectedLayout />}>
        <Route path="secure-quotes" element={<TodayPage />} />
        <Route path="favorite-quotes" element={<TodayPage />} />
        <Route path="report-favorite-quotes" element={<TodayPage />} />
      </Route>

    </Routes>
  )
}

export default App
