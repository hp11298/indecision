console.log("hiii");


var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
  };
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
  );
let count=0;  
let someid="gh";
const on= ()=> 
{
count++;
rty();
};
const re= ()=> 
{
    count=0;
rty();
};
const de= ()=> 
{
    count--;   

rty();
};
function aw(){
console.log("k")
};

var appRoot=document.getElementById('app');

const rty=()=>
{
var template2=(
<div>
<h1>Count: {count}</h1>
<button id={someid} className="button" onClick={on}>+1 </button>

<button id={someid} className="button" onClick={de}>-1         </button>
<button id={someid} className="button" onClick={re}>Reset </button>
</div>
);
ReactDOM.render(template2 ,appRoot); 
};

rty();






var hap="an";
var f=5;
var object={
    a:1,
    b:"ss",
c:true,

};
function f1( l)
{
    if(l)
    return l;
    else
    return "fd";
}

function f2( l)
{
    if(l)
    return <p>{l}</p>;
   
}
var temp=
    <div>
    <h1>{hap.toUpperCase()}</h1>//it works in same way as string in java
    <p>helllo </p>
    <ol>
        <li>dkdk</li>
        <li>{f}</li>
        <li>{object.a ? object.a: "not exist"}</li>
        <li>{f1(object.l)}</li>
       
        </ol>

         {f2(object.loc)}
    </div>;
