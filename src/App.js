import Card from './ecommerceSite/Card'
import NavBar from './ecommerceSite/NavBar';
import { Routes, Route } from 'react-router';
import AddCard from './ecommerceSite/AddCard';
import StripePurchase from './ecommerceSite/redux/StripePurchase';
const App = () => {
  return (
    <>
      <NavBar />
      {/* <Cart /> */}
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/purchase" element={<StripePurchase />} />
        <Route path='*' />
      </Routes>
    </>
  )
}

export default App
