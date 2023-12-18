import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const GptMovieSuggestions = () => {
  const { gptMovie } = useSelector((store) => store.gpt);

  return (
    <div className="my-7 bg-black bg-opacity-90">
      <h1 className="text-lg md:text-2xl font-bold py-2 mx-4 text-white">
        Search Results
      </h1>
      <div className="flex overflow-x-scroll">
        {gptMovie &&
          gptMovie.map((movie) => (
            <div className="px-2 py-1 ">
              <div className="w-36 md:w-52 pr-4">
                {movie.poster_path ? (
                  <img alt="Movie Card" src={IMG_CDN_URL + movie.poster_path} />
                ) : (
                  <p className="p-4 m-4 text-xl text-white">Movie Poster Is Not Available!</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
