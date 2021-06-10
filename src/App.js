import { Button, Col, Modal, PageHeader, Row } from "antd";
import { useState } from "react";
import "./App.css";
import AddTransForm from "./components/AddTransForm";
import BalanceHeader from "./components/BalanceHeader";
import TotalBalance from "./components/TotalBalance";
import Transaction from "./components/Transactions";
import EditTransactions from "./components/EditTransactions";

const initialTransactions = [
  {
    description: "Snakes",
    value: 50.0,
    isExpense: true,
  },
  {
    description: "January Salary",
    value: 25000.0,
    isExpense: false,
  },
  {
    description: "Wife Jan. Salary",
    value: 20000.0,
    isExpense: false,
  },
];

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedId, setSelecteId] = useState(null);

  const onFormSubmit = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    console.log(newTransaction);
  };

  const onDeleteTransactions = (transindex) => {
    const filteredTransactions = transactions.filter(
      (transaction, index) => index !== transindex
    );
    console.log(filteredTransactions);
    setTransactions(filteredTransactions);
  };

  const onModelVisible = (id) => {
    setIsModalVisible(true);
    onEditHandler(id);
  };

  const onCancleHandler = () => {
    setIsModalVisible(false);
  };

  const onEditHandler = (id) => {
    setSelecteId(id);
  };

  return (
    <>
      <PageHeader title="Budget" />
      <Row className="flex flex-row">
        <Col className="flex-1">
          <div>
            <TotalBalance value={25000.0} />

            <BalanceHeader income={1245.5} expenses={1245.5} />
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
                    onEdit={onModelVisible}
                  />
                );
              })}
          </div>
        </Col>
        <Col className="flex-1">
          <AddTransForm onSubmit={onFormSubmit} />
        </Col>
      </Row>
      <Modal
        centered
        onCancel={onCancleHandler}
        visible={isModalVisible}
        footer={[
          <Button key="cancel" onClick={onCancleHandler}>
            Cancel
          </Button>,
          <Button key="edit" onClick={onEditHandler} type="primary">
            Edit
          </Button>,
        ]}
      >
        <EditTransactions
          onSubmit={onFormSubmit}
          selectedItem={transactions[selectedId]}
        />
      </Modal>
    </>
  );
}

export default App;
