import PropsType from "prop-types";
import { formatDate } from "../../utils/TimeConvert";

const LeftSide = ({ newsData }) => {
  console.log('Rendering LeftSide component...');
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {newsData.map((newsItem, index) => (
        <div key={index} className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <a href={newsItem.url}>
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {newsItem.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{newsItem.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {formatDate(newsItem.publishedAt)}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <img className="w-full" src={newsItem.urlToImage} alt="thumb" />
            {/* <p className="mt-5 text-base text-[#5C5955]">{newsItem.author}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

LeftSide.propTypes = {
  newsData: PropsType.array.isRequired,
};

export default LeftSide;
