import React from 'react';
import ReactDOM from 'react-dom';

var i=1;
const Option=(props)=>{
  
    return (
      <div className="option">
    <p className="text"> {props.in+1+" "+props.op}</p>
        <button
      onClick={(e) => {
        props.handleDeleteOption(props.op);
      }} className="button--link"
    >
      remove
      </button>
      
      </div>
 
    );
   
  };
  
export default Option;




