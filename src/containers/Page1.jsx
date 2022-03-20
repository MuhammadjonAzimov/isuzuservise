import React from 'react';
import styled from 'styled-components';
import trucs from '../images/trucs.jpg'


const Section1 = () => {
    return (
        <Wrapper>
            <div className="left-container">
                <div className="text-box">
                    <h1>Qulay yuk mashinalar <br /> xizmati</h1>
                    <p> Sifatli ehtiyot qismlar va malakali hizmat korsatish tez <br /> arzon qulay narxlarda istalgan tolov uslublari</p>
                    <button href="tel:949358879" >Qo'ng'iroq qilish</button>
                </div>
            </div>
            <div className="right-container">
                <img src={trucs} alt="" />
            </div>
        </Wrapper>
    );
}

export default Section1;

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 161px);
    display: flex;
    padding: 10px 10%;

    @media  (max-width: 700px) {
        display: block;
        padding: 10px 5%;
    }

    .left-container {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;

        @media  (max-width: 700px) {
            width: 100%;
            height: 50%;
        }

        .text-box {
            user-select: none;

            h1 {
                font-style: normal;
                font-weight: 700;
                font-size: 55px;
                line-height: 76px;
                color: #333333;

                @media  (max-width: 700px) {
                    font-size: 28px;
                    line-height: 40px;
                }
            }

            p {
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                color: rgba(51, 51, 51, 0.8);
                margin-top: 10px;
                margin-bottom: 15px;

                @media  (max-width: 700px) {
                    font-size: 12px;
                    margin-top: 5px;
                    margin-bottom: 8px;
                    line-height: 22px;
                }
            }

            button {
                width: 196px;
                height: 52px;
                border: none;
                background: #4762FF;
                border-radius: 8px;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 30px;
                color: white;
                cursor: pointer;

                @media  (max-width: 700px) {
                    width: 166px;
                    height: 42px;
                    font-size: 14px;
                }
            }
        }
    }

    .right-container {
        width: 50%;
        height: 100%;
        position: relative;

        @media  (max-width: 700px) {
            width: 100%;
            height: 50%;
        }

        img {
            width: 100%;
            position: absolute;
            top: 60px;
            right: 0;

            @media  (max-width: 700px) {
                top: 10px;
                width: 100%;
            }
        }
    }
`;
