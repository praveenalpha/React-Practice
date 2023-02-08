import React, { Component } from 'react';

class Todos extends Component {
    state = { 
        todo: [{id: 1, description: "Buy Fruits"}, 
                {id: 2, description: "Buy Groceries"}]
     } 
    render() { 
        return (
            <React.Fragment>
                <ul>
                    {this.state.todo.map( (item) => {
                        return <li key={item.id}>{item.description}</li>
                    })}
                </ul>
            </React.Fragment>
        );
    }
}
 
export default Todos;