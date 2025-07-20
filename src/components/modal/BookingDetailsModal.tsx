import { Card, Col, Flex, Form, Modal, Row, Select, Space, Tag, Typography } from "antd"
import type { BookingStatus, PaymentStatus, TBooking, TBookingDetalisModelProps, TBookingFormValues } from "../../types/props.type"
import { CalendarOutlined, CarOutlined, ContactsOutlined, EnvironmentOutlined, IdcardOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";


const { Option } = Select;
const { Text } = Typography;

const BookingDetailsModal = ({ isModalOpen, handleCancel, bookingDetails, onUpdate }: TBookingDetalisModelProps) => {
    const [form] = Form.useForm();

    if (!bookingDetails) {
        return null;
    }

    const getStatusTagColor = (status: BookingStatus | PaymentStatus) => {
        switch (status) {
            case 'CONFIRMED':
            case 'PAID':
                return 'green';
            case 'PENDING':
                return 'orange';
            case 'CANCELLED':
            case 'REFUNDED':
                return 'red';
            default:
                return 'default';
        }
    };

    const handleStatusFinish = (values: TBookingFormValues) => {
        console.log(values);

        const updatedStatus: TBooking = {
            ...bookingDetails,
            bookingStatus: values.bookingStatus || 'PENDING',
            paymentStatus: values.paymentStatus || 'PENDING',
        };

        onUpdate(updatedStatus);
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
            title={`Booking Details - ${bookingDetails?.bookingID}`}
            open={isModalOpen}
            onCancel={handleCancel}
            centered
            onOk={handleOk}
            width={1000}
        >
            <div className="p-4">
                <Row gutter={[16, 24]}>
                    <Col span={12}>
                        <Card title='Passenger Information' size="small">
                            <Space direction="vertical" size={2}>
                                <Text><UserOutlined className="mr-2" />Name: {bookingDetails.passengerName}</Text>
                                <Text><ContactsOutlined className="mr-2" />Contact: {bookingDetails.contact}</Text>
                                <Text><IdcardOutlined className="mr-2" />Seat Number: {bookingDetails.seatNumber}</Text>
                            </Space>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='Trip Information' size="small">
                            <Space direction="vertical" size={2}>
                                <Text><EnvironmentOutlined className="mr-2" />Route: {bookingDetails.originCity} → {bookingDetails.destinationCity}</Text>
                                <Text><CalendarOutlined className="mr-2" />Departure: {bookingDetails.departure}</Text>
                                <Text><CarOutlined className="mr-2" />Bus: {bookingDetails.busNumber}</Text>
                            </Space>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='Payment Status' size="small">
                            <Tag color={getStatusTagColor(bookingDetails.paymentStatus)}>
                                {bookingDetails.paymentStatus}
                            </Tag>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='Driver Information' size="small">
                            <Text><SolutionOutlined className="mr-2" />Driver: {bookingDetails?.driverName}</Text>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title='Special Requests' size="small">
                            <Text>{bookingDetails?.SpecialRequests}</Text>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title='Update Booking' size="small">
                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={handleStatusFinish}
                            >
                                <Flex wrap gap='16px'>
                                    <Form.Item
                                        label="Booking Status"
                                        name="bookingStatus"
                                        className="flex-1 min-w-[45%]"
                                        rules={[{ required: true }]}
                                    >
                                        <Select placeholder={`${bookingDetails.bookingStatus}`}  >
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
                                        <Select placeholder={`${bookingDetails.paymentStatus}`}>
                                            <Option value="PAID">Paid</Option>
                                            <Option value="PENDING">Pending</Option>
                                            <Option value="REFUNDED">Refunded</Option>
                                        </Select>
                                    </Form.Item>
                                </Flex>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default BookingDetailsModal