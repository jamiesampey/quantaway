import React from 'react';

const Position = (props) => (
  <h4>
    {`Single position page for symbol ${props.match.params.symbol}`}
  </h4>
);

export default Position