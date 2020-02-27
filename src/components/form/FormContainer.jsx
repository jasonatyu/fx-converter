import { connect } from 'react-redux';
import { fetchFXRate, fetchHistoricalRates, receiveAmount, receiveErrors, clearErrors, clearSelection, receiveSelection } from '../../actions/fx_actions';
import Form from './Form';

const mapStateToProps = ({ entities, errors }) => {
    return {
        fx: Object.keys(entities.fx) || [],
        timeSeries: Object.keys(entities.timeSeries) || [],
        errors: errors.fx || []
    };
};

const mapDispatchToProps = dispatch => ({
    fetchFXRate: (base, target) => dispatch(fetchFXRate(base, target)),
    fetchHistoricalRates: (base, target) => dispatch(fetchHistoricalRates(base, target)),
    receiveAmount: (amount) => dispatch(receiveAmount(amount)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    clearSelection: () => dispatch(clearSelection()),
    receiveSelection: (id) => dispatch(receiveSelection(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);