import { useEffect, useState } from "react";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState([]);

  const fetchTopHeadlines = async () => {
    const url = "http://localhost:8000/v2/top-headlines";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  };

  useEffect(() => {
    fetchTopHeadlines();
  }, []);

  return newsData;
};

export default useNewsQuery;
