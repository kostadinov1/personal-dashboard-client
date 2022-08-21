import { Avatar, Button, Card, Col, Radio, Row, Select, Space, Typography } from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Image, Calendar,} from 'antd';
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';
import { Pie, measureTextWidth } from '@ant-design/plots';
import MultiLineChart from '../Charts/MultiLineChart';


const ShowProfile = () => {
  const [visible, setVisible] = useState(false);
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  

    function renderStatistic(containerWidth, text, style) {
      const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
      const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2
  
      let scale = 1;
  
      if (containerWidth < textWidth) {
        scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
      }
  
      const textStyleStr = `width:${containerWidth}px;`;
      return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
    }
  
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
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <Link to='/edit-profile'><EditOutlined key="edit" /> Edit</Link>,
                    <Link to='/delete-profile/'><DeleteOutlined key="delete" /> Delete</Link>,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
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