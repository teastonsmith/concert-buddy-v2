import React from 'react';
import './App.css';

import Header from './Components/Header';
import InputBar from './Components/InputBar';
import CalendarWrapper from './Components/CalendarWrapper';

function App() {
	return (
		<div className='App'>
			<Header />
			<InputBar />
			<CalendarWrapper />>
		</div>
	);
}

export default App;


// credit for 'react-calendar' goes to Matej Kovac (https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728)