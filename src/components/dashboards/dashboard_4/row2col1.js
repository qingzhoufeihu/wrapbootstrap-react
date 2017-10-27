import React, { Component } from 'react';
import {
	Row, Progress, Col,
} from 'antd';
import { YAxis, Tooltip, AreaChart, XAxis, CartesianGrid, Area } from 'recharts';

import { row2col1 } from '../../../asserts/data/dashboards/dashboard4';

class Row2Col1 extends Component {
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
					<Col span={16}>
						<AreaChart width={600} height={200} data={row2col1.data1}>
							<XAxis dataKey='name' />
							<YAxis />
							<CartesianGrid strokeDasharray='3 3' />
							<Tooltip />
							<Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
							<Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
						</AreaChart>
					</Col>
					<Col span={8}>
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
