import RunInfo from './run_info';

export default class RunInfoNumeric extends RunInfo{
    formatValue() {
        return [this.state .value.toFixed(2), this.props.unit] .join(' ');

    }
}
 