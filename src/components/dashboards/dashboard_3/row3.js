import React, { Component } from 'react';
import {
	Row, Col,
} from 'antd';

import Row3Col1_1 from './row3col1_1';
import Row3Col1_2 from './row3col1_2';
import Row3Col2 from './row3col2';

class Row3 extends Component {
	render() {
		return (
			<Row style={{ margin: 20 }}>
				<Col span={12}>
					<Row3Col1_1 />
					<Row3Col1_2 />
				</Col>
				<Col span={12}>
					<Row3Col2 />
				</Col>
			</Row>
		)
	}
}

export default Row3;