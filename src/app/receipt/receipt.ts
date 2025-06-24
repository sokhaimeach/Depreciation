import { Component } from '@angular/core';

@Component({
  selector: 'app-receipt',
  imports: [],
  templateUrl: './receipt.html',
  styleUrl: './receipt.css'
})
export class Receipt {
  receipt = [
    {
      id: 1,
      descripttion: "Orange Juice",
      price: 2.15
    },
    {
      id: 2,
      descripttion: "Apple",
      price: 3.50
    },
    {
      id: 3,
      descripttion: "Tomato",
      price: 2.40
    },
    {
      id: 4,
      descripttion: "Fish",
      price: 6.99
    },
    {
      id: 5,
      descripttion: "Beef",
      price: 12.49
    }
  ];
  cash = 50;
  total() {
    var total_price = 0;
    for(let i = 0; i < this.receipt.length; i++){
      total_price += this.receipt[i].price;
    }
    return total_price;
  }
  bacode = '123 084 2463';
}
