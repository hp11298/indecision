import React from 'react';
import ReactDOM from 'react-dom';
import Option from './option.js'
const Options=(props)=>
{

  return (
    <div>

   
    <div className="widget-header">
<h2 className="title">Your Options</h2>
     <button onClick={props.delete} className="button--link">remove all</button>

     </div>
     {props.options.length === 0 && <p className="ab">Please add an option to get started!</p>}
      {
        
      props.options.map((option,index)=>{
       return <Option key={option} op={option} in={index}  handleDeleteOption={props.handleDeleteOption}/>;
      })
      }
    
    </div>
  );

};

export default Options;