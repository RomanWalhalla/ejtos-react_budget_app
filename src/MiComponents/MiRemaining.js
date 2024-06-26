import { useState, useContext, useEffect } from "react";
import Context from "../context/MiContext";

const Remaining = () => {

    const { remaining, newBudget, spentSoFar, setRemaining } = useContext(Context);
    useEffect(() => {
        return setRemaining(newBudget - spentSoFar)
    }, [newBudget, spentSoFar, setRemaining]);

    return (
        <>
            <div className="miRemaining">
                <span>Remaining: {remaining} £ </span>
            </div>
        </>
    );
}

export default Remaining;

// Console Log

// console.log("Remaining-   (newBudget-spentSoFar) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", newBudget-spentSoFar)
// console.log("Remaining-newBudget- ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿", newBudget)
// console.log("Remaining-spentSoFar- ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿", spentSoFar)
// console.log("Remaining-newBudget", newBudget)
// console.log("Remaining-spentSoFar", spentSoFar)
// console.log("Remaining-remaining", remaining)