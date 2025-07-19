import { Layout } from 'antd';
import { Typography } from 'antd';
import BusBookingCard from '../../components/card/BusBookingCard';
import BusBookingTable from '../../components/table/BusBookingTable';
const BusBooking = () => {
    const { Content } = Layout;
    const { Title, Text } = Typography;

    return (
        <Layout>
            <Content className='!p-6'>
                <div className='text-left'>
                    <Title level={2}>Bus Booking Management</Title>
                    <Text>Manage and oversee passenger bookings efficiently</Text>
                </div>
                <div className='space-y-8 !p-6 min-h-screen'>
                    <BusBookingCard></BusBookingCard>
                    <BusBookingTable></BusBookingTable>
                </div>
            </Content>
        </Layout>
    )
}

export default BusBooking