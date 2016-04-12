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
      text: 'hello world from the main component'
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