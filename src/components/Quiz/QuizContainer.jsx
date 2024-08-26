import React, { useState } from 'react'
import Quiz from './Quiz'
import QuizCounter from './QuizCounter'
import { ReactQuizData as QuizData } from '../../api/QuizData'

const QuizContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [selectedAnswer, setSelectedAnswer] = useState([])
  return (
    <>
      <Quiz
        quizData={QuizData.filter((item) => item.id === currentIndex)[0]}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
      <QuizCounter
        currentPage={currentIndex}
        totalPage={QuizData.length}
        onChange={(e) => setCurrentIndex(e)}
      />
    </>
  )
}

export default QuizContainer