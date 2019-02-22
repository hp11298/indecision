class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGretting() {
      return `Hi. I am ${this.name}!`;
    }
    getDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }

 function getD() {
    return `${this.name} is ${this.age} year(s) old.`;
  };

  class student extends Person{
      constructor(name="a",age,major)
      {
          super(name,age);
          this.major=major;
      }
      hasmajor()
      {
          return !!this.major; 
      }
      getDescription() {
          let des=super.getDescription();
        return this.major+" "+des;
      }
  }
  
  const me = new student('Andrew Mead', 26,9);
  console.log(me.getD());
  
  const other = new student();
  console.log(other.hasmajor());
  