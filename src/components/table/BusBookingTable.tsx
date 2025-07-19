import { Table, type TableColumnsType } from 'antd';
import type { TBooking } from '../../types/props.type';

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
            bookingID: 'BK001',
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
        { title: 'passenger Name', dataIndex: 'passengerName' },
        {
            title: 'Route', render: (_, record) => (
                <div>
                    
                </div>
            )
        },
        { title: 'Status', dataIndex: 'bookingStatus' },
        { title: 'Departure', dataIndex: 'departure' },
        { title: 'Action', dataIndex: 'action' },

    ]
    return (
        <Table columns={bookingColumns} dataSource={bookingData} rowKey='bookingID'></Table>
    )
}

export default BusBookingTable