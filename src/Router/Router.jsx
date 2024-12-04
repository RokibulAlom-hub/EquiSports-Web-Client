import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Allequipment from "../Pages/Allequipment/Allequipment";
import Home from "../Pages/Home/Home";
import Privateroute from "../PrivateRouteAndPages/Privateroute/Privateroute";
import Addequipment from "../PrivateRouteAndPages/PrivatePages/Addequipment";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
            {
                path:'/Allequipment',
                element:<Allequipment></Allequipment>
            },
            {
                path:'/Addequipment',
                element:<Privateroute>
                    <Addequipment></Addequipment>
                </Privateroute>
            },
        ]
    }
])

export default router