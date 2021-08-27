import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES: Dish[] = [
{
  id: '0',
  name: 'Burger Meal',
  image: '/assets/images/burgerfries.jpeg',
  category: 'mains',
  featured: true,
  label: '',
  price: '8.99',
  description: 'Italian burger served with crispy French fries and 500ml of chilled Coke / Soda.'
},
{
  id: '1',
  name: 'Pizza',
  image: '/assets/images/pizza.jpeg',
  category: 'mains',
  featured: false,
  label: '',
  price: '4.99',
  description: 'Regular sized pizza - 10" with Mushroom, Tomato, olives, jalapenos, onion, american corn and green capsicum as its toppings.'
},
{
  id: '2',
  name: 'Noodles',
  image: '/assets/images/noodles.jpeg',
  category: 'mains',
  featured: false,
  label: '',
  price: '3.99',
  description: 'Long/Flat Chinese Noodles with Onion, Tomato, Carrot, Mushroom and Green Capsicum as toppings served with Veg Manchow Soup / Manchurian Sauce.'
},
{
  id: '3',
  name: 'Club Sandwiches',
  image: '/assets/images/sandwiches.jpeg',
  category: 'mains',
  featured: false,
  label: '',
  price: '2.99',
  description: 'Street Style Sandwiches with Cucumber, Onions, Capsicum, Tomato, Carrots mixed in Mayo with Cheese Slices.'
}
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish = DISHES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
