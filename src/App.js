import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under

import { AppProvider } from './context/AppContext';

// import { AppContext }  from './context/AppContext'; // It is my

import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';
import Remaining from './components/Remaining';

const App = () => {

    const [ budgets, setBudget ] = useState("");

    // console.log("budgets-useState" + " " + budgets)
    const handleBudgetChange = (budget) => {
        console.log("budgets !!!!!!!!!!!!!!!!!!!!!" + " " + budget)
        setBudget(budget)
    };
    // console.log("budgets !!!!!!!!!!!!!!!!!!!!!" + " " + budgets)
    const values = {
        budgets,
        setBudget,
    };
    return (
        <AppProvider values={values}>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                        {/* Add Budget component here */}
                        {/* Budget component */}
                        <div className='col-sm'>
                            <Budget  onChange={handleBudgetChange}  />
                        </div>

                        {/* Add Remaining component here
                        Remaining component */}
                        <div className='col-sm'>
                            <Remaining budgets={budgets} />
                        </div>
                        {/* Add ExpenseTotal component here
                        ExpenseTotal component */}
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>

                        <h3 className='mt-3'>Allocation</h3>
                        {/* Add ExpenseList component here */}
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>

                        {/* Add ExpenseItem component here */}
                        <div className='col-sm'>
                            <ExpenseItem />
                        </div>

                        <h3 className='mt-3'>Change allocation</h3>
                        {/* Add AllocationForm component here under */}
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;