import "./App.css";
import { EmployeesList } from "./components/EmployeesList";

import { Header } from "./components/Header";
import { SearchContainer } from "./components/SearchContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchContainer />
        <EmployeesList />
      </main>
    </>
  );
}

export default App;
