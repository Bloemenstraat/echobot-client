import './App.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DiscordConfig from './pages/DiscordConfig'
import TelegramConfig from './pages/TelegramConfig'
import SidebarLayout from './components/SidebarLayout'
import ProtectedRoute from './components/ProtectedRoute'
import { AnimatePresence } from 'framer-motion'
import NotFound from './pages/NotFound'
import AdminRoute from './components/AdminRoute'
import Admin from './pages/Admin'
import LoggedRoute from './components/LoggedRoute'

function App() {

  const location = useLocation();

  return (
    <AnimatePresence mode='wait' >
		<Routes location={location} key={location.pathname}>
			<Route path="/register" element={<LoggedRoute component={Register} />} />
			<Route path="/login" element={<LoggedRoute component={Login} />} />

			<Route element={<SidebarLayout />}>
				<Route path="/" element={<Navigate to="/login" replace />} />
				<Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
				<Route path="/discord/:botId?" element={<ProtectedRoute component={DiscordConfig} />} />
				<Route path="/telegram/:botId?" element={<ProtectedRoute component={TelegramConfig} />} />
			</Route>

			<Route path="/admin" element={<AdminRoute component={Admin} />} />
			<Route path="*" element={<NotFound />}/>
		</Routes>  
    </AnimatePresence>  
  )
}

export default App
