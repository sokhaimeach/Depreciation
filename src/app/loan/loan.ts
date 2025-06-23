import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan.html',
  styleUrl: './loan.css'
})
export class Loan {
  constructor() { 
    this.calculateLoan();
  }
  
  update_principal: string = '';
  update_duration: string = '';
  update_interestRate: string = '';

  principal: number = 2000;
  duration: number = 10;
  interestRate: number = 2;
  totalAmount: number = 0;
  totalInterest: number = 0;
  loan: { id: number, principal: number, interest: number, total: number }[] = [];

  calculateLoan() {
    const monthly_principal = this.principal / this.duration;
    const monthly_interest = (this.principal * this.interestRate) / 100;
    const total = monthly_principal + monthly_interest;

    for (let i = 0; i < this.duration; i++) {
      let data = {
        id: i + 1,
        principal: monthly_principal,
        interest: monthly_interest,
        total: total
      }
      this.loan.push(data);
    }
    this.totalAmount = this.loan.reduce((sum, item) => sum + item.total, 0);
    this.totalInterest = this.totalAmount - this.principal;
  }

  updateLoan() {
    if (this.update_principal && this.update_principal !== '') {
      this.principal = parseFloat(this.update_principal);
    }
    if (this.update_duration && this.update_duration !== '') {
      this.duration = parseInt(this.update_duration, 10);
    }
    if (this.update_interestRate && this.update_interestRate !== '') {
      this.interestRate = parseFloat(this.update_interestRate);
    }
    this.loan = [];
    this.calculateLoan();
    this.closeModal();
  }

  openModal() {
    const modal = document.querySelector('.model');
    const overlay = document.querySelector('.overlay');
      modal?.classList.add('actives');
      overlay?.classList.add('active');
  }

  closeModal() {
    const modal = document.querySelector('.model');
    const overlay = document.querySelector('.overlay');
      modal?.classList.remove('actives');
      overlay?.classList.remove('active');
  }
}
