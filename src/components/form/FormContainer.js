import { connect } from 'react-redux';
import { fetchFXRate, fetchHistoricalRates, receiveAmount, receiveErrors, clearErrors, clearSelection, receiveSelection, isLoading } from '../../actions/fx_actions';
import Form from './Form';

const mapStateToProps = ({ entities, errors, ui }) => {
    return {
        fx: Object.keys(entities.fx) || [],
        timeSeries: Object.keys(entities.timeSeries) || [],
        errors: errors.fx || [],
        loading: ui.filters.isLoading
    };
};

const mapDispatchToProps = dispatch => ({
    fetchFXRate: (base, target) => dispatch(fetchFXRate(base, target)),
    fetchHistoricalRates: (base, target) => dispatch(fetchHistoricalRates(base, target)),
    receiveAmount: (amount) => dispatch(receiveAmount(amount)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    clearSelection: () => dispatch(clearSelection()),
    receiveSelection: (id) => dispatch(receiveSelection(id)),
    isLoading: (boolean) => dispatch(isLoading(boolean))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);