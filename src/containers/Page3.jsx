import styled from 'styled-components';
import oil from '../images/oil.png'

const Page3 = () => {
    return (
        <Wrapper id='service'>
            <div className="text-box">
                <h2>Tovar va Hizmatlar</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dolor <br /> recusandae soluta, voluptates ut vitae!</p>
            </div>
            <div className="box-container">
                <div className="box">
                    <h3>Б/у запчасти для грузовых авто из Европы.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Adipisci dicta exercitationem eveniet <br /> inventore ullam numquam ad.</p>
                    <img src={oil} alt="" />
                </div>
                <div className="box">
                    <h3>Автомойка грузовых и легковых авто</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Adipisci dicta exercitationem eveniet <br /> inventore ullam numquam ad.</p>
                    <img src={oil} alt="" />
                </div>
                <div className="box">
                    <h3>Магазин аксессуаров</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Adipisci dicta exercitationem eveniet <br /> inventore ullam numquam ad.</p>
                    <img src={oil} alt="" />
                </div>
                <div className="box">
                    <h3>Пункт замены масла легковых авто</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Adipisci dicta exercitationem eveniet <br /> inventore ullam numquam ad.</p>
                    <img src={oil} alt="" />
                </div>
            </div>
        </Wrapper>
    );
}

export default Page3;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    padding: 20px 10%;

    @media  (max-width: 700px) {
        padding: 10px 5%;
        height: 100%;
    }

    .text-box {
        width: 100%;
        text-align: center;

        h2 {
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 48px;
            color: #333333;

            @media  (max-width: 700px) {
                font-size: 24px;
            }
        }

        p {
            margin-top: 10px;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: rgba(51, 51, 51, 0.8);

            @media  (max-width: 700px) {
                font-size: 14px;
                margin-top: 5px;
            }
        }
    }

    .box-container {
        width: 100%;
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        gap: 40px;

        @media  (max-width: 700px) {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .box {
            height: 250px;
            background: #F4F6FA;
            border-radius: 9px;
            padding: 25px;
            position: relative;

            @media  (max-width: 700px) {
                padding: 15px;
            }

            h3 {
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
                color: #333333;

                @media  (max-width: 700px) {
                    font-size: 20px;
                }
            }

            p {
                margin-top: 15px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: rgba(51, 51, 51, 0.8);

                @media  (max-width: 700px) {
                    font-size: 12px;
                    margin-top: 5px;
                }
            }

            img {
                width: 200px;
                position: absolute;
                bottom: 0;
                right: 0;

                @media  (max-width: 700px) {
                    width: 50%;
                }
            }
        }
    }

`;
