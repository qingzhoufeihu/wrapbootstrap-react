import React, { Component } from 'react';
import {
	Layout, Row, Col,
} from 'antd';

import Head from '../../../head';
import Foot from '../../../foot';
import Row1Col1 from './row1col1';
import Row1Col2 from './row1col2';
import Row1Col3 from './row1col3';
import Row2Col1 from './row2col1';
import Row2Col2 from './row2col2';
import Row2Col3 from './row2col3';
import Chat from './chat';

const { Content } = Layout;

class Dashboard_1 extends Component {
	render() {
		return (
			<Layout>
				<Head color='#ececec' />
				<Content>
					<Row style={{ background: '#fff', minHeight: 300, padding: 20 }}>
						<Col span={6}>
							<Row1Col1 />
						</Col>
						<Col span={14}>
							<Row1Col2 />
						</Col>
						<Col span={4}>
							<Row1Col3 />
						</Col>
					</Row>
					<Row>
						<Col span={8}>
							<Row2Col1 />
						</Col>
						<Col span={8}>
							<Row2Col2 />
						</Col>
						<Col span={8}>
							<Row2Col3 />
						</Col>
					</Row>
					<Chat />
				</Content>
				<Foot />
			</Layout>
		)
	}
}

export default Dashboard_1;
