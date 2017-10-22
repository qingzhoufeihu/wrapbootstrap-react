import React, { Component } from 'react';
import {
	Layout,
} from 'antd';

import Head from '../../../head';
import Foot from '../../../foot';
import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';

const { Content } = Layout;

class Dashboard_2 extends Component {
	render() {
		return (
			<Layout>
				<Head color='#fff' />
				<Content style={{ marginLeft: 20, marginRight: 20 }}>
					<Row1 />
					<Row2 />
					<Row3 />
				</Content>
				<Foot />
			</Layout>
		)
	}
}

export default Dashboard_2;
