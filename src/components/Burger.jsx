import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../components/Nav';

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}

export default Burger

const StyledBurger = styled.div`

  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 0px;
  z-index: 20;
  display: none;

    @media (max-width: 700px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

  div {
    width: 100%;
    height: 5px;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;