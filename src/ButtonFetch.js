import classes from './ButtonFetch.module.css'

const ButtonFetch = props => {
	return (
		<div className={classes.container}>
			<button className={classes['btn-beer']}>Fetch beer</button>
		</div>
	)
}

export default ButtonFetch
