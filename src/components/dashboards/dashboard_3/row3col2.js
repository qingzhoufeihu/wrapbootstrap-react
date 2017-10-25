import React, { Component } from 'react';
import {
	Row, Col, Menu,
	Icon, Dropdown, Tag,
} from 'antd';

import { row3col2 } from '../../../asserts/data/dashboards/dashboard3';

class Row3Col2 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		const menuItems = row3col2.menus.map((_m, _mi) => {
			return <Menu.Item key={_mi}><a>{_m}</a></Menu.Item>;
		});
		const menus = <Menu>{menuItems}</Menu>;
		return (
			<Row style={{ background: '#fff', margin: 20, display: this.state.close ? 'none' : 'block' }}>
				<Row style={{ padding: 15, borderBottom: '1px solid #ececec' }}>
					<div style={{ float: 'right' }}>
						<Icon type={this.state.collapsed ? 'up': 'down'} onClick={this.toggle} style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} />
						<Dropdown overlay={menus}><Icon type='tool' style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} /></Dropdown>
						<Icon type='close' onClick={this.close} style={{ fontSize: 15, fontWeight: 600 }} />
					</div>
					<span style={{ fontSize: 14, fontWeight: 600 }}>Timeline <Tag color='#1ab394'>Meeting today</Tag></span>
				</Row>
				<Row style={{ display: this.state.collapsed ? 'none' : 'block' }}>
					<Row style={{ marginTop: 20 }}>
						{row3col2.data.map((_d, _di) => {
							return (
								<Row key={_di} style={{ minHeight: 100 }}>
									<Col span={6}>
										<div style={{ float: 'right', paddingLeft: 5, paddingRight: 5, border: '1px solid #ececec', backgroundColor: '#ececec' }}>
											<Icon type={_d.icon} style={{ fontSize: 20 }} />
										</div>
										<br />
										<div style={{ marginLeft: 30, marginTop: 20 }}>
											<span>{_d.date}</span>
											<br />
											<a>{_d.postdate}</a>
										</div>
									</Col>
									<Col span={14} style={{ borderLeft: '1px solid #ececec', borderBottom: '1px solid #ececec', padding: 15 }}>
										<h3>{_d.head}</h3>
										<p>{_d.content}</p>
									</Col>
								</Row>
							)
						})}
					</Row>
				</Row>
			</Row>
		)
	}
}

export default Row3Col2;
