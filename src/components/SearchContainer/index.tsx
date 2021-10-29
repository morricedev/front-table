import { useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useEmployee } from "../../hooks/useEmployee";

import "./style.css";

export function SearchContainer() {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const { isLoading, searchEmployees, fetchEmployees } = useEmployee();

  const handleSearch = () => {
    const inputValue = searchInput.current?.value;
    if (!inputValue) return;

    searchEmployees(inputValue);
  };

  const handleResetSearch = () => {
    if (searchInput.current) {
      searchInput.current.value = "";
    }

    fetchEmployees();
  };

  return (
    <div className="searchContainer">
      <h1>Funcionários</h1>

      <div className="search">
        <input ref={searchInput} type="text" placeholder="Pesquisar" />

        <button
          disabled={isLoading}
          className="submitSearch"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>

        {searchInput.current?.value && (
          <button
            disabled={isLoading}
            className="resetSearch"
            onClick={handleResetSearch}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
}
