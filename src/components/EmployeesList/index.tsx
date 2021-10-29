import "./style.css";

export function EmployeesList() {
  return (
    <div className="employeesTable">
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
          <tr>
            <td>
              <img src="http://lorempixel.com/200/200/people/2/" />
            </td>
            <td>Pessoa qualquer</td>
            <td>Front-end</td>
            <td>00/00/0000</td>
            <td>+55 (55) 55555-5555</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
