class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state={
count:0
      };
    }
    handleAddOne() {
       this.setState((pre)=>{
const st={
    count:pre.count+1
};
return st;

       }

       );
    }
    handleMinusOne() {
        this.setState((pre)=>{
            const st={
                count:pre.count-1
            };
            return st;
            
                   }
            
                   );
    }
    handleReset() {
       

           this.setState(
               {
                   count:0
               }
           ); 
           
          /* this.setState((pre)=>{
            const st={
                count:0
            };
            return st;
            
                   }
            
                   );
*/
    }
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Counter />, document.getElementById('app'));
  

  