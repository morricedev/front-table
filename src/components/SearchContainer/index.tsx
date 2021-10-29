import { useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useEmployee } from "../../hooks/useEmployee";

import * as S from "./styles";

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
    <S.SearchContainer>
      <S.Heading>Funcionários</S.Heading>

      <S.Search>
        <S.SearchInput ref={searchInput} type="text" placeholder="Pesquisar" />

        <S.SearchButton disabled={isLoading} onClick={handleSearch}>
          <FaSearch />
        </S.SearchButton>

        {searchInput.current?.value && (
          <S.ResetSearchButton disabled={isLoading} onClick={handleResetSearch}>
            <FaTimes />
          </S.ResetSearchButton>
        )}
      </S.Search>
    </S.SearchContainer>
  );
}
