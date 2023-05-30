import React, { useState } from 'react'
import Form from './Form'
import Group from './Group'
import ButtonFetch from './ButtonFetch'
import Beer from './Beer'
// import BeersList from './BeersList'
import './App.css'

function App(props) {
	const [noOfCounters, setNoOfCounters] = useState(1)
	const [noOfGroups, setNoOfGroups] = useState(1)

	const changeNoOfCountersHandler = function (n, g) {
		n = Number(n)
		g = Number(g)
		setNoOfCounters(n)
		setNoOfGroups(g)
	}

	const SampleBeer = {
		id: 1,
		name: 'Test',
		description: 'sample description',
	}

	const fetchBeerHandler = function () {
		// fetch(https://api.punkapi.com/v2/beers/random)
	}

	return (
		<>
			<Form noOfCounters={noOfCounters} changeNoOfCounters={changeNoOfCountersHandler}></Form>
			{noOfGroups &&
				new Array(noOfGroups).fill(0).map((_, index) => <Group key={index} noOfCounters={Number(noOfCounters)} />)}
			<ButtonFetch onClick={fetchBeerHandler}></ButtonFetch>
			<Beer beer={SampleBeer}></Beer>
		</>
	)
}

export default App
