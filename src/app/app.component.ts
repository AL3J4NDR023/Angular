import { Component } from '@angular/core';
import { product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'my-project';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btn = true;
  register = {
    name: '',
    email: '',
    password: '',
  }
  person = {
    name :'my-project',
    age : 18,
    avatar: 'https://source.unsplash.com/random'
  }
  //names: string[] = ['Nico', 'Juli','santi'];
  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newName: string = ''
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  products: product[]  = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  toogleButton() {
    this.btn = !this.btn;
  }

  increasAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.emojis.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.emojis.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);

  }
}
