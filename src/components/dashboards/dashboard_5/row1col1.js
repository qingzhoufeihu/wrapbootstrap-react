import React, { Component } from 'react';
import {
	Row, Col,
} from 'antd';
import {LineChart, Line, CartesianGrid, Tooltip, Legend} from 'recharts';

import { row1col1 } from '../../../asserts/data/dashboards/dashboard5';

class Row1Col1 extends Component {
	render() {
		return (
			<Row style={{ padding: 20 }}>
				{row1col1.map((_r, _ri) => {
					return (
						<Col key={_ri} span={12}>
							<h1>{_r.num}</h1>
							<span>{_r.content}</span>
							<LineChart width={450} height={150} data={_r.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
								<CartesianGrid strokeDasharray="3 3"/>
								<Tooltip/>
								<Legend />
								<Line type="monotone" dataKey={_r.key} stroke="#8884d8" activeDot={{r: 8}}/>
							</LineChart>
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
