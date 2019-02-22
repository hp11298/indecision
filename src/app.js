/*import an,{sq,add} from './utils.js'
import validator from 'validator'

//console.log(sq(4));
//console.log(add(4,8));
console.log(an(8,8));
console.log(validator.isEmail("hap@gml.cm"));*/

// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-modal"

import IndecisionApp from './component/IndecisionApp.js'
import 'normalize.css/normalize.css'
import './style/style.scss'


  
  /*class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }*/
  
  
 
  
  /*class Action extends React.Component {
   
  
    render() {
      return (
        <div>
          <button onClick={this.props.answer} disabled={!this.props.has}>What should I do?</button>
        </div>
      );
    }
  }*/
  
  
  
  /*class Options extends React.Component {
  
  
   
   
    render() {
     // console.log(this.props.options.length);
      return (
        <div>
  
         <button onClick={this.props.delete}>remove</button>
          {
          this.props.options.map((option)=>{
           return <Option key={option} op={option}/>;
          })
          }
        
        </div>
      );
    }
  }*/
  
 
  
  /*class Option extends React.Component {
    render() {
      return (
        <div>
          {this.props.op}
        </div>
      );
    }
  }*/
 
  const Newe=(props)=>
  {

      return (
          <div>
<p>hi</p>
{props.children}
<p>bye</p>
</div>
      ); 
  }
 
  
 // ReactDOM.render(<Newe ><div><h1>abc</h1>midd</div></Newe>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp ke={8} >ggg</ IndecisionApp > , document.getElementById('app'));
// ReactDOM.render(<div><p>fkf</p> <Modal ke={8} isOpen={true} >ggg</ Modal ></div> , document.getElementById('app'));
