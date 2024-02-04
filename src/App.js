import { Navigate, Route, Routes, redirect } from 'react-router-dom'
import { PublicLayout } from './Layouts/PublicLayout'
import { ProtectedLayout } from './Layouts/ProtectedLayout'
import LoginPage from './Pages/Login'
import { useNavigate } from "react-router-dom";
import RegisterPage from './Pages/Register'
import TodayPage from './Pages/Today'
import QuotesPage from './Pages/Quotes'
import SecureQuotesPage from './Pages/SecureQuotes'
import { useAuth } from './Hooks/useAuth';

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      
      <Route path='/' element={<PublicLayout />}>
        <Route path="today" element={<TodayPage />} />
        <Route path="quotes" element={<QuotesPage />} />
        <Route path="secure-quotes" element={(user) ?  <SecureQuotesPage /> : <Navigate to="/quotes" />} />
      </Route>

      {/* <Route path='/'  element={<ProtectedLayout />}>
        
        <Route path="favorite-quotes" element={<TodayPage />} />
        <Route path="report-favorite-quotes" element={<TodayPage />} />
      </Route> */}

    </Routes>
  )
}

export default App
