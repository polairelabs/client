import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShoes } from '../actions';

class Shoes extends Component {

    componentDidMount() {
        // make an api call to fetch a shoe
        this.props.fetchShoes(5);
    }

    renderComponent() {
        if (this.props.shoes) {
            return this.props.shoes.map((shoe) => {
                return (
                    <div key={shoe._id}>
                        <h4>{shoe.title}</h4>
                        <p>{`${shoe.description.substring(0, 250)}...`}</p>
                        <ul>
                            {shoe.variations.map((variation) => {
                                return (
                                    <li key={variation.url}>{variation.sku}</li>
                                );
                            })}
                        </ul>
                    </div>
                );
            });
        }
        else {
            return <div>Fetching shoes....</div>;
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.fetchShoes(5)}>Fetch Shoes</button>
                {this.renderComponent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shoes: state.shoes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchShoes: (count) => {
            dispatch(fetchShoes(count));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shoes)