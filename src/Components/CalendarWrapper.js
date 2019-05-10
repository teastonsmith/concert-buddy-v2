import React, { Component } from 'react';
import axios from 'axios';

export default class CalendarWrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			concerts: [],
		};
	}

	handleCreate = concert => {
		axios
			.post(`/api/concerts`, concert)
			.then(res => {
				this.setState({
					concerts: res.data,
				});
			})
			.catch(err => {
				console.log('An error has ocurred while creating a concert', err);
			});
	};

	componentDidMount() {
		axios
			.get(`api/concerts`)
			.then(res => {
				this.setState({
					concerts: res.data,
				});
			})
			.catch(err => {
				console.log('An error has ocurred while fetching the concert', err);
			});
	}

	handleUpdate = concert => {
		axios
			.put(`/api/concerts/${concert.id}`, concert)
			.then(res => {
				this.setState({
					concerts: res.data,
				});
			})
			.catch(err =>
				console.log('An error ocurred while updating the concert', err),
			);
	};

	handleDelete = concert => {
		axios
			.delete(`/api/concerts/${concert.id}`)
			.then(res => {
				this.setState({
					concerts: res.data,
				});
			})
			.catch(err =>
				console.log('An error ocurred while deleting the concert', err),
			);
	};

	render() {
		return (
			<div>
				<p>Calendar</p>
			</div>
		);
	}
}
