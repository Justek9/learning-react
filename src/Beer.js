import classes from './Beer.module.css'

const Beer = function (props) {
	return (
		<ul>
			<li className={classes.beer}>
				<h2>{props.beer.id}</h2>
				<h3>{props.beer.name}</h3>
				<p>{props.beer.description}</p>
			</li>
		</ul>
	)
}

export default Beer
