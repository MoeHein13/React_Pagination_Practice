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
        className="border-white p-3 border rounded text-gray-200 outline-0"
      />
    </div>
  );
};

export default SearchInput;
