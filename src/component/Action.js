import React from 'react';
import ReactDOM from 'react-dom';

const Action=(props)=>
  {
    return (
      <div>
        <button onClick={props.answer} disabled={!props.has} className="button">What should I do?</button>
      </div>
    );
  };


export default Action;