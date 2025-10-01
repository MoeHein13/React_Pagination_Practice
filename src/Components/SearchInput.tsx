type inputType = {
  searchProj: string;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ searchProj, handleChangeSearch }: inputType) => {
  return (
    <div>
      <input
        type="text"
        placeholder="searchFolder"
        value={searchProj}
        onChange={handleChangeSearch}
        className="border-gray-800  p-3 border rounded text-gray-800 outline-0 dark:text-gray-200 dark:border-gray-200"
      />
    </div>
  );
};

export default SearchInput;
