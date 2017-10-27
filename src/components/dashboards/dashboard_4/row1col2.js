import React, { Component } from 'react';
import {
	Row, Tag,
} from 'antd';
import { AreaChart, Area } from 'recharts';

import { row1col2 } from '../../../asserts/data/dashboards/dashboard4';

class Row1Col2 extends Component {
	render() {
		return (
			<Row style={{ paddingLeft: 15, paddingRight: 15 }}>
				<Row style={{ backgroundColor: '#fff', padding: 5, borderBottom: '1px solid #ececec' }}>
					<span style={{ fontSize: 14, fontWeight: 600 }}>{row1col2.name}</span>
					<div style={{ float: 'right' }}>
						<Tag color={row1col2.color}>{row1col2.date}</Tag>
					</div>
				</Row>
				<Row style={{ backgroundColor: '#fff' }}>
					<AreaChart width={500} height={65} data={row1col2.data} margin={{top: 5, right: 0, left: 0, bottom: 5}}>
						<Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
					</AreaChart>
				</Row>
			</Row>
		)
	}
}

export default Row1Col2;
