import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PaymentAndDelivery from './pages/PaymentAndDelivery';
import Stocks from './pages/Stocks';
import WorldBooks from './pages/WorldBooks';
import IndividualBinding from './pages/IndividualBinding';
import Contacts from './pages/Contacts';
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Order from "./pages/Order";
import Book from "./pages/Book";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='book' element={<Book />}>
            <Route path=':bookId' element={<Book />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='PaymentAndDelivery' element={<PaymentAndDelivery />} />
          <Route path='stocks' element={<Stocks />} />
          <Route path='WorldBooks' element={<WorldBooks />} />
          <Route path='IndividualBinding' element={<IndividualBinding />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='order' element={<Order />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
