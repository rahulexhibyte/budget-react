import { Col, PageHeader, Row } from "antd";
import "./App.css";
import AddTransForm from "./components/AddTransForm";
import BalanceHeader from "./components/BalanceHeader";
import TotalBalance from "./components/TotalBalance";
import Transaction from "./components/Transactions";
import { useDispatch, useSelector } from "react-redux";
import actions from "./Actions";

function App() {
  const { transactions, totalIncome, totalExpense, totalBalance } = useSelector(
    (store) => store
  );
  const dispatch = useDispatch();

  const onFormSubmit = (newTransaction) => {
    dispatch({ type: actions.addTransactions, transaction: newTransaction });
  };

  const onDeleteTransactions = (transIndex) => {
    dispatch({ type: actions.deleteTransactions, itemIndex: transIndex });
  };

  return (
    <>
      <PageHeader title="Budget" />
      <Row className="flex flex-row">
        <Col className="flex-1">
          <div>
            <TotalBalance value={totalBalance} />

            <BalanceHeader income={totalIncome} expense={totalExpense} />
            {transactions.length === 0 && (
              <div className="text-center font-bold">
                No Transactions Found!!!
              </div>
            )}
            {transactions.length !== 0 &&
              transactions.map((transaction, index) => {
                return (
                  <Transaction
                    id={index}
                    key={index}
                    isExpense={transaction.isExpense}
                    title={transaction.description}
                    value={transaction.value}
                    onDelete={onDeleteTransactions}
                  />
                );
              })}
          </div>
        </Col>
        <Col className="flex-1">
          <AddTransForm onSubmit={onFormSubmit} />
        </Col>
      </Row>
    </>
  );
}

export default App;
