import { useNews } from "../../context/NewsContext";
import FooterList from "./FooterList";
import FooterLogo from "./FooterLogo";
import FooterSocialIcons from "./FooterSocialIcons";

const FooterGrid = () => {
  const { handleCategorySelect } = useNews();

  const handleCategoryClick = (category) => {
    handleCategorySelect(category);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5">
        <FooterLogo />

        <>
          <ul role="list" className="space-y-4">
            <li>
              <a
                href="#"
                className="text-sm font-semibold"
                onClick={() => handleCategoryClick("")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#general"
                className="text-sm font-semibold"
                onClick={() => handleCategoryClick("general")}
              >
                General
              </a>
            </li>
            <li>
              <a
                href="#business"
                className="text-sm font-semibold"
                onClick={() => handleCategoryClick("business")}
              >
                Business
              </a>
            </li>
            <li>
              <a
                href="#entertainment"
                className="text-sm font-semibold"
                onClick={() => handleCategoryClick("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li>
              <a
                href="#health"
                className="text-sm font-semibold"
                onClick={() => handleCategoryClick("health")}
              >
                Health
              </a>
            </li>
            <li>
              <a
                href="#science"
                className="text-sm font-semibold"
                onClick={() => handleCategoryClick("science")}
              >
                Science
              </a>
            </li>
          </ul>

          <ul role="list" className="space-y-4">
            <li>
              <a
                href="#sports"
                className="text-sm font-semibold"
                onClick={() => handleCategoryClick("sports")}
              >
                Sports
              </a>
            </li>
            <li>
              <a
                href="#technology"
                className="text-sm font-semibold"
                onClick={() => handleCategoryClick("technology")}
              >
                Technology
              </a>
            </li>
          </ul>

          <FooterList />
        </>
        <FooterSocialIcons />
      </div>
    </>
  );
};

export default FooterGrid;
