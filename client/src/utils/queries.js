import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query getProducts($genre: ID) {
    products(genre: $genre) {
    _id
    title
    description
    price
    quantity
    image
    genre {
        _id
        }
    }
}
`;

export const QUERY_CHECKOUT = gql`
    query getCheckout($products: [ID]!) {
    checkout(products: $products) {
        session
    }
    }
`;

export const QUERY_ALL_PRODUCTS = gql`
    {
    products {
    _id
    title
    description
    price
    quantity
    genre {
        name
        }
    }
    }
`;

export const QUERY_GENRE = gql`
    {
    genres {
        _id
        name
    }
    }
`;

export const QUERY_USER = gql`
    {
    user {
    firstName
    lastName
    orders {
        _id
        purchaseDate
        products {
    _id
    title
    description
    price
    quantity
    image
        }
        }
    }
    }
`;
