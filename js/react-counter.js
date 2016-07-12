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
            this.setState({arg: +(ReactDOM.findDOMNode(this.refs.arg).value) + 1})
        }
        else {
            this.setState({arg: +(ReactDOM.findDOMNode(this.refs.arg).value) - 1})
        }
    },
    onFieldChange: function() {
    this.setState({arg: ReactDOM.findDOMNode(this.refs.arg).value})
    },
    render: function() {
        var result = this.state.result;
        return (
                <div>
                    <input
                        type='button'
                        className='minus'
                        value='-'
                        onClick={this.onBtnClickHandler}
                        />
                    <input
                        type='number'
                        className='arg'
                        value={this.state.arg}
                        onChange={this.onFieldChange}
                        placeholder='0'
                        ref='arg'
                   />
               <input
                   type='button'
                   className='plus'
                   value='+'
               onClick={this.onBtnClickHandler}
           />

                <p><b>{result}</b></p>
                    </div>
        );
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