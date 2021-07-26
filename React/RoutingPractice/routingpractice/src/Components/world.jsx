import React from 'react';
const Word = (props) => {
  return (
      <div>
        <h1 style={{color: props.color, backgroundColor: props.back}}>The is: {props.word}</h1>
      </div>
  );
}
export default Word;