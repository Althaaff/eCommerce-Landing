import React, { useState } from "react";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./components/Products/Products.jsx";
import AOS from "aos";
import TopProducts from "./components/TopProducts/TopProducts.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx";
import TopSellProducts from "./components/Topsell/TopSell.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  console.log("true :", orderPopup);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    console.log("components mounts!");
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
    return () => {
      console.log("components unmounts or re-rendered!");
    };
  }, []);
  return (
    <div className="dark:bg-gray-950">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <TopSellProducts />
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
