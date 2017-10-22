import React, { Component } from 'react';
import {
	Row, Col, Menu,
	Icon, Dropdown,
} from 'antd';

import { row2col3 } from '../../../asserts/data/dashboards/dashboard1';

class Row2Col3 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		const menuItems = row2col3.menus.map((_m, _mi) => {
			return <Menu.Item key={_mi}><a>{_m}</a></Menu.Item>;
		});
		const menus = <Menu>{menuItems}</Menu>;
		return (
			<Row style={{ background: '#fff', margin: 20, display: this.state.close ? 'none' : 'block' }}>
				<Row style={{ margin: 15 }}>
					<Col span={20}>
						<span style={{ fontSize: 14, fontWeight: 600 }}>Read below comments</span>
					</Col>
					<Col span={4}>
						<Icon type={this.state.collapsed ? 'up': 'down'} onClick={this.toggle} style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} />
						<Dropdown overlay={menus}><Icon type='tool' style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} /></Dropdown>
						<Icon type='close' onClick={this.close} style={{ fontSize: 15, fontWeight: 600 }} />
					</Col>
				</Row>
				<Row style={{ display: this.state.collapsed ? 'none' : 'block' }}>
					<Row style={{ backgroundColor: '#f3f6fb', padding: 20 }}>
						<span style={{ fontSize: 24, paddingBottom: 10 }}>You have meeting today!</span>
						<br />
						<Icon type='pushpin' style={{ fontSize: 8 }} /><span>Meeting is on 6:00 am. Check your schedule to see detail.</span>
					</Row>
					<Row style={{ marginTop: 20 }}>
						{row2col3.data.map((_d, _di) => {
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

export default Row2Col3;
