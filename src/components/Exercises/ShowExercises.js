import {  EditFilled } from '@ant-design/icons';
import { PageHeader, Button, List, Avatar  } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllExercises } from '../../services/exercises/getAllExercises';
import VirtualList from 'rc-virtual-list';
import DeleteExercise from './DeleteExercise';

const ContainerHeight = 400;


const ShowExercises = () => {
  const [exercises, setExercises] = useState([])
  const navigate = useNavigate()

  const appendData = () => {
    getAllExercises()
    .then((res) => {
      setExercises(res)
      console.log('response in SUCCESS:', res);
    })
    .catch((res) => {
      console.log('response in ERROR:', res);
    })
  };
  
  useEffect(() => {
    appendData();
  }, []);
  
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  const createExerciseHandler = (e) => {
      e.preventDefault()
      navigate('/create-exercise')
  }
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate('/')}
        title="Back"
        subTitle="This is a subtitle"
      />
    <Button onClick={createExerciseHandler} type="primary" block>
      Create Exercise
    </Button>
  <List>
    <VirtualList
    
      data={exercises}
      height={ContainerHeight}
      itemHeight={47}
      itemKey="email"
      onScroll={onScroll}
    >
      {(item) => (
        <List.Item 
        key={item.id}

        actions={[
          <Link
          to={`/edit-exercise/${item.id}`}>
            <Button
                    exercise={item}

              type='primary'
              size='small'
              shape='round'
              icon={<EditFilled/>}
            >Edit
            </Button></Link>,
          <DeleteExercise item={item}></DeleteExercise>
        ]}>
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={<Link to={''}>{item.name}</Link>}
            description={item.description}
          />
          <div>{item.description}</div>
        </List.Item>
      )}
    </VirtualList>
  </List>
    </>
);
};

export default ShowExercises;