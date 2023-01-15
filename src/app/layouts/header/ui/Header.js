import React from 'react';
import styled from "styled-components";
import {ICONS} from "../../../../shared/constants/constants";
import {STYLES} from "../../../../shared/constants/constants";

function Header(props) {

    // Logo Container
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

    // Search Container
    function SearchContainer() {
        return (
            <FORM>
                <SearchInput
                    name={'search'}
                    id={'search'}
                    type={'search'}
                />
                <SearchButton
                    type={'button'}
                >
                    <SearchLogo
                        src={ICONS.SearchLogo}
                        alt={'search is here ;)'}
                    />
                </SearchButton>
                <VoiceBox>
                    <Voice/>
                </VoiceBox>
            </FORM>
        )
    }

    function UserAction() {
        return (
            <UserContainer>
                <UserIcon src={ICONS.apps}/>
                <UserIcon src={ICONS.options}/>
                <User>
                    <UserIconIns src={ICONS.actionUser}/>
                    <Text>SE CONNECTOR</Text>
                </User>
            </UserContainer>
        )
    }

    return (
        <HeaderBlock>
            <Logo/>
            <SearchContainer/>
            <UserAction/>
        </HeaderBlock>
    );
}

// User Container
const UserContainer = styled.div`
    width: 100%;
    max-width: 242px;
    height: 40px;
    
    display: flex;
    align-items: center;
    
`

const Text = styled.h2`
    text-transform: underline;
    color: ${props => props.color || STYLES.COLORS.CONNECTION};
    font-size: 14px;
`

const UserIcon = styled.div`
    width: 24px;
    height: 24px;
    display: block;
    
    cursor: pointer;   
    background-image: url(${(icon) => icon.src});
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center center;
    
    margin-right: 16px;
`

const UserIconIns = styled(UserIcon)`
    margin-right: 10px;
`

const User = styled.div`
    width: 100%;
    max-width: 162px;
    height: 40px;
    
    border: 1px solid ${STYLES.COLORS.CONNECTION};
    
    display: flex; 
    align-items: center;
    
    padding: 0 11px;
    
    cursor: pointer;
`

// Search styles
const FORM = styled.form`
    width: 100%;
    max-width: 685px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    
    transition: opacity .3s ease-in-out
    
    @media screen and (max-width: ${STYLES.MEDIA.MaxMD}px) {
        display: none;
        opacity: 0;
        visibility: hidden;
    }
        
`

const VoiceBox = styled.div`
    width: 40px;
    height: 40px;
    margin-left: 10px;
`

const Voice = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${STYLES.COLORS.BTN};
    cursor: pointer;
    background-image: url(${ICONS.Mic});
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center center;
`

const SearchButton = styled.button`
    width: 100%;
    max-width: 64px;
    height: 40px;
    border: 1px solid ${STYLES.COLORS.GRAY};
    background-color: ${STYLES.COLORS.BTN};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
`

const SearchLogo = styled.img`
    width: 24px;
    height: 24px;
    
`

const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    display: block;
    max-width: 572px;
    padding: 0 10px;
    border: 1px solid ${STYLES.COLORS.GRAY}
`

// Logo styles
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

const HeaderBlock = styled.header`
        width: 100%;
        height: 56px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    `
export default Header;