import { useState, useEffect } from "react";
import useFetchData from "../Hooks/useFetchData";
import SearchInput from "./SearchInput";
import DropDown from "./DropDown";
import DarkTheme from "./DarkTheme";

export type projectType = {
  id: string;
  name: string;
  description: string;
  status: string;
};
const HomePage = () => {
  const { projects } = useFetchData();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchProj, setSearchProj] = useState("");
  // console.log(projects);
  const [selectSearch, setSelectSearch] = useState("");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setCurrentPage(1);
  }, [searchProj]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectSearch]);

  const handleSelectSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSearch(e.target.value);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProj(e.target.value);
  };

  const filterProjects = projects.filter((proj: projectType) => {
    const filterSelect = selectSearch ? proj.status === selectSearch : true;
    const searchFilter = proj.name
      .toLowerCase()
      .includes(searchProj.toLowerCase());
    return searchFilter && filterSelect;
  });

  const projectPerPage = 3;
  const totalPages = Math.ceil(filterProjects.length / projectPerPage);

  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;

  const currentProjects = filterProjects.slice(indexOfFirst, indexOfLast);

  const renderPagination = (
    <div className="flex items-center gap-3 mt-5">
      {currentPage > 1 && (
        <button
          className="rounded p-3 bg-gray-700 text-gray-200 font-semibold
          cursor-pointer dark:bg-gray-200 dark:text-gray-700 "
          onClick={() => setCurrentPage((prev) => prev - 1)}
          // disabled={currentPage === 1}
        >
          Previous
        </button>
      )}
      {Array.from({ length: totalPages }, (_, idx) => {
        return (
          <button
            key={idx + 1}
            className={`p-2  rounded cursor-pointer  font-semibold ${
              currentPage === idx + 1
                ? " bg-blue-800 text-gray-200"
                : "bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-700"
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        );
      })}
      {currentPage < totalPages && (
        <button
          className="rounded py-2  px-2  cursor-pointer bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700 font-semibold"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      )}
    </div>
  );
  const renderProjects = currentProjects.map((project: projectType) => {
    return (
      <div
        key={project.id}
        className="text-gray-200 flex flex-col border-gray-400 shadow-2xl rounded p-3 gap-3 dark:bg-gray-200 dark:text-gray-700 bg-blue-900 "
      >
        <h1 className="font-semibold text-2xl">{project.name}</h1>
        <div>{project.description}</div>
        <div>{project.status}</div>
      </div>
    );
  });
  return (
    <div
      className={`bg-gray-200 min-h-screen flex justify-center ${theme} dark:bg-zinc-500`}
    >
      <div className="m-auto flex flex-col items-center gap-5">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl  text-center  font-semibold dark:text-gray-200">
            Projects{" "}
          </h1>
          <DarkTheme theme={theme} setTheme={setTheme} />
        </div>
        <div className="flex items-center gap-5">
          <SearchInput
            searchProj={searchProj}
            handleChangeSearch={handleChangeSearch}
          />
          <DropDown
            projects={projects}
            selectSearch={selectSearch}
            handleChange={handleSelectSearch}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2 ">
          {renderProjects}
        </div>
        <div>{renderPagination}</div>
      </div>
    </div>
  );
};
export default HomePage;
