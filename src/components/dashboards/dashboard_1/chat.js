import React, { Component } from 'react';
import {
	Row, Input, Icon,
	Affix, Badge,
} from 'antd';

import { chats } from '../../../asserts/data/dashboards/dashboard1';

class Chat extends Component {
	state = {
		show: false,
	}
	onShow = () => this.setState({ show: !this.state.show })
	render() {
		return (
			<div>
				<Affix offsetBottom={20} style={{ float: 'right', marginRight: 20, width: 250 }}>
					<Row style={{ width: 230, border: '1px solid #ececec', display: this.state.show ? 'inline-block' : 'none' }}>
						<Row style={{ backgroundColor: '#2f4050', padding: 10, color: '#fff' }}>
							<span style={{ fontSize: 14, fontWeight: 600 }}>Small chat</span>
							<span style={{ float: 'right' }}>02.19.2015</span>
						</Row>
						<Row style={{ backgroundColor: '#fff', padding: 15, overflowY: 'auto', height: 250 }}>
							{chats.map((_c, _ci) => {
								return (
									<Row key={_ci} style={{ float: _ci % 2 ? 'right' : 'left' }}>
										<span><strong>{_c.name}</strong> {_c.date}</span>
										<br />
										<div style={{ width: 160, backgroundColor: _ci % 2 ? '#ececec' : '#1ab394', borderRadius: 5 }}>
											{_c.content}
										</div>
										<br />
									</Row>
								)
							})}
						</Row>
						<Row style={{ backgroundColor: '#fff', padding: 5 }}>
							<Input size='large' addonAfter={<span>Send</span>} />
						</Row>
					</Row>
					<Row style={{ float: 'right' }}>
						{
							this.state.show ?
								<Icon type='close-circle' style={{ fontSize: 36 }} onClick={this.onShow} />
								:
								<Badge count={5} style={{ backgroundColor: '#f8ac59' }}>
									<Icon type='aliwangwang' style={{ fontSize: 36 }} onClick={this.onShow} />
								</Badge>
						}
					</Row>
				</Affix>
			</div>
		)
	}
}

export default Chat;
