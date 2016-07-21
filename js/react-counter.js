class Input extends React.Component{
    render(){
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
}
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: props.initialResult,
            arg : props.initialArg
    };
        this.add = this.add.bind(this);
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this)
    }
    componentDidMount(){
        this.timer = setInterval(this.add, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    add(){
        console.log(this.state.result);
        this.setState({result: +(this.state.result) + +(this.state.arg)});
    }
    onBtnClickHandler(e){
        if(e.target.className === "plus"){
            this.setState({arg: +this.state.arg + 1})
        }
        else {
            this.setState({arg: +this.state.arg - 1})
        }
    }
    onFieldChange(e){
        this.setState({arg: e.target.value})
    }
    render(){
        var result = this.state.result;
        return(
            <div>
                <Input onThisBtnClickHandler={this.onBtnClickHandler} valueOfArg={this.state.arg} onThisFieldChange={this.onFieldChange}/>
                <p><b>{result}</b></p>
            </div>
    )
    }
}
Counter.defaultProps = {initialResult:0, initialArg: 1};
class App extends React.Component{
    render() {
        return(
            <div className="app">
                <Counter />
            </div>
    )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);