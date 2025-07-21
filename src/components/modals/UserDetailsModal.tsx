import { Modal, Button, Descriptions, Tag, Select, message,  } from "antd";
import { useState, useEffect } from "react";
import type { User, UserDetailsModalProps } from "../../typs/prop.type";

const { Option } = Select;



export default function UserDetailsModal({
  open,
  user,
  onClose,
  onEdit,
  onDelete,
  onStatusUpdate,
}: UserDetailsModalProps) {
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    if (user) {
      setSelectedStatus(user.status);
    }
  }, [user]);

  if (!user) return null;

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
  };

  const handleUpdateStatus = () => {
    if (selectedStatus !== user.status) {
      onStatusUpdate(user.key, selectedStatus);
      message.success(`Status updated to ${selectedStatus}`);
    } else {
      message.info("Selected status is the same as current");
    }
  };

  return (
    <Modal
      title={
        <span className="text-xl font-semibold">
          Ticket Details - {user.ticketId}
        </span>
      }
      open={open}
      onCancel={onClose}
      footer={null}
      width={750}
    >
      <div className="space-y-6">
        <section className="border p-4 rounded bg-gray-50 shadow-sm">
          <h3 className="font-semibold text-lg mb-3">Customer Information</h3>
          <Descriptions column={2} bordered size="small">
            <Descriptions.Item label="Name">
              {user.customerName}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {user.customerEmail}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              +1 (555) 123-4567
            </Descriptions.Item>
            <Descriptions.Item label="Assigned Agent">
              {user.assignedAgent}
            </Descriptions.Item>
          </Descriptions>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-3">Issue Details</h3>
          <div className="bg-gray-50 p-3 rounded shadow-sm">
            <p>
              <strong>Summary:</strong> {user.issueSummary}
            </p>

            <p>
              <strong>Description:</strong> {user.issueDescription}
            </p>

            <div className="flex justify-between mt-3">
              <p>
                <strong>Priority:</strong>{" "}
                <Tag color={user.priority === "High" ? "red" : "orange"}>
                  {user.priority}
                </Tag>
              </p>
              <p>
                <strong>Created:</strong> {user.createdDate}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-3">Status Management</h3>
          <div className="flex items-center space-x-4">
            <p>
              <strong>Current Status:</strong>{" "}
              <Tag
                color={
                  user.status === "Open"
                    ? "red"
                    : user.status === "In Progress"
                    ? "orange"
                    : "green"
                }
              >
                {user.status}
              </Tag>
            </p>
            <Select
              value={selectedStatus}
              onChange={handleStatusChange}
              style={{ width: 150 }}
            >
              <Option value="Open">Open</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Closed">Closed</Option>
            </Select>
            <Button type="primary" onClick={handleUpdateStatus} className="!ml-2">
              Update Status
            </Button>
          </div>
        </section>

        <div className="flex justify-end space-x-3">
          <Button onClick={onClose}>Close</Button>
          <Button
            onClick={() => {
              onEdit(user);
              onClose();
            }}
          >
            Edit
          </Button>

          <Button
            danger
            onClick={() => {
              onDelete(user.key);
              onClose();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
