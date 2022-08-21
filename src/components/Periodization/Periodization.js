import { Tree } from 'antd';
import React from 'react';

const treeData = [
  {
    title: 'Year',
    key: '0-0',
    children: [
      {
        title: 'January-March',
        key: '0-0-0',
        disabled: false,
        children: [
          {
            title: 'Week1',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'Week2',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'April-June',
        key: '0-0-1',
        children: [
          {
            title: (<span style={{ color: '#1890ff',}}> Week1 </span>), 
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];


const Periodization = () => {

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

export default Periodization;
