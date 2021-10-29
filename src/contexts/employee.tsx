import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { IEmployee } from "../types/employee";

interface IEmployeeContext {
  employees: IEmployee[] | null;
  isLoading: boolean;
  searchEmployees: (query: string) => void;
  fetchEmployees: () => void;
}

export const EmployeeContext = createContext({} as IEmployeeContext);

interface IEmployeeProviderProps {
  children: ReactNode;
}

export function EmployeeProvider({ children }: IEmployeeProviderProps) {
  const [employees, setEmployees] = useState<IEmployee[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchEmployees = useCallback((query: string) => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data } = await api.get<IEmployee[]>(`employees?q=${query}`);

      setEmployees(data);
      setIsLoading(false);
    }, 1500);
  }, []);

  const fetchEmployees = useCallback(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data } = await api.get<IEmployee[]>("employees");

      setEmployees(data);
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    fetchEmployees();

    return () => {
      setEmployees([]);
    };
  }, [fetchEmployees]);

  return (
    <EmployeeContext.Provider
      value={{ employees, isLoading, searchEmployees, fetchEmployees }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
