import React, { Component } from 'react';
import {
	Row, Col, Radio,
	Progress, Icon,
} from 'antd';
import Chart from 'chart.js';

import { row2 } from '../../../asserts/data/dashboards/dashboard2';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Row2 extends Component {
	state = {
		date: 'Today',
	}
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
	onChange = (e) => this.setState({ date: e.target.value })
	render() {
		const date = this.state.date;
		return (
			<Row style={{ background: '#fff', marginLeft: 20, marginRight: 20 }}>
				<Row style={{ padding: 10 }}>
					<span style={{ fontSize: 16, fontWeight: 600 }}>Orders</span>
					<div style={{ float: 'right' }}>
						<RadioGroup onChange={this.onChange} defaultValue='Today'>
							<RadioButton value='Today'>Today</RadioButton>
							<RadioButton value='Monthly'>Monthly</RadioButton>
							<RadioButton value='Annual'>Annual</RadioButton>
						</RadioGroup>
					</div>
				</Row>
				<Row style={{ padding: 20, borderTop: '1px solid #ececec' }}>
					<Col md={24} lg={18}>
						<canvas id='row2' style={{ maxHeight: 200 }}></canvas>
					</Col>
					<Col md={24} lg={6}>
						{row2[date].result.map((_r, _ri) => {
							return (
								<Row key={_ri} style={{ paddingBottom: 10 }}>
									<span style={{ fontSize: 18 }}>{_r.number}</span>
									<br />
									<span>{_r.content}</span>
									<div style={{ float: 'right', color: '#1ab394' }}>
										{_r.progress}% <Icon type={_r.icon} style={{ fontSize: 16, fontWeight: 600 }} />
									</div>
									<Progress percent={_r.progress} strokeWidth={5} showInfo={false} />
								</Row>
							);
						})}
					</Col>
				</Row>
			</Row>
		)
	}
}

export default Row2;
