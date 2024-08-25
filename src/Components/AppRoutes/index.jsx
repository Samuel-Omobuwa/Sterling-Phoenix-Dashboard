import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";


const AppRoutes = () => {
  return (
    
        <Routes>
          <Route Route path="/" element ={<Dashboard />} ></Route>
          <Route Route path="/inventory" element ={<Inventory />} ></Route>
          <Route Route path="/orders" element ={<Orders />} ></Route>
          <Route Route path="/customers" element ={<Customers />} ></Route>
        </Routes>
    
  )
}

export default AppRoutes
