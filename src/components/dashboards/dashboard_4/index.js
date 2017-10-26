import React, { Component } from 'react';
import {
	Row, Layout,
} from 'antd';

import Head from '../../../head';
import Foot from '../../../foot';
import Row1 from './row1';

const { Content } = Layout;

class Dashboard_4 extends Component {
	render() {
		return (
			<Layout>
				<Head color='#fff' />
				<Content style={{ marginLeft: 20, marginRight: 20 }}>
					<Row1 />
				</Content>
				<Foot />
			</Layout>
		)
	}
}

export default Dashboard_4;
