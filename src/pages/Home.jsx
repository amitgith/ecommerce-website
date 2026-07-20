import React from "react";
import WelcomeBanner from "../components/Home/WelcomeBanner";
import StatCards from "../components/Home/StatCards";
import ShopByCategory from "../components/Home/ShopByCategory";

const Home = () => {
  return (
    <div>
      <WelcomeBanner />
      <StatCards />
      <ShopByCategory />
    </div>
  );
};

export default Home;
