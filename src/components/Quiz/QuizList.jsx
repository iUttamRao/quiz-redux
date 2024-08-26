import { Avatar, Card, List } from 'antd'
import React from 'react'
import { QuizListConstant } from '../../constant/constant'
import { Button } from 'antd/es/radio'
import { SendOutlined } from '@ant-design/icons'

const QuizList = () => {
  return (
    <div className='container'>
      <Card title="Quiz List">
        <List
          dataSource={QuizListConstant}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  key={1}
                  type="primary"
                  iconPosition="end"
                  icon={<SendOutlined />}
                  className="Primary-Button"
                  onClick={() => { }}
                >Start</Button>]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.logo} />}
                title={item.title}
                // description={survey.description}
              />
            </List.Item>
          )}
            >
        </List>
      </Card>
    </div>
  )
}

export default QuizList