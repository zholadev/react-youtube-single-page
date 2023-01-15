import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {getStaticData} from "../../../shared/static/data";
import {Card} from "../../../shared/card";

function List(props) {
    const [loading, setLoading] = useState(false)

    const listData = getStaticData.listVideos

    useEffect(() => {
        // Static Trigger loading process
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <ListContainer>
            {
                listData?.map((videoItem, videoId) => {
                    return (
                        <Card
                            card={videoItem}
                            key={videoId}
                        />
                    )
                })
            }
        </ListContainer>
    );
}

const ListContainer = styled.div`
    width: 100%;
    max-width: 2560px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px 0;
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    
    gap: 16px;
`

export default List;