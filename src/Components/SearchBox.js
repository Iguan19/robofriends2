import React from 'react';

const SearchBox = ({onInputChange}) => {
	return(
		<div className='tc'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='text' 
				placeholder='Enter Robot Name'
				onChange={ onInputChange }
			/>
		</div>
	);	
}

export default SearchBox;