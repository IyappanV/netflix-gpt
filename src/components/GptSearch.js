import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const { gptMovie } = useSelector((store) => store.gpt);
  return (
    <div>
      <div className="fixed -z-10 overflow-hidden bg-black">
        <img className="h-screen object-cover md:h-auto" src={BG_URL} alt="Logo" />
      </div>
      <div className="">
        <GptSearchBar />
        {gptMovie && <GptMovieSuggestions />}
      </div>
    </div>
  );
};

export default GptSearch;
