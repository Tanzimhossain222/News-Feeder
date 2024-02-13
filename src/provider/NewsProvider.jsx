import PropsType from "prop-types";
import { useState } from "react";
import NewsContext from "../context/NewsContext";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const newsData = useNewsQuery(category);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  //count render
  console.log("NewsProvider render");

  return (
    <NewsContext.Provider value={{ newsData, handleCategorySelect }}>
      {children}
    </NewsContext.Provider>
  );
};

NewsProvider.propTypes = {
  children: PropsType.node.isRequired,
};

export default NewsProvider;
