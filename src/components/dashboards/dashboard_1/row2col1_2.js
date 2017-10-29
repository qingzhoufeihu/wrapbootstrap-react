import React, { Component } from 'react';
import {
	Row, Menu,
	Icon, Dropdown,
} from 'antd';
import Chart from 'chart.js';

import { row2col1_2 } from '../../../asserts/data/dashboards/dashboard1';

class Row2Col1_2 extends Component {
	state = {
		collapsed: false,
		close: false,
	}
	componentDidMount() {
		const ctx = document.getElementById('row2col1_2').getContext('2d');
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				}],
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true,
						},
					}],
				},
			},
		});
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	render() {
		const menuItems = row2col1_2.menus.map((_m, _mi) => {
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
					<span style={{ fontSize: 14, fontWeight: 600 }}>Read below comments</span>
				</Row>
				<Row style={{ borderTop: '1px solid #ececec', display: this.state.collapsed ? 'none' : 'block' }}>
					{row2col1_2.comments.map((_c, _ci) => {
						return (
							<Row key={_ci} style={{ padding: 10, borderTop: '1px solid #ececec' }}>
								<p><a style={{ color: '#4bc6c6' }}>@{_c.name}</a>{_c.content}</p>
								{_c.commentbar ? <canvas id='row2col1_2' style={{ maxHeight: 150 }}></canvas> : null}
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
