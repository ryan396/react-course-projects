
class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show Details"}</button>
                {this.state.visibility ? <p>These are details you can see</p> : <p></p>}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
