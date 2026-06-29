import {gql} from '@apollo/client';

export const GET_USERS = gql`
query{
    getTasks{
        id
        title
        completed

    }
}`;

