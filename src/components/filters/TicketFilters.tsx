import { Input, Select, Space, Button, Typography } from "antd";
import type { TicketFiltersProps } from "../../typs/prop.type";
import {
  SearchOutlined,
  FilterOutlined,
  FlagOutlined,
  ReloadOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const { Option } = Select;

const TicketFilters = ({
  searchText,
  statusFilter,
  priorityFilter,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
  onClearFilters,
  onAddUser,
}: TicketFiltersProps) => {
  return (
    <div className="!bg-gray-100 p-6 rounded-lg max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
      <Input
        placeholder="Search by ID, Name, Issue, or Summary"
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: "100%", maxWidth: 400 }}
      />

      <div className="flex flex-wrap gap-2 lg:justify-end justify-center">
        <Select
          placeholder="Filter by Status"
          value={statusFilter}
          onChange={onStatusChange}
          allowClear
          className="w-full sm:w-44"
          suffixIcon={<FilterOutlined />}
        >
          <Option value="Open">Open</Option>
          <Option value="Pending">Pending</Option>
          <Option value="Closed">Closed</Option>
        </Select>

        <Select
          placeholder="Select Priority"
          value={priorityFilter}
          onChange={onPriorityChange}
          allowClear
          className="w-full sm:w-44"
          suffixIcon={<FlagOutlined />}
        >
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>

        <Button
          onClick={onClearFilters}
          className="w-[48%] sm:w-44"
          icon={<ReloadOutlined />}
        >
          Clear Filters
        </Button>

        <Button
          type="primary"
          onClick={onAddUser}
          className="w-[48%] sm:w-44"
          icon={<UserAddOutlined />}
        >
          Add User
        </Button>
      </div>
    </div>
  );
};

export default TicketFilters;
