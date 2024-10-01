import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import Navbar from '../Navbar/Navbar';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Card
          style={{
            borderRadius: 20,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            border: 'none',
            width: '100%',
            maxWidth: 600,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              size={100}
              icon={<UserOutlined style={{ color: "black" }}/>}
              style={{
                marginBottom: 20,
                border: '4px solid #1890ff',
                backgroundColor: '#e6f7ff'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={1} style={{ marginBottom: 10 }}>
                {localStorage.getItem("name")}
              </Title>
              <Text style={{ fontSize: '20px', color: '#8c8c8c' }}>
                {localStorage.getItem("email")}
              </Text>
              <Text style={{ display: 'block', marginTop: 10, fontSize: '16px', color: '#595959' }}>
                <strong>{localStorage.getItem("role")?.toUpperCase()}</strong>
              </Text>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Profile;
