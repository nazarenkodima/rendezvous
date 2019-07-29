const apiKey = 'LmcyFUDhaHET3FZnhdSPjfaYXFhF7cztuX7zzXy84RTycyXVPMIfuFYmuUs-pQ_cyXUMgc0zS1_J20aSwgxo0xr7aIWC2qRiykLQ4fv8n8CvRXGqwvZkbJfbxKk-XXYx';
import { ROOT_URL, API_KEY } from './config';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            method:  'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })
            .then((response) => response.json())
            .then((responseJson) =>  {
                console.log('responseJson → ', responseJson.businesses);
                if (responseJson.businesses) {
                    return responseJson.businesses.map((business) => {
                        return {
                            id:          business.id,
                            imageSrc:    business.image_url,
                            name:        business.name,
                            address:     business.location.display_address,
                            city:        business.location.city,
                            state:       business.state,
                            zipCode:     business.zip_code,
                            category:    business.category,
                            rating:      business.rating,
                            reviewCount: business.review_count,
                        };
                    });
                }
            })
            .catch((error) => console.log(error));
    },
};


export const api = new class Api {
    async search(term, location, sortBy) {
        const response = await fetch(`${ROOT_URL}/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                method:  'GET',
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            });

        const { businesses } = await response.json();
        console.log('businesses → ', businesses);
        if (businesses) {
            return businesses.map((business) => {
                return {
                    id:          business.id,
                    imageSrc:    business.image_url,
                    name:        business.name,
                    address:     business.location.display_address,
                    city:        business.location.city,
                    state:       business.state,
                    zipCode:     business.zip_code,
                    category:    business.category,
                    rating:      business.rating,
                    reviewCount: business.review_count,
                };
            });
        }
    }
}();
