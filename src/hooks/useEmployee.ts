import { useContext } from "react";

import { EmployeeContext } from "../contexts/employee";

export function useEmployee() {
  const context = useContext(EmployeeContext);

  return context;
}
