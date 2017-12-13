import React from 'react';
import { Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class DayWeather extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		console.log(this.props);
		let path = `/detail/${this.props.city}`
		browserHistory.push({
			pathname: path,
			state: {
				city: this.props.city,
				date: this.props.date,

				data: this.props.data
			}
		})
	}
	render() {
		return (
			<Col onClick={this.handleClick} xs={6} md={3} className="DayWeather">
				<h3 className="Date">{this.props.date}</h3>
			</Col>
		)
	}
}

export default DayWeather;