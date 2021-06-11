import { Col, Divider, Row } from "antd";
import React from "react";

const BalanceHeader = (props) => {
  const { income, expense } = props;

  return (
    <>
      <Row className="w-full m-3">
        <Col flex={3}>
          <div className="flex flex-col text-center font-bold">
            <span className="text-lg">Income</span>
            <span className="text-2xl text-green-900">+{income}</span>
          </div>
        </Col>
        <Col flex={3}>
          <div className="flex flex-col text-center font-bold">
            <span className="text-lg">Expense</span>
            <span className="text-2xl text-red-900"> {expense}</span>
          </div>
        </Col>
        <Divider />
      </Row>
    </>
  );
};

export default BalanceHeader;
