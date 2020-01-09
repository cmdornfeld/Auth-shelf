import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddItem extends Component {

    state = {
        item: ''
    }

    handleChange = (event, propertyName) => {
        console.log('Got a change:', event.target.value, propertyName );
        this.setState({
          [propertyName]: event.target.value
      })
    }

    handleSubmit = (event) => {
        this.props.dispatch({ type: 'ADD_ITEM', payload: this.state});
        // this.props.dispatch({ type: 'GET_DETAILS', payload: {id: this.state.id} });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add Item" value={this.state.item} onChange={(event)=>this.handleChange(event, 'item')}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStateOnProps)(AddItem);
