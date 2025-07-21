import { createBrowserRouter } from "react-router";
import App from "../App";
import Tickets from "../pages/Ticket/Tickets";
import { MainLayouts } from "../layouts/MainLayouts";
import BusBooking from "../pages/busBookingManagement/BusBooking";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,

        children: [
            {
                path: "/",
                element: <App></App>
            },
            {
                path: "/ticket",
                element: <Tickets></Tickets>
            },
            {
                path: "/busbooking",
                element: <BusBooking></BusBooking>
            }
        ]
    },
]);

export default router;