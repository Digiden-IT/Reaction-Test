import { DatePicker, Flex, Form, Input, Select } from "antd";
import type { TBookingForm } from "../../types/props.type";

const { Option } = Select;
const { TextArea } = Input;
const EditBookingForm = ({ form, onFinish }: TBookingForm) => {
    return (
        <Form
            form={form}
            layout="vertical"
            name="edit_booking_form"
            onFinish={onFinish}
        >
            <Flex gap="16px" wrap="wrap">
                <Form.Item
                    label="Passenger Name"
                    name="passengerName"
                    rules={[{ required: true }]}
                    className="flex-1 min-w-[45%]"
                >
                    <Input placeholder="Enter Full Name" />
                </Form.Item>
                <Form.Item
                    label="Contact Number"
                    name="contact"
                    rules={[{ required: true }]}
                    className="flex-1 min-w-[45%]"
                >
                    <Input placeholder="+1-555-0123" />
                </Form.Item>
            </Flex>

            <Flex gap="16px" wrap="wrap">
                <Form.Item
                    label="Origin City"
                    name="originCity"
                    rules={[{ required: true }]}
                    className="flex-1 min-w-[45%]"
                >
                    <Input placeholder="e.g., New York" />
                </Form.Item>
                <Form.Item
                    label="Destination City"
                    name="destinationCity"
                    rules={[{ required: true }]}
                    className="flex-1 min-w-[45%]"
                >
                    <Input placeholder="e.g., Boston" />
                </Form.Item>
            </Flex>

            <Flex gap="16px" wrap="wrap">
                <Form.Item
                    label="Departure Date & Time"
                    name="departure"
                    className="flex-1 min-w-[45%]"
                    rules={[{ required: true }]}
                >
                    <DatePicker
                        style={{ width: '100%' }}
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                    />
                </Form.Item>
                <Form.Item
                    label="Seat Number"
                    name="seatNumber"
                    rules={[{ required: true }]}
                    className="flex-1 min-w-[45%]"
                >
                    <Input placeholder="e.g., A12" />
                </Form.Item>
            </Flex>

            <Flex gap="16px" wrap="wrap">
                <Form.Item
                    label="Bus Number"
                    name="busNumber"
                    rules={[{ required: true }]}
                    className="flex-1 min-w-[45%]"
                >
                    <Input placeholder="e.g., BUS-4521" />
                </Form.Item>
                <Form.Item
                    label="Driver Name"
                    name="driverName"
                    className="flex-1 min-w-[45%]"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Mike Johnson" />
                </Form.Item>
            </Flex>

            <Flex gap="16px" wrap="wrap">
                <Form.Item
                    label="Booking Status"
                    name="bookingStatus"
                    className="flex-1 min-w-[45%]"
                    rules={[{ required: true }]}
                >
                    <Select placeholder="Select a status" defaultValue='PENDING'>
                        <Option value="CONFIRMED">Confirmed</Option>
                        <Option value="PENDING">Pending</Option>
                        <Option value="CANCELLED">Cancelled</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Payment Status"
                    name="paymentStatus"
                    className="flex-1 min-w-[45%]"
                    rules={[{ required: true }]}
                >
                    <Select placeholder="Select payment status" defaultValue='PENDING'>
                        <Option value="PAID">Paid</Option>
                        <Option value="PENDING">Pending</Option>
                        <Option value="REFUNDED">Refunded</Option>
                    </Select>
                </Form.Item>
            </Flex>

            <Form.Item
                label="Special Requests"
                name="specialRequests"
            >
                <TextArea rows={3} placeholder="Enter any special requests or notes (optional)" />
            </Form.Item>
        </Form>
    )
}

export default EditBookingForm