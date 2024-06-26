import { useContext } from "react";
import Context from "../context/MiContext";

const SpentSoFar = () => {

    const { spentSoFar } = useContext(Context)
    return (
        <>
            <div className="spentSoFar">
                <span>Spent so far: {spentSoFar} £</span>
            </div>
        </>
    );
}

export default SpentSoFar;

// Console Log

// console.log("SpentSoFar", spentSoFar)