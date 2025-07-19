import { Table, Button, Dropdown, Menu, type TableColumnsType, Tag } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import type { User, UserTableProps,  } from "../../typs/prop.type";


const UserTable = ({ users, onEdit, onDelete }: UserTableProps) => {
  const columns: TableColumnsType<User> = [
    {
      title: "Ticket ID",
      dataIndex: "key",
      key: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Issue Summary",
      dataIndex: "issueSummary",
      key: "issueSummary",
    },
    {
  title: "Priority",
  dataIndex: "priority",
  key: "priority",
  render: (priority: string) => {
    let color = '';
    if (priority === 'High') color = 'red';
    else if (priority === 'Medium') color = 'orange';
    else if (priority === 'Low') color = 'green';

    return <Tag style={{ color }}>{priority}</Tag>;
  }
},
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render : (status: string) => {
        let color ='';
        if (status === 'Open') color = 'blue';
        else if (status === 'In Progress') color = 'orange';
        return <Tag style={{ color }}>{status}</Tag>;
    }
},
    {
      title: "Created Date",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Assigned Agent",
      dataIndex: "assignedAgent",
      key: "assignedAgent",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => {
        const menu = (
         <Menu>
            <Menu.Item key="view" >
              View Details
            </Menu.Item>
            <Menu.Item key="edit" onClick={() => onEdit(record)}>
              Edit
            </Menu.Item>
            <Menu.Item key="delete" danger onClick={() => onDelete(record.key)}>
              Delete
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={['click']}>
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      pagination={{ pageSize: 5 }}
      rowKey="key"
    />
  );
};

export default UserTable;
