import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Input, Select } from 'antd'
import { useState } from 'react'
import AddBusBookingModal from '../modal/AddBusBookingModal';
import type { TBookingCardProps } from '../../types/props.type';


const { Search } = Input;

const BusBookingCard = ({ setAddNewBooking }: TBookingCardProps) => {
  const [modelOpen, setModelOpen] = useState(false);

  const showModal = () => {
    setModelOpen(true);
  };

  const handleCancel = () => {
    setModelOpen(false);
  };

  return (
    <Card className='!my-8'>
      <Flex>
        <Flex justify='left' className='!w-[50%]' gap='16px'>
          <Search className='!w-[40%]' placeholder='Search by passenger name, booking id, route' />
          <Select className="!w-[25%]" defaultValue={'All Status'}
            options={[
              { label: 'All Status', value: 'All Status' },
              { label: 'Confirmed', value: 'CONFIRMED' },
              { label: 'Pending', value: 'PENDING' },
              { label: 'Cancelled', value: 'CANCELLED' },
            ]}></Select>
        </Flex>
        <Flex justify='right' className='!w-[50%]' align='center' gap='16px'>
          <p>Total: 8 bookings</p>
          <Button type='primary' onClick={showModal}><PlusOutlined /> Add Booking</Button>
          <AddBusBookingModal setAddNewBooking={setAddNewBooking} handleCancel={handleCancel} modelOpen={modelOpen} ></AddBusBookingModal>
        </Flex>
      </Flex>
    </Card >
  )
}

export default BusBookingCard