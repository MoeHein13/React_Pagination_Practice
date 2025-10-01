import { useState, useEffect } from "react";
import useFetchData from "../Hooks/useFetchData";
import SearchInput from "./SearchInput";
import DropDown from "./DropDown";

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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchProj]);

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
          className="rounded p-3 bg-gray-400 cursor-pointer"
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
            className={`py-2 px-1 bg-blue-400 rounded cursor-pointer ${
              currentPage === idx + 1 ? "bg-blue-900 text-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        );
      })}
      {currentPage < totalPages && (
        <button
          className="rounded py-2  px-2 bg-gray-400 cursor-pointer"
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
        className="flex flex-col border-gray-400 shadow-2xl rounded p-3 gap-3 bg-gray-300"
      >
        <h1 className="font-semibold text-2xl">{project.name}</h1>
        <div>{project.description}</div>
        <div>{project.status}</div>
      </div>
    );
  });
  return (
    <div className="bg-gray-600 min-h-screen flex justify-center">
      <div className="m-auto flex flex-col items-center gap-5">
        <h1 className="text-2xl  text-center text-gray-100 font-semibold">
          Projects{" "}
        </h1>
        <SearchInput
          searchProj={searchProj}
          handleChangeSearch={handleChangeSearch}
        />
        <DropDown
          projects={projects}
          selectSearch={selectSearch}
          handleChange={handleSelectSearch}
        />
        <div className="grid grid-cols-3 gap-2 ">{renderProjects}</div>
        <div>{renderPagination}</div>
      </div>
    </div>
  );
};
export default HomePage;
