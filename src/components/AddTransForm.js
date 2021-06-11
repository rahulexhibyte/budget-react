import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

const AddTransForm = (props) => {
  const [tType, setTType] = useState("income");
  const [form] = Form.useForm();
  const onFinishHandler = (data) => {
    props.onSubmit({
      ...data,
      isExpense: tType === "expense",
    });
    form.resetFields();
  };

  const onMenuChangeHandler = (key) => {
    console.log(key);
    setTType(key);
  };

  return (
    <>
      <div className="m-5">
        <div className="font-bold text-lg pb-5">Add New Transaction</div>
        <Form
          form={form}
          onFinish={onFinishHandler}
          layout="vertical"
          className="flex flex-col lg:w-1/2 md:w-1/2 font-bold"
        >
          <Form.Item label="Description" colon={true} name="description">
            <Input placeholder="Enter Description" />
          </Form.Item>
          <Form.Item label="Transaction Type" name="ttype">
            <Select
              placeholder="Select Transaction Type"
              className="w-3/4"
              onChange={onMenuChangeHandler}
              allowClear
            >
              <Option key="income">Income</Option>
              <Option key="expense">Expense</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Value" name="value">
            <InputNumber
              min={1}
              placeholder="value"
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Button type="primary" className="w-6/12" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddTransForm;
