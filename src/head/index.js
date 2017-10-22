import React, { Component } from 'react';
import {
	Row, Col, Input,
	Dropdown, Badge, Icon,
	Avatar, Layout, Switch,
	Tabs, Progress,
} from 'antd';

import { headMsg, headAlarm, headNotes, headProjects, headSettings } from '../asserts/data/head';

const Search = Input.Search;
const { Header } = Layout;
const TabPane = Tabs.TabPane;

const Mails = () => {
	const rows = headMsg.map(_h => {
		return (
			<Row style={{ padding: 10, borderTop: '1px solid #ececec' }}>
				<Col span={4}>
					<Avatar src={_h.img} />
				</Col>
				<Col span={15}>
					<Row>
						<div dangerouslySetInnerHTML={{__html: _h.content }}></div>
					</Row>
					<Row style={{ fontSize: 10 }}>
						{_h.date}
					</Row>
				</Col>
				<Col span={4} offset={1}>
					<span>{_h.postdate}</span>
				</Col>
			</Row>
		)
	});
	return (
		<Row style={{ background: '#fff', width: 300 }}>
			<Row>
				{rows}
			</Row>
			<Row>
				<Col span={22} offset={1}>
					<div style={{ height: 25, margin: 5, textAlign: 'center' }}>
						<Icon type='mail' />
						<span><strong>  Read All Messages</strong></span>
					</div>
				</Col>
			</Row>
		</Row>
	)
}

const Alarms = () => {
	const rows = headAlarm.map(_h => {
		return (
			<Row style={{ padding: 10, borderTop: '1px solid #ececec' }}>
				<Col span={14} offset={2}>
					<Icon type={_h.icon} />
					<span> {_h.content}</span>
				</Col>
				<Col span={8} style={{ fontSize: 10 }}>
					{_h.postdate}
				</Col>
			</Row>
		)
	});
	return (
		<Row style={{ background: '#fff', width: 300 }}>
			<Row>
				{rows}
			</Row>
			<Row>
				<Col span={22} offset={1}>
					<div style={{ height: 25, margin: 5, textAlign: 'center' }}>
						<span><strong>See All Alerts</strong></span>
						<Icon type='right' />
					</div>
				</Col>
			</Row>
		</Row>
	)
}

const Notes = () => {
	const rows = headNotes.map((_h, _hi) => {
		const stars = [];
		if (_h.star > 0 && _h.star < 5) {
			for (let i = 0; i < parseInt(_h.star, 10); i++) {
				stars.push(<Icon key={i} type='star' />)
			}
		}
		return (
			<Row key={_hi} style={{ padding: 10, borderTop: '1px solid #ececec' }}>
				<Col span={6}>
					<Avatar src={_h.img} />
					<br />
					{stars}
				</Col>
				<Col span={18}>
					<span>{_h.content}</span>
					<br />
					<span>{_h.date}</span>
				</Col>
			</Row>
		)
	})
	return (
		<Row>
			<Row>
				<Icon type='aliwangwang' />
				<span style={{ fontSize: 18, fontWeight: 600 }}>Latest Notes</span>
				<br />
				<span>You have 10 new mesage</span>
			</Row>
			<Row style={{ backgroundColor: '#fff' }}>
				{rows}
			</Row>
		</Row>
	)
}

const Projects = () => {
	const rows = headProjects.map((_h, _hi) => {
		return (
			<Row key={_hi} style={{ padding: 10, borderTop: '1px solid #ececec' }}>
				<span style={{ fontWeight: 600, fontSize: 14 }}>{_h.head}</span>
				<span style={{ float: 'right'}}>{_h.postdate}</span>
				<br />
				<p>{_h.content}</p>
				<span>Completion with: {_h.progress}%</span>
				<Progress percent={_h.progress} />
				<br />
				<span>{_h.date}</span>
			</Row>
		)
	});
	return (
		<Row>
			<Row>
				<Icon type='book' />
				<span style={{ fontSize: 18, fontWeight: 600 }}>Latest projects</span>
				<br />
				<span>You have 14 projects. 10 not completed.</span>
			</Row>
			<Row style={{ backgroundColor: '#fff' }}>
				{rows}
			</Row>
		</Row>
	)
}

const Settings = () => {
	const rows = headSettings.map((_h, _hi) => {
		return (
			<Row key={_hi} style={{ padding: 10, borderTop: '1px solid #ececec' }}>
				<Col span={16}>
					<span>{_h.key}</span>
				</Col>
				<Col span={8}>
					<Switch checkedChildren='ON' unCheckedChildren='OFF' defaultChecked={_h.value === 'on'} />
				</Col>
			</Row>
		)
	});
	return (
		<Row>
			<Row>
				<Icon type='setting' />
				<span style={{ fontSize: 18, fontWeight: 600 }}>Settings</span>
				<br />
				<span>You have 14 projects. 10 not completed</span>
			</Row>
			<Row style={{ backgroundColor: '#fff' }}>
				{rows}
			</Row>
			<Row>
				<h3>Settings</h3>
				<span> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
					Over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </span>
			</Row>
		</Row>
	)
}

const Sets = () => {
	return (
		<Tabs type='card' style={{ width: 250 }}>
			<TabPane tab='Notes' key='1'>
				<Notes />
			</TabPane>
			<TabPane tab='Projects' key='2'>
				<Projects />
			</TabPane>
			<TabPane tab={<Icon type='setting' />} key='3'>
				<Settings />
			</TabPane>
		</Tabs>
	)
}

class Head extends Component {
	render() {
		return (
			<Header style={{ background: this.props.color }}>
				<Row>
					<Col span={4}>
						<Search
							placeholder='Search for something...'
							style={{ width: 200 }}
							size='large'
						/>
					</Col>
					<Col span={5} offset={10} >
						<span style={{ fontSize: 16 }}>Welcome to INSPINIA+ Admin Theme.</span>
					</Col>
					<Col span={1}>
						<Dropdown overlay={<Mails />} trigger={['click']} placement='bottomRight'>
							<Badge count={16} style={{ backgroundColor: '#f8ac59'}}>
								<Icon type='mail' style={{ fontSize: 22 }} />
							</Badge>
						</Dropdown>
					</Col>
					<Col span={1}>
						<Dropdown overlay={<Alarms />} trigger={['click']} placement='bottomRight'>
							<Badge count={8} style={{ backgroundColor: '#1ab394'}}>
								<Icon type='bell' style={{ fontSize: 22 }} />
							</Badge>
						</Dropdown>
					</Col>
					<Col span={2}>
						<Icon type='logout' style={{ fontSize: 14 }} />
						<span style={{ marginLeft: 5, fontSize: 14, fontWeight: 600 }}>Log out</span>
					</Col>
					<Col span={1}>
						<Dropdown overlay={<Sets />} trigger={['click']} placement='bottomRight'>
							<Icon type='bars' style={{ fontSize: 22 }} />
						</Dropdown>
					</Col>
				</Row>
			</Header>
		)
	}
}

export default Head;
