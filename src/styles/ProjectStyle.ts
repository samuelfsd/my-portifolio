import { darken } from 'polished';
import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;

    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    button {
      background: ${({ theme }) => theme.primary};
      padding: 0.8rem 3rem;
      margin-top: 2rem;
      border-radius: 0.5rem;
      border: none;

      transition: 0.5s;

      &:hover {
        background: ${({ theme }) => darken(0.07, theme.primary)};
      }

      a {
        color: #fff;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.5rem;
      }
    }
    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
