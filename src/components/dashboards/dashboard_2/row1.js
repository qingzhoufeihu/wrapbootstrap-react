import React from 'react';
import {
	Row, Col, Tag,
	Icon,
} from 'antd';

import { row1 } from '../../../asserts/data/dashboards/dashboard2';

const Row1 = () => {
	const rows = row1.map((_r, _ri) => {
		const color = _r.color;
		return (
			<Col key={_ri} span={parseInt(24 / row1.length, 10)} style={{ padding: 20 }}>
				<Row style={{ padding: 10, backgroundColor: '#fff', borderBottom: '1px solid #ececec' }}>
					<span style={{ fontSize: 16, fontWeight: 600 }}>{_r.name}</span>
					<div style={{ float: 'right' }}>
						<Tag color={color}>{_r.tag}</Tag>
					</div>
				</Row>
				<Row style={{ backgroundColor: '#fff', padding: 10 }}>
					<span style={{ fontSize: 30 }}>{_r.number}</span>
					<br />
					<span>{_r.content}</span>
					<div style={{ float: 'right', marginRight: 10, color: color }}>
						<span style={{ fontWeight: 600 }}>{_r.progress}%<Icon type={_r.icon} /></span>
					</div>
				</Row>
			</Col>
		);
	})
	return (
		<Row>
			{rows}
		</Row>
	)
}

export default Row1;
