import { HomeFilled, LogoutOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Menu } from 'antd'
import React, { useState } from 'react'

const Navbar = () => {
  const [current, setCurrent] = useState('home')

  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeFilled />,
    },
    {
      label: 'Create a new quiz',
      key: 'newQuiz',
      icon: <PlusCircleFilled />,
    },
    {
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />,
    },
  ];
  const onClick = (e) => {
    setCurrent(e.key)
  }
  return (
    <Menu
      // theme={theme}
      onClick={onClick}
      // defaultOpenKeys={[]}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  )
}

export default Navbar