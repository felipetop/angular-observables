export const getCharacterByIdGraphQl = `
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        dimension
      }
      location {
        name
        dimension
      }
      image
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;