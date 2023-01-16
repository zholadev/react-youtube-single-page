import React from 'react';
import styled from "styled-components";
import {STYLES} from "../../../../shared/constants/constants";
import {SubMenuContainer} from "../../../../components/subMenu";

function Nav(props) {
    return (
        <NavBar>
            <SubMenuContainer/>
        </NavBar>
    );
}

const NavBar = styled.nav`
    width: 100%;
    max-width: 240px;
    height: 100vh;
    display: block;
    margin-right: 24px;
    overflow: auto;
`

export default Nav;