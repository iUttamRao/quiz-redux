import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Button, Pagination } from 'antd'
import React from 'react'

const QuizCounter = ({currentPage, totalPage, onChange}) => {
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
    <Pagination
      align="center"
      current={currentPage}
      total={totalPage}
      onChange={onChange}
      itemRender={itemRender}
      pageSize={1}
    />
  )
}

export default QuizCounter