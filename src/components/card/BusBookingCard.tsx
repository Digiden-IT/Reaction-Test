import { CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Input, Select } from 'antd'
import { useState } from 'react'
import AddBusBookingModal from '../modal/AddBusBookingModal';
import type { BookingStatus, TBookingCardProps } from '../../types/props.type';


const { Search } = Input;

const BusBookingCard = ({ setAddNewBooking, searchItem, setSearchItem, filterStatus, setFilterStatus, totalBooking, totalPending, totalConfirm, totalCancel }: TBookingCardProps) => {
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
    <div>
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 !mt-5'>
        <Card className='hover:shadow-lg w-full lg:text-left text-center'>Total Booking <br /> <span className='text-blue-500 text-2xl'><UserOutlined /> {totalBooking}</span></Card>
        <Card className='hover:shadow-lg w-full lg:text-left text-center'>Pending Booking <br /> <span className='text-red-500 text-2xl'><ExclamationCircleOutlined /> {totalPending}</span></Card>
        <Card className='hover:shadow-lg w-full lg:text-left text-center'>Confirm Booking <br /> <span className='text-orange-400 text-2xl'><ClockCircleOutlined /> {totalConfirm}</span></Card>
        <Card className='hover:shadow-lg w-full lg:text-left text-center'>Cancel Booking <br /> <span className='text-green-500 text-2xl'><CheckCircleOutlined /> {totalCancel}</span></Card>
      </div>

      <Card className='hover:shadow-lg !my-8'>
        <Flex className='flex sm:flex-row flex-col justify-between items-center'>
          <Flex justify='left' className='sm:flex-row flex-col gap-4 sm:gap-16px mb-4 sm:mb-0 w-full sm:w-[50%]'>
            <Search
              className='w-full sm:w-[45%]'
              placeholder='Search by passenger name, booking id, route'
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <Select
              className="w-full sm:w-[25%]"
              value={filterStatus}
              onChange={handleStatusFilter}
              options={[
                { label: 'All Status', value: 'ALL' },
                { label: 'Confirmed', value: 'CONFIRMED' },
                { label: 'Pending', value: 'PENDING' },
                { label: 'Cancelled', value: 'CANCELLED' },
              ]}
            ></Select>
          </Flex>
          <Flex justify='right' className='sm:flex-row flex-col justify-end items-center gap-4 sm:gap-16px w-full sm:w-[50%]'>
            <p>Total: {totalBooking} bookings</p>
            <Button type='primary' className='w-full sm:w-[50%]' onClick={showModal}><PlusOutlined /> Add Booking</Button>
            <AddBusBookingModal totalBooking={totalBooking} setAddNewBooking={setAddNewBooking} handleCancel={handleCancel} modelOpen={modelOpen} ></AddBusBookingModal>
          </Flex>
        </Flex>
      </Card >
    </div>
  )
}

export default BusBookingCard