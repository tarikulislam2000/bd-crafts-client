import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";

import Home from "./Pages/Home/Home";



import Payment from "./Pages/Payment/Payment";
import Profile from "./Pages/Profile/Profile";
import Shop from "./Pages/Shop/Shop";
import "./index.css";

import MyCart from "./Components/Dashboard/GeneralUser/MyCart";
import PayedProducts from "./Components/Dashboard/GeneralUser/PayedProducts";
import PaymentHistory from "./Components/Dashboard/GeneralUser/PaymentHistory";
import Alert from "./Components/Navber/SettingPage/Alert/Alert";
import Genarel from "./Components/Navber/SettingPage/Genarel/Genarel";
import SettingPage from "./Components/Navber/SettingPage/SettingPage";
import DashboardLayout from "./Layout/Dashboard/DashboardLayout";

import ManageProducts from "./Components/Dashboard/Admin/ManageProducts";
import ManageUser from "./Components/Dashboard/Admin/ManageUser";
import PendingSeller from "./Components/Dashboard/Admin/PendingSeller";
import AddProducts from "./Components/Dashboard/Seller/AddProducts";
import MyShop from "./Components/Dashboard/Seller/MyShop";
import Privacy from "./Components/Navber/SettingPage/Privacy/Privacy";
import Account from "./Components/Navber/SettingPage/Security/Account/Account";
import AddPreference from "./Components/Navber/SettingPage/Security/AddPreference/AddPreference";
import PasswordAndSecurity from "./Components/Navber/SettingPage/Security/PasswordAndSecurity/PasswordAndSecurity";
import PersonalDetails from "./Components/Navber/SettingPage/Security/PersonalDetails/PersonalDetails";
import Security from "./Components/Navber/SettingPage/Security/Security";
import SellerForm from "./Components/SellerForm/SellerForm";

import PrivetRoute from "./PrivetRoute/PrivetRoute";

import AllProduct from "./Components/AllProduct/AllProduct";
import EventPage from "./Components/Event/EventPage";

import Edit from "./Components/Navber/SettingPage/Genarel/Edit";
import ShowSearchData from "./Components/ShowSearchData/ShowSearchData";
import WholesalerForm from "./Components/WholesalerForm/WholesalerForm";
import EditProfile from "./Pages/EditProfile/EditProfile";

import PaymentSuccess from "./Pages/Payment/PaymentSuccess";
import RoomPage from "./Pages/VedioConference/RoomPage/RoomPage";
import VedioConference from "./Pages/VedioConference/VedioConference";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/paymentSuccess/:id",
        element: <PaymentSuccess />,
      },

      {
        path: "/setting",
        element: (
          <PrivetRoute>
            <SettingPage />
          </PrivetRoute>
        ),
        children: [
          {
            path: "/setting/genarel",
            element: <Genarel />,
          },
          {
            path: "/setting/security",
            element: <Security />,
            children: [
              {
                path: "/setting/security/account",
                element: <Account />,
              },
              {
                path: "/setting/security/personalDetails",
                element: <PersonalDetails />,
              },
              {
                path: "/setting/security/passwordAndSecurity",
                element: <PasswordAndSecurity />,
              },
              {
                path: "/setting/security/addPreference",
                element: <AddPreference />,
              },
            ],
          },
          {
            path: "/setting/privacy",
            element: <Privacy />,
          },
          {
            path: "/setting/activities",
            element: "activities",
          },
          {
            path: "/setting/support",
            element: "support",
          },
          {
            path: "/setting/alert",
            element: <Alert />,
          },
        ],
      },

      //Mahdi vai
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      //Rabeya Akter
     
      {
        path: "/eventPage",
        element: <EventPage />,
      },


      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "/shop/:category",
            element: <AllProduct></AllProduct>,
          },
        ],
      },
      {
        path: "/editProfile",
        element: <EditProfile></EditProfile>,
      },
     
    
      {
        path: "/searchData",
        element: <ShowSearchData />,
      },

      {
        path: "/selerForm",
        element: (
          <PrivetRoute>
            <SellerForm />
          </PrivetRoute>
        ),
      },
      {
        path: "/wholeSealerForm",
        element: (
          <PrivetRoute>
            <WholesalerForm />
          </PrivetRoute>
        ),
      },
    ],
  },

  // Rayhan

  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "payed",
        element: <PayedProducts />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      {
        path: "manageShop",
        element: <ManageProducts />,
      },

      {
        path: "pendingSeller",
        element: <PendingSeller></PendingSeller>,
      },
      {
        path: "manageUser",
        element: <ManageUser />,
      },
      {
        path: "addProducts",
        element: <AddProducts />,
      },

      {
        path: "myShop",
        element: <MyShop />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/edit",
    element: <Edit></Edit>,
  },

  {
    path: "/conference",
    element: (
      <PrivetRoute>
        <VedioConference />
      </PrivetRoute>
    ),
  },
  {
    path: "/meetRoom/:roomCode",
    element: (
      <PrivetRoute>
        <RoomPage />
      </PrivetRoute>
    ),
  },
]);

export default router;
