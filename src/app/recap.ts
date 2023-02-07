const username: string = 'visiontecno';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,3);

class person {
  //age: number;
  //lastName: string;

  constructor(public age: number, public lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const vision = new person(15, 'Tecno');
vision.age;
