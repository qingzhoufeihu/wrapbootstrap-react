import React, { Component } from 'react';
import {
	Row, Col, Tag,
	Icon,
} from 'antd';

import { row1col1 } from '../../../asserts/data/dashboards/dashboard4';

class Row1Col1 extends Component {
	render() {
		return (
			<Row>
				<Col span={6} style={{ paddingLeft: 15, paddingRight: 15 }}>
					<Row style={{ backgroundColor: '#fff', padding: 5, borderBottom: '1px solid #ececec' }}>
						<span style={{ fontSize: 14, fontWeight: 600 }}>Views</span>
						<div style={{ float: 'right' }}>
							<Tag color={row1col1.Views.color}>{row1col1.Views.date}</Tag>
						</div>
					</Row>
					<Row style={{ backgroundColor: '#fff' }}>
						<span style={{ fontSize: 30 }}>{row1col1.Views.num}</span>
						<br />
						<span>{row1col1.Views.content}</span>
						<div style={{ float: 'right' }}>
							<span style={{ color: row1col1.Views.color }}>{row1col1.Views.progress}%<Icon type='arrow-up' /></span>
						</div>
					</Row>
				</Col>
				<Col span={6} style={{ paddingLeft: 15, paddingRight: 15 }}>
					<Row style={{ backgroundColor: '#fff', padding: 5, borderBottom: '1px solid #ececec' }}>
						<span style={{ fontSize: 14, fontWeight: 600 }}>Orders</span>
						<div style={{ float: 'right' }}>
							<Tag color={row1col1.Orders.color}>{row1col1.Orders.date}</Tag>
						</div>
					</Row>
					<Row style={{ backgroundColor: '#fff' }}>
						<span style={{ fontSize: 30 }}>{row1col1.Orders.num}</span>
						<br />
						<span>{row1col1.Orders.content}</span>
						<div style={{ float: 'right' }}>
							<span style={{ color: row1col1.Orders.color }}>{row1col1.Orders.progress}%<Icon type='arrow-up' /></span>
						</div>
					</Row>
				</Col>
				<Col span={12} style={{ paddingLeft: 15, paddingRight: 15 }}>
					<Row style={{ backgroundColor: '#fff', padding: 5, border: '1px solid #ececec' }}>
						<span style={{ fontSize: 14, fontWeight: 600 }}>Orders</span>
						<div style={{ float: 'right' }}>
							<Tag color={row1col1.Orders.color}>{row1col1.Orders.date}</Tag>
						</div>
					</Row>
					<Row style={{ backgroundColor: '#fff' }}>
						<Col span={12}>
							<span style={{ fontSize: 30 }}>{row1col1.Visits.num1}</span>
							<br />
							<span style={{ color: row1col1.Visits.color }}>{row1col1.Visits.progress1}%<Icon type='arrow-up' />{row1col1.Visits.content1}</span>
						</Col>
						<Col span={12}>
							<span style={{ fontSize: 30 }}>{row1col1.Visits.num2}</span>
							<br />
							<span style={{ color: row1col1.Visits.color }}>{row1col1.Visits.progress2}%<Icon type='arrow-up' />{row1col1.Visits.content2}</span>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
}

export default Row1Col1;
