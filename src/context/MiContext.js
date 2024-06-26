import { createContext } from "react"


const Context = createContext();
export const budgetContext = createContext(0);
export const currentContext = createContext("£");

export default Context;

// Console Log

// console.log("MiContext-DataTable-rowData", DataTable._currentValue)
// console.log("MiContext-budgetContext-newBudget", budgetContext._currentValue)