import React, { Component } from 'react';
import {
	Row, Icon, Checkbox,
} from 'antd';

import { row3col2_2 } from '../../../asserts/data/dashboards/dashboard2';

class Row3Col2_2 extends Component {
	state = {
		collapsed: false,
		close: false,
		data: row3col2_2,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	change = (index) => {
		const data = this.state.data;
		data[index].checked = !data[index].checked;
		this.setState({ data: data });
	}
	render() {
		const data = this.state.data;
		return (
			<Row style={{ background: '#fff', marginTop: 20, display: this.state.close ? 'none' : 'block' }}>
				<Row style={{ margin: 10, paddingBottom: 10, borderBottom: '1px solid #ececec' }}>
					<span style={{ fontSize: 16, fontWeight: 600 }}>User project list</span>
					<div style={{ float: 'right' }}>
						<Icon type={this.state.collapsed ? 'up' : 'down' } onClick={this.toggle} style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} />
						<Icon type='close' onClick={this.close} style={{ fontSize: 15, fontWeight: 600 }} />
					</div>
				</Row>
				<Row style={{ display: this.state.collapsed ? 'none' : 'block', margin: 20 }}>
					{data.map((_d, _di) => {
						return (
							<div style={{ backgroundColor: '#ececec', marginBottom: 5, paddingLeft: 10, height: 30, lineHeight: '30px' }}>
								<Checkbox key={_di} onChange={() => this.change(_di)} defaultChecked={_d.checked}><span style={{textDecoration: _d.checked ? 'line-through' : 'none' }}>{_d.content}</span></Checkbox>
							</div>
						);
					})}
				</Row>
			</Row>
		)
	}
}

export default Row3Col2_2;
