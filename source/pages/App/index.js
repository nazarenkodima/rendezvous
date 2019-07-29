//Core
import React, {Component} from 'react';

//Components
import BusinessList from '../../components/BusinessList';
import SearchBar from '../../components/SearchBar';

//instruments
import './styles.css';

//API
import { api } from '../../API';

export default class App extends Component {
    state = {
        businesses: [],

    }

    // searchYelp = (term, location, sortBy) => {
    //     Yelp.search(term, location, sortBy)
    //         .then((businesses) => {
    //             this.setState({
    //                 businesses: businesses,
    //             });
    //         });
    // }

    searchYelp = async (term, location, sortBy) => {
        const businesses = await api.search(term, location, sortBy);

        this.setState({
            businesses: businesses,
        });
    }


    render() {
        const {businesses} = this.state;

        return (
            <div className = 'App'>
                <h1>rendezvous</h1>
                <SearchBar searchYelp = { this.searchYelp }/>
                <BusinessList
                    businesses = { businesses }
                />
            </div>

        );
    }
}

