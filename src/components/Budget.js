import React, { useState } from 'react';
// import { AppContext } from '../context/AppContext';

import { IMaskInput } from "react-imask";


const Budget = ({onChange}) => {

    // const { budget } = useContext(AppContext);
    const [ newBudget, setNewBudget ] = useState("");
    
    // const [allBudget, setAllBudget] = useState(budget);
    // console.log("Budget" + " " + budget)

    const handleBudgetChange = (e) => {
        console.log("handleBudgetChange" + " " + e.target.value)
        if (parseInt(Number(e))) {
            console.log("Number 0" + " " + e.target.value)
            setNewBudget(e.target.value);
            // budget(e.target.value)
        }
        else {
            onChange(e.target.value);
            // setBudget(e.target.value);
            setNewBudget(e.target.value);
            // budget(e.target.value)
            console.log("Else" + " " + e.target.value)
            // console.log("budget" + " " + budget)

        }
    }
    // setNewBudget(e.target.value);
    // console.log(e.target.value);

    return (
        <>
        <div className='alert alert-secondary'>
            <span>Budget: £{newBudget}</span>
            {/* <input */}
            <IMaskInput
                required='required'
                type='number'
                // pattern="\d*"
                id="cost"
                mask={Number}
                // step={1}
                min={0}
                max={20000}
                size={5}
                sizes={50}
                maxLength={10}
                minLength={1}
                value={newBudget}
                onChange={handleBudgetChange}
            //     onAccept={(e) => {
            //         if (parseInt(Number(e))) {
            //             console.log("If-onAccept" + " " + e)
            //             console.log("isFinite" + " " + isFinite(e))
            //             // console.log(typeof e)
            //             setNewBudget(e);
            //             newBudget(e)
            //         }
            //         else {
            //             setNewBudget(newBudget);
            //             console.log("Else-onAccept" + " " + e)
            //         }
            //     }
            // }
            // if (parseInt(Number(e)) !== Number.isFinite(e)) {
            // if (Number.isFinite(e)) {
            // />
            >
            </IMaskInput>
        </div>
            {/* <input 
            type="text"
            maxLength={10}
            minLength={3}
            // value={0}
            size={50}
            />
            <br />
            <IMaskInput
            type="number"
            size={50}
            >
            </IMaskInput> */}
        </>
    );
};
export default Budget;
