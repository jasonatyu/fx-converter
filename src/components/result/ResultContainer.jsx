import { connect } from 'react-redux';
import Result from './Result';

const mapStateToProps = ({ entities, ui }) => {
    let currentSelectionId;
    if (ui.filters.currentSelection) {
        currentSelectionId = ui.filters.currentSelection;
    } else {
        currentSelectionId = "";
    }
    return {
        currentSelectionId,
        currentSelectionInfo: entities.fxInfo[currentSelectionId] || [],
        currentResult: entities.fx[currentSelectionId] || 0,
        currentAmount: ui.filters.currentAmount || 0
    };
};

export default connect(
    mapStateToProps
)(Result);