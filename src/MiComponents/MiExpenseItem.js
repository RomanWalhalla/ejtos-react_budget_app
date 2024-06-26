import { useContext, useEffect, useReducer } from "react";
import Context from "../context/MiContext";
import SpentSoFar from "./SpentSoFar";

const MiExpenseItem = () => {
    
    // const dispatch = props
    // console.log("MiExpenseItem-Top//////////////////////", props)

    
    const { remaining, newBudget, spentSoFar, setSpentSoFar, setRemaining, rowData, 
        columnDefs } = useContext(Context);

        // const dispatch = props
        
    


    // case 'REDUCE_EXPENSE':

    // case 'DELETE_EXPENSE':
    
    

    // console.log("MiExpenseItem-&&&&&&&&&&&&&&&&&&&", dispatch)

    // console.log("MiExpenseItem-state", state)
    // console.log("MiExpenseItem-dispatch", dispatch)
    // console.log("MiExpenseItem-rowData!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", rowData)

    // useEffect = ((dispatch) => 
    //     dispat(dispatch),
    // console.log("MiExpenseItem-dispatch////////", dispat)
// )

    // const dis = (dispatch) => {
    //     disp([dispatch])
    // }
    // dis()


}




export default MiExpenseItem;