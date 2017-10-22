import React from 'react';
import {
	Row, Col, Avatar,
	Icon, Tag,
} from 'antd';

import { row2col2 } from '../../../asserts/data/dashboards/dashboard1';

const Row2Col2 = () => {
	const rows = row2col2.map((_r, _ri) => {
		return (
			<Row key={_ri} style={{ padding: 10, borderTop: '1px solid #ececec' }}>
				<Row>
					<Col span={4}>
						<Avatar src={_r.img} />
					</Col>
					<Col span={15}>
						<Row>
							<strong>{_r.name}</strong><span> {_r.post}</span>
						</Row>
						<Row>
							<span>{_r.date}</span>
						</Row>
					</Col>
					<Col span={4} offset={1}>
						<span>{_r.postdate}</span>
					</Col>
				</Row>
				{ _r.ref ?
					<Row>
						<Col span={20} offset={3} style={{ background: '#ececec', border: '1px solid #ececec', padding: 5 }}>
							{_r.ref}
						</Col>
					</Row>
					: null
				}
				{_r.ref && _r.like && _r.love ? (
					<Row>
						<Col span={8} offset={8}>
							{ _r.like ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 45 }}><Icon type="like" />  <strong>Like</strong></div> : '' }
						</Col>
						<Col span={8}>
							{ _r.love ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 50 }}><Icon type="heart" />  <strong>Love</strong></div> : '' }
						</Col>
					</Row>
				) : _r.ref && _r.like ? (
					<Row>
						<Col span={4} offset={20}>
							{ _r.like ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 45 }}><Icon type="like" />  <strong>Like</strong></div> : '' }
						</Col>
					</Row>
				) : _r.ref && _r.love ? (
					<Row>
						<Col span={4} offset={20}>
							{ _r.love ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 50 }}><Icon type="heart" />  <strong>Love</strong></div> : '' }
						</Col>
					</Row>
				) : _r.like && _r.love ? (
					<Row>
						<Col span={4} offset={4}>
							{ _r.like ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 45 }}><Icon type="like" />  <strong>Like</strong></div> : '' }
						</Col>
						<Col span={4}>
							{ _r.love ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 50 }}><Icon type="heart" />  <strong>Love</strong></div> : '' }
						</Col>
					</Row>
				) : _r.like ? (
					<Row>
						<Col span={4} offset={4}>
							{ _r.like ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 45 }}><Icon type="like" />  <strong>Like</strong></div> : '' }
						</Col>
					</Row>
				) : _r.love ? (
					<Row>
						<Col span={4} offset={4}>
							{ _r.love ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 50 }}><Icon type="heart" />  <strong>Love</strong></div> : '' }
						</Col>
					</Row>
				) : ''}
			</Row>
		)
	});
	return (
		<Row style={{ background: '#fff', margin: 20 }}>
			<Row style={{ padding: 10 }}>
				<Col span={10}>
					<h3>You daily feed</h3>
				</Col>
				<Col span={6} offset={8}>
					<Tag color='orange'>10 Messages</Tag>
				</Col>
			</Row>
			<Row>
				{rows}
			</Row>
			<Row>
				<Col span={22} offset={1}>
					<div style={{ background: "#00b494", height: 25, margin: 5, textAlign: "center" }}>
						<Icon type="arrow-down" style={{ fontSize: 15, color: "#fff" }} />  <span style={{ fontSize: 15, color: "#fff" }}>Show More</span>
					</div>
				</Col>
			</Row>
		</Row>
	)
}

export default Row2Col2;

