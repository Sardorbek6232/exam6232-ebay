import './App.css'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import Category from './pages/category/Category'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import SinglePage from './pages/singleProduct/SinglePage'
import LikePage from './pages/likePage/LikePage'
import CartPage from './pages/cartPage/CartPage'
import Registration from './pages/registration/Registration'
import Login from './pages/login/Login'
import { useLocation } from 'react-router-dom'
function App() {
  const {pathname} = useLocation()
  return (
    <>
      <div>
        {!pathname.includes("/login") && !pathname.includes("/registration") && <Navbar/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/category/:product_id' element={<Category/>}/>
          <Route path='/singlePage/:single_id' element={<SinglePage/>}/>
          <Route path='/likePage' element={<LikePage/>}/>
          <Route path='/cartPage' element={<CartPage/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        {!pathname.includes("/login") && !pathname.includes("/registration") && <Footer/>}

      </div>
    </>
  )
}

export default App
