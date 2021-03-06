import styled from 'styled-components';
import location from '../images/location.svg'
import clock from '../images/clock.svg'
import Burger from '../components/Burger'

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
                            <p>Bizning manzil:</p>
                            <p>Toshkent.sh Halqa yo'li 123</p>
                        </div>
                    </div>
                    <div className="workingtime-container">
                        <div className="workingtime-icon">
                            <img src={clock} alt="" />
                        </div>
                        <div className="workingtime-text">
                            <p>Ish vaqti:</p>
                            <p>9:00 dan 19:00 gacha</p>
                        </div>
                    </div>
                </div>
                <div className="telnumber-container">
                    <div className='numbers'>
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
                    <Burger />
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
            height: 50%;
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

            .numbers {
                
                @media  (max-width: 700px) {
                    display: flex;
                    gap: 15px;
                }
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
        user-select: none;

        @media  (max-width: 700px) {
            height: 50%;
        }

        .logo {
            font-weight: 600;
            color: #000000;
            font-size: 30px;

            span {
                color: red;
            }

            @media  (max-width: 700px) {
                font-size: 20px;
            }
        }
    }
`;
