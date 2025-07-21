import type { FormInstance } from "antd";
import type { Dayjs } from "dayjs";

export type User = {
  key: number;
  ticketId: string;
  customerName: string;
  issueSummary: string;
  priority: string;
  status: string;
  createdDate: string;
  assignedAgent: string;
  customerEmail: string;
  issueDescription: string;
};
export type UserTableProps = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (key: number) => void;
  onViewDetails: (user: User) => void;
};

export type FormPageProps = {
  onAddUser: () => void;
};

export type FormValues = {
  ticketId: string;
  customerName: string;
  issueSummary: string;
  customerEmail: string;
  issueDescription: string;
  priority: string;
  status: string;
  createdDate: Dayjs;
  assignedAgent: string;
};

export type UserFormModalProps = {
  open: boolean;
  onClose: () => void;
  form: FormInstance;
  editingKey: number | null;
  onSubmit: (values: FormValues) => void;
  onAddUser: () => void;
};

export type DeleteConfirmationModalProps = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export type UserDetailsModalProps = {
  open: boolean;
  user: User | null;
  onClose: () => void;
  onEdit: (user: User) => void;
  onDelete: (key: number) => void;
  onStatusUpdate: (key: number, status: string) => void;
};

export type SearchBarProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

export type TicketFiltersProps = {
  searchText: string;
  statusFilter: string | null;
  priorityFilter: string | null;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string | null) => void;
  onPriorityChange: (value: string | null) => void;
  onClearFilters: () => void;
  onAddUser: () => void;
};

export type DataCardProps = {
  total: number;
  open: number;
  pending: number;
  closed: number;
};
