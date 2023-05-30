import React, { useState } from 'react'
import Form from './Form'
import Group from './Group'
import './App.css'

function App() {
	const [noOfCounters, setNoOfCounters] = useState(1)
	const [noOfGroups, setNoOfGroups] = useState(1)

	const changeNoOfCountersHandler = function (n, g) {
		n = Number(n)
		g = Number(g)
		setNoOfCounters(n)
		setNoOfGroups(g)
	}

	return (
		<>
			<Form noOfCounters={noOfCounters} changeNoOfCounters={changeNoOfCountersHandler}></Form>
			{noOfGroups &&
				new Array(noOfGroups).fill(0).map((_, index) => <Group key={index} noOfCounters={Number(noOfCounters)} />)}
		</>
	)
}

export default App
