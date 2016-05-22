var React = require('react');
var Header = require('./header.jsx');
var Body = require('./body.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="home">
                <Header />
                <Body />
                <Footer/>
            </div>
        )
    }
});