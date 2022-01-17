import { Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PaymentAndDelivery from './pages/PaymentAndDelivery';
import Stocks from './pages/Stocks';
import WorldBooks from './pages/WorldBooks';
import IndividualBinding from './pages/IndividualBinding';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='PaymentAndDelivery' element={<PaymentAndDelivery />} />
        <Route path='stocks' element={<Stocks />} />
        <Route path='WorldBooks' element={<WorldBooks />} />
        <Route path='IndividualBinding' element={<IndividualBinding />} />
        <Route path='contacts' element={<Contacts />} />



        
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;