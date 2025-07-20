import { Button, Popconfirm, Space, Table, Tag, type TableColumnsType } from 'antd';
import type { TBooking, TBookingTable } from '../../types/props.type';
import { ArrowRightOutlined, CalendarOutlined, DeleteOutlined, EditOutlined, EnvironmentOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons';
import EditBusBookingModal from '../modal/EditBusBookingModal';
import { useState } from 'react';
import BookingDetailsModal from '../modal/BookingDetailsModal';

const BusBookingTable = ({ addNewBooking, updateBookingInTable, deleteBookingInTable }: TBookingTable) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [bookingToEdit, setBookingToEdit] = useState<TBooking | null>(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [showBookingDetail, setShowBookingDetail] = useState<TBooking | null>(null);

    const showEditModal = (record: TBooking) => {
        setBookingToEdit(record);
        setIsEditModalOpen(true);
    };

    const handleEditModalCancel = () => {
        setIsEditModalOpen(false);
        setBookingToEdit(null);
    };

    const showDetailModal = (record: TBooking) => {
        setShowBookingDetail(record);
        setIsDetailsModalOpen(true)
    }

    const handleDetailModalCancel = () => {
        setIsDetailsModalOpen(false);
        setShowBookingDetail(null)
    }

    const handleUpdateBooking = (updateBooking: TBooking) => {
        updateBookingInTable(updateBooking)
    }

    const handleDeleteBooking = (deleteBooking: string) => {
        deleteBookingInTable(deleteBooking)
    }


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
            SpecialRequests: 'Window Seat',
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
            SpecialRequests: 'Window Seat',
        }
    ]

    const AllBookingData = [...bookingData, ...addNewBooking];


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
        {
            title: 'Action', dataIndex: 'action',
            render: (_, record) => (
                <Space>
                    <Button type='primary' size='small' onClick={() => showDetailModal(record)}>
                        <EyeOutlined title='View Booking' />
                    </Button>
                    <Button size='small' onClick={() => showEditModal(record)}>
                        <EditOutlined title='Edit Booking' />
                    </Button>
                    <Popconfirm
                        okText="Yes, Delete"
                        cancelText="Cancel"
                        okButtonProps={{ className: '!bg-red-600' }}
                        title="Delete Booking"
                        onConfirm={() => handleDeleteBooking(record.bookingID)}
                        description="Are you sure you want to delete this booking? This action cannot be undone."
                    >
                        <Button danger size='small'>
                            <DeleteOutlined title='Delete Booking' />
                        </Button>
                    </Popconfirm>
                </Space>
            )

        },

    ]
    return (
        <div>
            <Table columns={bookingColumns} dataSource={AllBookingData} rowKey='bookingID'></Table>

            <BookingDetailsModal
                isModalOpen={isDetailsModalOpen}
                handleCancel={handleDetailModalCancel}
                bookingDetails={showBookingDetail}
                onUpdate={handleUpdateBooking}
            ></BookingDetailsModal>

            <EditBusBookingModal
                AllBookingData={AllBookingData}
                isModalOpen={isEditModalOpen}
                handleCancel={handleEditModalCancel}
                bookingToEdit={bookingToEdit}
                onUpdate={handleUpdateBooking}
            ></EditBusBookingModal>
        </div>
    )
}

export default BusBookingTable