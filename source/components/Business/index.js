//Core
import React, {Component} from 'react';

//instruments
import './styles.css';


export default class Business extends Component {
    render() {
        const { business: {
            imageSrc,
            name,
            address,
            city,
            state,
            zipCode,
            category,
            rating,
            reviewCount,
        }   } = this.props;

        return (
            <div className = 'Business'>
                <div className = 'image-container'>
                    <img
                        alt = ''
                        src = { imageSrc }
                    />
                </div>
                <h2>{name}</h2>
                <div className = 'Business-information'>
                    <div className = 'Business-address'>
                        <p>{address}</p>
                        <p>{city}</p>
                        <p>{state} {zipCode}</p>
                    </div>
                    <div className = 'Business-reviews'>
                        <h3>{category}</h3>
                        <h3 className = 'rating'>{rating} stars</h3>
                        <p>{reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}
