import styled from 'styled-components';

export const PostEditorStyled = styled.form`
  padding: 16px;
  border-radius: 4px;

  .PostEditor__textarea {
    width: 100%;

    $line-height: 16px;

    height: $line-height * 10;
    padding: 12px 16px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;

    font: inherit;
    line-height: $line-height;
    letter-spacing: 0.01em;

    resize: none;
    margin-bottom: 12px;
  }

  .PostEditor__button {
    width: 100%;
    margin-left: auto;
    border-radius: 4px;
    padding: 12px 24px;
    background-color: indigo;
    color: white;
    font-weight: 500;

    &:hover,
    &:focus {
      background-color: indigo;
    }

    &:active {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
  }
`;