import { Layout } from 'antd';
import { Typography } from 'antd';
import BusBookingCard from '../../components/card/BusBookingCard';
import BusBookingTable from '../../components/table/BusBookingTable';
import { useState } from 'react';
import type { TBooking } from '../../types/props.type';


const { Content } = Layout;
const { Title, Text } = Typography;

const BusBooking = () => {
    const [addNewBooking, setAddNewBooking] = useState<TBooking[]>([])
    console.log(addNewBooking)

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
            <Content className='!p-12'>
                <div className='text-left'>
                    <Title level={2}>Bus Booking Management</Title>
                    <Text>Manage and oversee passenger bookings efficiently</Text>
                </div>
                <div className='min-h-screen'>
                    <BusBookingCard setAddNewBooking={setAddNewBooking}></BusBookingCard>
                    <BusBookingTable addNewBooking={addNewBooking} updateBookingInTable={updateBookingInTable} deleteBookingInTable={deleteBookingInTable}></BusBookingTable>
                </div>
            </Content>
        </Layout>
    )
}

export default BusBooking