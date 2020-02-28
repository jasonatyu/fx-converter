import * as React from "react";

interface Props {
    currentSelectionId: string;
    currentSelectionInfo: Array<string>;
    currentResult: number; 
    currentAmount: number; 
    isLoading: boolean
}

const Result: React.FC<Props>  = (props) => {
    if (props.currentSelectionInfo.length > 0 && !props.isLoading) {
        return <p id="result">{props.currentAmount} {props.currentSelectionInfo[1]} equals {(props.currentResult * props.currentAmount).toFixed(5)} {props.currentSelectionInfo[3]}</p>
    } else {
        return null;
    }
}

export default Result;
