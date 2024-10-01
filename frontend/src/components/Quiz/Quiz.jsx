import React, { useRef } from 'react'
import CustomRadioButton from '../../customComponents/CustomRadioButton'
import { Card } from 'antd';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Quiz = ({ quizData, currentIndex, selectedAnswer = [], setSelectedAnswer }) => {
  const card = useRef()

  useGSAP(() => {
    gsap.set(card.current, { opacity: 0 });
    gsap.to(card.current, { opacity: 1, duration: 1 });
  },
    { dependencies: [quizData] }
  );

  const handleChange = (e) => {
    const updatedAnswers = selectedAnswer.filter(item => item._id !== quizData._id);
    setSelectedAnswer([...updatedAnswers, { _id: quizData._id, selectedAnswer: e.target.value }]);
  };

  return (
    <div className='container'>
      <Card className='card' ref={card} style={{
        borderRadius: 20,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        border: 'none',
      }}>
        <h2 className='question'>{currentIndex}. {quizData?.questionText}</h2>
        <CustomRadioButton
          options={quizData?.options}
          value={selectedAnswer.find(item => item._id === quizData._id)?.selectedAnswer}
          onChange={handleChange}
        />
      </Card>
    </div>
  )
}

export default Quiz;
