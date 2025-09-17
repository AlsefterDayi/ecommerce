// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Modules/Home/View/Home";
import Shop from "./Modules/Shop";
import CarDetails from "./Modules/CarDetails";
import Login from "./Modules/Login";
import Register from "./Modules/Register";
import Cart from "./Modules/Cart";
import NotFound from "./Modules/Additionals/View/NotFound";

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
