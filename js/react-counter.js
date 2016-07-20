var Input = React.createClass({
    render: function(){
        return (
            <div>
                <input
                    type='button'
                    className='minus'
                    value='-'
                    onClick={this.props.onThisBtnClickHandler}
                    />
                <input
                    type='number'
                    className='arg'
                    value={this.props.valueOfArg}
                    onChange={this.props.onThisFieldChange}
                    placeholder='0'
                    refs='arg'
                    />
                <input
                    type='button'
                    className='plus'
                    value='+'
                    onClick={this.props.onThisBtnClickHandler}
                    />
            </div>
        )}
});
var Counter = React.createClass({
    getInitialState: function(){
        return {
            result: 0,
            arg : 1
        };
    },
    componentDidMount: function(){
        this.timer = setInterval(this.add, 1000);
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },
    add: function(){
        this.setState({result: +(this.state.result) + +(this.state.arg)});
    },
    onBtnClickHandler: function(e) {
        if(e.target.className === "plus"){
            this.setState({arg: +this.state.arg + 1})
        }
        else {
            this.setState({arg: +this.state.arg - 1})
        }
    },
    onFieldChange: function(e) {
        console.log(e.target.value);
        this.setState({arg: e.target.value})
    },
    render: function() {
        var result = this.state.result;
        return (
            <div>
                <Input onThisBtnClickHandler={this.onBtnClickHandler} valueOfArg={this.state.arg} onThisFieldChange={this.onFieldChange}/>
                <p><b>{result}</b></p>
            </div>
            )
    }
});
var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Counter />
            </div>
        );
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('root')
);