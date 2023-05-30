import { useEffect, useState } from 'react'
import MasterButton from './MasterButton'
import Counter from './Counter'

const Group = function (props) {
	console.log(props.noOfCounters)
	const [counters, setCounters] = useState(new Array(props.noOfCounters).fill(0, 0, props.noOfCounters))

	useEffect(() => {
		setCounters(new Array(props.noOfCounters).fill(0, 0, props.noOfCounters))
	}, [props.noOfCounters])

	const incrementAll = function () {
		setCounters(prevCounters => prevCounters.map(counter => counter + 1))
	}

	const decrementAll = function () {
		setCounters(prevCounters => prevCounters.map(counter => counter - 1))
	}

	const increaseCount = function (id) {
		setCounters(prevCounters => prevCounters.map((counter, index) => (id == index ? counter + 1 : counter)))
	}
	const decreaseCount = function (id) {
		console.log('wchodzimy')
		setCounters(prevCounters => prevCounters.map((counter, index) => (id == index ? counter - 1 : counter)))
	}

	return (
		<div>
			<MasterButton handleIncrementGlobal={incrementAll} handleDecrementGlobal={decrementAll}></MasterButton>
			<div className='container'>
				{counters &&
					counters.map((count, index) => (
						<Counter
							key={index}
							id={index}
							count={count}
							increaseCount={increaseCount}
							decreaseCount={decreaseCount}></Counter>
					))}
			</div>
		</div>
	)
}

export default Group
