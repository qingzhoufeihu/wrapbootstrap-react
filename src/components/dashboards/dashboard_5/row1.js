import React, { Component } from 'react';
import {
	Row, Col,
} from 'antd';

import Row1Col1 from './row1col1';
import Row1Col2 from './row1col2';

class Row1 extends Component {
	render() {
		return (
			<Row>
				<Col sm={24} md={16}>
					<Row1Col1 />
				</Col>
				<Col sm={24} md={8}>
					<Row1Col2 />
				</Col>
			</Row>
		)
	}
}

export default Row1;
