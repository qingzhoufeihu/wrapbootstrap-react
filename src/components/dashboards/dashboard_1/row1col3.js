import React from 'react';
import {
	Row,
} from 'antd';
import { Tooltip, PieChart, Pie } from 'recharts'

import { row1col3 } from '../../../asserts/data/dashboards/dashboard1';

const Row1Col3 = () => {
	return (
		<Row style={{ marginTop: 35 }}>
			<Row>
				<span style={{ fontSize: 18, fontWeight: 600 }}>Project Beta progress</span>
				<br />
				<span>You have two project with not completed task.</span>
			</Row>
			<Row>
				<PieChart width={300} height={200}>
					<Pie dataKey='value' isAnimationActive={false} data={row1col3.data1} cx={60} cy={100} outerRadius={50} fill="#8884d8" label />
					<Pie dataKey='value' data={row1col3.data2} cx={220} cy={100} innerRadius={30} outerRadius={50} fill="#82ca9d" />
					<Tooltip />
				</PieChart>
			</Row>
			<Row>
				<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
			</Row>
		</Row>
	)
}

export default Row1Col3;
