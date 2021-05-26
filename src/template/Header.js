import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 100%;
    top: 0px;
    z-index: 5;

    /* 색상 */
    background: skyblue;
    color: white;
    border-bottom: 1px solid skyblue;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 1.5rem;
`;


const Header = () => (
    <Wrapper>
        Menu bar
    </Wrapper>
);

export default Header;