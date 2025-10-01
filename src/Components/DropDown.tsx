import type { projectType } from "./Homepage";

type projectsType = {
  projects: projectType[];
  selectSearch: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DropDown = ({ projects, selectSearch, handleChange }: projectsType) => {
  const statusOptions = Array.from(new Set(projects.map((pro) => pro.status)));

  const renderOptions = statusOptions.map((status) => (
    <option value={status} key={status} className="dark:text-gray-700">
      {status}
    </option>
  ));
  return (
    <>
      <select
        className="border rounded outline-0 p-3 cursor-pointer dark:border-gray-200 dark:text-gray-200"
        value={selectSearch}
        onChange={handleChange}
      >
        <option value="" className="dark:text-gray-700">
          Select By Status{" "}
        </option>
        {renderOptions}
      </select>
    </>
  );
};

export default DropDown;
