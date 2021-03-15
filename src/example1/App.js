/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback, useRef, useState } from 'react';

import './index.css';

function App() {
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
	const ulRef = useRef();
	const numberRef = useRef();

	numberRef.current = numbers;

	const addNumber = () => {
		setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
	};

	const handleScroll = useCallback(() => {
		console.log('Был скролл!');
		console.log(numberRef);
	}, []);

	const start = () => {
		ulRef.current.addEventListener('scroll', handleScroll);
	};

	const stop = () => {
		ulRef.current.removeEventListener('scroll', handleScroll);
	};

	return (
		<div>
			<ul ref={ulRef}>
				{numbers.map((n) => (
					<li key={n}>{n}</li>
				))}
			</ul>
			<button onClick={addNumber}>✅ Добавить число</button>
			<button onClick={start}>▶️ Старт</button>
			<button onClick={stop}>⏹ Стоп</button>
		</div>
	);
}
export default App;
