import React, { Component } from 'react';
import {
	Row, Icon,
	Dropdown, Menu,
	Radio, Input,
} from 'antd';

import { row3 } from '../../../asserts/data/dashboards/dashboard4';
import Tables from '../../../common/tables';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Search = Input.Search;

class Row3 extends Component {
	state = {
		collapsed: false,
		close: false,
		type: 'Day',
	}
	toggle = () => this.setState({ collapsed: !this.state.collapsed })
	close = () => this.setState({ close: !this.state.close })
	change = (e) => this.setState({ type: e.target.value })
	render() {
		const menuItems = row3.menus.map((_m, _mi) => {
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
					<span style={{ fontSize: 14, fontWeight: 600 }}>Custom responsive table</span>
				</Row>
				<Row style={{ padding: 20, borderTop: '1px solid #ececec', display: this.state.collapsed ? 'none' : 'block' }}>
					<Row style={{ paddingBottom: 15 }}>
						<div style={{ float: 'right' }}>
							<Search
								placeholder='something...'
								style={{ width: 200 }}
							/>
						</div>
						<RadioGroup defaultValue='Day' onChange={this.change}>
							<RadioButton value='Day'>Day</RadioButton>
							<RadioButton value='Week'>Week</RadioButton>
							<RadioButton value='Month'>Month</RadioButton>
						</RadioGroup>
					</Row>
					<Row>
						<Tables
							titles={row3[this.state.type].titles}
							dataIndexs={row3[this.state.type].dataIndexs}
							data={row3[this.state.type].data}
						/>
					</Row>
				</Row>
			</Row>
		)
	}
}

export default Row3;
