import React from 'react';

const ScrollComponent = (props) => {
	return(
		<div className='mt3' style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>
	);
}

export default ScrollComponent;