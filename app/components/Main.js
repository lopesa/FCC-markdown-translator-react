var React = require('react');
var ReactDOM = require('react-dom');
var HtmlV = require('./HtmlV');
var MarkdownV = require('./MarkdownV');
var md = require('./initMd.js')

var Main = React.createClass({
	handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
	getInitialState: function(){
		return {
			text: md
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
			height: '80vh'
		};
		var sub = {
			height: '100%'
		};
		var title = {
			color: 'white',
			'backgroundColor': 'grey',
			'marginBottom': '20px',
			'paddingLeft': '5px'
		}

		return (
			<div className="container" style={main}>
				<div className="row">
					<div className="col-xs-12">
						<div style={title}>
							<h1>Markdown Translator</h1>
						</div>
					</div>
				</div>
				<div className="row" style={height100}>
					
					<div className="col-xs-6" style={sub}>
						<HtmlV text={this.state.text} handleTextChange={this.handleTextChange} />
					</div>

					<div className="col-xs-6" style={sub}>
						<MarkdownV text={this.state.text} handleTextChange={this.handleTextChange} />
					</div>

				</div>
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));