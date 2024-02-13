import { useCallback, useEffect, useState } from "react";

const useNewsQuery = (category, query) => {
  const [newsData, setNewsData] = useState([]);

  /**
   * Fetch news data from the API based on the category or query
   * I use the useCallback hook to memoize the function so that it doesn't get recreated on every render.
   * @param {string} category - The category of the news
   * @param {string} query - The search query for the news
   * @returns {Promise<void>}
   *
   * useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful for optimizing performance, as it prevents unnecessary re-renders of components that use the callback function.
   * Learn more: https://react.dev/reference/react/useCallback
   */
  const fetchNews = useCallback(async (category, query) => {
    let url = "http://localhost:8000/v2/top-headlines";

    /* If query is present, we need to change the URL to search endpoint */
    if (query) {
      url = `http://localhost:8000/v2/search?q=${query}`;
    } else if (category) {
      url += `?category=${category}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      setNewsData(data);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  }, []);

  useEffect(() => {
    fetchNews(category, query);
  }, [category, query, fetchNews]);

  return newsData;
};

export default useNewsQuery;
