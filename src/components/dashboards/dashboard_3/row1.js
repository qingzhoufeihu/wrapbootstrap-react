import React, { Component } from 'react';
import {
	Row,
} from 'antd';
import { YAxis, Tooltip, AreaChart, XAxis, CartesianGrid, Area } from 'recharts';

import { row1 } from '../../../asserts/data/dashboards/dashboard3';

class Row1 extends Component {
	render() {
		return (
			<Row style={{ backgroundColor: '#fff', margin: 20, padding: 20 }}>
				<Row style={{ paddingBottom: 20 }}>
					<div style={{ float: 'right', textAlign: 'right' }}>
						<p>Average value of sales in the past month in: <strong>United states</strong></p>
						<br />
						<p>All sales: 162,862</p>
					</div>
					<span style={{ fontSize: 30 }}>$50,992</span>
					<br />
					<span style={{ fontSize: 20, fontWeight: 600 }}>Half-year revenue margin</span>
					<br />
					<p>Sales marketing</p>
				</Row>
				<Row>
					<AreaChart width={1250} height={300} data={row1.data}>
						<XAxis dataKey='name' />
						<YAxis />
						<CartesianGrid strokeDasharray='3 3' />
						<Tooltip />
						<Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
						<Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
					</AreaChart>
				</Row>
				<p><strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.</p>
			</Row>
		)
	}
}

export default Row1;
