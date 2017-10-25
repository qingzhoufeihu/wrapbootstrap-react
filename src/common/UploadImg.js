/**
 * 上传图片功能模块
 * 传递参数: pic(图片id, 如果存在的话), uploadimg(func, (pic) => {}, pic为上传成功的图片id), uploadUrl(图片上传url), imageUrl(图片获取url), 
 */
import React, { Component } from 'react';
import {
	Upload, message, Icon,
} from 'antd';

class UploadImg extends Component {
	state = {
		pic: this.props.pic,
		uploadUrl: this.props.uploadUrl,
		imageUrl: this.props.imageUrl,
	}
	beforeUpload = (file) => {
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error(`图片大小应该小于2M`);
		}
		return isLt2M;
	}
	handleChange = (info) => {
		if (info.file.status === 'done') {
			const pic = info.file.response.data;
			this.setState({ pic: pic });
			this.props.uploadimg(pic);
		}
	}
	render() {
		const { pic, uploadUrl, imageUrl } = this.state;
		const url = pic ? `${imageUrl}?fid=${pic}` : '';
		return (
			<Upload
				name='hhfile'
				showUploadList={false}
				action={uploadUrl}
				beforeUpload={this.beforeUpload}
				onChange={this.handleChange}
			>
				{
					url ? <img src={url} alt='' style={{ width: 110, height: 90 }} /> : ''
				}
				<Icon type='plus' style={{ fontSize: 56, color: '#666' }} />
			</Upload>
		)
	}
}

export default UploadImg;
