
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Account from './pages/Account'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Contact from './pages/Contact'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Wishlist from './pages/Wishlist'
import NotFound from './pages/404'
import Layout from './Layout0/layout'
function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
  </>  
  )
}

export default App