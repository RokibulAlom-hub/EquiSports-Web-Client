import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Allequipment from "../Pages/Allequipment/Allequipment";
import Home from "../Pages/Home/Home";
import Privateroute from "../PrivateRouteAndPages/Privateroute/Privateroute";
import Addequipment from "../PrivateRouteAndPages/PrivatePages/Addequipment";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyequipmentPage from "../Pages/MyequipmentPage/MyequipmentPage";
import UpdatePage from "../PrivateRouteAndPages/PrivatePages/UpdatePage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('https://b10-a10-server-side-rokibul-alom-hub.vercel.app/equipments')
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
                element:<Allequipment></Allequipment>,
                loader:() => fetch(`https://b10-a10-server-side-rokibul-alom-hub.vercel.app/equipments`)
            },
            {
                path:'/Addequipment',
                element:<Privateroute>
                    <Addequipment></Addequipment>
                </Privateroute>
            },
            {
                path:'/details/:id',
                element:<Privateroute>
                    <ProductDetails></ProductDetails>
                </Privateroute>,
                loader:({params}) => fetch(`https://b10-a10-server-side-rokibul-alom-hub.vercel.app/equipments/${params.id}`)
            },
            {
                path:'/MyequipmentPage',
                element:<Privateroute>
                    <MyequipmentPage></MyequipmentPage>
                </Privateroute>,
            },
            {
                path:'/UpdatePage/:id',
                element:<Privateroute>
                    <UpdatePage></UpdatePage>
                </Privateroute>,
                loader:({params}) => fetch(`https://b10-a10-server-side-rokibul-alom-hub.vercel.app/equipments/${params.id}`)
            },
        ]
    }
])

export default router