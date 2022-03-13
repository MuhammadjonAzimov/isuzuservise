import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`

  .nav {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    font-size: 20px;
    gap: 30px;
  }

  li {
    color: black;
    font-weight: 600;

    :hover {
        color: #333333;
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
      margin-top: 30px;
      font-size: 20px;
    }
  }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <div className='navigate' >
                <div className='nav'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </div>
            </div>
        </Ul>
    )
}

export default RightNav