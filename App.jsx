import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//using boostrap so that the app will be responsive to sizing of the browser
import "./Components/App.css";

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import ExpenseItem from './components/ExpenseItem';
import ExpensesList from './components/ExpensesList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
<div className='container'>
     <h1><center>My Travel Budget</center></h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <Remaining />
        </div>
        <div className='col-sm'>
          <Spent />
        </div>
      </div>
      <h3 className='mt-3'> Travel Expenses</h3>
      <div className='row mt-3'>
      <div className='col-sm'>
        <ExpensesList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='mt-3'>
      <div className='col-sm'>
        <AddExpense />
        </div>
      </div>
    </div>

    </AppProvider>
      );
    };
    

export default App;

