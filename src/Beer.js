import classes from './Beer.module.css'

const Beer = function (props) {
	return (
		<ul>
			{props.beer.map(beer => (
				<li className={classes.beer}>
					<h2>{beer.id}</h2>
					<h3>{beer.name}</h3>
					<p>{beer.description}</p>
				</li>
			))}
		</ul>
	)
}

export default Beer
