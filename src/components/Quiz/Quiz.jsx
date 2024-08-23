import React from 'react'
import CustomRadioButton from '../../customComponents/CustomRadioButton'
import { Card } from 'antd';

const Quiz = ({ quizData, selectedAnswer = [], setSelectedAnswer }) => {
  
  const handleChange = (e) => {
    const updatedAnswers = selectedAnswer.filter(item => item.id !== quizData?.id);
    setSelectedAnswer([...updatedAnswers, { id: quizData?.id, value: e.target.value }]);
  };

  return (
    <div className='container' key={quizData?.id}>
      <Card className='card'>
        <h2 className='question'>{quizData?.id}. {quizData?.question}</h2>
        <CustomRadioButton 
          options={quizData?.options} 
          value={selectedAnswer.find(item => item.id === quizData?.id)?.value} 
          onChange={handleChange}
        />
      </Card>
    </div>
  )
}

export default Quiz;
