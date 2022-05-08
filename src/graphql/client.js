import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://picked-goblin-29.hasura.app/v1/graphql',
    headers : { 'x-hasura-admin-secret' : 'qwHpuz1RivGoKKpOKnodLJqhGpwRpEowRrbAlc7D6fAmgsdhQiJliWTqzNoykFVS'},
    cache: new InMemoryCache()
});

export default client;