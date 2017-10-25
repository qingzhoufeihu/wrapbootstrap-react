import React, { Component } from 'react';
import {
	Row, Col, Tag,
	Icon,
} from 'antd';

import { row2 } from '../../../asserts/data/dashboards/dashboard3';

class Row2 extends Component {
	render() {
		return (
			<Row>
				{row2.map((_r, _ri) => {
					return (
						<Col key={_ri} span={parseInt(24 / row2.length, 10)} style={{ padding: 20 }}>
							<Row style={{ backgroundColor: '#fff', borderBottom: '1px solid #ececec', padding: 10 }}>
								<span style={{ fontSize: 14, fontWeight: 600 }}>{_r.head}</span>
								<div style={{ float: 'right' }}>
									<Tag color={_r.color}>{_r.date}</Tag>
								</div>
							</Row>
							<Row style={{ backgroundColor: '#fff', padding: 20 }}>
								<span style={{ fontSize: 30 }}>{_r.num}</span>
								<br />
								<div style={{ float: 'right' }}>
									<span style={{ fontSize: 13, fontWeight: 600, color: _r.color }}>{_r.progress}<Icon type='arrow-up' /></span>
								</div>
								<p>{_r.content}</p>
							</Row>
						</Col>
					);
				})}
			</Row>
		)
	}
}

export default Row2;
