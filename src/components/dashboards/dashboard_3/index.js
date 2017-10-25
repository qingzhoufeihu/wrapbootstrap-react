import React, { Component } from 'react';
import {
	Row, Col, Layout,
} from 'antd';

import Head from '../../../head';
import Foot from '../../../foot';
import Right from './right';
import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';

const { Content } = Layout;

class Dashboard_3 extends Component {
	render() {
		return (
			<Layout>
				<Head color='#fff' />
				<Content style={{ marginLeft: 20, backgroundColor: '#f4f4f4' }}>
					<Row>
						<Col span={20}>
							<Row1 />
							<Row2 />
							<Row3 />
						</Col>
						<Col span={4} style={{ }}>
							<Right />
						</Col>
					</Row>
				</Content>
				<Foot />
			</Layout>
		)
	}
}

export default Dashboard_3;
