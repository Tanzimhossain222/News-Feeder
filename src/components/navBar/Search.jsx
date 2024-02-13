import { useState } from "react";
import { useNews } from "../../context/NewsContext";
import searchIcons from "./../../assets/icons/search.svg";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { handleSearch } = useNews();

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    setQuery("");
  };

  let timeout;

  const handleChange = (event) => {
    clearTimeout(timeout);
    const value = event.target.value;
    setQuery(value);
    timeout = setTimeout(() => handleSearch(value), 1000);
  };

  const handleSubmit = () => {
    clearTimeout(timeout);
    handleSearch(query);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <img src={searchIcons} alt="search" onClick={toggleSearch} />
      {isOpen && (
        <div>
          <input type="search" value={query} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
          <button onClick={handleSubmit}  className="ml-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Search</button>
        </div>
      )}
    </div>
  );
};

export default Search;
