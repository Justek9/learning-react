import React, { useState } from 'react'
import Form from './Form'
import Group from './Group'
// import ButtonFetch from './ButtonFetch'
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

	// const SampleBeer = {
	// 	id: 1,
	// 	name: 'Test',
	// 	description: 'sample description',
	// }

	const [beer, setBeer] = useState([])
	const fetchBeerHandler = function () {
		console.log('wszedłem do funkcji')
		fetch('https://api.punkapi.com/v2/beers/random')
			.then(response => {
				console.log(response)
				return response.json()
			})
			.then(data => {
				console.log(data)
				console.log(data.map)
				const transforrmedData = data.map(beerData => {
					return {
						id: beerData.id,
						name: beerData.name,
						description: beerData.description,
					}
				})
				console.log(transforrmedData)
				setBeer(transforrmedData)
				console.log(beer)
			})
	}

	return (
		<>
			<Form noOfCounters={noOfCounters} changeNoOfCounters={changeNoOfCountersHandler}></Form>
			{noOfGroups &&
				new Array(noOfGroups).fill(0).map((_, index) => <Group key={index} noOfCounters={Number(noOfCounters)} />)}
			<div className='container'>
				<button className='btn' onClick={fetchBeerHandler}>
					Fetch random beer
				</button>
			</div>
			<Beer beer={beer}></Beer>
		</>
	)
}

export default App
