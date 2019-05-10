import React from 'react';
import './App.css';

import Header from './Components/Header';
import InputBar from './Components/InputBar';
import CalendarWrapper from './Components/CalendarWrapper';
import Calendar from './Components/Imports/';

function App() {
	return (
		<div className='App'>
			<Header />
			<InputBar />
			<CalendarWrapper>
				<Calendar />
			</CalendarWrapper>
		</div>
	);
}

export default App;
