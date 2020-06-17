import React from 'react';

const Card = (props) => {
	const {name, id, email} = props.robot;
	return (
		<div className='tc dib ba b--black br3 pa3 ma3 bg-light-red shadow-5 grow'>
			<h3> {name} </h3>
			<img src={`https://robohash.org/${id}?size=200x200`} alt="Robot"/>
			<p> {email} </p>
		</div>
	);
}

export default Card;