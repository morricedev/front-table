import * as S from "./styles";

import { useEmployee } from "../../hooks/useEmployee";
import { Spinner } from "../Spinner";

import { formatDate } from "../../utils/formatDate";
import { formatPhone } from "../../utils/formatPhone";

export function EmployeesList() {
  const { employees, isLoading } = useEmployee();

  return (
    <S.EmployeesListContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <S.EmployeesTable>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Data de admissão</th>
              <th>Telefone</th>
            </tr>
          </thead>

          <tbody>
            {employees?.length === 0 ? (
              <tr>
                <td colSpan={5}>Funcionários não foram encontrados</td>
              </tr>
            ) : (
              employees?.map(
                ({ id, image, name, job, admission_date, phone }) => (
                  <tr key={id}>
                    <td>
                      <img src={image} alt={name} />
                    </td>
                    <td>{name}</td>
                    <td>{job}</td>
                    <td>{formatDate(admission_date)}</td>
                    <td>{formatPhone(phone)}</td>
                  </tr>
                )
              )
            )}
          </tbody>
        </S.EmployeesTable>
      )}
    </S.EmployeesListContainer>
  );
}
