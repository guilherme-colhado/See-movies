import styled, { css } from "styled-components";
import seeMoviesIcon from "../../assets/backgroundMobile.png";

type typeSearchContainer= {
    isSearching: boolean;
}


export const HeaderDiv = styled.div`
  height: 280px;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    > img {
      height: 170px;
      width: 130px;
    }
    > div {
      display: flex;
      gap: 3.0rem;
      > span {
        &:hover {
          color: #ccc;
          cursor: pointer;
        }
      }
    }
  }
`;

export const SearchContainer = styled.div<typeSearchContainer>`
    position: relative;
    width: ${(props) => props.isSearching ? 240 : 48}px;
    height: 35px;
    background: ${(props) => props.isSearching ? '#f2f2f2': 'transparent'};
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    transition: all .3 ease;
`

export const SearchInput = styled.input`
    padding-left: 48px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    font-size: 1.2rem;
    border: 1px solid transparent;

    &:focus{
        border-color: rgba(0,0,0, 0.3);
    }
`
export const IconButton = styled.button`
    position: relative;
    height: 36px;
    width: 36px;
    border: none;
    z-index: 1;
    cursor: pointer;
    background: none;

    &:hover{
        color: #ccc;
        &::after{
            opacity: 1;
            transform: scale(1);
        }
    }

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 50%;
        z-index: -1;
        background: #000;
        transition: 0.3s;
        transform: scale(0.6);
    }
`

 
