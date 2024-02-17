import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;

  h1 {
    font-size: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    .filters {
      display: flex;
      gap: 1rem;
      width: 100%;

      input {
        border: 3px solid #ddd;
        border-radius: 5px;
        width: 100%;
        outline: none;
        padding: 0.5rem;
      }

      select {
        border: 3px solid #ddd;
        border-radius: 5px;
        padding: 0 0.5rem;
      }
    }

    .productsGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 1rem;

      .itemNotFound {
        display: flex;
        width: 100%;
      }

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
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
          }

          .categoryAndRate {
            display: flex;
            justify-content: space-between;
          }

          .productPrice {
            outline: none;
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            background: #22c55e;
            font-weight: 600;
            padding: 0.5rem;
            border-radius: 5px;
          }

          .description {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
            max-width: 190px;
          }
        }
      }
    }
  }
`;
