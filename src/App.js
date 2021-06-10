import {
  Col,
  Divider,
  Input,
  PageHeader,
  Row,
  Form,
  InputNumber,
  Space,
  Button,
} from "antd";
import "./App.css";

function App() {
  return (
    <>
      <PageHeader title="Budget" />

      <div className="flex flex-col font-bold m-5">
        <span className="text-lg">Total Balance :</span>
        <span className="text-2xl ml-5 text-green-500">$25,000.50</span>
      </div>
      <Row className="lg:w-2/4 md:w-full m-3">
        <Col flex={3}>
          <div className="flex flex-col text-center font-bold">
            <span className="text-lg">Incoming</span>
            <span className="text-2xl text-green-900">+ 1245.50</span>
          </div>
        </Col>
        <Col flex={3}>
          <div className="flex flex-col text-center font-bold">
            <span className="text-lg">Expenses</span>
            <span className="text-2xl text-red-900">- 1245.50</span>
          </div>
        </Col>
        <Divider />
      </Row>
      <Row className="lg:w-2/4 md:w-full my-3 px-10">
        <Col flex={1}>
          <div className="flex justify-between bg-green-500 bg-opacity-50 p-5 rounded-xl">
            <span className="font-bold">Snacks</span>
            <div className="">
              <span className="font-bold">$100.00</span>
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
      <Row className="lg:w-2/4 md:w-full my-3 px-10">
        <Col flex={1}>
          <div className="flex justify-between bg-red-500 bg-opacity-50 p-5 rounded-xl">
            <span className="font-bold">Snacks</span>
            <div className="">
              <span className="font-bold">$100.00</span>
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
}

export default App;
