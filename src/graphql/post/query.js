import { gql } from "@apollo/client";

export const GET_POSTS = gql `
    query Posts {
        posts(order_by: {created_at: desc}) {
            id
            image
            text
            likes
            user {
                name
                id
                username
                image
            }
        }
    }
`