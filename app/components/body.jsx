var React = require('react');
var Tasty = require('../lib/tastyEngine');


module.exports = React.createClass({
    getInitialState: function () {
        return {
            value: "driver.get('http://www.google.com/ncr')"
        };
    },

    startDriver(){
        Tasty.init('chrome');
    },
    execute(){
        Tasty.execute(this.state.value);
    },
    stop(){
        Tasty.stop();
    },
    render () {
        return (
            <div id="form">
                <span>Script to execute :</span>
                <textarea id="scriptToExecute" value={this.state.value}>
                </textarea>
                <div>
                    <a id="startDriver" href="#" onClick={this.startDriver}>Start</a>
                    <a id="executeScript" href="#" onClick={this.execute}>Execute</a>
                    <a id="stopDriver" href="#" onClick={this.stop}>Stop</a>
                </div>
            </div>
        )
    }
});