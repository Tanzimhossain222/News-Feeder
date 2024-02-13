import { useNews } from "../../context/NewsContext";
import LogoIcon from "./../../assets/logo.png";

const Logo = () => {
  const { handleCategorySelect } = useNews();
  const handleClick = (event) => {
    event.preventDefault();
    handleCategorySelect("");
  };

  return (
    <>
      <a href="/" onClick={handleClick}>
        <img
          className="max-w-[100px] md:max-w-[165px]"
          src={LogoIcon}
          alt="Lws"
        />
      </a>
    </>
  );
};

export default Logo;
