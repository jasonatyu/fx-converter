import { connect } from 'react-redux';
import { fetchHistoricalRates } from '../../actions/fx_actions';
import TimeSeries from './TimeSeries';

const mapStateToProps = ({ entities, ui }) => {
    let currentSelectionId;
    if (ui.filters.currentSelection) {
        currentSelectionId = ui.filters.currentSelection;
    } else {
        currentSelectionId = "";
    }
    return {
        currentSelectionId,
        currentFx: entities.fxInfo[currentSelectionId] || [],
        currentTimeSeries: entities.timeSeries[currentSelectionId] || {},
        isLoading: ui.filters.isLoading
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchHistoricalRates: (base, target) => dispatch(fetchHistoricalRates(base, target))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeSeries);