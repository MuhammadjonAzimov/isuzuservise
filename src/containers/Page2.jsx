import styled from 'styled-components';
import service from '../images/service.jpg'

const Page2 = () => {
    return (
        <Wrapper id='about'>
            <div className="left-container">
                <div className="text-container">
                    <h3>Biz harhil turdagi yuk mashinalari uchun hizmat korsatamiz</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, excepturi corporis ipsa culpa quis error ea atque aspernatur et quod aperiam ab voluptatum numquam!</p>
                </div>
            </div>
            <div className="right-container"></div>
        </Wrapper>
    );
}

export default Page2;

const Wrapper = styled.div`
    width: 100%;
    height: 600px;
    padding: 0 10% 50px 10%;
    display: flex;
    background-color: white;

    @media  (max-width: 700px) {
        display: block;
        padding: 10px 5%;
    }

    .left-container {
        width: 50%;
        height: 100%;

        @media  (max-width: 700px) {
            width: 100%;
            height: 40%;
        }

        .text-container {
            margin-top: 90px;

            @media  (max-width: 700px) {
                margin-top: 50px;
            }

            h3 {
                font-style: normal;
                font-weight: 700;
                font-size: 43px;
                line-height: 58px;
                color: #333333;

                @media  (max-width: 700px) {
                    font-size: 24px;
                    line-height: 28px;
                }
            }

            p {
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                color: rgba(51, 51, 51, 0.8);
                margin-top: 15px;

                @media  (max-width: 700px) {
                    font-size: 12px;
                }
            }
        }
    }

    .right-container {
        width: 50%;
        height: 100%;
        background-image: url(${service});
        background-position: center;
        background-size: cover;

        @media  (max-width: 700px) {
            width: 100%;
            height: 60%;
        }
    }
`;
