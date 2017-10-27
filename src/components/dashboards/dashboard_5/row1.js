import React, { Component } from 'react';
import {
	Row, Col,
} from 'antd';

import Row1Col1 from './row1col1';

class Row1 extends Component {
	render() {
		return (
			<Row>
				<Col span={16}>
					<Row1Col1 />
				</Col>
			</Row>
		)
	}
}

export default Row1;
