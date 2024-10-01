import React from 'react'
import { Card, Button, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api';

const Login = () => {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post("users/login", values)
      notification.success({
        message: 'Login Successful',
        duration: 2,
      });
      localStorage.setItem("id", response.data._id)
      localStorage.setItem("name", response.data.name)
      localStorage.setItem("email", response.data.email)
      localStorage.setItem("role", response.data.role)
      navigate("/quiz")
    }
    catch (err) {
      notification.error({
        message: 'Login Failed',
        description: err.response.data.message,
        duration: 2,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='form-container'>
      <Card title="Login" style={{
        maxWidth: '800px', width: '100%', borderRadius: 20,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        border: 'none'
      }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{ offset: 8 }}
          >
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login