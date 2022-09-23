import "./App.css";
import "./index.scss";
import "./categories.styles.scss";
import "./components/category-item/category-item.component";
import "./components/directory/directory.component";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/Routes/home/home.component";
import Navigation from "./components/Routes/navigation/navigation.component";
import Shop from "./components/Routes/shop/shop.component";
import Authentication from "./components/Routes/authentication/authentication.component";
import Checkout from "./components/Routes/chechout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
