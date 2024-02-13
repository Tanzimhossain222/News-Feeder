import PropTypes from "prop-types";
import { formatDate } from "../../utils/TimeConvert";

const RightSide = ({ newsData }) => {
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {newsData.map((newsItem, index) => (
          <div
            key={index}
            className={`col-span-12 ${
              index === 0 ? "mb-6 md:col-span-8" : "md:col-span-8"
            }`}
          >
            {newsItem.urlToImage && (
              <img className="w-full" src={newsItem.urlToImage} alt="thumb" />
            )}
            <div className="col-span-12 mt-6 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {newsItem.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">{newsItem.description}</p>
              <p className="mt-5 text-base text-[#94908C]">
                {formatDate(newsItem.publishedAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

RightSide.propTypes = {
  newsData: PropTypes.array.isRequired,
};

export default RightSide;
