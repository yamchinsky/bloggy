import styled from 'styled-components';

export const PostListItemStyled = styled.ul`
  display: flex;
  align-content: space-evenly;
  flex-wrap: wrap;
  .Post__item {
    list-style: none;
    padding: 20px;

    &:hover {
      background-color: transparent;
      color: yellow;
      border: 2px solid yellow;
    }
    .PostsList__checkbox {
      cursor: pointer;
      width: 15px;
      height: 15px;
      margin-top: 10px;
    }

    .PostsList__title {
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 5px;
      text-align: center;
      margin-right: auto;
      margin-left: auto;
      max-height: 70px;
      overflow-x: hidden;
      word-wrap: break-word;
    }

    .PostsList__text {
      margin-top: 0;
      margin-bottom: 0;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      max-height: 70px;
      overflow-x: hidden;
      word-wrap: break-word;
    }

    .PostsList__btn {
      border-radius: 2px;
      padding: 2px 4px;
      background-color: indigo;
      color: white;
      font-weight: 500;
      margin-left: 40px;
      margin-top: 5px;
      border-radius: 30px;

      &:hover,
      &:focus {
        background-color: orangered;
      }

      &:active {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      }
    }
  }
`;
