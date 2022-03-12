import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Section1 = () => {
    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );
}

export default Section1;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    background: whitesmoke;
`;
