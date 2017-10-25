import React, { Component } from 'react';
import {
	Row, Col, Tag,
	Avatar,
} from 'antd';
import { BarChart, YAxis, Tooltip, AreaChart, XAxis, CartesianGrid, Area, Bar } from 'recharts';

import { right } from '../../../asserts/data/dashboards/dashboard3';

class Right extends Component {
	render() {
		return (
			<Row style={{ minHeight: 1277, backgroundColor: '#ebebed', padding: 10, border: '1px solid #ececec' }}>
				<Row>
					<span style={{ fontSize: 16, fontWeight: 600 }}>Messages</span>
					<div style={{ float: 'right' }}>
						<Tag color='#23c6c8'>16</Tag>
					</div>
				</Row>
				{right.messages.map((_r, _ri) => {
					return (
						<Row key={_ri} style={{ padding: 10 }}>
							<Col span={4}>
								<Avatar src={_r.img} />
							</Col>
							<Col span={18} offset={2}>
								<p>{_r.content}</p>
								<small>{_r.date}</small>
							</Col>
						</Row>
					)
				})}
				<Row style={{ paddingTop: 10 }}>
					<span style={{ fontSize: 16, fontWeight: 600 }}>Statistics</span>
					<p>{right.statistics.content}</p>
				</Row>
				<Row style={{ paddingTop: 5 }}>
					<BarChart width={250} height={40} data={right.statistics.graph1.data}>
						<Bar dataKey='uv' fill='#8884d8' />
					</BarChart>
					<div style={{ fontSize: 14, fontWeight: 600, textAlign: 'center' }}>{right.statistics.graph1.content}</div>
				</Row>
				<Row style={{ paddingTop: 5 }}>
					<AreaChart width={250} height={100} data={right.statistics.graph2.data}>
						<XAxis dataKey='name' />
						<YAxis />
						<CartesianGrid strokeDasharray='3 3' />
						<Tooltip />
						<Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
					</AreaChart>
					<div style={{ fontSize: 14, fontWeight: 600, textAlign: 'center' }}>{right.statistics.graph2.content}</div>
				</Row>
				<Row style={{ paddingTop: 10 }}>
					<span style={{ fontSize: 16, fontWeight: 600 }}>Discussion</span>
					{right.discussion.map((_r, _ri) => {
						return (
							<Row key={_ri} style={{ paddingTop: 10 }}>
								<span>{_r.name}</span>
								<div style={{ float: 'right' }}>
									<Tag color={_r.color}>{_r.num}</Tag>
								</div>
							</Row>
						)
					})}
				</Row>
			</Row>
		)
	}
}

export default Right;
