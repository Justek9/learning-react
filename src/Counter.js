import React, { useState } from 'react'
import classes from './Counter.module.css'

const Counter = function (props) {
	return (
		<div className={classes.counter}>
			<p>{props.count}</p>
			<button onClick={() => props.increaseCount(props.id)}>+</button>
			<button onClick={() => props.decreaseCount(props.id)}>-</button>
		</div>
	)
}

export default Counter
