import React from 'react';
import styled from "styled-components";
import {STYLES} from "../../../../shared/constants/constants";

function Nav(props) {
    return (
        <NavBar/>
    );
}

const NavBar = styled.nav`
    width: 100%;
    max-width: 240px;
    // border-right: 1px solid ${STYLES.COLORS.GRAY};
    height: 100%;
    display: block;
`

export default Nav;