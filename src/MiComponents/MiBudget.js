import { useContext } from "react";
import Context  from "../context/MiContext"
import { IMaskInput } from "react-imask";


const MiBudget = () => {
    const { newBudget, setNewBudget } = useContext(Context)

    return (
        <>
            <div className="miBudget">
                <span>MiBudget: {newBudget} £ </span>
                <IMaskInput
                    // required="required"
                    // className="budget"
                    type="number"
                    id="budget"
                    mask={Number}
                    defaultValue={newBudget}
                    min={0}
                    max={20000}
                    step={1}
                    onAccept={(e) => {
                        // (isFinite(parseInt(e)) && (e <= 20000)) ? setNewBudget(e) : setNewBudget(newBudget)
                        if (isFinite(parseInt(e)) && (e <= 20000) /* && (e[0] !== 0) */) {
                            // console.log("MiBudget-e", e)
                            return setNewBudget(parseInt(e))
                        }
                        else {
                            setNewBudget(newBudget)
                        }
                    }}
                >
                </IMaskInput>
                <span className='alertCostInput1'>You can to write only numbers</span>
            </div>
        </>
    );
}

export default MiBudget;

// onChange={(e) => {
//     if (isFinite(parseInt(e.target.value)) && (e.target.value <= 20000)) {
//         console.log("isFinite(parseInt(e)", e.target.value)
//         // setNewBudget(e.target.value)
//         setNewBudget(e.target.value)
//     }
//     // if (!isNaN(parseInt(e.target.value))) {
//     //     console.log("!isNaN.parseInt(e)",e.target.value)
//     //     setNewBudget(e.target.value)
//     // }
//        if (parseInt(Number(target.value)) !== 0) {
//            setNewBudget(target.value)
//            console.log(target.value)
// }
//     else {
//         setNewBudget(newBudget)
//         console.log("Else", newBudget)
//     }
// }
// }


// Console Log

    // console.log("MiBudget-budgetContext-rowData???????????????????????????????'", Context._currentValue);
    // console.log("MiBudget-budgetContext-newBudget???????????????????????????????'", newBudget);
    // console.log("isFinite-miBudget", newBudget)
    // console.log("Else-miBudget", newBudget)