
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