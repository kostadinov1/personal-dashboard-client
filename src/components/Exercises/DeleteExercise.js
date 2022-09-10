import { useNavigate } from "react-router-dom";
import { DeleteFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { deleteExercise } from "../../services/exercises/deleteExercise";

function DeleteExercise({item}) {
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')

  const onCancel = (e) => {}
  const onConfirm = (e) => {
    deleteExercise(item.id, token)
    .then((res) => {
      navigate('/show-exercises')
      console.log(res);})
    .catch((res) => { console.log(res);})
  }

  return (
    <>
      <Popconfirm
          onCancel={onCancel}
          onConfirm={onConfirm}
          title="Are you sure？"
          icon={<QuestionCircleOutlined style={{ color: 'red', }} />}
        >
        <Button
            type="primary"
            shape="round"
            size="small"
            icon={<DeleteFilled/>}
            >Delete
        </Button>
      </Popconfirm>
    </>
  );
};

export default DeleteExercise
