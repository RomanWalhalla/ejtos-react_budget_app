import { useContext } from "react";
import { IMaskInput } from "react-imask";
import Context from "../context/MiContext";
import { ACTIONS } from "../Reducer/Boilerplate"

const MiChangeAllocation = () => {
    const { setDepartment, setAllocation, department, 
        allocation, dispatch, cost, setCost, newBudget } = useContext(Context)

    const submitCostButton = (e) => {
        if (isFinite(e)) {
            return setCost(parseInt(e))
        } else { return 0 };
    }

    const submitValueButton = (e) => {
        // console.log("e", e)
        if ( isNaN(cost) ) {
            console.log("NaNNaNNaNNaNNaNNaNNaN")
            return setCost(0)
        }
        if (department === undefined || allocation === undefined || cost === 0 ) {
            alert("You need to choose a department, allocation and an amount")
            return
        }
        if (allocation === "Add") {
            console.log("Add")
            dispatch({
                type: ACTIONS.ADD_EXPENSE,
                payload: { department, newBudget, cost }
            })
        }
        if (allocation === "Reduce") {
            console.log("Reduce")
            dispatch({
                type: ACTIONS.REDUCE_EXPENSE,
                payload: { department, newBudget, cost }
            })
        }
    }

    return (
        <>
            <div className="changeDepartment">
                <label htmlFor="selectChangeDepartment">Department</label>
                <select
                    name="selectChangeDepartment"
                    id="selectChangeDepartment"
                    className="selectChangeDepartment"
                    onChange={(e) => setDepartment(e.target.value)}>
                    <option defaultValue="Choose Department...">Choose Department...</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales">Sales</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                </select>
            </div>
            <div className="changeAllocation">
                <label htmlFor="selectChangeAllocation">Allocation</label>
                <select
                    name="selectChangeAllocation"
                    id="selectChangeAllocation"
                    className="selectChangeAllocation"
                    onChange={(e) => setAllocation(e.target.value)}>
                    <option defaultValue>Choose Allocation...</option>
                    <option value="Add">Add</option>
                    <option value="Reduce">Reduce</option>
                </select>
            </div>
            <div className="divInputChangeAllocation">
                <IMaskInput
                    className="inputChangeAllocation"
                    mask={Number}
                    // defaultValue={}
                    min={0}
                    max={20000}
                    maxLength={5}
                    placeholder="Enter a number"
                    onAccept={submitCostButton}
                >
                </IMaskInput>
                <span className='alertCostInput'>You can to write only numbers</span>
            </div>
            <div className="divButtonSave">
                <button className="buttonSave" onClick={submitValueButton}>Save</button>
            </div>
        </>
    );
}
export default MiChangeAllocation;