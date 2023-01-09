import React from 'react';
import {ICONS} from "../../../../shared/constants/constants";
import styled from "styled-components";

function Header(props) {
    const LogoContainer = styled.div`
        width: 100%;
        max-width: 200px;
        padding: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
    `

    const LogoBurger = styled.div`
        width: 24px;
        height: 24px;
        display: block;
        cursor: pointer;
        margin-right: 20px;
    `

    const LogoIcon = styled.div`
        width: 100%;
        display: block;
        cursor: pointer;
    `

    const Header = styled.header`
        width: 100%;
        height: 56px;
        background-color: #ffffff;
    `

    function Logo() {
        return (
            <LogoContainer>
                <LogoBurger>
                    <img src={ICONS.menuBurger} alt=""/>
                </LogoBurger>
                <LogoIcon>
                    <img src={ICONS.fullLogo} alt=""/>
                </LogoIcon>
            </LogoContainer>
        )
    }

    return (
        <Header>
            <Logo/>
        </Header>
    );
}

export default Header;