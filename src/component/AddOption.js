import React from 'react';
import ReactDOM from 'react-dom';

class AddOption extends React.Component {
    constructor(props)
    {
      super(props);
      this.sub=this.sub.bind(this);
      this.prin=this.prin.bind(this);
      this.state={
   error:undefined,
   count:0
      };
    }
    
     sub(e)
    {
   e.preventDefault();
   const g=e.target.elements.ab.value.trim();
   //console.log(ckcck)
   this.setState((py)=>
   {
     console.log(py);
     const str=this.props.add(g);
     const f={
       error:str
     };
     return f;
   },
  function g(){console.log('ff');}
  );
   
   
    this.setState((py)=>{return {count: py.count + 1} },()=>{console.log(this.state.count)})
    this.setState((py)=>{return {count: py.count + 1} },()=>{console.log(this.state.count)})
    this.setState((py)=>{return {count: py.count + 1} },()=>{console.log(this.state.count)})
  
   //console.log(str);
   
   e.target.elements.ab.value="";
   
    }
    prin()
    {
   if(this.state.error)
   {
   return <p className="error">{this.state.error}</p>;
   }
    }
     render() {
       var ss=5;
       var f=<h1>{`${ss}5`}</h1>;
       return (
         <div>
           {this.prin()}
         <form onSubmit={this.sub} className="form">
   <input type="text" name="ab" className="input"/>
   <button className="button-s" >Add Option</button>
           </form>
           
         </div>
       );
     }
   }

export default AddOption;