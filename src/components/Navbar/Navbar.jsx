import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import React from 'react'

const Navbar = () => {

  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
    },
  ];
  return (
    <Menu
        // theme={theme}
        // onClick={onClick}
        // style={{ width: 256 }}
        // defaultOpenKeys={['sub1']}
        // selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
  )
}

export default Navbar