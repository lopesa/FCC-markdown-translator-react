var React = require('react');
var ReactDOM = require('react-dom');
var HtmlV = require('./HtmlV');
var MarkdownV = require('./MarkdownV');

var Main = React.createClass({
	handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
	getInitialState: function(){
		return {
      text: 'Heading \n' +
      	'=======\n' +
      	'\n' +
				'Sub-heading \n' +
				'-----------\n' +
				'### Another deeper heading\n' +
				'\n' +
				'Paragraphs are separated\n' +
				'by a blank line.\n' +
				'\n' +
				'Leave 2 spaces at the end of a line to do a\n' + 
				'line break\n' +
				'\n' +
				'Text attributes *italic*, **bold**,\n' +
				'`monospace`, ~~strikethrough~~ .\n' +
				'\n' +
				'Shopping list:\n' +
				'\n' +
				'  * apples\n' +
				'  * oranges\n' +
				'  * pears\n' +
				'\n' +
				'Numbered list:\n' +
				'\n' +
				'  1. apples\n' +
				'  2. oranges\n' +
				'  3. pears\n' +
				'\n' +
				'The rain---not the reign---in\n' +
				'Spain.\n' +
				'\n' +
				' *[Tony Lopes](http://freecodecamp.com/lopesa)*\n' +
				'\n' +
				' *thanks to [Herman Fassett](http://freecodecamp.com/hermanfassett)* '
    }
  },
	render: function() {
		
		var height100 = {
			height: '100%'
		};
		var width100 = {
			width: '100%'
		};
		var main = {
			height: '80vh',
			'marginTop': '50px'
		};
		var sub = {
			height: '100%'
		};

		return (
			<div className="container" style={main}>
				<div className="row" style={height100}>
					
					<div className="col-sm-6" style={sub}>
						<HtmlV text={this.state.text} handleTextChange={this.handleTextChange} />
					</div>

					<div className="col-sm-6" style={sub}>
						<MarkdownV text={this.state.text} handleTextChange={this.handleTextChange} />
					</div>

				</div>
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));