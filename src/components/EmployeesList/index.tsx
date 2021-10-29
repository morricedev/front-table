import "./style.css";
import { useEmployee } from "../../hooks/useEmployee";
import { formatDate } from "../../utils/formatDate";
import { formatPhone } from "../../utils/formatPhone";
import { Spinner } from "../Spinner";

export function EmployeesList() {
  const { employees, isLoading } = useEmployee();

  return (
    <div className="employeesTable">
      {isLoading ? (
        <Spinner />
      ) : (
        <table>
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
              employees?.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <img src={employee.image} alt={employee.name} />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.job}</td>
                  <td>{formatDate(employee.admission_date)}</td>
                  <td>{formatPhone(employee.phone)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
