import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const NewsBoard = () => {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <LeftSide />

        <RightSide />
      </div>
    </main>
  );
};

export default NewsBoard;
