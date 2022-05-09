import { gql } from '@apollo/client';

export const UPDATE_USER = gql `
        mutation UPDATE_PHOTO($id: uuid!, $image: String!, $name: String!) {
            update_user(where: {id: {_eq: $id}}, _set: { image: $image, name: $name}) {
            returning {
                id
                name
                image
            }
            }
        }
`;

