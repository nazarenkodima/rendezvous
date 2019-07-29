//Core
import React, {Component} from 'react';

//instruments
import './styles.css';


const sortByOptions = {
    'Best Match':    'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term:     '',
            location: '',
            sortBy:   'best_match',
        };

        this.sortByOptions = {
            'Best Match':    'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count',
        };
    }

    _getSortByClass = (sortByOption) => {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        }

        return '';
    }

    _handleSortByChange = (sortByOption) => {
        this.setState({
            sortBy: sortByOption,
        });
    }

    _handleTermChange = (event) => {
        this.setState({
            term: event.target.value,
        });
    }

    _handleLocationChange = (event) => {
        this.setState({
            location: event.target.value,

        });
    }

     _handleSearch = (event) => {
         event.preventDefault();

         const { searchYelp } = this.props;
         const { term, location, sortBy } = this.state;

         if (!term.trim() || !location.trim()) {
             return null;
         }

         searchYelp(term, location, sortBy);
     }

     _handleSearchOnKeyDown = (event) => {
         const enterKey = event.key === 'Enter';

         if (enterKey) {
             this._handleSearch(event);
         }
     }

     _renderSortByOptions = () => {
         return Object.keys(sortByOptions).map((sortByOption) => {
             let sortByOptionValue = sortByOptions[ sortByOption ];

             return (
                 <li
                     className = { this._getSortByClass(sortByOptionValue) }
                     key = { sortByOptionValue }
                     onClick = { this._handleSortByChange.bind(this, sortByOptionValue) }>
                     { sortByOption}
                 </li>
             );
         });
     }

     render() {
         return (
             <div className = 'SearchBar'>
                 <div className = 'SearchBar-sort-options'>
                     <ul>
                         {this._renderSortByOptions()}
                     </ul>
                 </div>
                 <div className = 'SearchBar-fields'>
                     <input
                         placeholder = 'pizza'
                         onChange = { this._handleTermChange }
                         onKeyDown = { this._handleSearchOnKeyDown }
                     />
                     <input
                         placeholder = 'chicago'
                         onChange = { this._handleLocationChange }
                         onKeyDown = { this._handleSearchOnKeyDown }
                     />
                 </div>
                 <div className = 'SearchBar-submit'>
                     <a
                         onClick = { this._handleSearch }>
                        Let's Go
                     </a>
                 </div>
             </div>
         );
     }
}
