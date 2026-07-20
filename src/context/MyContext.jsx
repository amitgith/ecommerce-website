import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [shopsData, setShopsData] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sort, setSort] = useState("default");

  const [singleProductData, setSingleProductData] = useState({});

  const [cartItems, setCartItems] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch Products Globally

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      setShopsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MyStore.Provider
      value={{
        shopsData,
        setShopsData,

        search,
        setSearch,

        category,
        setCategory,

        sort,
        setSort,

        singleProductData,
        setSingleProductData,

        cartItems,
        setCartItems,

        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
