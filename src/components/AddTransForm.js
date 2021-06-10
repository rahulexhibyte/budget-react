import { Button, Form, Input, InputNumber } from "antd";
import React from "react";

const AddTransForm = (props) => {
  return (
    <>
      <div className="m-5">
        <div className="font-bold text-lg pb-5">Add New Transaction</div>
        <Form
          layout="vertical"
          className="flex flex-col md:w-2/4 lg:w-1/4 font-bold"
        >
          <Form.Item label="Description" colon={true}>
            <Input placeholder="Enter Description" />
          </Form.Item>
          <Form.Item label="Value">
            <InputNumber min={1} placeholder="value" />
          </Form.Item>
          <Button type="primary" className="w-3/12">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddTransForm;
