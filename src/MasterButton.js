import classes from './MasterButton.module.css'

const MasterButton = function (props) {
	return (
		<div className={classes.container}>
			<button className={classes['master-button']} onClick={props.handleIncrementGlobal}>
				+
			</button>
			<button className={classes['master-button']} onClick={props.handleDecrementGlobal}>-</button>
		</div>
	)
}

export default MasterButton
