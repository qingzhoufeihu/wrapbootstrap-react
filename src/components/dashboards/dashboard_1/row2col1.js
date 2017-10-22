import React from 'react';
import {
	Row,
} from 'antd';
import Row2Col1_1 from './row2col1_1';
import Row2Col1_2 from './row2col1_2';

const Row2Col1 = () => {
	return (
		<Row>
			<Row2Col1_1 />
			<Row2Col1_2 />
		</Row>
	)
}

export default Row2Col1;
