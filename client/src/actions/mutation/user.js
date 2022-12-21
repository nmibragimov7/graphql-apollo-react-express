import {gql} from '@apollo/client';

export const CREATE_USER = gql(`
    mutation createUser($input: UserData) {
        createUser(input: $input) {
            id
        }
    }
`);
