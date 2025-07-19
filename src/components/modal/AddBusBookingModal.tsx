import { Form, Modal } from "antd"
import type { TAddBookinngModal, TBooking } from "../../types/props.type"
import AddBusBookingForm from "../form/AddBusBookingForm"
import { useState } from "react";


const AddBusBookingModal = ({ setAddNewBooking, modelOpen, handleCancel }: TAddBookinngModal) => {
  const [form] = Form.useForm();
  const [bookingId, setBookingId] = useState(9);

  const onFinish = (values: TBooking) => {
    console.log(values)
    const newId = String(bookingId).padStart(3, '0');
    const newBookingId = 'BK'.concat(newId)
    setBookingId(prevCount => prevCount + 1);
    console.log(bookingId)

    const newBooking: TBooking = { ...values, bookingID: newBookingId };

    setAddNewBooking(prev => [...prev, newBooking])

    console.log('Received new booking:', newBooking);
    handleCancel();
  };

  return (
    <Modal
      centered
      title="+ Add New Booking"
      open={modelOpen}
      okText='Create Booking'
      onCancel={handleCancel}
      width={{
        xs: '90%',
        sm: '80%',
        md: '70%',
        lg: '60%',
        xl: '50%',
        xxl: '40%',
      }}
    >
      <AddBusBookingForm
        form={form}
        onFinish={onFinish}></AddBusBookingForm>
    </Modal>
  )
}

export default AddBusBookingModal