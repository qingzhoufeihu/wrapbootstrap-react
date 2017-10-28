import React, { Component } from 'react';
import {
	Row,
} from 'antd';
import Chart from 'chart.js';

class Row1Col3 extends Component {
	componentDidMount() {
		const ctx = document.getElementById('row1col3').getContext('2d');
		new Chart(ctx, {
			type: 'pie',
			data: {
				datasets: [
					{
						label: 'pie 1',
						data: [1, 3, 2, 5, 4],
						backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
					},
					{
						label: 'pie 2',
						data: [1, 13, 12, 5, 4],
						backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
					},
				]
			}
		});
	}
	render() {
		return (
			<Row style={{ marginTop: 35, maxHeight: 350 }}>
				<Row>
					<span style={{ fontSize: 18, fontWeight: 600 }}>Project Beta progress</span>
					<br />
					<span>You have two project with not completed task.</span>
				</Row>
				<canvas id='row1col3'></canvas>
				<Row>
					<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
				</Row>
			</Row>
		)
	}
}

export default Row1Col3;
