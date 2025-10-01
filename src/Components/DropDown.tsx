import type { projectType } from "./Homepage";

type projectsType = {
  projects: projectType[];
  selectSearch: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DropDown = ({ projects, selectSearch, handleChange }: projectsType) => {
  const statusOptions = Array.from(new Set(projects.map((pro) => pro.status)));

  const renderOptions = statusOptions.map((status) => (
    <option value={status} key={status}>
      {status}
    </option>
  ));
  return (
    <>
      <select
        className="border rounded outline-0 p-3 cursor-pointer"
        value={selectSearch}
        onChange={handleChange}
      >
        <option value="">Select By Status </option>
        {renderOptions}
      </select>
    </>
  );
};

export default DropDown;
