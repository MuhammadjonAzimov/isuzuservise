import React from 'react';
import styled from 'styled-components';
import location from '../images/location.svg'
import clock from '../images/clock.svg'

const Header = () => {
    return (
        <Wrapper>
            <div className="top-container">
                <div className="info-container">
                    <div className="adress-container">
                        <div className="location-icon">
                            <img src={location} alt="" />
                        </div>

                        <div className="location-text">
                            <p>Наш адрес:</p>
                            <p>Г.Ташкент,ул. Колцевая 69</p>
                        </div>
                    </div>
                    <div className="workingtime-container">
                        <div className="workingtime-icon">
                            <img src={clock} alt="" />
                        </div>
                        <div className="workingtime-text">
                            <p>График работы:</p>
                            <p>С 9:00 до 19:00</p>
                        </div>
                    </div>
                </div>
                <div className="telnumber-container">
                    <a className='phonenumber' href="telnumber">+998(94) 935 88 79</a>
                    <a className='phonenumber' href="telnumber">+998(94) 935 88 79</a>
                </div>
            </div>
            <div className="bottom-container">
                <div className="logo">
                    <span>ISUZU</span> SERVICE CENTER
                </div>
                <div className="navbar">
                    <p>Home</p>
                    <p>About</p>
                    <p>Service</p>
                    <p>Contact</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    width: 100%;
    height: 161px;
    padding: 0 10%;

    background-color: white;
    filter: drop-shadow(0px 3px 30px rgba(0, 0, 0, 0.03));

    .top-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;

        border-bottom: 1px solid rgba(51, 51, 51, 0.1);

        .info-container {
            display: flex;

            .adress-container {
                display: flex;
                margin: auto;
                padding: 0 30px 0 10px;

                .location-icon {
                    margin: 0 10px;
                }

                .location-text {
                    color: #333333;
                    font-size: 16px;

                    @media (max-width: 800px){
                        font-size: 12px;
                    }
                }
            }

            .workingtime-container {
                display: flex;
                margin: auto;
                padding: 0 10px;

                border-left: 1px solid rgba(51, 51, 51, 0.1);

                .workingtime-icon {
                    margin: 0 10px;
                }

                .workingtime-text {
                    color: #333333;
                    font-size: 16px;

                    @media (max-width: 800px){
                        font-size: 12px;
                    }
                }
                
            }
        }

        .telnumber-container {
            margin: auto 0;

            .phonenumber {
                display: block;
                text-decoration: none;
                color: #333333;
                font-size: 16px;

                @media (max-width: 800px){
                    font-size: 12px;
                }
            }
        }
    }

    .bottom-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            color: #000000;
            font-size: 30px;

            span {
                color: red;
            }
        }

        .navbar {
            display: flex;
            gap: 20px;
            font-size: 20px;
            color: #000000;
        }
    }
`;
