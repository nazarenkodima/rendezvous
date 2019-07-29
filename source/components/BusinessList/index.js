//Core
import React, {Component} from 'react';

//instruments
import './styles.css';

//Components
import Business from '../Business';

export default class BusinessList extends Component {
    render() {
        const { businesses } = this.props;


        const businessesJSX = businesses.map((business) => {
            return (
                <Business
                    business = { business }
                    key = { business.id }
                />
            );
        });

        return (
            <div className = 'BusinessList'>
                {businessesJSX}
            </div>
        );
    }
}
