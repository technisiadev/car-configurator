import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import { FC, useContext, useState } from "react";
import {
  SpecsContextInterface,
  SpecsCTX,
} from "../../contexts/SpecsListContext";

interface NewFieldType {
  name: string;
  label: string;
}

const SpecsForm: FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const specsCTX = useContext(SpecsCTX);
  const [dynamicFields, setDynamicFields] = useState<NewFieldType[] | []>([]);
  const [form] = Form.useForm();

  const onFinish = (values: SpecsContextInterface) => {
    specsCTX?.save(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinishNewField = (values: NewFieldType) => {};

  const buildField = () => {
    let values = form.getFieldsValue();
    let validateExistence = dynamicFields.findIndex(
      (field) => values.name === field.name
    );
    
    if (validateExistence === -1) {
      setDynamicFields([...dynamicFields, values]);
      setShowModel(false);
    }
  };

  return (
    <div className="w-5/12">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-[#fafafa] py-3 mt-3 w-full border border-[#d9d9d9]"
      >
        Make new specification
      </button>

      {showForm && (
        <div className="mt-2">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name of specification"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input name of specification",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Engine" name="engine">
              <Select placeholder="Engine">
                <Select.Option value="1.6">1.6</Select.Option>
                <Select.Option value="1.5">1.5</Select.Option>
                <Select.Option value="1.2">1.2</Select.Option>
                <Select.Option value="2.6">2.6</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Interior Material" name="interior">
              <Select placeholder="Interior">
                <Select.Option value="leather">Leather</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Color" name="color">
              <Select placeholder="Color">
                <Select.Option value="red">Red</Select.Option>
                <Select.Option value="blue">Blue</Select.Option>
                <Select.Option value="black">Black</Select.Option>
                <Select.Option value="white">White</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Wheel rims" name="rims">
              <Select placeholder="Rims">
                <Select.Option value="steel">Steel</Select.Option>
                <Select.Option value="alloy">Alloy</Select.Option>
                <Select.Option value="chome">Chrome</Select.Option>
                <Select.Option value="spinner">Spinners</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="AirSuspension"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>AirSuspension</Checkbox>
            </Form.Item>

            <Form.Item label="Signature at roof" name="signature">
              <Input />
            </Form.Item>

            {dynamicFields.map((each) => (
              <Form.Item label={each.label} name={each.name}>
                <Input />
              </Form.Item>
            ))}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="dashed"
                onClick={() => setShowModel(!showModel)}
                block
              >
                Add New Field
              </Button>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}

      <Modal
        title="Add new field"
        open={showModel}
        onOk={buildField}
        onCancel={() => setShowModel(false)}
      >
        <Form onFinish={onFinishNewField} form={form}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="label" label="Label">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SpecsForm;
