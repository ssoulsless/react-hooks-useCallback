import React, { memo } from 'react';

const Buttons = memo(({ onPlus, onMinus }) => {
	console.log('Buttons render');

	return (
		<div>
			<button onClick={onPlus}>+</button>
			<button onClick={onMinus}>-</button>
		</div>
	);
});

export default Buttons;
