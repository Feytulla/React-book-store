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
import ShopCart from "./pages/ShopCart";
import Book from "./pages/Book";
import Order from './pages/Order';
import DoneOrder from './pages/DoneOrder';
import Search from './pages/Search';
import SearchList from "./components/search/SearchList";
import Pagination from "./components/search/Pagination";

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
          <Route path='cart' element={<ShopCart />} />
          <Route path='order' element={<Order />} />
          <Route path='order/doneOrder' element={<DoneOrder />} />
          <Route path='search' element={<Search />}>
            <Route path=":searchResult" element={<SearchList />} >
              <Route path=":pageNumber" element={<Pagination />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
