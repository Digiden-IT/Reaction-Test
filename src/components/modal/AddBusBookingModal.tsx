import { Form, Modal } from "antd"
import type { TAddBookinngModal, TBooking, TBookingFormValues } from "../../types/props.type"
import AddBusBookingForm from "../form/AddBusBookingForm"
import { useState } from "react";


const AddBusBookingModal = ({ setAddNewBooking, modelOpen, handleCancel }: TAddBookinngModal) => {
  const [form] = Form.useForm<TBookingFormValues>();
  const [bookingId, setBookingId] = useState(9);

  const onFinish = (values: TBookingFormValues) => {
    console.log(values)
    const newId = String(bookingId).padStart(3, '0');
    const newBookingId = 'BK'.concat(newId)
    setBookingId(prevCount => prevCount + 1);
    console.log(bookingId)

    const newBooking: TBooking = { ...values, bookingID: newBookingId, departure: values.departure.format('MMM-DD, YYYY\nHH:mm') };

    setAddNewBooking(prev => [...prev, newBooking])

    console.log('Received new booking:', newBooking);
    handleCancel();
  };

  const handleOk = async () => {
    try {
      await form.validateFields();
      form.submit();
    } catch (errorInfo) {
      console.log('Validation Failed:', errorInfo);
    }
  };

  return (
    <Modal
      centered
      title="+ Add New Booking"
      open={modelOpen}
      okText='Create Booking'
      onCancel={handleCancel}
      onOk={handleOk}
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