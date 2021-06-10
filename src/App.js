import { PageHeader } from "antd";
import "./App.css";
import AddTransForm from "./components/AddTransForm";
import BalanceHeader from "./components/BalanceHeader";
import TotalBalance from "./components/TotalBalance";
import Transaction from "./components/Transactions";

function App() {
  return (
    <>
      <PageHeader title="Budget" />
      <TotalBalance value={25000.0} />
      <BalanceHeader income={1245.5} expenses={1245.5} />
      <Transaction isExpense title="snakes" value={100.5} />
      <Transaction title="snakes" value={100.5} />
      <Transaction isExpense title="snakes" value={100.5} />
      <AddTransForm />
    </>
  );
}

export default App;
