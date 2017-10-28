import React, { Component } from 'react';
import {
	Row,
} from 'antd';
import Tables from '../../../common/tables';
import { row3 } from '../../../asserts/data/dashboards/dashboard5';

class Row3 extends Component {
	render() {
		return (
			<Row style={{ margin: 20, backgroundColor: '#fff' }}>
				<Tables
					titles={row3.titles}
					dataIndexs={row3.dataIndexs}
					data={row3.data}
				/>
			</Row>
		)
	}
}

export default Row3;
