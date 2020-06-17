import React from 'react';

const SearchBox = ({onInputChange}) => {
	return(
		<div className='tc'>
			<input
				className=''
				type='text' 
				placeholder='Enter Robot Name'
				onChange={ onInputChange }
			/>
		</div>
	);	
}

export default SearchBox;