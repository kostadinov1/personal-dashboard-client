import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { deleteActivity } from "../../services/activities/deleteActivity";

function DeleteActivity({item}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')
  console.log(item)

  const onCancel = (e) => {

  }

  const onConfirm = (e,) => {
    deleteActivity(item.id, token)
    .then((res) => {
      navigate('/activities')
      console.log(res);})
    .catch((res) => { console.log(res);})
  }

  return (
    <>
      <Popconfirm
          onCancel={onCancel}
          onConfirm={onConfirm}
          title="Are you sure？"
          icon={
            <QuestionCircleOutlined
              style={{
                color: 'red',
              }}
            />
          }
        >
      <Button>Delete</Button>
      </Popconfirm>
    </>
  );
};



export default DeleteActivity
