import React from "react";
import WelcomeBanner from "../components/Home/WelcomeBanner";
import StatCards from "../components/Home/StatCards";
import ShopByCategory from "../components/Home/ShopByCategory";
import ProductLists from "../components/Home/ProductLists";

const Home = () => {
  return (
    <div>
      <WelcomeBanner />
      <StatCards />
      <ShopByCategory />
      <ProductLists />
    </div>
  );
};

export default Home;
