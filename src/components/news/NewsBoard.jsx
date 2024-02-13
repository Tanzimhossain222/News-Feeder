import { useNews } from "../../context/NewsContext";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const NewsBoard = () => {
  const { newsData } = useNews();
  const { articles, result } = newsData;  //Here result is the search result from the search query and articles is the top headlines data
  const displayData = result ? result : articles;

  //if result is not available, Show No data found message
  if (result && result.length === 0) {
    return (
      <div className="flex items-center justify-center h-32">
        <p className="text-red-500 text-xl font-semibold">No data found</p>
      </div>
    );
  }

  //if displayData is not available, Show Loading Spinner
  if (!displayData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-pulse flex space-x-4">
          <div className="bg-gray-300 h-8 w-48 rounded"></div>
          <div className="bg-gray-300 h-8 w-48 rounded"></div>
          <div className="bg-gray-300 h-8 w-48 rounded"></div>
        </div>
      </div>
    );
  }

  const leftSideData = displayData.slice(
    0,
    Math.ceil(displayData.length * 0.8)
  ); // 80% of data
  const rightSideData = displayData.slice(Math.ceil(displayData.length * 0.8)); // Remaining 20% of data

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <LeftSide newsData={leftSideData} />
        <RightSide newsData={rightSideData} />
      </div>
    </main>
  );
};

export default NewsBoard;
