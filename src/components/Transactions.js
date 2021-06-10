import { Col, Row } from "antd";
import React from "react";

const Transaction = (props) => {
  const { isExpense, title, value } = props;
  const bgColor = isExpense ? "bg-red-500" : "bg-green-500";
  return (
    <>
      <Row className="lg:w-2/4 md:w-full my-3 px-10">
        <Col flex={1}>
          <div
            className={`flex justify-between bg-opacity-50 p-5 rounded-xl ${bgColor}`}
          >
            <span className="font-bold">{title}</span>
            <div className="">
              <span className="font-bold">${value}</span>
              <span className="font-bold ml-5 px-5 p-2 cursor-pointer bg-white rounded-lg">
                Edit
              </span>
              <span className="font-bold ml-5 px-5 p-2 cursor-pointer bg-white rounded-lg">
                Delete
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Transaction;
