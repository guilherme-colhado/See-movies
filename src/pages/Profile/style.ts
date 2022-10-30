import styled from "styled-components";

export const ProfileMain = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: -100px;
  > span {
    > img {
      @media (max-width: 350px) {
        width: 120px;
      }
    }
    > span {
      position: relative;
      right: 40px;
      top: -12px;
      color: #ccc;
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
  }
  h2 {
    color: var(--secondary);
    font: bold;
    font-size: 2.1rem;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    padding-right: 14px;
  }
`;
