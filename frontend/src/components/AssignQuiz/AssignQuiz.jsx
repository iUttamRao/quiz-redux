import React, { useEffect, useState } from 'react';
import { Form, Modal, Select, notification } from 'antd';
import axiosInstance from '../../api/api';
const AssignQuizModal = ({ modalOpen, setModalOpen, quizId }) => {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [optionData, setOptionData] = useState([])
  const [studentUserIds, setStudentUserIds] = useState([])

  useEffect(() => {
    if (quizId) {
      const fetchData = async () => {
        try {
          const quizResponse = await axiosInstance.get(`quizzes/${quizId}`)
          console.log(quizResponse.data.assignedTo)
          const response = await axiosInstance.get("users/student")
          if (response.data.length > 0) {
            setOptionData(response.data.map((item) => {
              if (quizResponse.data.assignedTo.includes(item._id)) {
                return {
                  label: item.name,
                  value: item._id,
                  disabled: true
                }
              }
              else {
                return {
                  label: item.name,
                  value: item._id,
                  disabled: false
                }
              }
            }))
          }
        }
        catch (err) {
          console.log(err)
        }
      }
      fetchData()
    }
  }, [quizId])

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleFinish = async () => {
    setConfirmLoading(true);
    try {
      const response = await axiosInstance.post("quizzes/assign-quiz",
        { quizId, userIds: studentUserIds }
      );
      console.log(response)

      if (response) {
        notification.success({
          message: 'Quiz Assigned Successfully',
          duration: 2,
        });
        setTimeout(() => {
          setModalOpen(false);
          setConfirmLoading(false);
        }, 2000);
      } else {
        console.error("API call failed:", response.message);
      }
    } catch (error) {
      console.error("Error occurred during API call:", error);
      setConfirmLoading(false);
    }
  };

  return (
    <>
      <Modal
        title={<span style={{ fontSize: "30px" }}>Assign Quiz</span>}
        open={modalOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        destroyOnClose
      >
        <Form
          form={form}
          onFinish={handleFinish}
          layout="vertical"
        >

          <Form.Item
            label="Select Students"
            name="username"
            rules={[{ required: true, message: 'Please select students!' }]}
          >
            <Select
              mode='multiple'
              placeholder="Select Students"
              options={optionData}
              onChange={(e) => setStudentUserIds(e)}
            />
          </Form.Item>
        </Form>
        <p style={{color:"#1677ff"}}>Note : Disabled Options (Student) are already assigned with this quiz.</p>
      </Modal>
    </>
  );
};
export default AssignQuizModal;