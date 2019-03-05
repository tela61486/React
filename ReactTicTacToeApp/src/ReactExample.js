class ShoppingList extends React.Component {
	render () {
		return (
			<div className="shopping-list">
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul>
			</div>
		);
	}
}

// Example Usage: <ShoppingList name="Mark" />

// Below renders the same exact content as the one above. The one above uses the shorthand


React.createElement(
	"div",
	{ className: "shopping-list-2"},
	React.createElement(
		"h1",
		null,
		"Shopping List for ",
		props.name
	),
	React.createElement(
		"ul",
		null,
		React.createElement(
			"li",
			null,
			"Instagram"
		),
		React.createElement(
			"li",
			null,
			"WhatsApp",
		),
		React.createElement(
			"li",
			null,
			"Oculus",
		)
	)// ul
); //div
