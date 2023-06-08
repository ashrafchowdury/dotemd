"use client";
import { useState, useRef } from "react";
import { SearchIcon, HashIcon } from "../ui/Icons";
import { tableOfContent } from "../../utils/tableOfContent";
import useDropdown from "@/hooks/useDropdown";

const Search = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [searchedData, setSearchedData] = useState(tableOfContent);
  const { dropdown, setDropdown } = useDropdown();

  const handleSearchDoc = () => {
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
    <div className="relative w-full lg:mt-16 mt-10">
      <SearchIcon style="absolute md:top-[14px] top-4 left-4 md:text-[16px] text-sm" />
      <input
        type="search"
        placeholder="Search what you want"
        className="lg:w-[70%] md:w-[90%] w-full md:text-[16px] text-sm py-[10px] md:px-10 px-9 rounded-lg border-2 border-glassBorder bg-glass"
        ref={searchRef}
        onChange={handleSearchDoc}
        onFocus={handleOpenSearchList}
      />
      {dropdown && (
        <div className="lg:w-[70%] md:w-[90%] w-full lg:h-[220px] h-[180px] absolute top-16 flex flex-col space-y-2 rounded-lg p-4 bg-dark border border-glass overflow-auto">
          {searchedData.map((parentData, parentInd) => {
            return (
              <>
                <a
                  href={`#${parentData.parent}`}
                  key={parentInd}
                  className="capitalize md:text-[16px] text-sm font-medium hover:bg-glassBorder px-3 py-2 rounded-lg"
                  onClick={() => setDropdown(false)}
                >
                  <HashIcon style="mr-3" /> {parentData.parent}
                </a>
                {parentData.childrens?.map((childData, childInd) => {
                  return (
                    <a
                      key={childInd}
                      href={`#${childData}`}
                      className="capitalize md:text-[16px] text-sm font-medium hover:bg-glassBorder px-3 py-2 rounded-lg"
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
