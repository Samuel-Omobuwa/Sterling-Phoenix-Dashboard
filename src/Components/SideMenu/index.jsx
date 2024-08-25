import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from 'react'
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

const SideMenu = () => {


  const   navigate = useNavigate();
  return (
    <div className='SideMenu'>
      <Menu
      onClick={(item)=>{
        // item.key
        navigate(item.key);
      }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: '/',
            
          },
          {
            label: "Inventory",
            key: '/inventory',
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: '/orders',
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: '/customers',
            icon: <UserOutlined />
          },
        ]}>
      </Menu>
    </div>
  )
}

export default SideMenu
