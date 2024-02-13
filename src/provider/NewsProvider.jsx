import PropsType from "prop-types";
import NewsContext from "../context/NewsContext";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
  const newsData = useNewsQuery();

  return (
    <NewsContext.Provider value={{ newsData }}>{children}</NewsContext.Provider>
  );
};

NewsProvider.propTypes = {
  children: PropsType.node.isRequired,
};

export default NewsProvider;
