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
                    <div>
                        <a className='phonenumber' href="telnumber">+998(94) 935 88 79</a>
                        <a className='phonenumber' href="telnumber">+998(94) 935 88 79</a>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <div className="logo">
                    <span>ISUZU</span> SERVICE CENTER
                </div>
                <div className="navbar">
                    <img className='menu-icon' src="https://img.icons8.com/ios-glyphs/60/000000/menu--v1.png" alt='menu-icon' />
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>About</p></li>
                        <li><p>Service</p></li>
                        <li><p>Contact</p></li>
                    </ul>
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

    
    @media  (max-width: 700px) {
        padding: 10px 5%;
    }

    .top-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(51, 51, 51, 0.1);
        
        @media  (max-width: 700px) {
            display: block;
            height: 60%;
        }

        .info-container {
            display: flex;

            @media  (max-width: 700px) {
                margin-top: 10px;
            }

            .adress-container {
                display: flex;
                margin: auto;
                padding: 0 30px 0 10px;

                @media  (max-width: 700px) {
                    padding: 0 10px;
                }

                .location-icon {
                    margin: 0 10px;
                }

                .location-text {
                    color: #333333;
                    font-size: 16px;

                    @media (max-width: 700px){
                        font-size: 10px;
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

                    @media (max-width: 700px){
                        font-size: 10px;
                    }
                }
                
            }
        }

        .telnumber-container {
            margin: auto 0;

            @media  (max-width: 700px) {
                display: flex;
                justify-content: center;
                margin-top: 15px;
            }

            .phonenumber {
                display: block;
                text-decoration: none;
                color: #333333;
                font-size: 16px;

                @media (max-width: 700px){
                    font-size: 10px;
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
        position: relative;

        @media  (max-width: 700px) {
            height: 40%;
        }

        .logo {
            color: #000000;
            font-size: 30px;

            span {
                color: red;
            }

            @media  (max-width: 700px) {
                font-size: 20px;
            }
        }

        .navbar {
            position: relative;
            
            .menu-icon {
                display: none;
            }

            @media  (max-width: 700px) {
                position: absolute;
                top: 0;
                right: -5%;
                width: 300px;
                height: 350px;
                background: darkcyan;
                display: flex;
                justify-content: center;

                .menu-icon {
                    display: block;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }
            }
            
            ul {
                display: flex;
                gap: 20px;

                @media (max-width: 700px) {
                    display: block;
                    gap: 0;
                }

                li {
                    font-size: 20px;
                    color: #000000;
                    list-style: none;
                    cursor: pointer;

                    @media  (max-width: 700px) {
                        margin: 45px 0;
                    }
                }
            }
        }
    }
`;
