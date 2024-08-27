import React, { useRef } from 'react'
import CustomRadioButton from '../../customComponents/CustomRadioButton'
import { Card } from 'antd';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Quiz = ({ quizData, selectedAnswer = [], setSelectedAnswer }) => {
  const card = useRef()

  useGSAP(() => {
    gsap.set(card.current, { opacity: 0 });
    gsap.to(card.current, { opacity: 1, duration: 1 });
  },
  { dependencies : [ quizData ] }
);
  
  const handleChange = (e) => {
    const updatedAnswers = selectedAnswer.filter(item => item.id !== quizData?.id);
    setSelectedAnswer([...updatedAnswers, { id: quizData?.id, value: e.target.value }]);
  };

  return (
    <div className='container' key={quizData?.id}>
      <Card className='card' ref={card}>
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
