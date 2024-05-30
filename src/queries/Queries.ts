import { gql} from 'urql';

export const GET_CHARACTERS = gql`
    query {
        characters{
            results{
                id, 
                name,
                image
            }
        }
    }
`
export const GET_CHARACTER = gql`
    query GetChracter($id: ID!) {
        character(id: $id) {
            id,
            name,
            image,
            episode {
                name,
                episode
            }
        }
    }
`