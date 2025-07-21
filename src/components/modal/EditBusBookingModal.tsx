
import { Form, Modal } from 'antd'
import type { TBooking, TBookingFormValues, TEditBookingModelProps } from '../../types/props.type'
import EditBookingForm from '../form/EditBookingForm'

const EditBusBookingModal = ({ isModalOpen, handleCancel, onUpdate, bookingToEdit, AllBookingData }: TEditBookingModelProps) => {
    const [form] = Form.useForm<TBookingFormValues>();

    if (bookingToEdit) {
        form.setFieldsValue({
            ...AllBookingData,
            passengerName: bookingToEdit.passengerName,
            contact: bookingToEdit.contact,
            busNumber: bookingToEdit.busNumber,
            originCity: bookingToEdit.originCity,
            destinationCity: bookingToEdit.destinationCity,
            //departure: bookingToEdit.departure,
            driverName: bookingToEdit.driverName,
            seatNumber: bookingToEdit.seatNumber
        });
    }

    const handleFormFinish = (values: TBookingFormValues) => {
        console.log(values);

        const updatedBooking: TBooking = {
            ...bookingToEdit!,
            ...values,
            departure: values.departure.format('MMM-DD, YYYY\nHH:mm'),
            bookingID: bookingToEdit!.bookingID,
            passengerName: values.passengerName,
            contact: values.contact,
            busNumber: values.busNumber,
            originCity: values.originCity,
            destinationCity: values.destinationCity,
            driverName: values.driverName,
            seatNumber: values.seatNumber,
            bookingStatus: values.bookingStatus || 'PENDING',
            paymentStatus: values.paymentStatus || 'PENDING',
        };


        console.log("Updated Booking Data:", updatedBooking);
        onUpdate(updatedBooking);
        handleCancel();
    }

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
            title={`Edit Booking - ${bookingToEdit?.bookingID || ''}`}
            open={isModalOpen}
            onCancel={handleCancel}
            onOk={handleOk}
            okText='Update Booking'
            width={800}
        >
            <EditBookingForm
                form={form}
                onFinish={handleFormFinish}
            ></EditBookingForm>
        </Modal>
    )
}

export default EditBusBookingModal