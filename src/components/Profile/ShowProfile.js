import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';
import { Pie, measureTextWidth } from '@ant-design/plots';
import MultiLineChart from '../Charts/MultiLineChart';
import LocalModal from './LocalModal';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal,  Avatar, Card, Col, Row} from 'antd';
import { deleteProfileService } from '../../services/profile/deleteProfileService'


const ShowProfile = () => {

  const navigate = useNavigate();

  const onDelete = () => {
    navigate('/');
    deleteProfileService(16);
  };

  const confirmOnDelete = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are You Sure You Want To DELETE Your Account?!',
      okText: 'Yes!',
      cancelText: 'No!',
      onOk: onDelete,
      onCancel: ()=>navigate('/show-profile/'),
      confirmLoading: true,
      destroyOnClose: true,
      centered: true,
    });
    };
  const renderStatistic = (containerWidth, text, style) => {
      const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
      const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2
  
      let scale = 1;
  
      if (containerWidth < textWidth) {
        scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
      }
  
      const textStyleStr = `width:${containerWidth}px;`;
      return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
    };
  const data = [
      {
        type: 'Running',
        value: 27,
      },
      {
        type: 'Resistance',
        value: 25,
      },
      {
        type: 'Swimming',
        value: 18,
      },
      {
        type: 'Bikeing',
        value: 15,
      },
      {
        type: 'Hiking',
        value: 10,
      },
      {
        type: 'Yoga',
        value: 5,
      },
    ];
  const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.64,
      meta: {
        value: {
          formatter: (v) => `${v} km`,
        },
      },
      label: {
        type: 'inner',
        offset: '-50%',
        style: {
          textAlign: 'center',
        },
        autoRotate: false,
        content: '{value}',
      },
      statistic: {
        title: {
          offsetY: -4,
          customHtml: (container, view, datum) => {
            const { width, height } = container.getBoundingClientRect();
            const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
            const text = datum ? datum.type : 'Time';
            return renderStatistic(d, text, {
              fontSize: 28,
            });
          },
        },
        content: {
          offsetY: 4,
          style: {
            fontSize: '32px',
          },
          customHtml: (container, view, datum, data) => {
            const { width } = container.getBoundingClientRect();
            const text = datum ? `${datum.value} min.` : `${data.reduce((r, d) => r + d.value, 0)} min.`;
            return renderStatistic(width, text, {
              fontSize: 32,
            });
          },
        },
      },
      // 添加 中心统计文本 交互
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
        {
          type: 'pie-statistic-active',
        },
      ],
    };


  return (
    <>
    <br />
    <Row>
      <Col span={8}>
                <Card
                  style={{
                    width: 'auto',
                    marginRight: '13px'
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kli5J_bjfkyTOk0orIlx3AHaEo%26pid%3DApi&f=1"
                    />
                  }
                  actions={[
                    <Link to='/edit-profile'><EditOutlined key="edit" /> Edit</Link>,
                    <Link onClick={confirmOnDelete} to='/delete-profile/'><DeleteOutlined key="delete" /> Delete</Link>,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2kEpxlhbnNbN9dPJBMdeZgHaHa%26pid%3DApi&f=1" />}
                    title="Your Profile"
                    description="This is the description"
                  />
                </Card>
      </Col>
      
      <Col span={16}>
        <MultiLineChart 
                          style={{
                            width: 'auto',
                            margin: '13px'
                          }}/> 
      </Col>
    </Row>
    
    <br />

    <Row>
      <Col span={8}>
      <div className="site-card-border-less-wrapper">
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: '90%',
            }}
          >
           <Pie {...config} />
          </Card>
        </div>
      </Col>
      <Col span={8}
                  style={{
                    width: '90%',
                    height: '100%'
                  }}>
          <div className="site-card-border-less-wrapper">
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: '90%',
              maxHeight: '100%'
            }}
          >
            <LocalModal />
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </Col>
      <Col span={8}>
          <div className="site-card-border-less-wrapper">
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: '90%',
            }}
          >
           <Pie {...config} />
          </Card>
         </div>
      </Col>
    </Row>

    <br />

    <Row>

    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>

    <br />
  </>
  
)};

export default ShowProfile;