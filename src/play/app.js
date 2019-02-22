class IndecisionApp extends React.Component {
  
  constructor(props)
  {
super(props);
this.delete=this.delete.bind(this);
this.answer=this.answer.bind(this);
this.add=this.add.bind(this);
this.state={
options:["b","a","c","d"]
};
  }

  delete()
  {
    this.setState(()=>{
      return {
options:[]
      };
    });
  }

  answer()
  {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);

  }
  hi()
  {
const t=<p>klp</p>;
return t;
  }
  add(option)
  {
if(!option)
{
return "enter something"
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
});

  }
  render() {
   const title="Indecision";
   const subtitle="Put your life in the hands of a computer";
  // const options=["1","2","3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action has={this.state.options.length>0} answer={this.answer} />
        <Options options={this.state.options} delete={this.delete}/>
        <AddOption add={this.add} />
        {this.hi()}
      </div>
    );
  }
}

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


const Header=(props)=>
{
  return (
    <div>
      hi
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

Header.defaultProps={
title:"hi",
subtitle:"fr",
age:34
};

/*class Action extends React.Component {
 

  render() {
    return (
      <div>
        <button onClick={this.props.answer} disabled={!this.props.has}>What should I do?</button>
      </div>
    );
  }
}*/

const Action=(props)=>
{
  return (
    <div>
      <button onClick={props.answer} disabled={!props.has}>What should I do?</button>
    </div>
  );
};

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

const Options=(props)=>
{

  return (
    <div>

     <button onClick={props.delete}>remove</button>
      {
      props.options.map((option)=>{
       return <Option key={option} op={option}/>;
      })
      }
    
    </div>
  );

};

/*class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.op}
      </div>
    );
  }
}*/

const Option=(props)=>{
  return (
    <div>
      {props.op}
    </div>
  );
};

class AddOption extends React.Component {
 constructor(props)
 {
   super(props);
   this.sub=this.sub.bind(this);
   this.prin=this.prin.bind(this);
   this.state={
error:undefined
   };
 }
 
  sub(e)
 {
e.preventDefault();
const g=e.target.elements.ab.value.trim();

this.setState(()=>
{
  const str=this.props.add(g);
  const f={
    error:str
  };
  return f;
});


//console.log(str);

e.target.elements.ab.value="";

 }
 prin()
 {
if(this.state.error)
{
return <p>{this.state.error}</p>;
}
 }
  render() {
    return (
      <div>
        {this.prin()}
      <form onSubmit={this.sub}>
<input type="text" name="ab"/>
<button >Add</button>
        </form>
        
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
