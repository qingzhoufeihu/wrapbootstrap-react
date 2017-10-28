import React, { Component } from 'react';
import {
	Row,
} from 'antd';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import { row2 } from '../../../asserts/data/dashboards/dashboard5';

class Row2 extends Component {
	render() {
		return (
			<Row>
				<LineChart width={1000} height={300} data={row2} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
					<XAxis dataKey="name"/>
					<YAxis/>
					<CartesianGrid strokeDasharray="3 3"/>
					<Tooltip/>
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>
			</Row>
		)
	}
}

export default Row2;
