import { useContext } from "react";
import Context from "../context/MiContext"
import { IMaskInput } from "react-imask";


const MiBudget = () => {
    const { newBudget, setNewBudget, spentSoFar, currency } = useContext(Context)

    // console.log("spentSoFar", spentSoFar, typeof spentSoFar)

    const SubmitBudgetButton = (e) => {
        // (isFinite(parseInt(e)) && (e <= 20000)) ? setNewBudget(e) : setNewBudget(newBudget)
        if (newBudget < spentSoFar) {
            alert("You can't reduce budget value lower than the spending")
            // return setNewBudget(spentSoFar)
        }
        else if (isFinite(parseInt(e)) && (e <= 20000) /* && (e[0] !== 0) */) {
            // console.log("MiBudget-e", e)
            return setNewBudget(parseInt(e))
        }
        else {
            setNewBudget(newBudget)
        }
    }

return (
    <>
        <div className="divInputMiBudget">
            
            <IMaskInput
                // required="required"
                className="inputMiBudget"
                type="number"
                id="budget"
                mask={Number}
                defaultValue={newBudget}
                min={0}
                max={20000}
                step={1}
                onAccept={SubmitBudgetButton}
            >
            </IMaskInput>
            <span className="spanMiBudget">MiBudget: {newBudget} {currency.icon} </span>
            <span className='alertCostInput1'>You can to write only numbers</span>
        </div >
    </>
);
}

export default MiBudget;