import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = ({budgets}) => {
    const { expenses, currency } = useContext(AppContext);
    // const {values} = useContext(AppContext);
    // console.log("Budget-remaining---------------------------" + " " + budgets)
    // console.log("expenses-remaining" + " " + expenses)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budgets ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budgets - totalExpenses} </span>
        </div>
    );
};
export default Remaining;
