var React = require('react');

var HtmlV = React.createClass({
	render: function() {
		var textbox = {
			height: '100%',
			width: '100%'
		};
		return (
			<textarea
				value={this.props.text}
				onChange={this.props.handleTextChange}
				style={textbox} >
			</textarea>
		)
	}
});

module.exports = HtmlV;