import { Pagination } from 'antd'
import React from 'react'

const QuizCounter = ({currentPage, totalPage, onChange}) => {
  return (
    <Pagination
      align="center"
      current={currentPage}
      total={totalPage}
      onChange={onChange}
      pageSize={1}
    />
  )
}

export default QuizCounter