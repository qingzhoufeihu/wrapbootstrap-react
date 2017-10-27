import React, { Component } from 'react';
import {
	Row, Menu,
	Icon, Dropdown,
} from 'antd';
import { BarChart, Bar } from 'recharts';

import { row2col1_2 } from '../../../asserts/data/dashboards/dashboard1';

class Row2Col1_2 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		const menuItems = row2col1_2.menus.map((_m, _mi) => {
			return (<Menu.Item key={_mi}><a>{_m}</a></Menu.Item>);
		});
		const menus = <Menu>{menuItems}</Menu>;
		const CommentBar= () => {
			return (
				<BarChart width={150} height={60} data={row2col1_2.data}>
					<Bar dataKey="uv" fill="#8884d8" />
				</BarChart>
			)
		};
		return (
			<Row style={{ background: '#fff', margin: 20, display: this.state.close ? 'none' : 'block' }}>
				<Row style={{ margin: 15 }}>
					<div style={{ float: 'right' }}>
						<Icon type={this.state.collapsed ? 'up': 'down'} onClick={this.toggle} style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} />
						<Dropdown overlay={menus}><Icon type='tool' style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} /></Dropdown>
						<Icon type='close' onClick={this.close} style={{ fontSize: 15, fontWeight: 600 }} />
					</div>
					<span style={{ fontSize: 14, fontWeight: 600 }}>Read below comments</span>
				</Row>
				<Row style={{ borderTop: '1px solid #ececec', display: this.state.collapsed ? 'none' : 'block' }}>
					{row2col1_2.comments.map((_c, _ci) => {
						return (
							<Row key={_ci} style={{ padding: 10, borderTop: '1px solid #ececec' }}>
								<p><a style={{ color: '#4bc6c6' }}>@{_c.name}</a>{_c.content}</p>
								{_c.commentbar ? <CommentBar /> : null}
								<p><Icon type='clock-circle-o' />{_c.date}</p>
							</Row>
						)
					})}
				</Row>
			</Row>
		)
	}
}

export default Row2Col1_2;
