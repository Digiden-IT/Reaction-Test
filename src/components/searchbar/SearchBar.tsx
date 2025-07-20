import type { SearchBarProps } from "../../typs/prop.type";




const SearchBar = ({ searchText, onSearchChange } : SearchBarProps) => {
  return (
    <div className="container max-w-[500px] mx-auto mt-4 mb-2">
      <input
        type="text"
        placeholder="Search by ID, Name, Issue, or Summary"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default SearchBar;
