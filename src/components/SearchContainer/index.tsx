import { FaSearch } from "react-icons/fa";

import "./style.css";

export function SearchContainer() {
  return (
    <div className="searchContainer">
      <h1>Funcionários</h1>

      <div className="search">
        <input type="text" placeholder="Pesquisar" />

        <button className="submitSearch">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
