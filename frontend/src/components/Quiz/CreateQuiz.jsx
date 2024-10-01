import { CloseOutlined } from '@ant-design/icons';
import { Card, Button, Form, Input, Space, Row, Col, Select, notification } from 'antd';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/api';

const CreateQuiz = ({ editMode = false }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (editMode && id) {
      setLoading(true);
      axiosInstance.get(`quizzes/${id}`)
        .then(response => {
          form.setFieldsValue({
            title: response.data.title,
            description: response.data.description,
            questions: response.data.questions.map((question, index) => ({
              questionText: question.questionText,
              options: question.options.map((option, optIndex) => ({
                label: option.label,
                value: optIndex + 1,
              })),
              correctAnswer: question.correctAnswer,
            }))
          });
        })
        .catch(err => {
          notification.error({
            message: 'Failed to fetch quiz data',
            description: err.response.data.message,
          });
        })
        .finally(() => setLoading(false));
    }
    else {
      form.resetFields()
    }
  }, [editMode, id, form]);

  const onFinish = async (values) => {
    try {
      const payload = { ...values, createdBy: localStorage.getItem("id") };

      if (editMode && id) {
        await axiosInstance.put(`quizzes/edit/${id}`, payload);
        notification.success({
          message: 'Quiz Updated Successfully',
          duration: 2,
        });
      } else {
        await axiosInstance.post("quizzes/create", payload);
        notification.success({
          message: 'Quiz Created Successfully',
          duration: 2,
        });
      }

      navigate("/quiz");
    } catch (err) {
      notification.error({
        message: editMode ? 'Quiz update failed' : 'Quiz creation failed',
        description: err.response.data.message,
        duration: 2,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Row justify="center">
          <Col xs={24} sm={24} md={18} lg={14} xl={12}>
            <Card
              title={editMode ? "Edit Quiz" : "Create a new quiz"}
              style={{
                width: '100%', borderRadius: 20,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                border: 'none'
              }}
              loading={loading}
            >
              <Form
                form={form}
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[{ required: true, message: 'Please input your title!' }]}
                >
                  <Input placeholder='Enter the title' />
                </Form.Item>

                <Form.Item
                  label="Description"
                  name="description"
                  rules={[{ required: true, message: 'Please input your description!' }]}
                >
                  <Input placeholder='Enter the description' />
                </Form.Item>

                <Form.List name="questions">
                  {(fields, { add, remove }) => (
                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                      {fields.map((field) => (
                        <Card
                          key={field.key}
                          style={{ width: '100%' }}
                          title={<span style={{ fontSize: '20px' }}>{`Question ${field.name + 1}`}</span>}
                          extra={
                            <CloseOutlined
                              onClick={() => remove(field.name)}
                              style={{ color: 'red', cursor: 'pointer' }}
                            />
                          }
                        >
                          <Form.Item
                            label="Question"
                            name={[field.name, 'questionText']}
                            rules={[{ required: true, message: 'Please input the question!' }]}
                          >
                            <Input placeholder="Enter the Question" />
                          </Form.Item>

                          {Array.from({ length: 4 }, (_, i) => (
                            <>
                              <Form.Item
                                key={`option-${i}`}
                                label={`Option ${i + 1}`}
                                name={[field.name, 'options', i, 'label']}
                                rules={[{ required: true, message: `Please input Option ${i + 1}!` }]}
                              >
                                <Input placeholder={`Enter Option ${i + 1}`} />
                              </Form.Item>
                              <Form.Item
                                name={[field.name, 'options', i, 'value']}
                                initialValue={i + 1}
                                style={{ display: 'none' }}
                              >
                                <Input />
                              </Form.Item>
                            </>
                          ))}

                          <Form.Item
                            label="Correct Answer"
                            name={[field.name, 'correctAnswer']}
                            rules={[{ required: true, message: 'Please select the correct answer!' }]}
                          >
                            <Select
                              placeholder="Select the Correct Answer"
                              options={[
                                { label: "Option 1", value: 1 },
                                { label: "Option 2", value: 2 },
                                { label: "Option 3", value: 3 },
                                { label: "Option 4", value: 4 },
                              ]}
                            />
                          </Form.Item>
                        </Card>
                      ))}
                      <Button type="dashed" onClick={() => add()} block>
                        + Add Question
                      </Button>
                    </div>
                  )}
                </Form.List>

                <Form.Item style={{ textAlign: 'center', marginTop: "30px" }}>
                  <Button type="primary" htmlType="submit">
                    {editMode ? "Update Quiz" : "Create Quiz"}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreateQuiz;
