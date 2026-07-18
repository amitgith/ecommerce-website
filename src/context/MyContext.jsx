import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [shopsData, setShopsData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
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
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
