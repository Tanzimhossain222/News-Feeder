import searchIcons from "./../../assets/icons/search.svg";

const Search = () => {
  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <img src={searchIcons} alt="search" />
    </div>
  );
};

export default Search;
