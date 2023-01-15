import React from 'react';
import {PanelTabs} from "../../panelTabs";
import {List} from "../../listBoard";
import styled from "styled-components";

function MainContent(props) {
    return (
        <MainContainer>
            <PanelTabs/>
            <List/>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: block;
`

export default MainContent;