import React from 'react';
const Number = (props) => {
  return (
      <div>
            {
          isNaN(+props.num) ? <h1>The Word is: {props.num}</h1> : <h1>The Number is: {props.num}</h1>
        }
      </div>
  );
}
export default Number;
