import React, { Component } from 'react';
import {
	Row,
} from 'antd';
import Chart from 'chart.js';

import { row2 } from '../../../asserts/data/dashboards/dashboard5';

class Row2 extends Component {
	componentDidMount() {
		const ctx = document.getElementById('row2').getContext('2d');
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
					{
						label: 'Dataset 1',
						backgroundColor: 'red',
						borderColor: 'red',
						borderWidth: 1,
						data: [23, 54, 32, 12, 54, 76, 11],
					},
					{
						label: 'Dataset 2',
						backgroundColor: 'green',
						borderColor: 'green',
						borderWidth: 1,
						data: [13, 24, 62, 22, 34, 56, 71],
					},
				],
			},
		})
	}
	render() {
		return (
			<Row>
				<canvas id='row2' style={{ maxHeight: 500 }}></canvas>
			</Row>
		)
	}
}

export default Row2;
