import { Layout } from 'antd';
import { Typography } from 'antd';
import BusBookingCard from '../../components/card/BusBookingCard';
import BusBookingTable from '../../components/table/BusBookingTable';
import { useState } from 'react';
import type { BookingStatus, TBooking } from '../../types/props.type';


const { Content } = Layout;
const { Title, Text } = Typography;

const BusBooking = () => {
    const [addNewBooking, setAddNewBooking] = useState<TBooking[]>([])
    const [searchItem, setSearchItem] = useState<string>('');
    const [filterStatus, setFilterStatus] = useState<BookingStatus | 'ALL'>('ALL');
    //    console.log(addNewBooking)

    const bookingData: TBooking[] = [
        {
            bookingID: 'BK001',
            passengerName: 'John Smith',
            originCity: 'New York',
            destinationCity: 'Boston',
            departure: 'Jan 15, 2024\n12:30',
            bookingStatus: 'PENDING',
            contact: '0000494585',
            seatNumber: 'A8',
            busNumber: 'Bus12',
            driverName: 'xyz',
            paymentStatus: 'PAID',
            specialRequests: 'Window Seat',
        },
        {
            bookingID: 'BK002',
            passengerName: 'John Smith',
            originCity: 'New York',
            destinationCity: 'Boston',
            departure: 'Jan 15, 2022\n09:20',
            bookingStatus: 'CANCELLED',
            contact: '0437489404',
            seatNumber: 'A4',
            busNumber: 'BUS-14',
            driverName: 'abc',
            paymentStatus: 'PENDING',
            specialRequests: 'Window Seat',
        }
    ]

    const AllBookingData = [...bookingData, ...addNewBooking];
    const totalBooking = AllBookingData.length;
    const totalPending = AllBookingData.filter(pending => pending.bookingStatus === 'PENDING').length;
    const totalConfirm = AllBookingData.filter(pending => pending.bookingStatus === 'CONFIRMED').length;
    const totalCancel = AllBookingData.filter(pending => pending.bookingStatus === 'CANCELLED').length

    const updateBookingInTable = (updateBooking: TBooking) => {
        setAddNewBooking(prev =>
            prev.map(booking => booking.bookingID === updateBooking.bookingID ? updateBooking : booking
            )
        );
    }

    const deleteBookingInTable = (deleteBookingId: string) => {
        setAddNewBooking(prev => prev.filter(booking => booking.bookingID !== deleteBookingId))
    }


    return (
        <Layout>
            <Content className='!p-10'>
                <div className='text-left'>
                    <Title level={2}>Bus Booking Management</Title>
                    <Text>Manage and oversee passenger bookings efficiently</Text>
                </div>
                <div className='min-h-screen'>
                    <BusBookingCard totalCancel={totalCancel} totalConfirm={totalConfirm} totalPending={totalPending} totalBooking={totalBooking} filterStatus={filterStatus} setFilterStatus={setFilterStatus} searchItem={searchItem} setSearchItem={setSearchItem} setAddNewBooking={setAddNewBooking}></BusBookingCard>
                    <BusBookingTable filterStatus={filterStatus} searchItem={searchItem} AllBookingData={AllBookingData} updateBookingInTable={updateBookingInTable} deleteBookingInTable={deleteBookingInTable}></BusBookingTable>
                </div>
            </Content>
        </Layout>
    )
}

export default BusBooking