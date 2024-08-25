import React from 'react'
import { Typography } from 'antd'

const AppFooter = () => {
  return (
    <div className='AppFooter'>
      <Typography.Link href='tel:+123456789'>+2349039523714</Typography.Link>
      <Typography.Link href='https://www.google.com' target={'_blank'}>Privacy Policy</Typography.Link>
      <Typography.Link href='https://www.google.com' target={'_blank'}>Terms Of Use</Typography.Link>
    </div>
  )
}

export default AppFooter
