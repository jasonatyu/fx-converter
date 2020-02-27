import * as React from "react";

const Result = ({ currentSelectionId, currentSelectionInfo, currentResult, currentAmount }) => {
    if (currentSelectionInfo.length > 0) {
        return <p id="result">{currentAmount} {currentSelectionInfo[1]} equals {(currentResult * currentAmount).toFixed(5)} {currentSelectionInfo[3]}</p>
    } else {
        return null;
    }
}

export default Result;
