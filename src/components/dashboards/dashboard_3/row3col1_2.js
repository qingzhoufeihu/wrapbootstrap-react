import React, { Component } from 'react';
import {
	Row,
	Icon, Menu, Dropdown,
} from 'antd';

import { row3col1_2 } from '../../../asserts/data/dashboards/dashboard3';

class Row3Col1_2 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		const menuItems = row3col1_2.menus.map((_m, _mi) => {
			return (<Menu.Item key={_mi}><a>{_m}</a></Menu.Item>);
		});
		const menus = <Menu>{menuItems}</Menu>;
		return (
			<Row style={{ backgroundColor: '#fff', marginTop: 20, display: this.state.close ? 'none' : 'block' }}>
				<Row style={{ margin: 15 }}>
					<div style={{ float: 'right' }}>
						<Icon type={this.state.collapsed ? 'up': 'down'} onClick={this.toggle} style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} />
						<Dropdown overlay={menus}><Icon type='tool' style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} /></Dropdown>
						<Icon type='close' onClick={this.close} style={{ fontSize: 15, fontWeight: 600 }} />
					</div>
					<span style={{ fontSize: 14, fontWeight: 600 }}>Read below comments and tweets</span>
				</Row>
				<Row style={{ padding: 20, borderTop: '1px solid #ececec', display: this.state.collapsed ? 'none' : 'block' }}>
					{row3col1_2.data.map((_r, _ri) => {
						return (
							<Row key={_ri} style={{ borderBottom: '1px solid #ececec', padding: 5 }}>
								<p style={{ fontSize: 13, paddingBottom: 5 }}><a>{_r.name}</a>{_r.content}</p>
								<span style={{ fontSize: 12 }}>{_r.date}</span>
							</Row>
						)
					})}
				</Row>
			</Row>
		)
	}
}

export default Row3Col1_2;
