import React from 'react';

class Classcounter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    increaseCount = () => {
        this.setState ({count: this.state.count +1});
    }
    decreaseCount = () => {
        this.setState ({count: this.state.count -1});
    }
    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increaseCount}>Increment</button>
                <button onClick={this.decreaseCount}>Decrement</button>
            </div>
        )
    }

}

export default Classcounter;