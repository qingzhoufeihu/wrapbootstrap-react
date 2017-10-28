import React from 'react';
import {
	Row, Tag,
} from 'antd';

import { row1col1 } from '../../../asserts/data/dashboards/dashboard1';

const Row1Col1 = () => {
	return (
		<Row style={{ padding: 5, height: 250 }}>
			<Row style={{ paddingBottom: 5 }}>
				<span style={{ fontSize: 24 }}>Welcome Amelia</span>
				<br />
				<span style={{ fontSize: 12 }}>You have 42 messages and 6 notifications.</span>
			</Row>
			<Row>
				{row1col1.map((_r, _ri) => {
					return (
						<Row key={_ri} style={{ paddingTop: 15, paddingBottom: 5, borderBottom: '1px solid #ececec' }}>
							<Tag color={_r.color}>{_ri + 1}</Tag>
							<span>{_r.content}</span>
							<div style={{ float: 'right '}}>
								<span>{_r.date}</span>
							</div>
						</Row>
					)
				})}
			</Row>
		</Row>
	)
};

export default Row1Col1;
