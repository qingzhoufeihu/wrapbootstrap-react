import React, { Component } from 'react';
import {
	Row, Col, Radio,
	Progress, Icon,
} from 'antd';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line } from 'recharts';

import { row2 } from '../../../asserts/data/dashboards/dashboard2';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Row2 extends Component {
	state = {
		date: 'Today',
	}
	onChange = (e) => this.setState({ date: e.target.value })
	render() {
		const date = this.state.date;
		return (
			<Row style={{ background: '#fff' }}>
				<Row style={{ padding: 10}}>
					<span style={{ fontSize: 16, fontWeight: 600 }}>Orders</span>
					<div style={{ float: 'right' }}>
						<RadioGroup onChange={this.onChange} defaultValue='Today'>
							<RadioButton value='Today'>Today</RadioButton>
							<RadioButton value='Monthly'>Monthly</RadioButton>
							<RadioButton value='Annual'>Annual</RadioButton>
						</RadioGroup>
					</div>
				</Row>
				<Row style={{ padding: 10, borderTop: '1px solid #ececec' }}>
					<Col span={18}>
						<ComposedChart width={1100} height={250} data={row2[date].data}>
							<XAxis dataKey='name' />
							<YAxis />
							<Tooltip />
							<Legend />
							<CartesianGrid stroke='#f5f5f5' />
							<Area type='monotone' dataKey='amt' fill='#c3dceb' stroke='#c3dceb' />
							<Bar dataKey='pv' barSize={20} fill='#9fdabd' />
							<Line type='monotone' dataKey='uv' stroke='#ff7300' />
						</ComposedChart>
					</Col>
					<Col span={6}>
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
