/**
 * 删除通用模块
 * 传递参数: url(删除的url), params(删除所传递的参数), finish(删除后所执行的操作)
 */
import React, { Component } from 'react'
import {
	message, notification, Popconfirm,
	Button,
} from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css'

class Del extends Component {
	onOk = () => {
		axios({
			method: 'post',
			url: this.props.url,
			params: this.props.params,
			header: { 'Access-Control-Allow-Origin': '*' }
		})
			.then(res => {
				const data = res.data
				data.status ? message.success(`删除成功`) : message.error(`删除失败`)
				this.props.finish()
			})
			.catch(error => {
				notification.error({
					message: `删除失败`,
					description: `${error.message}`,
					duration: 2,
				})
				this.props.finish()
			})
	}
	render() {
		return (
			<Popconfirm title="确认删除?" onConfirm={this.onOk} okText="确定" cancelText="取消">
				<Button type='danger' icon='delete'>删除</Button>
			</Popconfirm>
		)
	}
}

export default Del;
