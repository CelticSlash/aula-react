import { gql } from '@apollo/client';

export const UPDATE_USER = gql `
        mutation UPDATE_PHOTO($id: uuid!, $image: String!) {
            update_user(where: {id: {_eq: $id}}, _set: { image: $image}) {
            returning {
                id
                image
            }
            }
        }
`;

