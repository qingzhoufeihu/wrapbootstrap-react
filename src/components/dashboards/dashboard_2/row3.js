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
		<Row>
			<Col span={8}>
				<Row3Col1 />
			</Col>
			<Col span={16} style={{ paddingLeft: 25 }}>
				<Row>
					<Col span={12}>
						<Row3Col2_1 />
					</Col>
					<Col span={12} style={{ paddingLeft: 25 }}>
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
