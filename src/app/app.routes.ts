import { Routes } from '@angular/router';
import { Loan } from './loan/loan';
import { Receipt } from './receipt/receipt';

export const routes: Routes = [
    {path: '', redirectTo: 'receipt', pathMatch: 'full'},
    {path: 'receipt', component: Receipt},
    {path: 'loan', component: Loan}
];