import { Link } from "react-router-dom";
import Candidate from "./CandidateType";
import { MdArrowOutward } from "react-icons/md";

interface CandidateCardsProps {
  candidate: Candidate;
}
const FALLBACK_IMAGE =
  "https://i.ibb.co.com/L5dvPFg/d08cbe61699dcdccad10d7e4dd0904b0.jpg";
const FindCandidateCard: React.FC<CandidateCardsProps> = ({ candidate }) => {
  const { _id, photo, name, position, city, country } = candidate;

  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <Link to={`/candidate-detailsProfile/${_id}`} className="flex p-2">
        <div className="flex-shrink-0 mr-4">
          <img
            src={photo || FALLBACK_IMAGE}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-sm lg:text-lg font-semibold text-gray-800">
              {name}
            </h3>
            <p className=" text-xs lg:text-sm text-gray-600">{position}</p>
            <p className="text-xs lg:text-sm text-gray-600">
              {city}, {country}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="hidden md:inline-block p-1 -mt-12 border border-gray-300 bg-white hover:bg-accent hover:text-white font-semibold text-sm rounded-lg ml-1">
            <MdArrowOutward />
          </button>
          <button className="md:hidden p-2 border border-gray-300 bg-white hover:bg-accent hover:text-white rounded-lg">
            <MdArrowOutward />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default FindCandidateCard;
