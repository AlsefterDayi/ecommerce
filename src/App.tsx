// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./modules/Home";
import Shop from "./modules/Shop";
import CarDetails from "./modules/CarDetails";
import Login from "./modules/Login";
import Register from "./modules/Register";
import Cart from "./modules/Cart";
import NotFound from "./modules/NotFound";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/car-details/:carID" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
