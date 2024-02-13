import PropTypes from "prop-types";
import { formatDate } from "../../utils/TimeConvert";

const LeftSide = ({ newsData }) => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {newsData.map((newsItem, index) => (
        <div
          key={index}
          className={`col-span-12 ${
            index < 2
              ? "grid grid-cols-12 gap-4"
              : "md:col-span-6 lg:col-span-4"
          } ${index === 1 ? "lg:col-span-8" : ""}`}
        >
          {index < 2 ? (
            <>
              <div className="col-span-12 lg:col-span-4">
                <a href={newsItem.url}>
                  <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                    {newsItem.title}
                  </h3>
                </a>
                <p className="text-base text-[#5C5955]">
                  {newsItem.description}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">
                  {formatDate(newsItem.publishedAt)}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-8">
                {newsItem.urlToImage && (
                  <img
                    className="w-full"
                    src={newsItem.urlToImage}
                    alt="thumb"
                  />
                )}
              </div>
            </>
          ) : (
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="col-span-12 md:col-span-4">
                <a href={newsItem.url}>
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                    {newsItem.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">
                  {newsItem.description}
                </p>
                <p className="mt-5 text-base text-[#94908C]">
                  {formatDate(newsItem.publishedAt)}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

LeftSide.propTypes = {
  newsData: PropTypes.array.isRequired,
};

export default LeftSide;
