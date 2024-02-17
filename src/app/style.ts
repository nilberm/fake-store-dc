import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h1 {
    font-size: 2rem;
  }

  .content {
    .productsGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 1rem;

      .productItem {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          height: 150px;
          object-fit: contain;
        }

        .productsDescription {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 20rem;

          .title {
            font-size: 1.2rem;
            font-weight: 600;
            height: 5rem;
            text-overflow: ellipsis;
          }

          .categoryAndRate {
            display: flex;
            justify-content: space-between;
          }

          .description {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
          }
        }
      }
    }
  }
`;
