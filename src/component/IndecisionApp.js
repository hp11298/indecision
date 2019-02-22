import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options.js'
import AddOption from './AddOption.js'
import Header,{y as yii} from './Header.js'
import Action from './Action.js'
//console.log('glg');
//var s=7;
import OptionModal from './OptionModal.js'
class IndecisionApp extends React.Component {
    state={
        options:["b","a","c","d"],
        selected:undefined
        };
  componentDidUpdate()
  {
    console.log('hddi');
  } 
  componentDidMount()
  {
    console.log(yii);
  }
  com
    delete=()=>
    {
      this.setState(()=>{
        return {
  options:[]
        };
      });
    }
  
    answer=()=>
    {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
     // alert(option);
 

  this.setState(()=>
   {
     
     const f={
       selected: option
     };
     return f;
   });

    }
    hi()
    {
  const t=56;
  return t;
    }
    add=(option)=>
    { 
  if(!option)
  {
  return "enter something "
  }
  else if(this.state.options.indexOf(option)>-1)
  {
    return "already exists";
  }
  
  this.setState((pre)=>
  {
   const ne=pre.options.concat([option]);
    const nq={
      options:ne
    };
    return nq;
  },function g()
  {console.log('ff');}
);
  
    }

    func=()=>
    {
      this.setState(()=>
      {
        
        const f={
          selected: undefined,
          

        };
        return f;
      });
    }

    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    };
  

    render() {
     const title="Indecision";
     const subtitle="Put your life in the hands of a computer";
    // console.log(this.props);
    console.log("fl");
    // const options=["1","2","3"];
      return (
        <div>
         
           <Header title={title} subtitle={subtitle} />
          <div className="container">
          {this.props.children}
          <Action has={this.state.options.length>0} answer={this.answer} />
          <div className="widget">
          <Options options={this.state.options} delete={this.delete} 
          handleDeleteOption={this.handleDeleteOption}/>
          <AddOption add={this.add} />
          </div>
          </div>
          {this.hi()}
          <OptionModal selected={this.state.selected} func={this.func}/>
        </div>
      );
    }
  }


export default IndecisionApp;