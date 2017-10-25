import React, { Component } from 'react'
import { Table } from 'antd'

/**
 * 传递参数:
 *  titles: 表格标题, 数组
 *  dataIndexs: 标题所对应的数据索引, 数组
 *  renders: 内容所对应的点击, 格式为: 
 *    {
 *      title: () => {}
 *    }
 *  data: 具体的数据, 数组
 *  leftFixed: 左侧固定列, 格式为:
 *    [
 *      {
 *        "title": "xxx",
 *        "width": "xxx"
 *      }
 *    ]
 *  rightFixed: 右侧固定列, 格式为:
 *    [
 *      {
 *        "title": "xxx",
 *        "width": "xxx"
 *      }
 *    ]
 */
class Tables extends Component {
	render() {
		const titles = this.props.titles || []
		const dataIndexs = this.props.dataIndexs || []
		const renders = this.props.renders || {}
		const widths = this.props.widths || {}
		const columns = titles.map((_t, _ti) => {
			return {
				title: _t,
				dataIndex: dataIndexs[_ti],
				key: _t,
				render: renders[_t],
				width: widths[_t],
			}
		})

		const data = this.props.data
		const values = data.map((_d, _di) => {
			const result = {key: _di + '', _id: _d._id}
			dataIndexs.forEach(_dataIndex => result[_dataIndex] = _d[_dataIndex] || (typeof _dataIndex !== 'string' ? _dataIndex : null))
			return result
		})

		const leftFixed = this.props.leftFixed
		const rightFixed = this.props.rightFixed

		leftFixed && leftFixed.forEach(_f => {
			columns.forEach(_c => {
				if (_c.title === _f.title) {
					_c.fixed = 'left'
					_f.width && (_c.width = _f.width)
				}
			})
		})

		rightFixed && rightFixed.forEach(_f => {
			columns.forEach(_c => {
				if (_c.title === _f.title) {
					_c.fixed = 'right'
					_f.width && (_c.width = _f.width)
				}
			})
		})
		return (
			<Table
				bordered={this.props.border || false}
				showHeader={this.props.showHeader || true}
				pagination={this.props.pagination || false}
				scroll={this.props.scroll}
				expandedRowRender={this.props.expandedRowRender}
				rowSelection={this.props.rowSelection}
				columns={columns}
				dataSource={values}
			/>
		)
	}
}

export default Tables;
