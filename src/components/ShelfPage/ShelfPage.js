import React, {Component} from 'react';
import {connect} from 'react-redux';

class ShelfList extends Component {

    // componentDidMount() {
    //     this.props.dispatch({type: 'GET_ITEMS'});
    // }

    render() {
        return (
            <>
            {JSON.stringify(this.props)}
            {/* <ul>
            {this.props.getItem.map((item, i) => {
                return (
                    <li key={i}>{item}</li>
                )})
            }
            </ul> */}
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStateOnProps)(ShelfList);