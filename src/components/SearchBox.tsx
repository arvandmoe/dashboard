import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, MouseEventHandler } from "react";

interface SearchBoxProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SearchBox: FC<SearchBoxProps> = ({ onClick }) => {
  return (
    <button
      className={
        "font-bold py-3 px-8 rounded-lg bg-white text-black shadow hover:bg-gray flex justify-self-end "
      }
      onClick={onClick}
    >
      <div className="pr-4">
        {<FontAwesomeIcon icon={faSearch} className="px-2" />}
      </div>
      <input placeholder="Search"></input>
    </button>
  );
};

export default SearchBox;
