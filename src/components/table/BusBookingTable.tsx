import { Table, Tag, type TableColumnsType } from 'antd';
import type { TBooking } from '../../types/props.type';
import { ArrowRightOutlined, CalendarOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';



const BusBookingTable = () => {

    const bookingData: TBooking[] = [
        {
            bookingID: 'BK001',
            passengerName: 'John Smith',
            originCity: 'New York',
            destinationCity: 'Boston',
            departure: 'Jan 15, 2022\n09:20',
            bookingStatus: 'PENDING',
            contact: '',
            seatNumber: '',
            busNumber: '',
            driverName: '',
            paymentStatus: 'PAID',
            SpecialRequests: '',
        },
        {
            bookingID: 'BK002',
            passengerName: 'John Smith',
            originCity: 'New York',
            destinationCity: 'Boston',
            departure: 'Jan 15, 2022\n09:20',
            bookingStatus: 'CANCELLED',
            contact: '',
            seatNumber: '',
            busNumber: '',
            driverName: '',
            paymentStatus: 'PENDING',
            SpecialRequests: '',
        }
    ]
    const bookingColumns: TableColumnsType<TBooking> = [
        { title: 'Booking ID', dataIndex: 'bookingID' },
        {
            title: 'passenger Name', dataIndex: 'passengerName',
            render: (text) => (
                <div className='flex items-center gap-2'>
                    < UserOutlined />
                    {text}
                </div>
            )
        },
        {
            title: 'Route', render: (_, record) => (

                <div className='flex items-center gap-2'>
                    <EnvironmentOutlined />
                    <p> {record.originCity} <ArrowRightOutlined style={{ fontSize: '10px' }} /> {record.destinationCity}</p>
                </div>
            )
        },
        {
            title: 'Status', dataIndex: 'bookingStatus',
            render: (text) => {
                let color: string;
                switch (text) {
                    case 'CONFIRMED':
                        color = 'green';
                        break;
                    case 'PENDING':
                        color = 'orange';
                        break;
                    case 'CANCELLED':
                        color = 'red';
                        break;
                    default:
                        color = 'default';
                }
                return (
                    <Tag color={color} key={text} className='font-medium'>
                        {text}
                    </Tag>
                )
            }
        },
        {
            title: 'Departure', dataIndex: 'departure',
            render: (dateAndTime) => {
                const lines = dateAndTime.split('\n');
                const date = lines[0];
                const time = lines[1];

                return (
                    <div className='flex items-center gap-2'>
                        <CalendarOutlined className='!text-gray-500 text-base' />
                        <div>
                            <div className='font-bold'>{date}</div>
                            <div className='text-gray-500'>{time}</div>
                        </div>
                    </div>
                );
            }
        },
        { title: 'Action', dataIndex: 'action' },

    ]
    return (
        <Table columns={bookingColumns} dataSource={bookingData} rowKey='bookingID'></Table>
    )
}

export default BusBookingTable