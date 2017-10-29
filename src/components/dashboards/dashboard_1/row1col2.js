import React, { Component } from 'react';
import {
	Row, Col,
} from 'antd';
import Chart from 'chart.js';

import { row1col2 } from '../../../asserts/data/dashboards/dashboard1';

class Row1Col2 extends Component {
	componentDidMount() {
		const ctx = document.getElementById('row1col2').getContext('2d');
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [
					{
						label: '# of Votes',
						backgroundColor: 'red',
						borderColor: 'red',
						data: [2, 4, 3, 7, 6, 5],
						fill: false,
					},
					{
						label: '# of Votes 2',
						backgroundColor: 'green',
						borderColor: 'green',
						data: [2, 4, 13, 17, 6, 5],
						fill: false,
					},
				],
			},
		});
	}
	render() {
		return (
			<Row className='row1col2Chart' style={{ marginTop: 35, padding: 10 }}>
				<canvas id='row1col2' style={{ maxHeight: 250, maxWidth: 800 }}></canvas>
				<Row style={{ marginLeft: 50 }}>
					{row1col2.content.map((_r, _ri) => {
						return (
							<Col key={_ri} span={parseInt(24 / row1col2.content.length, 10)}>
								<span style={{ fontSize: 18, fontWeight: 600 }}>{_r.money}</span>
								<br />
								<span>{_r.content}</span>
							</Col>
						)
					})}
				</Row>
			</Row>
		)
	}
}

export default Row1Col2;
