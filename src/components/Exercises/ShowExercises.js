import { Space, Table, Tag,Form, Input, InputNumber, Popconfirm, Typography  } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllExercises } from '../../services/exercises/getAllExercises';

const { Column, ColumnGroup } = Table;



const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


const ShowExercises = () => {

  const [exercises, setExercises] = useState([])

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  

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







  const [form] = Form.useForm();
  const [data, setData] = useState(exercises);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  // TODO: Edit exercise service
  const save = ''

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Reps',
      dataIndex: 'reps',
      width: '15%',
      editable: true,
    },
    {
      title: 'Sets',
      dataIndex: 'sets',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });





  return (
    <>
   <Table dataSource={exercises}
   onChange={onChange}
   >
    <ColumnGroup title="EXERCISES">

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


  <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
    </>
  );
};

export default ShowExercises;