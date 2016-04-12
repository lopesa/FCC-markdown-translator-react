var React = require('react');
var marked = require('marked');

var MarkdownV = React.createClass({
	render: function() {
		var textbox = {
			height: '100%',
			width: '100%'
		};
		var translated = marked(this.props.text);

		return (
			<div style={textbox} dangerouslySetInnerHTML={{__html: translated}}>
			</div>
		)
	}
});

module.exports = MarkdownV;