import styled from "styled-components";

export const AssignatureContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 2.1rem;
    > p {
      color: #faff00;
      text-shadow: 1px 1px #000;
    }
  }

  > button {
    height: 40px;
    width: 300px;
    outline: none;
    border: 2px solid #faff00;
    border-radius: 22px;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Assignatures = styled.div`
  display: flex;
  gap: 1.4rem;
  @media(max-width: 940px){
    flex-direction: column;
  }
  > div {
    height: 110px;
    width: 300px;
    background-color: var(--gray500);
    border-radius: 16px;
    padding: 6px;

    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 2px 2px #000;
      transition: all ease 0.3s;
    }

    > h2 {
      color: #8e8e8e;
      font-size: 2rem;
      font: bold;
    }
    > p {
      font-size: 1.6rem;
      font: bolder;
    }
  }
`;
