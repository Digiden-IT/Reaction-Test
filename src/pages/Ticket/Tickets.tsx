import { useEffect, useState } from "react";
import DataCard from "../../components/cards/Cards";
import Header from "../../components/headers/Headers";
import UserTable from "../../components/table/UserTable";
import { Form, message } from "antd";
import type { FormValues, User } from "../../typs/prop.type";

import UserFormModal from "../../components/modals/UserFormModal";
import dayjs from "dayjs";
import DeleteConfirmationModal from "../../components/modals/DeleteConfirmationModal";
import UserDetailsModal from "../../components/modals/UserDetailsModal";

import TicketFilters from "../../components/filters/TicketFilters";

import TableHeader from "../../components/headers/TableHeader";



const Tickets = () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([
    {
      key: 1,
      ticketId: "TICK001",
      customerName: "Rakib",
      issueSummary: "Payment Failure",
      priority: "High",
      status: "Open",
      createdDate: "2024-07-20",
      assignedAgent: "Agent A",
      customerEmail: "rakib@example.com",
      issueDescription: "Payment failed at checkout.",
    },
    {
      key: 2,
      ticketId: "TICK002",
      customerName: "Sakib",
      issueSummary: "Login Issue",
      priority: "Medium",
      status: "Pending",
      createdDate: "2024-07-19",
      assignedAgent: "Agent B",
      customerEmail: "sakib@example.com",
      issueDescription: "Unable to login with correct credentials.",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [deleteKey, setDeleteKey] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const totalTickets = users.length;
  const openTickets = users.filter((user) => user.status === "Open").length;
  const pendingTickets = users.filter(
    (user) => user.status === "Pending"
  ).length;
  const closedTickets = users.filter((user) => user.status === "Closed").length;

  const handleAdd = () => {
    form.resetFields();

    setEditingKey(null);
    setOpenModal(true);
  };

  const handleEdit = (user: User) => {
    form.setFieldsValue({
      ...user,
      createdDate: dayjs(user.createdDate),
    });

    setEditingKey(user.key);
    setOpenModal(true);
  };

  // const handleDelete = (key: number) => {
  //   confirm({
  //     title: "Are you sure you want to delete?",
  //     okText: "Yes",
  //     okType: "danger",
  //     cancelText: "No",
  //     onOk() {
  //       setUsers(users.filter((user) => user.key !== key));
  //     },
  //   });
  // };
  const showDeleteConfirm = (key: number) => {
    setDeleteKey(key);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteKey !== null) {
      setUsers(users.filter((user) => user.key !== deleteKey));
    }
    setIsDeleteModalOpen(false);
    setDeleteKey(null);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDeleteKey(null);
  };

  const handleSubmit = (values: FormValues) => {
    if (editingKey !== null) {
      const updatedUsers = users.map((user) =>
        user.key === editingKey
          ? {
              ...user,
              ...values,
              createdDate: values.createdDate.format("YYYY-MM-DD"),
            }
          : user
      );
      setUsers(updatedUsers);
      message.success("Ticket updated successfully");
    } else {
      const newUser: User = {
        key: Date.now(),
        ...values,
        createdDate: values.createdDate.format("YYYY-MM-DD"),
      };
      setUsers((prev) => [...prev, newUser]);
      message.success("Ticket created successfully");
    }

    setEditingKey(null);
    form.resetFields();
    setOpenModal(false);
  };

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsModalOpen(false);
    setSelectedUser(null);
  };

  const handleStatusUpdate = (key: number, newStatus: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.key === key ? { ...user, status: newStatus } : user
      )
    );
  };

  

  const filteredUsers = users.filter((user) => {
    const lowerSearch = searchText.toLowerCase();

    const matchesSearch =
      (user.ticketId || "").toLowerCase().includes(lowerSearch) ||
      (user.customerName || "").toLowerCase().includes(lowerSearch) ||
      (user.issueSummary || "").toLowerCase().includes(lowerSearch) ||
      (user.issueDescription || "").toLowerCase().includes(lowerSearch);

    const matchesStatus = statusFilter ? user.status === statusFilter : true;
    const matchesPriority = priorityFilter
      ? user.priority === priorityFilter
      : true;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleClearFilters = () => {
    setSearchText("");
    setStatusFilter(null);
    setPriorityFilter(null);
  };

  return (
    <div>
      {/* <h1 className="text-center mt-2">Tickets Assigning</h1> */}
      <Header />
      <DataCard
        total={totalTickets}
        open={openTickets}
        pending={pendingTickets}
        closed={closedTickets}
      />

      {/* <div>
  <FormPage  onAddUser={handleAdd}/>
</div> */}

      <UserFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        form={form}
        editingKey={editingKey}
        onSubmit={handleSubmit}
        onAddUser={handleAdd}
      />
      {/* <SearchBar searchText={searchText} onSearchChange={setSearchText} /> */}
   <TableHeader/>
      <TicketFilters
        searchText={searchText}
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onSearchChange={setSearchText}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
        onClearFilters={handleClearFilters}
         onAddUser={handleAdd}
      />

      <div className="container max-w-[1300px] mx-auto mt-8 p-3">
        <UserTable
          users={filteredUsers}
          onEdit={handleEdit}
          onDelete={showDeleteConfirm}
          onViewDetails={handleViewDetails}
        />
      </div>
      <div>
        <DeleteConfirmationModal
          open={isDeleteModalOpen}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </div>
      <div>
        <UserDetailsModal
          open={isDetailsModalOpen}
          user={selectedUser}
          onClose={handleCloseDetails}
          onEdit={handleEdit}
          onDelete={showDeleteConfirm}
          onStatusUpdate={handleStatusUpdate}
        />
      </div>
    </div>
  );
};

export default Tickets;
