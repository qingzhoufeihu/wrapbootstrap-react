import React from 'react';
import {
	Layout,
} from 'antd';

const { Footer } = Layout;

const Foot = () => {
	return (
		<Footer style={{ backgroundColor: '#fff', border: '1px solid #ececec', height: 30, marginTop: 20 }}>
			<span><strong>Copyright</strong> 源清慧虹信息科技有限公司 ©2013-2017</span>
		</Footer>
	)
}

export default Foot;
