import { ACTIONS } from "./Boilerplate"



export const AppReducer = (state, action) => {
    // console.log("action", action)

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total + item.allocatedBudget)
    }, 0);

    // console.log("item.allocatedBudget", item.allocatedBudget)
    // console.log("action.payload.cost", action.payload.cost)

    // console.log("action.payload.cost", action.payload.cost)

    // console.log("action", action)

    console.log("totalExpenses", totalExpenses)

    switch (action.type) {
        case ACTIONS.UPDATE_EXPENSE:

            // version 1
            // console.log("action.payload.rowIndex", action.payload.rowIndex)
            // const newState = { ...state.expenses }
            // if (newState[action.payload.rowIndex]) {
            //     newState[action.payload.rowIndex].numb = action.payload.newValue;
            // }
            // return newState;
            // version 2
            if (action.payload.newBudget >= totalExpenses) {
                return {
                    ...state,
                    expenses: state.expenses.map(item => (item.id === action.payload.rowIndex)
                        ? { ...item, allocatedBudget: action.payload.newValue } : item
                    )
                }
            }
            else {
                alert("Cannot increase the allocation! Out of funds")
                return {
                    ...state,
                    expenses: state.expenses.map(item => (item.id === action.payload.rowIndex)
                        ? { ...item, allocatedBudget: action.payload.oldValue } : item)
                }
            }

        case ACTIONS.ADD_EXPENSE:
            if (action.payload.newBudget > totalExpenses) {
                return {
                    ...state,
                    expenses: state.expenses.map(item => {
                        if ((item.department === action.payload.department)
                            && ((item.allocatedBudget + action.payload.cost) > action.payload.newBudget)) {
                            // console.log("if > 0     budget")
                            return { ...item, allocatedBudget: item.allocatedBudget + ( action.payload.newBudget - totalExpenses) }
                        }
                        if (((item.allocatedBudget + action.payload.cost) < 0)
                            && (item.department === action.payload.department)) {
                            // console.log("if < 0     0")
                            return { ...item, allocatedBudget: 0 }
                        }
                        if (item.department === action.payload.department) {
                            // console.log("Else    +10")
                            return { ...item, allocatedBudget: item.allocatedBudget + action.payload.cost }
                        }
                        else { return item }
                    }
                    )
                }
            }
            else {
                alert("Cannot increase the allocation! Out of funds");
                return { ...state }
            }

        case ACTIONS.ADD_EXPENSE_10:
            if (action.payload.newBudget > totalExpenses) {
                return {
                    ...state,
                    expenses: state.expenses.map(item => {
                        if (item.id === action.payload.rowIndex) {
                            // console.log("if    +10")
                            return { ...item, allocatedBudget: item.allocatedBudget + 10 }
                        }
                        else {
                            return item
                        }
                    })
                }
            }
            else {
                alert("Cannot increase the allocation! Out of funds");
                return { ...state }
            }

        case ACTIONS.REDUCE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map(item => {
                    if (((item.allocatedBudget - action.payload.cost) < 0)
                        && (item.department === action.payload.department)) {
                        // console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0")
                        return { ...item, allocatedBudget: 0 }
                    }
                    else if (item.department === action.payload.department) {
                        // console.log("++++++++++++++++++++++++++++++++++", item.allocatedBudget, action.payload.cost)
                        return { ...item, allocatedBudget: item.allocatedBudget - action.payload.cost }
                    }
                    else { return item }
                },
                ),
            }
        case ACTIONS.DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map(item =>
                    item.id === action.payload.rowIndex ? { ...item, allocatedBudget: 0 } : item,
                )
            }
        default:
            return
    };
}