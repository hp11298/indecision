class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
     
      this.state={
count:0
      };
    }
    handleAddOne() {
       this.setState((pre)=>{
const st={
    count:(pre.count+1)%2
};
return st;

       }

      
       );

       if(this.state.count==0)
       {
        ReactDOM.render(<p >hi</p>, document.getElementById('e'));
       }
     else
       {
        ReactDOM.render(<p ></p>, document.getElementById('e'));
       }
    }
   
    
    render() {
      return (
        <div id="d">
        <div id='e'></div>
          <h1>Visibility </h1>
          <button onClick={this.handleAddOne}>Show</button>
         
        </div>
      );
    }
  }
  
  ReactDOM.render(<Counter />, document.getElementById('app'));
  

  