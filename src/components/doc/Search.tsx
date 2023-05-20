"use client";
import { useState, useRef } from "react";
import { SearchIcon, HashIcon } from "../ui/Icons";
import { tableOfContent } from "./tableOfContent";
import useDropdown from "@/hooks/useDropdown";

const Search = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [searchedData, setSearchedData] = useState(tableOfContent);
  const { dropdown, setDropdown } = useDropdown();

  const handleSearchData = () => {
    const searchTerm = searchRef?.current?.value?.toLowerCase() || "";
    const filterListItems = tableOfContent.filter((data) => {
      return data.parent.toLowerCase().includes(searchTerm);
    });
    setSearchedData(filterListItems);
  };

  const handleOpenSearchList = () => {
    setDropdown(true);
  };

  return (
    <div className="relative w-full mt-16">
      <SearchIcon style="absolute top-4 left-4" />
      <input
        type="search"
        placeholder="Search what you want"
        className="w-[70%] py-[10px] px-9 rounded-lg border-2 border-glassBorder bg-glass"
        ref={searchRef}
        onChange={handleSearchData}
        onFocus={handleOpenSearchList}
      />
      {dropdown && (
        <div className="w-[70%] h-[220px] absolute top-16 flex flex-col space-y-2 rounded-lg p-4 bg-glass overflow-auto">
          {searchedData.map((parentData, parentInd) => {
            return (
              <>
                <a
                  href={`#${parentData.parent}`}
                  key={parentInd}
                  className="capitalize font-medium hover:bg-glassBorder px-3 py-2 rounded-lg"
                  onClick={() => setDropdown(false)}
                >
                  <HashIcon style="mr-3" /> {parentData.parent}
                </a>
                {parentData.childrens?.map((childData, childInd) => {
                  return (
                    <a
                      key={childInd}
                      href={`#${childData}`}
                      className="capitalize font-medium hover:bg-glassBorder px-3 py-2 rounded-lg"
                      onClick={() => setDropdown(false)}
                    >
                      <HashIcon style="mr-3" /> {childData}
                    </a>
                  );
                })}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
