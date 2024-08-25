import React from 'react'
import{  BellFilled, MailOutlined } from '@ant-design/icons';
import {Badge, Image, Space, Typography} from 'antd';

const AppHeader = () => {
  return (
    <div className='AppHeader'>
      <Image width={120} src='https://upload.wikimedia.org/wikipedia/commons/0/07/Sterling_Bank_Logo_Straight.png'></Image>
      <Typography.Title>Sterling Phoenix Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot >
        <MailOutlined  style={{fontSize: 24 }} />
        </Badge>

        <Badge count={20} >
          <BellFilled style={{fontSize: 24 }}   />
        </Badge>
      </Space>
    </div>
  )
}   

export default AppHeader
