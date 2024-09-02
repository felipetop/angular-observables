export const getAllCharactersGraphQl = `
  query ($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;
