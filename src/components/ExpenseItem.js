import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        console.log("Delete")
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <>
        {/* <table> */}
        {/* {/* <thead></thead> */} 
        {/* <tbody> */}
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
        {/* </tbody> */}
        {/* <tfoot></tfoot> */}
        {/* </table>    */}
        </>
    );
};

export default ExpenseItem;