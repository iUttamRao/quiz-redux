import { Radio } from 'antd'
import React from 'react'

const CustomRadioButton = ({ options, value, onChange }) => {
  
  return (
    <Radio.Group
      options={options}
      onChange={onChange}
      value={value}
      optionType="button"
      buttonStyle="solid"
      className='radio'
    />
  )
}

export default CustomRadioButton