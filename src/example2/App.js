import React, { useCallback, useState } from 'react';
import Buttons from './Buttons';

import './index.css';

function App() {
	const [count, setCounter] = useState(0);

	const onPlus = useCallback(() => setCounter((count) => count + 1), []);

	const onMinus = useCallback(() => setCounter((count) => count - 1), []);

	return (
		<div className='App'>
			<h1>{count}</h1>
			<Buttons onPlus={onPlus} onMinus={onMinus} />
		</div>
	);
}

export default App;
