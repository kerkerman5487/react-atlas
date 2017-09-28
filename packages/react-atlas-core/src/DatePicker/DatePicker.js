import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ReactDOM from 'react-dom';
import { default as DP } from 'react-datepicker';
import moment from 'moment';

class DatePicker extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date, event) {
    event.persist();
    this.setState({
      startDate: date
    });
    if(typeof this.props.onChange !== 'undefined') {
      this.props.onChange(date, event, true);
    }
  }

  render() {
    let { format, name, className, style } = this.props;
    return (<DP
        style={style}
        className={cx(className)}
        name={name}
        dateFormat={format}
        selected={this.state.startDate}
        onChange={this.handleChange}
    />);
  }
}

DatePicker.propTypes = {
  "name": PropTypes.string,
  "format": PropTypes.string,
  "value": PropTypes.string,
  "onChange": PropTypes.func,
  /* Pass inline styles here. */
  style: PropTypes.node
};

export default DatePicker;
