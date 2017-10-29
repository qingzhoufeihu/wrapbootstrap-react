import React, { Component } from 'react';
import {
	Row, Col, Icon,
	Tag,
} from 'antd';
import Chart from 'chart.js';

import { row3col2_3 } from '../../../asserts/data/dashboards/dashboard2';
import Tables from '../../../common/tables';

class Row3Col2_3 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	componentDidMount() {
		const ctx = document.getElementById('row3col2_3').getContext('2d');
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
					{
						label: 'Dataset 1',
						backgroundColor: 'red',
						borderColor: 'red',
						borderWidth: 1,
						data: [23, 54, 32, 12, 54, 76, 11],
					},
					{
						label: 'Dataset 2',
						backgroundColor: 'green',
						borderColor: 'green',
						borderWidth: 1,
						data: [13, 24, 62, 22, 34, 56, 71],
					},
				],
			},
		})
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		row3col2_3.data.forEach(_r => {
			_r.Amount = <Tag color={_r.color}>{_r.Amount}</Tag>
		});
		return (
			<Row style={{ background: '#fff', marginTop: 20, marginRight: 20, display: this.state.close ? 'none' : 'block' }}>
				<Row style={{ margin: 10, paddingBottom: 10, borderBottom: '1px solid #ececec' }}>
					<span style={{ fontSize: 16, fontWeight: 600 }}>User project list</span>
					<div style={{ float: 'right' }}>
						<Icon type={this.state.collapsed ? 'up' : 'down' } onClick={this.toggle} style={{ fontSize: 15, fontWeight: 600, marginRight: 5 }} />
						<Icon type='close' onClick={this.close} style={{ fontSize: 15, fontWeight: 600 }} />
					</div>
				</Row>
				<Row style={{ display: this.state.collapsed ? 'none' : 'block', margin: 20 }}>
					<Col md={24} lg={12} style={{ paddingRight: 20 }}>
						<Tables
							titles={row3col2_3.titles}
							dataIndexs={row3col2_3.dataIndexs}
							data={row3col2_3.data}
						/>
					</Col>
					<Col md={24} lg={12} style={{ paddingRight: 20 }}>
						<canvas id='row3col2_3' style={{ minHeight: 300, maxHeight: 600 }}></canvas>
					</Col>
				</Row>
			</Row>
		)
	}
}

export default Row3Col2_3;
