import React, { Component } from 'react';
import {
	Row, Col,
} from 'antd';
import Chart from 'chart.js';

import { row1col1 } from '../../../asserts/data/dashboards/dashboard5';

class Row1Col1 extends Component {
	componentDidMount() {
		const ctx0 = document.getElementById('row1col0').getContext('2d');
		const ctx1 = document.getElementById('row1col1').getContext('2d');
		new Chart(ctx0, {
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
				],
			},
		})
		new Chart(ctx1, {
			type: 'bar',
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
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
			<Row style={{ padding: 20 }}>
				{row1col1.map((_r, _ri) => {
					return (
						<Col key={_ri} xs={24} sm={12}>
							<h1>{_r.num}</h1>
							<span>{_r.content}</span>
							<canvas id={`row1col${_ri}`} style={{ maxHeight: 120 }}></canvas>
							<Row>
								{_r.result.map((_d, _di) => {
									return (
										<Col key={_di} span={8} style={{ textAlign: 'center' }}>
											<span>{_d.name}</span>
											<br />
											<h3>{_d.num}</h3>
										</Col>
									)
								})}
							</Row>
						</Col>
					);
				})}
			</Row>
		)
	}
}

export default Row1Col1;
