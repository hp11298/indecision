const add = function (a, b)  {
     console.log(arguments[0]);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
     const cit=this.cities.map((city)=>{
         return city;
     });
     return cit;
    }
  };
  console.log(user.printPlacesLived());
  
  // Challenge area
  



  const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };
  
  

 // console.log(multiplier.multiply());
  