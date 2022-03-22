import React from 'react';
import styled from 'styled-components';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div className='navigate' >
        <div className='nav'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>
      </div>
    </Ul>
  )
}

export default RightNav

const Ul = styled.ul`

  .nav {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    font-size: 20px;
    gap: 30px;
  }

  li a {
    color: black;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;

    :hover {
        color: #6b6b6b;
    }
  }
  
  @media (max-width: 700px) {
    flex-flow: column nowrap;
    background-color: gray;
    position: absolute;
    display: ${({ open }) => open ? 'block' : 'none'};
    top: 0;
    right: -5.5%;
    height: 300px;
    width: 200px;
    padding-top: 15px;

    .navigate {
        display: flex;
        justify-content: center;

        .nav {
            display: block;
        }
    }
    
    li {
      color: whitesmoke;
      margin-top: 35px;
      font-size: 20px;
    }
  }
`;