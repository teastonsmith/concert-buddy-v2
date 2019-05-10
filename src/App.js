import React from 'react';

import './reset.css';
import './Calendar.css';
import './App.css';

import Header from './Components/Header';
import InputBar from './Components/InputBar';
import CalendarWrapper from './Components/CalendarWrapper';

export default function App() {
	return (
		<div className='App'>
			<Header />
			<InputBar />
			<CalendarWrapper />>
		</div>
	);
}
