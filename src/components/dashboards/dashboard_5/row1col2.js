import React, { Component } from 'react';
import {
	Row, Col, Icon,
} from 'antd';

import { row1col2 } from '../../../asserts/data/dashboards/dashboard5';

class Row1Col2 extends Component {
	render() {
		return (
			<Row style={{ padding: 20 }}>
				<Row>
					{row1col2.data1.map((_r, _ri) => {
						return (
							<Col key={_ri} span={parseInt(24 / row1col2.data1.length, 10)}>
								<h3>{_r.head}</h3>
								<span style={{ fontSize: 30, fontWeight: 600 }}>{_r.num}</span>
								<br />
								<span style={{ color: '#1ab394', fontWeight: 600 }}>{_r.progress}%<Icon type='arrow-up' /></span>
							</Col>
						)
					})}
				</Row>
				{row1col2.data2.map((_r, _ri) => {
					return (
						<Row key={_ri} style={{ padding: 10, borderTop: '1px solid #e7eaec' }}>
							{_r.map((_d, _di) => {
								return (
									<Col key={_di} span={parseInt(24 / _r.length, 10)}>
										{_d}
									</Col>
								)
							})}
						</Row>
					)
				})}
			</Row>
		)
	}
}

export default Row1Col2;
