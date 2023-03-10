import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {STYLES} from "../../../shared/constants/constants";
import {getStaticData} from "../../../shared/static/data";

function PanelTabs(props) {
    const list = getStaticData.panelTab

    const [activeTab, setActiveTab] = useState('')

    const toggleTab = (title) => setActiveTab(title)

    useEffect(() => {
        if (!activeTab) {
            setActiveTab('Все')
        }
    }, [activeTab])

    return (
        <Panel>
            <PanelList>
                <ListItem
                    onClick={() => {
                        toggleTab("Все")
                    }}

                    active={activeTab === "Все"}
                >
                    Все
                </ListItem>
                {
                    list?.map((listItem, listIndex) => {
                        return (
                            <ListItem
                                onClick={() => {
                                    toggleTab(listItem.title)
                                }}

                                active={activeTab === listItem.title}
                            >
                                {listItem.title}
                            </ListItem>
                        )
                    })
                }
            </PanelList>
        </Panel>
    );
}

const Panel = styled.div`
    width: 100%;
    height: auto;
    
    display: block;
`

const PanelList = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    
    overflow: auto;
    list-style: none;
    padding: 14px 0;
`

const ListItem = styled.li`
    width: auto;
    height: auto;
    
    display: inline;
    position: relative;
    cursor: pointer;
    
    background-color: ${props => props.active ? STYLES.COLORS.DARK : STYLES.COLORS.BTN};
    color: ${props => props.active ? STYLES.COLORS.LIGHT : STYLES.COLORS.DARK};
    border: 1px solid  ${props => props.active ? STYLES.COLORS.DARK : STYLES.COLORS.GRAY};
    
    border-radius: 10px;
    text-align: center;
    padding: 6px 12px;
    
    margin-right: 12px;
    
    transition: background-color .2s ease-in, color .2s ease-in-out;
    will-change: color, background-color
`

export default PanelTabs;