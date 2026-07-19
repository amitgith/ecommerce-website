import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [shopsData, setShopsData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [singleProductData, setSingleProductData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
