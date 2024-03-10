import {gql} from '@apollo/client';

export const Data = gql ` 
     query  {
        getallUser {
            id
            email
         }
     }
`