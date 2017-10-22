import React, { Component } from 'react';
import {
	Row, Icon,
} from 'antd';

import { row3col1 } from '../../../asserts/data/dashboards/dashboard2';

class Row3Col1 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		return (
			<Row style={{ background: '#fff', marginTop: 20, display: this.state.close ? 'none' : 'block' }}>
				<Row style={{ margin: 10 }}>
					<span style={{ fontSize: 16, fontWeight: 600 }}>Messages</span>
					<div style={{ float: 'right' }}>
						<Icon type={this.state.collapsed ? 'up': 'down'} onClick={this.toggle} style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} />
						<Icon type='close' onClick={this.close} style={{ fontSize: 15, fontWeight: 600 }} />
					</div>
				</Row>
				<Row style={{ display: this.state.collapsed ? 'none' : 'block' }}>
					<Row style={{ background: '#f3f6fb', padding: 20}}>
						<Icon type='mail' style={{ fontSize: 24 }} /><span style={{ fontSize: 24 }}>New messages</span>
						<br />
						<span>You have 22 new messages and 16 waiting in draft folder</span>
					</Row>
					{row3col1.map((_r, _ri) => {
						return (
							<Row key={_ri} style={{ borderBottom: '1px solid #ececec', padding: 15 }}>
								<span style={{ fontSize: 14, fontWeight: 600 }}>{_r.name}</span>
								<div style={{ float: 'right' }}>
									{_r.postdate}
								</div>
								<br />
								<p>{_r.content}</p>
								<small>{_r.date}</small>
							</Row>
						)
					})}
				</Row>
			</Row>
		)
	}
}

export default Row3Col1;
