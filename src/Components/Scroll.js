import React from 'react';


// Pure Function
const Scroll = (props) => {
  return (
      <div style={{overflowY: 'scroll', border: '1px solid black', height: '700px'}}>
          { props.children }
      </div>
  );
};

export default Scroll;
