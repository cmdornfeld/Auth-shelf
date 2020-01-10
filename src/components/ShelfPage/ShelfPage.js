import React, {Component} from 'react';
import {connect} from 'react-redux';

class ShelfList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_ITEMS'});
    }

    render() {
        return (
            <>
            <ul>
            {this.props.getItem.map((item, i) => {
                return (
                    <li key={i}>{item.description}</li>
                )})
            }
            </ul>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    getItem: reduxStore.getItem
})

export default connect(putReduxStateOnProps)(ShelfList);