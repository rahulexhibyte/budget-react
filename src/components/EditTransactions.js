import { Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

const AddTransForm = (props) => {
  const { description, isExpense, value } = props.selectedItem;
  const [tType, setTType] = useState(isExpense ? "expense" : "income");
  const onFinishHandler = (data) => {
    props.onSubmit({
      ...data,
      isExpense: tType === "expense",
    });
  };

  const onMenuChangeHandler = (key) => {
    setTType(key);
  };

  return (
    <>
      <div className="m-1">
        <div className="font-bold text-lg pb-5">Edit Transaction</div>
        <Form
          onFinish={onFinishHandler}
          layout="vertical"
          className="flex flex-col lg:w-1/2 md:w-1/2 font-bold"
        >
          <Form.Item
            label="Description"
            colon={true}
            name="description"
            defaultValue={description}
          >
            <Input placeholder="Enter Description" value={description} />
          </Form.Item>
          <Form.Item label="Transaction Type">
            <Select
              placeholder="Select Transaction Type"
              className="w-3/4"
              onChange={onMenuChangeHandler}
              defaultValue="income"
            >
              <Option key="income">Income</Option>
              <Option key="expense">Expense</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Value" name="value">
            <InputNumber
              min={1}
              placeholder="value"
              defaultValue={value}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddTransForm;
