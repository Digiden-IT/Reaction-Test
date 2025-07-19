import type { FormInstance } from "antd";
import type { Dayjs } from 'dayjs';

export type User = {
  key: number;
  ticketId: string;
  customerName: string;
  issueSummary: string;
  priority: string;
  status: string;
  createdDate: string ;  
  assignedAgent: string;
};
export type UserTableProps = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (key: number) => void;
};

export type FormPageProps = {
  onAddUser: () => void;
}

export type FormValues = {
 ticketId: string;
  customerName: string;
  issueSummary: string;
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
}