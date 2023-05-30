import classes from './Form.module.css'

const Form = function (props) {
	let currentNoOfCounters
	let currentNoofGroups
	const submitHandler = function (event) {
		event.preventDefault()
		console.log(currentNoOfCounters)
		props.changeNoOfCounters(currentNoOfCounters, currentNoofGroups)
	}

	const onChangeHandler = function (event) {
		currentNoOfCounters = event.target.value
	}

	const onGroupChangeHandler = function (event) {
		currentNoofGroups = event.target.value
	}

	return (
		<form className={classes.container} onSubmit={submitHandler}>
			<div>
				<label htmlFor='no-of-groups'>No of groups:</label>
				<input type='number' min='0' step='1' defaultValue='1' onChange={onGroupChangeHandler}></input>
			</div>
			<div>
				<label htmlFor='no-of-counter'>No of counters:</label>
				<input type='number' min='0' onChange={onChangeHandler} defaultValue='1'></input>
			</div>
			<button type='submit'>OK</button>
		</form>
	)
}

export default Form
