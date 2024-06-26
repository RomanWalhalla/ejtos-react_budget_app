// import Budget from "./components/Budget"

import { useState, useReducer } from "react";
import Context from "./context/MiContext";
import { budgetContext, currentContext } from "./context/MiContext";

import MiBudget from "./MiComponents/MiBudget";
import MiRemaining from "./MiComponents/MiRemaining";
import SpentSoFar from "./MiComponents/SpentSoFar";
import MiAllocationTable from "./MiComponents/MiAllocationTable";
import MiChangeAllocation from "./MiComponents/MiChangeAllocation";

import "./MiComponents/input.css"
import "./MiComponents/allComponentes.css"
import { AppReducer } from "./Reducer/Reducer"

import { RowDataTable } from "./MiComponents/MiAllocationTable";
// import TableGPT from "./Reducer/TableGPT";

const MiApp = () => {

    const [state, dispatch] = useReducer(AppReducer, RowDataTable)
    const [newBudget, setNewBudget] = useState(budgetContext._currentValue);
    const [remaining, setRemaining] = useState(budgetContext._currentValue);
    const [spentSoFar, setSpentSoFar] = useState(budgetContext._currentValue);
    const [department, setDepartment] = useState()
    const [allocation, setAllocation] = useState()
    const [currency, setCurrency] = useState(currentContext._currentValue);
    const [cost, setCost] = useState(0)


    // console.log("currentContext", currentContext)

    // const updateState = (newState) => {
    //     setState(newState)
    // }
    // const updateDispatch = (newDispatch) => {
    //     setDispatch(newDispatch)
    // }

    // const [state, dispatch] = useReducer(AppReducer, RowDataTable) 

    return (
        <Context.Provider value={{
            newBudget,
            setNewBudget,
            remaining,
            setRemaining,
            spentSoFar,
            setSpentSoFar,
            // columnDefs,
            // setColumnDefs,
            currency,
            department,
            setDepartment,
            allocation,
            setAllocation,
            cost,
            setCost,
            state,
            dispatch,
            AppReducer,
        }}>
            <>
                <section className="allComponentesHeader">
                    <h1 className="nameApp">Company's Budget Allocation</h1>
                    <div>
                        <MiBudget />
                    </div>
                    <div>
                        <MiRemaining />
                    </div>
                    <div>
                        <SpentSoFar />
                    </div>
                </section>
                <section className="miAllocationTable">
                    <h2 className="nameAllocation">Allocation</h2>
                    <MiAllocationTable />
                </section>
                <section className="miChangeAllocation">
                    <h2 className="nameChangeAllocation">Change Allocation</h2>
                    <MiChangeAllocation />
                </section>
                {/* <section className="miChangeAllocation">
                    <h2 className="nameChangeAllocation">Change Allocation</h2>
                    <TableGPT />
                </section> */}
            </>
        </Context.Provider>
    );
}

export default MiApp;