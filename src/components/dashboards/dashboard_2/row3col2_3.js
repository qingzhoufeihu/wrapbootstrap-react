import React, { Component } from 'react';
import {
	Row, Col, Icon,
	Tag,
} from 'antd';
import { LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line } from 'recharts';

import { row3col2_3, row3col2_4 } from '../../../asserts/data/dashboards/dashboard2';
import Tables from '../../../common/tables';

class Row3Col2_3 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		row3col2_3.data.forEach(_r => {
			_r.Amount = <Tag color={_r.color}>{_r.Amount}</Tag>
		});
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
					<Col span={12}>
						<Tables
							titles={row3col2_3.titles}
							dataIndexs={row3col2_3.dataIndexs}
							data={row3col2_3.data}
						/>
					</Col>
					<Col span={12}>
						<LineChart width={500} height={300} data={row3col2_4.data}
							margin={{top: 5, right: 30, left: 20, bottom: 5}}>
							<XAxis dataKey="name"/>
							<YAxis/>
							<CartesianGrid strokeDasharray="3 3"/>
							<Tooltip/>
							<Legend />
							<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
							<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
						</LineChart>
					</Col>
				</Row>
			</Row>
		)
	}
}

export default Row3Col2_3;
