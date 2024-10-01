import { Avatar, Card, List, Popconfirm, notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { QuizListConstant } from '../../constant/constant'
import { Button } from 'antd/es/radio'
import { DeleteOutlined, EditOutlined, FileTextOutlined, SendOutlined, SignatureOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axiosInstance from '../../api/api'
import AssignQuizModal from '../AssignQuiz/AssignQuiz'

const QuizList = () => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedQuizId, setSelectedQuizId] = useState(null)
  const [quizData, setQuizData] = useState()
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axiosInstance.get(`users/${localStorage.getItem("id")}`)
      if (response.status === 200) {
        const quizArray = response.data.role === 'teacher' ?
          response.data.quizzesCreated : response.data.quizzesAssigned.filter(element => !response.data.quizzesTaken.includes(element));
        try {
          const quizResponse = await axiosInstance.post("quizzes/by-ids", { ids: quizArray })
          setQuizData(quizResponse.data)
          setLoading(false)
        }
        catch (err) {
          console.log("quiz data fetch failed", err)
          setQuizData([])
          setLoading(false)
        }
      }
    }
    catch (err) {
      console.log("User Get Failed", err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const deleteQuiz = async (id) => {
    try {
      await axiosInstance.delete(`quizzes/${id}`)
      fetchData()
      notification.success({
        message: 'Quiz deleted Successfully',
        duration: 2,
      });
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <Card
          title="Quizzes"
          style={{
            borderRadius: 20,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            border: 'none'
          }}
          loading={loading}
        >
          <List
            dataSource={quizData}
            renderItem={(item) => (
              <List.Item
                actions={
                  localStorage.getItem("role") === 'teacher' ? (
                    [
                      <Button
                        key={`${item.title}-assign`}
                        title='Assign Quiz'
                        type="primary"
                        onClick={() => {
                          setSelectedQuizId(item._id)
                          setModalOpen(true)
                        }}
                      >
                        Assign Quiz <SignatureOutlined />
                      </Button>,
                      <Button
                        key={`${item.title}-edit`}
                        type="primary"
                        title='Edit Quiz'
                        onClick={() => {
                          navigate(`/quiz/edit/${item._id}`)
                        }}
                      >
                        <EditOutlined />
                      </Button>,
                      <Popconfirm
                        title="Delete the quiz"
                        description="Are you sure to delete this quiz?"
                        onConfirm={() => {
                          deleteQuiz(item._id)
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button
                          key={`${item.title}-delete`}
                          type="primary"
                          title='Delete Quiz'
                        >
                          <DeleteOutlined />
                        </Button>
                      </Popconfirm>
                    ]
                  ) : (
                    [
                      <Button
                        key={`${item.title}-start`}
                        type="primary"
                        title='Start Quiz'
                        onClick={() => {
                          navigate(`/quiz/${item._id}`)
                        }}
                      >
                        Start Quiz <SendOutlined />
                      </Button>
                    ]
                  )
                }
              >
                <List.Item.Meta
                  avatar={<FileTextOutlined />}
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          >
          </List>
        </Card>
      </div>
      <AssignQuizModal modalOpen={modalOpen} setModalOpen={setModalOpen} quizId={selectedQuizId} />
    </>
  )
}

export default QuizList