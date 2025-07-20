
import { Input, Select, Space, Button } from "antd";
import type { TicketFiltersProps } from "../../typs/prop.type";

const { Option } = Select;



const TicketFilters = ({
  searchText,
  statusFilter,
  priorityFilter,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
  onClearFilters
}: TicketFiltersProps) => {
  return (
    <Space style={{ marginBottom: 16, justifyContent: "center", display: "flex" }} wrap>

      <Input
        placeholder="Search by ID, Name, Issue, or Summary"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: 200 }}
      />

      <Select
        placeholder="Filter by Status"
        value={statusFilter}
        onChange={onStatusChange}
        allowClear
        style={{ width: 160 }}
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
        style={{ width: 160 }}
      >
        <Option value="High">High</Option>
        <Option value="Medium">Medium</Option>
        <Option value="Low">Low</Option>
      </Select>

      <Button onClick={onClearFilters}>Clear Filters</Button>
    </Space>
  );
};

export default TicketFilters;
