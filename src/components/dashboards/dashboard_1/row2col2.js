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
					<div style={{ float: 'right', width: 45 }}>
						<span>{_r.postdate}</span>
					</div>
					<div style={{ float: 'left', paddingLeft: 10, paddingRight: 10 }}>
						<Avatar src={_r.img} />
					</div>
					<strong>{_r.name}</strong><span> {_r.post}</span>
					<br />
					<span>{_r.date}</span>
				</Row>
				{ _r.ref ?
					<Row>
						<div style={{ marginLeft: 52, marginTop: 5, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, background: '#ececec', border: '1px solid #ececec', padding: 5 }}>
							{_r.ref}
						</div>
					</Row>
					: null
				}
				{_r.ref && _r.like && _r.love ? (
					<div style={{ float: 'left' }}>
						{ _r.like ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 45 }}><Icon type="like" />  <strong>Like</strong></div> : '' }
						{ _r.love ? <div style={{ border: "1px solid #ececec", padding: 1, fontSize: 10, width: 50 }}><Icon type="heart" />  <strong>Love</strong></div> : '' }
					</div>
				) : _r.ref && _r.like ? (
					<Row>
						{ _r.like ? <div style={{ float: 'right', border: "1px solid #ececec", marginTop: 2, padding: 2, fontSize: 8, width: 50 }}><Icon type="like" />  <strong>Like</strong></div> : '' }
					</Row>
				) : _r.ref && _r.love ? (
					<Row>
						{ _r.love ? <div style={{ float: 'right', border: "1px solid #ececec", marginTop: 2, padding: 2, fontSize: 8, width: 55 }}><Icon type="heart" />  <strong>Love</strong></div> : '' }
					</Row>
				) : _r.like && _r.love ? (
					<Row>
						{ _r.like ? <div style={{ float: 'left', border: "1px solid #ececec", marginLeft: 52, padding: 2, fontSize: 8, width: 50 }}><Icon type="like" />  <strong>Like</strong></div> : '' }
						{ _r.love ? <div style={{ float: 'left', border: "1px solid #ececec", marginLeft: 3, padding: 2, fontSize: 8, width: 55 }}><Icon type="heart" />  <strong>Love</strong></div> : '' }
					</Row>
				) : _r.like ? (
					<Row>
						{ _r.like ? <div style={{ float: 'right', border: "1px solid #ececec", marginLeft: 52, padding: 2, fontSize: 8, width: 50 }}><Icon type="like" />  <strong>Like</strong></div> : '' }
					</Row>
				) : _r.love ? (
					<Row>
						{ _r.love ? <div style={{ float: 'right', border: "1px solid #ececec", marginLeft: 52, padding: 2, fontSize: 8, width: 55 }}><Icon type="heart" />  <strong>Love</strong></div> : '' }
					</Row>
				) : ''}
			</Row>
		)
	});
	return (
		<Row style={{ background: '#fff', margin: 20 }}>
			<Row style={{ padding: 10 }}>
				<div style={{ float: 'right ' }}>
					<Tag color='orange'>10 Messages</Tag>
				</div>
				<h3>You daily feed</h3>
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

