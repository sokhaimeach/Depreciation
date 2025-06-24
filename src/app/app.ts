import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Loan';
  left() {
    const active = document.querySelector('.active-box');
    const nav1 = document.querySelector('.nav-btn1');
    const nav2 = document.querySelector('.nav-btn2');
    nav1?.classList.remove('inactive');
    nav2?.classList.add('inactive');
    active?.classList.remove('right');
    active?.classList.add('left');
  }
  right() {
    const active = document.querySelector('.active-box');
    const nav1 = document.querySelector('.nav-btn1');
    const nav2 = document.querySelector('.nav-btn2');
    nav1?.classList.add('inactive');
    nav2?.classList.remove('inactive');
    active?.classList.remove('left');
    active?.classList.add('right');
  }
}
