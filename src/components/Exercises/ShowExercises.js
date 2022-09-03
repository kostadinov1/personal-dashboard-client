import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllExercises } from '../../services/exercises/getAllExercises';

const { Column, ColumnGroup } = Table;


const ShowExercises = () => {
  
  const [exercises, setExercises] = useState([])

  useEffect(()=>{
      getAllExercises()
      .then((res) => {
        setExercises(res)
        console.log('response in SUCCESS:', res);
      })
      .catch((res) => {
        console.log('response in ERROR:', res);
      })
  }, [])

  const tags = ['Running']

  return (
    <>
   <Table dataSource={exercises}>
    <ColumnGroup title="EXERCISES">
      <Column title="Exercise" dataIndex="name" key="name" />
      <Column title="Reps" dataIndex="reps" key="reps" />
    </ColumnGroup>
    <Column title="Sets" dataIndex="sets" key="sets" />
    <Column title="Weights(kg)" dataIndex="weights_in_kg" key="weights_in_kg" />
    <Column title="Calories" dataIndex="calories_burned" key="calories_burned" />
    <Column title="Breaks" dataIndex="break_in_seconds" key="break_in_seconds" />
    <Column title="Cues" dataIndex="cues" key="cues" />
    <Column title="Description" dataIndex="description" key="description" />

    <Column
      title="Type"
      dataIndex="type"
      key="type"
      render={(type) => (
        <>  
            <Tag color="blue" key={type}>
              {type}
            </Tag>
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <Link to='/'>Edit</Link>
          <Link to='/'>Delete</Link>
        </Space>
      )}
    />
  </Table>
    </>
  );
};

export default ShowExercises;