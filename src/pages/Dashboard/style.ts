import styled from "styled-components";

export const DashboardDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const DashboardContainer = styled.div`
  background-color: #000;
  padding: 16px;
  -webkit-box-shadow: 3px -22px 33px 28px rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px -22px 33px 28px rgba(0, 0, 0, 1);
  box-shadow: 3px -22px 33px 28px rgba(0, 0, 0, 1);
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    > h2 {
      font-size: 2.4rem;
      font: bolder;
      color: #ffd800;
    }
    > div {
      display: flex;
      gap: 2rem;
      padding: 12px;
    }
  }
`;
