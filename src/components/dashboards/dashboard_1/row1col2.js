import React from 'react';
import {
	Row, Col,
} from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import { row1col2 } from '../../../asserts/data/dashboards/dashboard1';

const Row1Col2 = () => {
	return (
		<Row style={{ marginTop: 35 }}>
			<Row>
				<LineChart data={row1col2.data} width={800} height={200}>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>
			</Row>
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

export default Row1Col2;
