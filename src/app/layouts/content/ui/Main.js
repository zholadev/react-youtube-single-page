import React from 'react';
import styled from "styled-components";
import {Nav} from "../../Nav";
import {MainContent} from "../../../../components/mainContent";

function Main(props) {
    return (
        <main>
            <Container>
                <Nav/>
                <MainContent/>
            </Container>
        </main>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export default Main;