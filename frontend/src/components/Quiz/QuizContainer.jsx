import React, { useEffect, useState } from 'react'
import Quiz from './Quiz'
import QuizCounter from './QuizCounter'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../api/api'
import Navbar from '../Navbar/Navbar'
import { Button, notification } from 'antd'

const QuizContainer = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [quizData, setQuizData] = useState()
  const [currentIndex, setCurrentIndex] = useState(1)
  const [selectedAnswer, setSelectedAnswer] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`quizzes/${id}`)
        setQuizData(response.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const calculateScore = (questionData, answerData) => {
    let score = 0;
    questionData?.forEach(question => {
      const answer = answerData.find(a => a._id === question._id);

      if (answer && question.correctAnswer === answer.selectedAnswer) {
        score += 1;
      }
    });
    return score;
  };

  useEffect(() => {
    if (selectedAnswer) {
      setScore(calculateScore(quizData?.questions, selectedAnswer))
    }
  }, [selectedAnswer])

  const submitQuiz = async () => {
    try {
      await axiosInstance.post(`results/${quizData._id}`,
        {
          student: localStorage.getItem("id"),
          score
        })
      notification.success({
        message: 'Quiz submitted successfully',
        duration: 2,
      });
      navigate("/quiz")
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Navbar />
      <Quiz
        currentIndex={currentIndex}
        quizData={quizData?.questions[currentIndex - 1]}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
      <QuizCounter
        currentPage={currentIndex}
        totalPage={quizData?.questions.length}
        onChange={(e) => setCurrentIndex(e)}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 20% 0 20%' }}>
        <Button
          type='primary'
          onClick={() => navigate('/quiz')}
        >Back to Quiz</Button>
        <Button
          type='primary'
          disabled={currentIndex !== quizData?.questions.length}
          onClick={submitQuiz}
        >Submit</Button>
      </div>
    </>
  )
}

export default QuizContainer