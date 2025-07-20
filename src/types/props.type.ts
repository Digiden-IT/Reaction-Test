import type { FormInstance } from "antd";
import type { Dayjs } from "dayjs";

export type BookingStatus = 'CONFIRMED' | 'PENDING' | 'CANCELLED';
export type PaymentStatus = 'PAID' | 'PENDING' | 'REFUNDED';

export type TBooking = {
    bookingID: string;
    passengerName: string;
    originCity: string;
    destinationCity: string;
    departure: string;
    bookingStatus: BookingStatus;
    contact: string;
    seatNumber: string;
    busNumber: string;
    driverName: string;
    paymentStatus: PaymentStatus;
    SpecialRequests?: string
}

export type TBookingFormValues = Omit<TBooking, 'departure'> & {
    departure: Dayjs; 
};

export type TAddBookinngModal = {
    modelOpen: boolean;
    handleCancel: () => void;
    setAddNewBooking: React.Dispatch<React.SetStateAction<TBooking[]>>
}

export type TBookingForm = {
    form: FormInstance<TBookingFormValues>;
    onFinish: (values: TBookingFormValues) => void;
}


export type TBookingCardProps = {
  setAddNewBooking: React.Dispatch<React.SetStateAction<TBooking[]>>
}

export type TBookingTable = {
    addNewBooking: TBooking[];
    updateBookingInTable: (values: TBooking) => void;
    deleteBookingInTable: (value: string) => void;
}

export type TEditBookingModelProps = {
    isModalOpen: boolean;
    handleCancel: () => void;
    bookingToEdit: TBooking | null;
    onUpdate: (updatedBooking: TBooking) => void;
    AllBookingData: TBooking[];
}

export type TBookingDetalisModelProps = {
    isModalOpen: boolean;
    handleCancel: () => void;
    bookingDetails: TBooking | null;
    onUpdate: (valueStatus: TBooking) => void;
}