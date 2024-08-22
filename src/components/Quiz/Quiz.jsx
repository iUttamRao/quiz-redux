import React, { useState } from 'react'
import CustomRadioButton from '../../customComponents/CustomRadioButton'
import { Card } from 'antd';

const Quiz = () => {
  const [selectedValue, setSelectedValue] = useState();

  const options = [
    { label: 'Apple', value: 1 },
    { label: 'Pear', value: 2 },
    { label: 'Orange', value: 3 },
  ];

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className='container'>
      <Card className='card'>
        <h2>What is the full of JSX?</h2>
        <CustomRadioButton options={options} value={selectedValue} onChange={handleChange}/>
      </Card>
    </div>
  )
}

export default Quiz