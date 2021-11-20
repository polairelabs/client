import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShoes, search } from '../actions';
import '../stylesheets/Shoes.scss';

class Shoes extends Component {

    constructor() {
        super();
        this.state = {
            query: ""
        };
    }

    componentDidMount() {
        // make an api call to fetch a shoe
        this.props.fetchShoes(5);
    }

    renderSearchbox() {
        return (
            <div className="searchbox">
                <input className="searchbox_input" type="text" placeholder="Search for shoe by title, sku, description..." 
                    onChange={(e) => this.updateQuery(e.currentTarget.value)}
                    onKeyDown={(e) => {if (e.key === 'Enter') this.triggerQuery(this.state.query)}}
                />
                <input className="searchbox_button" type="submit" value="Search" onClick={(e) => this.triggerQuery(this.state.query)}/>
            </div>
        )
    }

    renderShoeGallery() {
        if (this.props.shoes) {
            return this.props.shoes.map((shoe) => {
                return (
                    <a href={shoe.variations[0].url}>
                        <div key={shoe._id} className="shoe">
                            <div >
                                <a href={shoe.variations[0].url}>
                                    <div class="shoe_img_container">
                                        <img src={shoe.variations[0].img_links[0]} alt="Shoe"/>
                                    </div>
                                </a>
                            </div>
                            <div className="shoe_body">
                                <h4 className="shoe_title">
                                    <a href={shoe.variations[0].url}>{shoe.title}</a>
                                </h4>
                                <div className="shoe_description">
                                    <p>{`${shoe.description.substring(0, 250)}...`}</p>
                                </div>
                                <ul className="shoe_variations">
                                    {shoe.variations.map((variation) => {
                                        return (
                                            <li className="shoe_variation" key={variation.img_links[0]}>
                                                <a href={variation.url}>
                                                    <div class="variation_img_container">
                                                        <img src={variation.img_links[0]} alt="Shoe"/>
                                                    </div>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </a>
                );
            });
        }
        else {
            return <div>Fetching shoes....</div>;
        }
    }

    updateQuery(query) {
        console.log(query);
        this.setState({query: query});
    }

    triggerQuery(query) {
        console.log(query);
        if (query)
            this.props.search(query);
        else
            this.props.fetchShoes(5);
    }

    render() {
        return (
            <div>
                {this.renderSearchbox()}
                {this.renderShoeGallery()}
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
        },
        search: (query) => {
            dispatch(search(query));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shoes)