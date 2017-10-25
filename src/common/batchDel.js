/**
 * 批量删除通用模块
 * 传递参数: url(删除的url), params(删除所传递的参数), finish(删除后所执行的操作), disabled(是否允许执行批量删除)
 */
import React, { Component } from 'react'
import {
	message, notification, Popconfirm,
	Button,
} from 'antd'
import axios from 'axios'

class BatchDel extends Component {
	onOk = () => {
		axios({
			method: 'post',
			url: this.props.url,
			params: this.props.params,
			header: { 'Access-Control-Allow-Origin': '*' }
		})
			.then(res => {
				const data = res.data
				data.status ? message.success(`批量删除成功`) : message.error(`批量删除失败`)
				this.props.finish()
			})
			.catch(error => {
				notification.error({
					message: `批量删除失败`,
					description: `${error.message}`,
					duration: 2,
				})
				this.props.finish()
			})
	}
	render() {
		const text = this.props.text || '批量删除';
		return (
			<Popconfirm title="确认批量删除?" onConfirm={this.onOk} okText="确定" cancelText="取消">
				{
					this.props.disabled ?
						<Button type='danger' icon='delete' disabled>{text}</Button>
						: <Button type='danger' icon='delete'>{text}</Button>
				}
			</Popconfirm>
		)
	}
}

export default BatchDel;
