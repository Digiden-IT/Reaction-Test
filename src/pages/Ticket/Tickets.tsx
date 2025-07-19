import { useState } from "react";
import DataCard from "../../components/cards/Cards"
import Header from "../../components/headers/Headers"
import UserTable from "../../components/table/UserTable"
import { Form, message, Modal } from "antd";
import type { FormValues, User } from "../../typs/prop.type";

import UserFormModal from "../../components/modals/UserFormModal";
import  dayjs  from 'dayjs';


const Tickets = () => {
 const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [openModal, setOpenModal] = useState(false);

const { confirm } = Modal;

   const handleAdd = () => {
    form.resetFields();
     
    setEditingKey(null);
    setOpenModal(true);
   
  };


  const handleEdit = (user: User) => {
  form.setFieldsValue({
    ...user,
    createdDate: dayjs(user.createdDate)
  });

  setEditingKey(user.key);
  setOpenModal(true);
};



  const handleDelete = (key: number) => {
    confirm({
      title: "Are you sure you want to delete?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        setUsers(users.filter((user) => user.key !== key));
      },
    });
  };

 const handleSubmit = (values: FormValues) => {
  if (editingKey !== null) {
    const updatedUsers = users.map((user) =>
      user.key === editingKey
        ? { ...user, ...values, createdDate: values.createdDate.format("YYYY-MM-DD") }
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



  return (
    <div>
        <h1 className="text-center mt-2">Tickets Assigning</h1>
        <Header/>
        <DataCard/>

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


       <div className="container max-w-[1300px] mx-auto mt-8">
         <UserTable
          users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
         />
        
       </div>
      
    </div>
  )
}

export default Tickets