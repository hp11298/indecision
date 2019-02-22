import React from "react";
import Modal from "react-modal"

const y=( tu)=>
{
   if(!!tu)
   {
       return tu;
   }
}

const OptionModal =(props)=>
{
return (
    <Modal isOpen={!!props.selected} content="his" onRequestClose={props.func} className="modal">
<h3 className="modal__title">Selected Option</h3>
<p className="modal__body">{y(props.selected)}</p>
<button onClick={props.func} className="button">okay</button>
</Modal>
);
}
export default  OptionModal ;