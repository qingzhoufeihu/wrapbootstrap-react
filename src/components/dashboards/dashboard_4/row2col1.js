import React, { Component } from 'react';
import {
	Row, Progress, Col,
} from 'antd';
import Chart from 'chart.js';

import { row2col1 } from '../../../asserts/data/dashboards/dashboard4';

class Row2Col1 extends Component {
	componentDidMount() {
		const ctx = document.getElementById('row2col1').getContext('2d');
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
			<Row style={{ backgroundColor: '#fff', margin: 15, padding: 15 }}>
				<Row style={{ paddingBottom: 20 }}>
					<div style={{ float: 'right' }}>
						<small>Average value of sales in the past month in: <strong>United states</strong></small>
						<br />
						<span>All sales: 162,862</span>
					</div>
					<h3>Half-year revenue margin</h3>
					<span>Sales marketing.</span>
				</Row>
				<Row style={{ paddingBottom: 15 }}>
					<Col sm={24} md={16}>
						<canvas id='row2col1' style={{ maxHeight: 202 }}></canvas>
					</Col>
					<Col sm={24} md={8}>
						{row2col1.data2.map((_r, _ri) => {
							return (
								<Row key={_ri}>
									<span style={{ fontSize: 30 }}>{_r.num}</span>
									<br />
									<small>{_r.content}</small>
									<br />
									<Progress percent={_r.progress} showInfo={false} />
								</Row>
							)
						})}
					</Col>
				</Row>
				<Row>
					<div style={{ float: 'right' }}>
						<span>Update on 16.07.2015</span>
					</div>
					<span><strong>Analysis of sales:</strong> The value has been changed over time,and last month reached a level over %50,000.</span>
				</Row>
			</Row>
		)
	}
}

export default Row2Col1;
