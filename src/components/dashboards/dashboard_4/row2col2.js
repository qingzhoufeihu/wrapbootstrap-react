import React, { Component } from 'react';
import {
	Row, Col, Tag,
} from 'antd';

import { row2col2 } from '../../../asserts/data/dashboards/dashboard4';

class Row2Col2 extends Component {
	render() {
		return (
			<Row style={{ backgroundColor: '#fff', margin: 15, padding: 10 }}>
				<Row style={{ paddingBottom: 10 }}>
					<div style={{ float: 'right' }}>
						<Tag color='#f8ac59'>Data has changed</Tag>
					</div>
					<span style={{ fontSize: 24 }}>User activity</span>
				</Row>
				{row2col2.map((_r, _ri) => {
					return <Row key={_ri} style={{ padding: 20, borderTop: '1px solid #ececec' }}>
						{_r.map((_d, _di) => {
							return (
								<Col key={_di} span={8}>
									<span>{_d.name}</span>
									<br />
									<span style={{ fontSize: 18 }}>{_d.num}</span>
								</Col>
							);
						})}
					</Row>
				})}
			</Row>
		)
	}
}

export default Row2Col2;
