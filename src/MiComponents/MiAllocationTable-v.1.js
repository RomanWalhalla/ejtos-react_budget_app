import { useContext, useEffect, useRef, useReducer } from "react";
import { AgGridReact } from "ag-grid-react";
import Context from "../context/MiContext";
import { FcPlus } from 'react-icons/fc';
import { FcFullTrash } from 'react-icons/fc';

import AppReducer from "../Reducer/Reducer"

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import MiExpenseItem from "./MiExpenseItem";

// import { RowDataTable } from "../Reducer/Table";


    export const RowDataTable = [
            { department: "Marketing", allocatedBudget: 0, numb: 0 },
            { department: "Finance", allocatedBudget: 0, numb: 0 },
            { department: "Sales", allocatedBudget: 0, numb: 0 },
            { department: "Human Resource", allocatedBudget: 0, numb: 0 },
            { department: "IT", allocatedBudget: 0, numb: 0 },
            { department: "HR", allocatedBudget: 0, numb: 0 },
    ]

const MiAllocationTable = () => {
    const { rowData, setRowData, columnDefs, setColumnDefs,
        department, setDepartment, val, setVal, newBudget, 
        dispatch, state, updateState, updateDispatch } = useContext(Context)

    // console.log("MiAllocationTable-dispatch", dispatch)
    // console.log("Row Data-expenses", rowData.expenses)
    // console.log("Expenses ??????????????????????????", department)
    
    // console.log("MiAllocationTable-dispatch ??????????", dispatch)

    console.log("MiAllocationTable-state ??????????", state)

    console.log("MiAllocationTable-state.rowData ????", state.rowData)


    // console.log("state.expenses[0].allocatedBudget", state.expenses[0].allocatedBudget)

    // const nState = [state] 
    // const nState = [dispatch] 

        // useEffect(() => {
            // updateState(state)
            // updateDispatch(dispatch)
        // },[state])

    // updateState(nState)



    const ColumnDataTable = [
        {
            field: "Department",
            valueGetter: (p) => {
                return p.data.department
            },
            flex: 1,
        },
        {
            field: "allocatedBudget",
            valueFormatter: (p) => {
                return ("£" + p.value);
            },
            editable: true,
            flex: 1,
        },
        {
            field: "numb",
            // valueFormatter: (p) => "£ " + state[0].allocatedBudget,

            valueFormatter: (p) => "£ " + p.value,

            editable: true,
            flex: 1,
        },
        {
            field: "Increased by 10",
            cellRenderer: (p) => {
                // console.log("cellRenderer", p)
                return ButtonIncreaseBy10(p)
            },
            flex: 1,
        },
        {
            field: "Delete",
            cellRenderer: (p) => {
                return ButtonDelete(p)
            },
            flex: 1,
        },
    ];

    useEffect(() => {
        setRowData(RowDataTable)
        setColumnDefs(ColumnDataTable)
        return () => { 
        setRowData(RowDataTable)
        setColumnDefs(ColumnDataTable)
    }
},[])

        // setRowData(RowDataTable), setColumnDefs(ColumnDataTable)

        // return (setRowData(RowDataTable), setColumnDefs(ColumnDataTable))

        // return (setRowData(RowDataTable), setColumnDefs(ColumnDataTable))

    const ButtonIncreaseBy10 = (p) => {
        return <button
            className="buttonsIncDel"
            onClick={(e) => {
                // console.log("button-val", columnDefs)
                setDepartment(p.data.department);
                setVal(p.node.rowIndex);
                console.log("Department, Allocation----", p.data.department, p.node.rowIndex)
                dispatch({ type: "ADD_EXPENSE", val })
                
                // console.log("Department, Allocation----", dispatch)
                return
            }}
        >
            <FcPlus size={"30"} />  </button>
    }

    const ButtonDelete = (p) => {
        return <button
            className="buttonsIncDel"
            onClick={(e) => {
                setDepartment(p.data.department);
                setVal(p.node.rowIndex);
                console.log("Department, Allocation----", p.data.department, p.node.rowIndex)
                return
            }
            }
        >
            <FcFullTrash size={"30"} /> </button>
    }

    return (
        <>
            <div className="ag-theme-quartz" style={{ height: 360, width: "94%", margin: 30 }}>
                <AgGridReact
                    defaultColDef={{ sortable: true, filter: true }}
                    pagination={true}
                    rowData={state}
                    columnDefs={columnDefs} >
                </AgGridReact>
                {/* {state[0].numb} */}
                {/* {state.count} */}
            </div>
        </>
    );
}

export default MiAllocationTable;

// Console Log
