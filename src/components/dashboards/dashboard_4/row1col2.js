import React, { Component } from 'react';
import {
	Row, Tag,
} from 'antd';
import Chart from 'chart.js';

import { row1col2 } from '../../../asserts/data/dashboards/dashboard4';

class Row1Col2 extends Component {
	componentDidMount() {
		const ctx = document.getElementById('row1col2').getContext('2d');
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
			<Row style={{ paddingLeft: 15, paddingRight: 15 }}>
				<Row style={{ backgroundColor: '#fff', padding: 15, borderBottom: '1px solid #ececec' }}>
					<span style={{ fontSize: 14, fontWeight: 600 }}>{row1col2.name}</span>
					<div style={{ float: 'right' }}>
						<Tag color={row1col2.color}>{row1col2.date}</Tag>
					</div>
				</Row>
				<Row style={{ backgroundColor: '#fff' }}>
					<canvas id='row1col2' style={{ maxHeight: 93 }}></canvas>
				</Row>
			</Row>
		)
	}
}

export default Row1Col2;
