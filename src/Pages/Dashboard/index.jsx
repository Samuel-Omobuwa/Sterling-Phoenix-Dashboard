import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {Card, Space, Statistic, Table, Typography} from "antd";




const Dashboard = () => {
  return (
    <div>
          <Typography.Title level={4} >Dashboard </Typography.Title>
          <Space direction='horizontal'>
          <DashboardCard 
          icon={<ShoppingCartOutlined
            style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 20,
              fontSize: 24,
              padding: 8,
            }} />} 
          title={"Orders"} 
          value={12345} />

          <DashboardCard 
          icon={<ShoppingOutlined 
            style={{
              color: "blue",
              backgroundColor: "rgba(0,0,255,0.25)",
              borderRadius: 20,
              fontSize: 24,
              padding: 8,
            }}/>} 
          title={"Inventory"} 
          value={12345} />

          <DashboardCard
           icon={<UserOutlined 
            style={{
              color: "purple",
              backgroundColor: "rgba(0,255,255,0.25)",
              borderRadius: 20,
              fontSize: 24,
              padding: 8,
            }}/>}
            title={"Customers"} 
            value={12345} />

          <DashboardCard 
          icon={<DollarCircleOutlined 
            style={{
              color: "red",
              backgroundColor: "rgba(255,0,0,0.25)",
              borderRadius: 20,
              fontSize: 24,
              padding: 8,
            }}/>} 
          title={"Revenue"} 
          value={12345} />
          </Space>
      
    </div>
  )
}


const DashboardCard = ({ title, value, icon})=>{

  return (
    <>
    <Space direction="horizontal">
      {icon}
    <Statistic  title= {title} value={value} />
    </Space>  
    
    <Space>
      <RecentOrders />
    </Space>
    </>
  )

}

function RecentOrders(){
  


  

  return (
  <Table
    columns={[
      {
      title: "Title",
      dataIndex: "title",
    },
      {
      title: "Quantity",
      dataIndex: "Quantity",
    },
      {
      title: "Price",
      dataIndex: "discountedTotal",
    }
  
  ]}
 
  >
    
  </Table>
  )
}

export default Dashboard