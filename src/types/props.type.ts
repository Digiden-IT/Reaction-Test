import type { FormInstance } from "antd";

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

export type TAddBookinngModal = {
    modelOpen: boolean;
    handleCancel: () => void;
    setAddNewBooking: React.Dispatch<React.SetStateAction<TBooking[]>>
}

export type TBookingForm = {
    form: FormInstance<TBooking>;
    onFinish: (values: TBooking) => void;
}


export type TBookingCardProps = {
  setAddNewBooking: React.Dispatch<React.SetStateAction<TBooking[]>>
}