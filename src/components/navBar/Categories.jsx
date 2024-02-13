import { useNews } from "../../context/NewsContext";

const Categories = () => {
  const { handleCategorySelect } = useNews();

  const handleCategoryClick = (category) => {
    handleCategorySelect(category);
  };

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a href="#" onClick={() => handleCategoryClick("general")}>
            General
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategoryClick("business")}>
            Business
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategoryClick("entertainment")}>
            Entertainment
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategoryClick("health")}>
            Health
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategoryClick("science")}>
            Science
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategoryClick("sports")}>
            Sports
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategoryClick("technology")}>
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
