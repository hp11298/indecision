function square(x) {
   return x * x;
 };

 console.log(square(3));

 const squareArrow = (x) => {
   return x * x;
 };

// const squareArrow = (x) => x * x;

 console.log(squareArrow(4));

const convert=(name)=> { return name.split(" ")[0]};

console.log(convert("gh cc"));