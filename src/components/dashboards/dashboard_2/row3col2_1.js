import React, { Component } from 'react';
import {
	Row, Icon, Tag,
} from 'antd';

import { row3col2_1 } from '../../../asserts/data/dashboards/dashboard2';
import Tables from '../../../common/tables';

class Row3Col2_1 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		const data = row3col2_1.data;
		data.forEach(_d => {
			if (_d.Status === 'Canceled') {
				_d.Status = <Tag color='#f8ac59'>Canceled</Tag>;
			} else if (_d.Status === 'Completed') {
				_d.Status = <Tag color='#1ab394'>Completed</Tag>;
			}
			_d.Value = <span style={{ fontSize: 14, fontWeight: 600, color: '#1ab394' }}><Icon type='arrow-up' />{_d.Value}%</span>
		})
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
					<Tables
						titles={row3col2_1.titles}
						dataIndexs={row3col2_1.dataIndexs}
						data={row3col2_1.data}
					/>
				</Row>
			</Row>
		)
	}
}

export default Row3Col2_1;
