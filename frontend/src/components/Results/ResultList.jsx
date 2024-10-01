import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Card, List, Row, Col, Divider } from 'antd'
import axiosInstance from '../../api/api';

// const quizResults = [
//   {
//     title: "Math Quiz",
//     description: "Basic arithmetic questions",
//     totalQuestions: 10,
//     correctQuestions: 8,
//     score: "80%",
//     submittedBy: "John Doe"
//   },
//   {
//     title: "Science Quiz",
//     description: "General science knowledge",
//     totalQuestions: 15,
//     correctQuestions: 10,
//     score: "67%",
//     submittedBy: "Jane Smith"
//   },
//   // Add more results as needed
// ];

const ResultList = () => {
  const [quizResults, setQuizResults] = useState()
  const [loading, setLoading] = useState(false)
  console.log(quizResults)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get('results/all')
        setQuizResults(response.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <Card
          title="Results"
          style={{
            borderRadius: 20,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            border: 'none'
          }}
          loading={loading}
        >
          <List
            itemLayout="vertical"
            dataSource={quizResults}
            renderItem={result => (
              <Card
                style={{ marginBottom: 20, borderRadius: 8, backgroundColor: '#f9f9f9' }}
                hoverable
              >
                <Row gutter={16}>
                  <Col span={16}>
                    <h1>{result.quiz.title}</h1>
                    <h3>{result.quiz.description}</h3>
                  </Col>
                  <Col span={8} style={{ textAlign: 'right' }}>
                    <h3>Quiz Created by:</h3> {result.quiz.createdBy.name}
                    <h3>Quiz Submitted by:</h3> {result.student.name}
                  </Col>
                </Row>
                <Divider />
                <Row gutter={16}>
                  <Col span={8}>
                    <p style={{ textAlign: "center" }}><strong>Total Questions:</strong> {result.quiz.questions.length}</p>
                  </Col>
                  <Col span={8}>
                    <p style={{ textAlign: "center" }}><strong>Corrected Questions:</strong> {result.score}</p>
                  </Col>
                  <Col span={8}>
                    <p style={{ textAlign: "center" }}>
                      <strong>Score:</strong> {result.score > 0
                        ? (result.score / result.quiz.questions.length) * 100
                        : 0}%
                    </p>
                  </Col>
                </Row>
              </Card>
            )}
          />
        </Card>
      </div>
    </>
  )
}

export default ResultList
