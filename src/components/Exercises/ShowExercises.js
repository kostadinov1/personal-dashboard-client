import { ContainerFilled, ContainerOutlined, DeleteFilled, EditFilled, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag, PageHeader, Button  } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllExercises } from '../../services/exercises/getAllExercises';
import { getExerciseTypes } from '../../services/exerciseTypes/getExerciseTypes';
import CreateExercise from './CreateExercise';

const { Column, ColumnGroup } = Table;


const ShowExercises = () => {
  const [exerciseTypes, setExerciseTypes] = useState([])
  const [exercises, setExercises] = useState([])
  const navigate = useNavigate()

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  
  useEffect(()=>{
    getExerciseTypes()
    .then((res) => {
      setExerciseTypes(res)
      console.log('response in SUCCESS:', res);
    })
    .catch((res) => {
      console.log('response in ERROR:', res);
    })
}, [])

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


      <Table
      dataSource={exercises}
      onChange={onChange}
      >
        <ColumnGroup 
        
        title="EXERCISES">

          <Column
            filters={ [
          {
            text: 'name',
            value: 'Joe',
          },
          {
            text: 'Jim',
            value: 'Jim',
          },
          {
            text: 'Submenu',
            value: 'Submenu',
            children: [
              {
                text: 'Green',
                value: 'Green',
              },
              {
                text: 'Black',
                value: 'Black',
              },
            ],
          },
        ]}
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter={ (value, record) => record.name.indexOf(value) === 0}
        sorter={ (a, b) => a.name.length - b.name.length}
        sortDirections={ ['descend']}
          
          title="Exercise" dataIndex="name" key="name" />

        </ColumnGroup>

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
              <Link to='/'>
                <Button type="primary" shape="round" icon={<ContainerFilled/>} size={'small'}>
                  Details
                </Button>
               </Link>
               <Link to={`/edit-exercise/${record.index}`}>

                <Button  type="primary" shape="round" icon={<EditFilled />} size={'small'}>
                  Edit
                </Button>
                </Link>

               <Link to={`/delete-exercise/${record}`}>
                <Button type="primary" shape="round" icon={<DeleteFilled />} size={'small'}>
                  Delete
                </Button>
               </Link>
            </Space>
          )}
        />
      </Table>

    </>
  );
};

export default ShowExercises;