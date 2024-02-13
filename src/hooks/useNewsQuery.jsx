import { useEffect, useState } from "react";

const useNewsQuery = (category) => {
  const [newsData, setNewsData] = useState([]);

  const fetchTopHeadlines = async (category = "") => {
    let url = "http://localhost:8000/v2/top-headlines";

    if (category) {
      url += `?category=${category}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  };

  useEffect(() => {
    fetchTopHeadlines(category);
  }, [category]);

  return newsData;
};

export default useNewsQuery;
