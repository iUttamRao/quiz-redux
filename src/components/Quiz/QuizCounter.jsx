import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Button, Pagination } from 'antd'
import React from 'react'

const QuizCounter = () => {
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <Button icon={<DoubleLeftOutlined />}>Previous</Button>;
    }
    if (type === 'next') {
      return <Button icon={<DoubleRightOutlined />} iconPosition='end'>Next</Button>;
    }
    return originalElement;
  };
  return (
    <Pagination align="center" current={1} total={500} itemRender={itemRender} />
  )
}

export default QuizCounter