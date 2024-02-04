import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout } from './Layouts/PublicLayout'
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import TodayPage from './Pages/Today'
import QuotesPage from './Pages/Quotes'
import SecureQuotesPage from './Pages/SecureQuotes'
import { useAuth } from './Hooks/useAuth';
import FavouriteQuotesPage from './Pages/FavouriteQuotes';
import ReportPage from './Pages/Report';

function App() {
  const { user } = useAuth();
  
  return (
    
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/" element={<Navigate to="/today" />} />

      <Route path='/' element={<PublicLayout />}>
        <Route path="today" element={<TodayPage />} />
        <Route path="quotes" element={<QuotesPage />} />
        <Route path="secure-quotes" element={(user) ?  <SecureQuotesPage /> : <Navigate to="/quotes" />} />
        <Route path="favorite-quotes" element={(user) ?  <FavouriteQuotesPage /> : <Navigate to="/quotes" />} />
        <Route path="report-favorite-quotes" element={(user) ?  <ReportPage /> : <Navigate to="/quotes" />} />
      </Route>

    </Routes>
  )
}

export default App
