
import { Space } from 'antd'
import './App.css'
import AppFooter from './Components/AppFooter/index'
import AppHeader from './Components/AppHeader/index'
import PageContent from './Components/PageContent/index'
import SideMenu from './Components/SideMenu/index'

function App() {
  

  return (
    
    <div className='App'>
       <AppHeader />
          <Space className='SideMenuAndPageContent'>

            <SideMenu></SideMenu>
            <PageContent></PageContent>
          </Space>
            
          <AppFooter/>
     </div>      
  )
}

export default App
