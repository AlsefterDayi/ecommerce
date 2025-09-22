import { Route, Routes } from "react-router-dom";
import pagesList from "../constants/pagesList";

const MyShopRoutes = () => {
  return (
    <Routes>
      {pagesList
        .filter((item) => item.is_visible)
        .map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
    </Routes>
  );
};

export default MyShopRoutes;
