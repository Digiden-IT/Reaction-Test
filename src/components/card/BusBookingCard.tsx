import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Input, Select } from 'antd'
import { useState } from 'react'
import AddBusBookingModal from '../modal/AddBusBookingModal';
import type { BookingStatus, TBookingCardProps } from '../../types/props.type';


const { Search } = Input;

const BusBookingCard = ({ setAddNewBooking, searchItem, setSearchItem, filterStatus, setFilterStatus, totalBooking }: TBookingCardProps) => {
  const [modelOpen, setModelOpen] = useState(false);

  const showModal = () => {
    setModelOpen(true);
  };

  const handleCancel = () => {
    setModelOpen(false);
  };

  const handleStatusFilter = (value: BookingStatus | 'ALL') => {
    setFilterStatus(value);
  };

  return (
    <Card className='!my-8'>
      <Flex className='flex sm:flex-row flex-col items-center'>
        <Flex justify='left' className='w-[50%]' gap='16px' >
          <Search className='w-[45%]' placeholder='Search by passenger name, booking id, route' value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)} />
          <Select className="w-[25%]" value={filterStatus} onChange={handleStatusFilter}
            options={[
              { label: 'All Status', value: 'ALL' },
              { label: 'Confirmed', value: 'CONFIRMED' },
              { label: 'Pending', value: 'PENDING' },
              { label: 'Cancelled', value: 'CANCELLED' },
            ]}></Select>
        </Flex>
        <Flex justify='right' className='w-[50%]' align='center' gap='16px'>
          <p>Total: {totalBooking} bookings</p>
          <Button type='primary' onClick={showModal}><PlusOutlined /> Add Booking</Button>
          <AddBusBookingModal setAddNewBooking={setAddNewBooking} handleCancel={handleCancel} modelOpen={modelOpen} ></AddBusBookingModal>
        </Flex>
      </Flex>
    </Card >
  )
}

export default BusBookingCard