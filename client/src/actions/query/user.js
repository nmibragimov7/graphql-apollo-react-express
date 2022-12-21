import {gql} from '@apollo/client';

export const GET_USERS = gql(`
    query {
        getUsers {
            id
            username
            fistName
            lastName
            middleName
        }
    }
`);
export const GET_USER = gql(`
    query getUser($id: ID) {
        getUser(id: $id) {
            id
            username
            fistName
            lastName
            middleName
        }
    }
`);
