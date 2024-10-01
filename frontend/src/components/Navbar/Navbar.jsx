import { ContainerFilled, HomeFilled, LogoutOutlined, PlusCircleFilled, QuestionCircleFilled, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [current, setCurrent] = useState(location.pathname.substring(1) || 'quiz');

  // useEffect(() => {
  //   console.log(location.pathname)
  //   if (location.pathname.includes("quiz/edit")){
  //     setCurrent("quiz")
  //   }
  // },[location])

  const items = [
    {
      label: 'Quiz',
      key: 'quiz',
      icon: <QuestionCircleFilled />
    },
    {
      label: 'Create Quiz',
      key: 'quiz/create',
      icon: <PlusCircleFilled />,
    },
    {
      label: 'Results',
      key: 'results',
      icon: <ContainerFilled />,
    },
    {
      label: `${localStorage.getItem("name")} (${localStorage.getItem("role")})`,
      key: 'profile',
      icon: <UserOutlined />,
    },
    {
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />,
    },
  ];
  const onClick = (e) => {
    if (e.key === 'logout') {
      localStorage.clear()
      navigate('/')
    }
    else {
      setCurrent(e.key)
      navigate(`/${e.key}`)
    }


  }
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={localStorage.getItem("role") === 'teacher' ? items : items.filter((item) => (item.key !== "quiz/create" && item.key !== "results"))}
    />
  )
}

export default Navbar