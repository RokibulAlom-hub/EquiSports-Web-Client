import React from 'react';
import { Tooltip } from 'react-tooltip';

const MyComponent = () => {
  return (
    <div>
      <a data-tooltip-id="basic-tooltip" data-tooltip-content="Hello, I am a tooltip!">Hover over me</a>
      <Tooltip id="basic-tooltip" />
    </div>
  );
};

export default MyComponent;
