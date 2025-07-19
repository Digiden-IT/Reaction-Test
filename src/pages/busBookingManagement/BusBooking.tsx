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

    return (
        <Layout>
            <Content className='!p-12'>
                <div className='text-left'>
                    <Title level={2}>Bus Booking Management</Title>
                    <Text>Manage and oversee passenger bookings efficiently</Text>
                </div>
                <div className='min-h-screen'>
                    <BusBookingCard setAddNewBooking={setAddNewBooking}></BusBookingCard>
                    <BusBookingTable></BusBookingTable>
                </div>
            </Content>
        </Layout>
    )
}

export default BusBooking