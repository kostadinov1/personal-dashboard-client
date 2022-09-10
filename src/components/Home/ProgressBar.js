import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
const { Step } = Steps;

const stepsContentStyles = {
              minHeight: '200px',
              marginTop: '16px',
              paddingTop: '80px',
              textAlign: 'center',
              backgroundColor: '#fafafa',
              border: ['1px', 'dashed', '#e9e9e9'],
              borderRadius: '2px',
}
const stepsActionsStyles =  {
  marginTop: '24px'
}


const ProgressBar = ({steps}) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps
       current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div style={stepsContentStyles}>{steps[current].content}</div>
      <div style={stepsActionsStyles}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default ProgressBar;