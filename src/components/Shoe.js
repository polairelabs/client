import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Shoe extends Component {

    componentDidMount() {
        // make an api call to fetch a shoe
        this.props.fetchShoe();
    }

    renderComponent() {
        if (this.props.shoe) {
            return (
                <div>
                    <p>{this.props.shoe.setup}</p>
                    <p>{this.props.shoe.delivery}</p>
                </div>
            );
        }
        else {
            return <div>Fetching shoe....</div>;
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.props.fetchShoe}>Fetch Shoe</button>
                {this.renderComponent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shoe: state.shoe
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         fetchShoe: () => {
//             axios.get('https://v2.jokeapi.dev/joke/Any').then((res) => {
//                 dispatch({ type: FETCH_SHOE, shoe: res.data});
//             });
//         }
//     }
    
// };

export default connect(mapStateToProps, actions)(Shoe)