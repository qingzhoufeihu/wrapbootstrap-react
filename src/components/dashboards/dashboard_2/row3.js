import React from 'react';
import {
	Row, Col,
} from 'antd';

import Row3Col1 from './row3col1';

const Row3 = () => {
	return (
		<Row>
			<Col span={8}>
				<Row3Col1 />
			</Col>
		</Row>
	)
}

export default Row3;
