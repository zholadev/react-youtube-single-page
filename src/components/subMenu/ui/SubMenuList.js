import React, {useState} from 'react';
import styled from "styled-components";
import {ICONS, STYLES} from "../../../shared/constants/constants";

function SubMenuList(props) {
    const {data} = props

    const [more, setMore] = useState(false)
    const [countList, setCountList] = useState(Object.values(data || {}).length || 0)

    const toggleMoreHandler = () => setMore(!more)

    return (
        <Container>
            <List>
                {
                    Object.values(data || {})?.slice(0, more ? countList : 5).map((menuItem, menuId) => {
                        return (
                            <Item key={menuId}>
                                <ItemBox>
                                    <Icon src={menuItem.icon}/>
                                    <Title>{menuItem.title}</Title>
                                </ItemBox>
                            </Item>
                        )
                    })
                }

                {
                    Object.values(data || {}).length > 5 &&
                    <Item onClick={toggleMoreHandler}>
                        <ItemBox>
                            {
                                more ?
                                    <IconAnimate src={ICONS.arrowBottom}/>
                                    :
                                    <Icon src={ICONS.arrowBottom}/>
                            }

                            <Title>{more ? 'Свернуть' : 'Развернуть'}</Title>
                        </ItemBox>
                    </Item>
                }

            </List>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: auto;
    display: block;
    padding-bottom: 8px;
    border-bottom: 1px solid ${STYLES.COLORS.GRAY}
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const ItemBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

const Item = styled.li`
    padding: 8px 0 8px 24px;
   
    cursor: pointer;
    
    transition: all .3s ease-in-out;
    will-change: background-color
    
    &::hover ${ItemBox}{
        background-color: ${STYLES.COLORS.GRAY}
    }
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
    aspect-ration: 5/5;
    margin-right: 24px;
    
    transition: transform .3s ease-in-out;
    will-change: transform;
`

const IconAnimate = styled(Icon)`
    transform: rotate(180deg);
`

const Title = styled.span`
    font-size: 14px;
`

export default SubMenuList;