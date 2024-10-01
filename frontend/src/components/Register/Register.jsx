import { Card, Button, Form, Input, Select, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api';

const Register = () => {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post("users/register", values)
      if (response.status === 201) {
        let countdown = 3;
        const key = 'updatable';
        notification.success({
          key,
          message: 'Registration Successful',
          description: `You will be redirected to login in ${countdown} seconds...`,
          duration: 3,
        });

        const interval = setInterval(() => {
          countdown--;
          notification.success({
            key,
            message: 'Registration Successful',
            description: `You will be redirected to login in ${countdown} seconds...`,
            duration: 3,
          });

          if (countdown === 0) {
            clearInterval(interval);
            navigate("/login")
          }
        }, 1000);
      }
    }
    catch (err) {
      notification.error({
        message: 'Registration Failed',
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
      <Card title="Register" style={{
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
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Select
              placeholder="Select role"
              options={[{ label: "Teacher", value: "teacher" }, { label: "Student", value: "student" }]} />
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
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Register