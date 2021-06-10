import { Col, Divider, Row } from "antd";
import React from "react";

const BalanceHeader = (props) => {
  const { income, expenses } = props;
  return (
    <>
      <Row className="w-full m-3">
        <Col flex={3}>
          <div className="flex flex-col text-center font-bold">
            <span className="text-lg">Incoming</span>
            <span className="text-2xl text-green-900">+ {income}</span>
          </div>
        </Col>
        <Col flex={3}>
          <div className="flex flex-col text-center font-bold">
            <span className="text-lg">Expenses</span>
            <span className="text-2xl text-red-900">- {expenses}</span>
          </div>
        </Col>
        <Divider />
      </Row>
    </>
  );
};

export default BalanceHeader;
