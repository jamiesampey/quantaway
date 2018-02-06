import React from 'react';

const Company = (props) => (
  <h4>
    {`Single company page for ${props.match.params.symbol}`}
  </h4>
);

export default Company