import { Modal, Form, Input, Button, Select, DatePicker, Row, Col } from "antd";

import type { UserFormModalProps } from "../../typs/prop.type";

const { Option } = Select;

export default function UserFormModal({
  open,
  onClose,
  form,
  editingKey,
  onSubmit,
  onAddUser,
}: UserFormModalProps) {
  return (
    <>
      <div className="mt-10 container max-w-7xl mx-auto">
        {/* <Button type="primary" onClick={onAddUser} className="lg:!ml-[90%] mb-4 ml-[40%] ">
          Add User
        </Button> */}
      </div>

      <Modal
        open={open}
        title={editingKey !== null ? "Edit Ticket" : "Create Ticket" }
        onCancel={onClose}
        footer={null}
        style={{ top: 20 }}  
      >
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          {/* <Form.Item
          name="ticketId"
          label="Ticket ID"
          rules={[{ required: true, message: "Please input ticket ID!" }]}
        >
          <Input placeholder="Enter Ticket ID" />
        </Form.Item> */}

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="customerName"
                label="Customer Name"
                rules={[
                  { required: true, message: "Please input customer name!" },
                ]}
              >
                <Input placeholder="Enter Customer Name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="customerEmail"
                label="Customer Email"
                rules={[
                  { required: true, message: "Please input customer email!" },
                ]}
              >
                <Input placeholder="Enter Customer Email" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="issueSummary"
            label="Issue Summary"
            rules={[{ required: true, message: "Please input issue summary!" }]}
          >
            <Input placeholder="Enter Issue Summary" />
          </Form.Item>

         <Row gutter={16}>
           <Col span={12}>
           <Form.Item
            name="priority"
            label="Priority"
            rules={[{ required: true, message: "Please select priority!" }]}
          >
            <Select placeholder="Select Priority">
              <Option value="High">High</Option>
              <Option value="Medium">Medium</Option>
              <Option value="Low">Low</Option>
            </Select>
          </Form.Item>
           </Col>

          <Col span={12}>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select status!" }]}
          >
            <Select placeholder="Select Status">
              <Option value="Open">Open</Option>
              <Option value="In Progress">Pending</Option>
              <Option value="Closed">Closed</Option>
            </Select>
          </Form.Item>
            </Col>
          </Row>

         <Row gutter={16}>
          <Col span={12}>
           <Form.Item
            name="createdDate"
            label="Created Date"
            rules={[{ required: true, message: "Please select created date!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          </Col>

        <Col span={12}>
          <Form.Item
            name="assignedAgent"
            label="Assigned Agent"
            rules={[
              { required: true, message: "Please input assigned agent!" },
            ]}
          >
            <Input placeholder="Enter Assigned Agent Name" />
          </Form.Item>
        </Col>
          </Row>

          <Form.Item
            name="issueDescription"
            label="Issue Description"
            rules={[
              { required: true, message: "Please input issue description!" },
            ]}
          >
            <Input.TextArea placeholder="Enter Issue Description" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {editingKey !== null ? "Update Ticket" : "Create Ticket"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
