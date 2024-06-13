import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import About from './pages/About';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import Profile from './pages/user/Profile';
import Forgetpassword from './pages/Auth/Forgotpasword';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<Forgetpassword />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='' element={<Dashboard />} />
          <Route path='/dashboard/profile' element={<Profile />} />
        </Route>
        <Route path='/products' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
