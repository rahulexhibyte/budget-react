import React from "react";
import { Col, Row } from "antd";

const Transaction = (props) => {
  const { isExpense, title, value, onDelete, id } = props;
  const bgColor = isExpense ? "bg-red-500" : "bg-green-500";

  const onDeleteHandler = () => {
    onDelete(id);
  };
  return (
    <>
      <Row className="w-full my-3 px-10">
        <Col flex={1}>
          <div
            className={`flex justify-between bg-opacity-50 p-5 rounded-xl ${bgColor}`}
          >
            <span className="font-bold">{title}</span>
            <div className="">
              <span className="font-bold">${value}</span>
              <span
                className="font-bold ml-5 px-5 p-2 cursor-pointer bg-white rounded-lg"
                onClick={onDeleteHandler}
              >
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
