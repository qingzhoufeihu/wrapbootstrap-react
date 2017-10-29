import React from 'react';
import {
	Row, Col,
} from 'antd';

import Row3Col1 from './row3col1';
import Row3Col2_1 from './row3col2_1';
import Row3Col2_2 from './row3col2_2';
import Row3Col2_3 from './row3col2_3';

const Row3 = () => {
	return (
		<Row style={{ marginLeft: 20 }}>
			<Col md={24} lg={8} style={{ paddingRight: 20 }}>
				<Row3Col1 />
			</Col>
			<Col md={24} lg={16}>
				<Row>
					<Col md={24} lg={12} style={{ paddingRight: 20 }}>
						<Row3Col2_1 />
					</Col>
					<Col md={24} lg={12} style={{ paddingRight: 20 }}>
						<Row3Col2_2 />
					</Col>
				</Row>
				<Row>
					<Row3Col2_3 />
				</Row>
			</Col>
		</Row>
	)
}

export default Row3;
