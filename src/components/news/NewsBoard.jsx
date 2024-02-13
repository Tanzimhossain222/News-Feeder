import { useNews } from "../../context/NewsContext";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const NewsBoard = () => {
  const { newsData } = useNews();
  const { articles, result } = newsData;

  const displayData = result ? result : articles;

  if (!displayData) {
    return <div>Loading...</div>;
  }


  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <LeftSide newsData={displayData} />

        <RightSide newsData={displayData} />
      </div>
    </main>
  );
};

export default NewsBoard;
