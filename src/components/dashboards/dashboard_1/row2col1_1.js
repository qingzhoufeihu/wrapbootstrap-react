import React, { Component } from 'react';
import {
	Row, Menu,
	Icon, Dropdown, Tag,
} from 'antd';
import { CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

import { row2col1_1 } from '../../../asserts/data/dashboards/dashboard1';

class Row2Col1_1 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		const menuItems = row2col1_1.menus.map((_m, _mi) => {
			return (<Menu.Item key={_mi}><a>{_m}</a></Menu.Item>);
		});
		const menus = <Menu>{menuItems}</Menu>;
		return (
			<Row style={{ background: '#fff', margin: 20, display: this.state.close ? 'none' : 'block' }}>
				<Row style={{ margin: 15 }}>
					<div style={{ float: 'right' }}>
						<Icon type={this.state.collapsed ? 'up': 'down'} onClick={this.toggle} style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} />
						<Dropdown overlay={menus}><Icon type='tool' style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} /></Dropdown>
						<Icon type='close' onClick={this.close} style={{ fontSize: 15, fontWeight: 600 }} />
					</div>
					<span style={{ fontSize: 14, fontWeight: 600 }}>New data for the report </span>
					<Tag color='#00b494'>IN+</Tag>
				</Row>
				<Row style={{ padding: 20, borderTop: '1px solid #ececec', display: this.state.collapsed ? 'none' : 'block' }}>
					<div style={{ float: 'right', textAlign: 'right' }}>
						<BarChart width={250} height={50} data={row2col1_1.data}>
							<CartesianGrid strokeDasharray='3 3' />
							<Tooltip />
							<Bar dataKey='pv' fill='#8884d8' />
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
						<span style={{ fontSize: 12, fontWeight: 600 }}>{row2col1_1.money}</span>
					</div>
					<span style={{ fontSize: 14, fontWeight: 600 }}>NYS report new data!</span>
					<br />
					<a>Check the stock price!</a>
				</Row>
			</Row>
		)
	}
}

export default Row2Col1_1;
