import React, { Component } from 'react';
import {
	Row, Col,
} from 'antd';

import Row2Col1 from './row2col1';
import Row2Col2 from './row2col2';

class Row2 extends Component {
	render() {
		return (
			<Row style={{ marginTop: 20 }}>
				<Col md={24} lg={16}>
					<Row2Col1 />
				</Col>
				<Col md={24} lg={8}>
					<Row2Col2 />
				</Col>
			</Row>
		)
	}
}

export default Row2;
