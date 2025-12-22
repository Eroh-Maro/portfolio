import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import AboutMe from "../pages/AboutMe.jsx";
import ServicesPage from "../pages/ServicesPage.jsx";
import Contact from "../pages/Contact.jsx";
import Hire from "../pages/Hire.jsx";



const mobileRouter = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
             {
                path: "/about",
                element: <AboutMe/>
            },
             {
                path: "/ServicesPage",
                element: <ServicesPage/>
            },      
             {
                path: "/contact",
                element: <Contact/>
            },   
             {
                path: "/hire",
                element: <Hire/>
            },                               
        ]
    },
])

export default mobileRouter;