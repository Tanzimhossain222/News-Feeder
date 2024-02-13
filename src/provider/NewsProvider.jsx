import PropsType from "prop-types";
import { useState } from "react";
import NewsContext from "../context/NewsContext";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  //fetch data
  const newsData = useNewsQuery(category, query);

  const handleCategorySelect = (selectedCategory) => {
    setQuery("");
    setCategory(selectedCategory);
  };

  const handleSearch = (searchQuery) => {
    setCategory("");
    setQuery(searchQuery);
  };


  return (
    <NewsContext.Provider
      value={{ newsData, handleCategorySelect, handleSearch }}
    >
      {children}
    </NewsContext.Provider>
  );
};

NewsProvider.propTypes = {
  children: PropsType.node.isRequired,
};

export default NewsProvider;
